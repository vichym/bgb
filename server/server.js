const express = require('express');
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongodb = require('mongodb').MongoClient

/* Setting route for static page */
app.use(express.static("server/public"))

/* Set port number to evironment port or 5000 and Domain */
const PORT = process.env.PORT || 5000;
const DOMAIN = 'localhost'

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

        /* Handle new client event */
        socket.on("new_client", new_client => {
            /* Add socket ID to client */
            new_client['socketID'] = socket.id

            /* Add client to database */
            Client_Collention.insertOne(new_client).then(() => {
                console.log("Succefully inserted to database")
            }).catch(err => {
                /* Catch Insert error message */
                console.error(`Failed to insert item: ${err}`)
            })
            /* Update client data and emit to frontend*/
            fetchClientData()

        })

        /* Handle client disconnect event */
        socket.on("disconnect", (socket) => {
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


