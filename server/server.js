const express = require('express');
const app = express()
const cors = require('cors')
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongodb = require('mongodb').MongoClient

/* Set port number to evironment port or 5000 and Domain */
const PORT = process.env.PORT || 5000;
const DOMAIN = 'localhost'

/* Specify Origin of the Frontend to enable CORS for a Single Route */
const CLIENT_DOMIN = "http://localhost:3000"

/* Body parser middleware for express ^4.16.+ */
app.use(express.json())

/* Enable CORS as middleware */
app.use(cors())

/* Config allowed CORS orign */
var corsOptions = {
    origin: CLIENT_DOMIN,
    optionsSuccessStatus: 200
}

/* Run server to listen to PORT */
server.listen(PORT, () => {
    console.log(`listening on Port:${PORT}`);
});

/*====================================== Set up mongodb ============================================*/
mongodb.connect(`mongodb://${DOMAIN}:27017/`,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    async (err, client) => {

        /* Catch error if ther is an error */
        if (err) throw err

        /* get collection from database */
        let Room_Collection = client.db("BGB").collection("Room_Collection")

        /* ============================================= Set up socket connection =========================*/
        io.on('connection', socket => {
            var socketId = socket.id

            console.log('a user connected', socketId);

            /*-----------------------  DONE : Handle Join Game . -------------------------- */
            /* API : for checking if game code if yes, send game data and socket emit to proceeed*/
            app.get('/api/joingame', cors(corsOptions), (req, res) => {

                /* Look for game in the database */
                Room_Collection.find({ gameCode: req.query.gameCode }).limit(1).toArray((err, data) => {
                    /* If ther is any error */
                    if (err) {
                        console.error(err)
                    }
                    else {
                        /* If game exists */
                        if (data[0]) {
                            /*---------------- DONE : Add player to the game -----------*/
                            Room_Collection.findOneAndUpdate({ gameCode: req.query.gameCode },
                                {
                                    $addToSet: { logs: `${req.query.username} has joined the room.`, player_list: req.query.username },
                                    $set: { [req.query.username]: data[0].assets }
                                },
                                { returnOriginal: false, upsert: true }, (err, data) => {
                                    if (err) throw err
                                    else {
                                        /* Socket: (BUG) Add user to chat room. Use game code as room id*/
                                        socket.join(req.query.gameCode, console.log(socket.rooms))
                                        /* Send new player array to other players */
                                        io.to(req.query.gameCode).emit("update_player_list", { logs: data.value.logs, player_list: data.value.player_list })
                                        /* Send new game data to frontend */
                                        console.log(data.value)
                                        res.send(data.value)
                                    }
                                });
                            /* ---------------------------------------------------- */
                        }
                        /* If Game does not exist */
                        else {
                            /* Send false flag to frontend */
                            res.send(false);
                        }
                    }
                })
            });
            /*---------------------------------------------------------------------------------------*/

            /* For emitting message to a room*/
            const message = (msg, room) => {
                io.to(room).emit("logs", { message: msg })
            }

            /* ------------------------------------- DONE: Handle Create Game event------------------------------- */
            app.post('/api/creategame', cors(corsOptions), (req, res) => {
                /* Generate Game Code */
                let gameCode = generateCode()

                /* Add game object to database */
                Room_Collection.insertOne({
                    "gameCode": gameCode,
                    "gameName": req.body.gameName,
                    [req.body.username]: req.body.assets,
                    "logs": [`${req.body.username} joined the room.`],
                    "assets": req.body.assets,
                    "player_list": [`${req.body.username} `]
                })
                    .catch(
                        /* Catch Error*/
                        err => console.log(err))
                    .then((
                        resp => {
                            /* Socket : (BUG) Add user to chat room. Use game code as room id*/
                            socket.join(gameCode, console.log(socket.rooms))

                            /* Send Response back to frontend */
                            res.send(resp)
                        }))

            })

            socket.on("disconnect", () => {
                console.log(`${socketId} disconnected`)
            })
        });
    })


const generateCode = () => {
    let code = Date.parse(new Date().getUTCMilliseconds()).toString().substr(1, 6)
    return code
}




// let ass = ""
//                             console.log(Room_Collection.findOneAndUpdate({ gameCode: socketRoom },
//                                 {
//                                     $set:{[socketUsername + "." + "Wood"]: { desksmemberships:[] }}
//                                 }, () => { }
//                             ))
