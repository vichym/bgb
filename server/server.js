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

/*  Api for checking if a game with Code exists in Database */

/* Enable CORS as middleware */
app.use(cors())

/* Config allowed CORS orign */
var corsOptions = {
    origin: CLIENT_DOMIN,
    optionsSuccessStatus: 200
}

app.get('/', cors(corsOptions), (req, res) => {
    /* TODO: Check database for give with given code */
    /* 
    
    
    
    
    
    */
    return res.send({ code: req.query, message: true });
});

/* Run server to listen to PORT */
server.listen(PORT, () => {
    console.log(`listening on Port:${PORT}`);
});


/* Set up mongodb */
mongodb.connect(`mongodb://${DOMAIN}:27017`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (err, client) => {
    if (err) {
        throw err
    }
    console.log('Mongodb connected')


    /* get collection from database */
    let Chat_Collection = client.db('chatapp').collection("Chat_Collection")
    let Client_Collention = client.db('chatapp').collection("Clients")

    /* Set up socket connection */
    io.on('connection', socket => {
        var socketId = socket.id
        console.log('a user connected', socketId);

        /* Handle new client event */
        socket.on("new_client", (new_client) => {
            /* Add socket ID to client */

        })

        /* Handle join game room event */
        socket.on("join_game", ({ username, gameCode }) => {

            console.log(`${username} : ${gameCode}`)

            /* Datebase: Look for game room with incoming code*/
            /* TODO: code here for database look up
            
            
            */

            /* If game found */
            if (true) {
                /*  */
                socket.emit("join_game_success", { message: "Joined game Success" })
            }
            /* Not found */
            else {
                socket.emit("join_game_fail", { message: "Joined game fail" })
            }
            /* Socket: Add user to chat room */
        }
        )

        /* Handle leave room event */
        socket.on("leave_room", (room) => {
            /* Socket: Add user to chat room */
            socket.leave(room)
            console.log(`${socketId} leaves ${room}`)
        })

        /* Handle message input event */
        socket.on("message", ((message, room) => {
            if (message !== "" && room !== undefined) {
                socket.to(room).emit("message", message)
            }
        }))


        /* Handle client disconnect event */
        socket.on("disconnect", (socket) => {
            console.log(`${socketId} disconnected`)
        })

        /* Handle join room event */
        socket.on("join_room", (room) => {
            /* Socket: Add user to chat room */
            socket.join(room)
            console.log(`${socketId} join ${room}`)
        })

        /* Handle leave room event */
        socket.on("leave_room", (room) => {
            /* Socket: Add user to chat room */
            socket.leave(room)
            console.log(`${socketId} leaves ${room}`)
        })

        /* Handle message input event */
        socket.on("message", ((message, room) => {
            if (message !== "" && room !== undefined) {
                socket.to(room).emit("message", message)
            }
        }))

    });
})


