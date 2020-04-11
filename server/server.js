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
            var socketRoom = socket.rooms
            var socketUsername = ""

            console.log('a user connected', socketId);

            /*-----------------------  Done : Handle Join Game . -------------------------- */
            /* API : for checking if game code if yes, send game data and socket emit to proceeed*/
            app.get('/api/joingame', cors(corsOptions), (req, res) => {

                Room_Collection.find({ gameCode: req.query.gameCode }).limit(1).toArray((err, data) => {
                    /* If ther is any error */
                    if (err) {
                        console.error(err)
                    }
                    else {
                        /* If game exists */
                        if (data[0]) {
                            /* ------- Socket: (COMPLETED) Add user to chat room ---- */
                            socketRoom = req.query.gameCode
                            socketUsername = req.query.username
                            socket.join(socketRoom,
                                message(`${socketUsername} has joined ${socketRoom} room`, socketRoom)
                            )

                            /*-------- COMPLETED : Add player to the game -----------*/
                            Room_Collection.findOneAndUpdate({ gameCode: socketRoom },
                                {
                                    $addToSet: { logs: `${socketUsername} has joined the room.`, player_list: `${socketUsername}`},
                                    $set:{ [socketUsername]: data[0].assets}
                                },
                                { returnOriginal: false, upsert:true }, (err, data) => {
                                    if (err) throw err
                                    else {
                                        /* emit fetched data to frontend through socket */
                                        socket.emit("init_game_data", ( data.value ))
                                    }
                            });
                            
                            /* ---------------------------------------------------- */
                        }
                        return res.send(data[0]);
                    }
                })
            });
            /*---------------------------------------------------------------------------------------*/

            /* For emitting message to a room*/
            const message = (msg, room) => {
                io.to(room).emit("message", { message: msg })
            }
            
            /* -------------------------------------Handle Create Game event------------------------------- */
            app.post("/api/creategame", cors(corsOptions), (req, res) => {
                const gameCode = generateCode()
                console.log("api/creategame")
                Room_Collection.insertOne({
                    "gameCode": gameCode,
                    "gameName": req.body.gameName,
                    [req.body.username]: req.body.assets, 
                    "logs": [`${req.body.username} joined the room.`],
                    "assets": req.body.assets,
                    "player_list": [`${req.body.username} `]
                })
                    .catch(err => { return res.send(err) })
                    .then(resp => {
                        return res.send(resp)
                    })      
            } )
            


            /* --------------------------------------Handle client disconnect event---------------------------- */
            socket.on("disconnect", (socket) => {
                message(`${socketId} left the room`, socketRoom)
                console.log(`${socketUsername} left ${socketRoom}`)
            })
        });
    })


const generateCode = () => {
    let code = Date.parse(new Date().getUTCMilliseconds()).toString().substr(1, 6)
    return code
}

const data = {
    players: [
        { name: "Jonh" },
        { name: "Jackinson" },
    ],
    asset: [
        { name: "Gold", amount: 1000 },
        { name: "Silver", amount: 600 },
        { name: "Gold", amount: 1000 },
    ],
    log: [
        { message: "Welcome!" }
    ]
}


// let ass = ""
//                             console.log(Room_Collection.findOneAndUpdate({ gameCode: socketRoom },
//                                 {
//                                     $set:{[socketUsername + "." + "Wood"]: { desksmemberships:[] }}
//                                 }, () => { }
//                             ))