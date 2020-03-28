const express = require('express');
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);


/* Setting route for static page */
app.use(express.static("server/public"))

/* Set port number to evironment port or 5000 and Domain */
const PORT = process.env.PORT || 6000;

/* Run server to listen to PORT */
server.listen(PORT, () => {
    console.log(`listening on Port:${PORT}`);
});

/* Set up socket connection */
io.on('connection', socket => {
    var socketId = socket.id
    console.log('a user connected', socketId);

    /* Handle join room event */
    socket.on("join_room", (room) => {
        /* Socket: Add user to chat room */
        socket.join(room)
        console.log(`${socketId} join ${room}`)
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


})

