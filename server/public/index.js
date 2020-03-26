
// function element(id) {
//     return document.getElementById(id)
// }

// var messages = document.getElementById('messages')
// var username = element('username')
// var textarea = element('textarea')

// /* Connect to socket.io */
// var socket = io.connect("http://localhost:3000")
// if (socket) {
//     console.log("Connected to Backend socket")
// }

// socket.on("chat_output", (data) => {
//     console.log(data)
//     if (data.length) {
//         for (var i = 0; i < data.length; i++) {
//             console.log( data[i].username, data[i].message)
//             let msg = document.createElement('div');
//             msg.setAttribute('class', 'chat-message');
//             msg.textContent = data[i].username + ": " + data[i].message;
//             // console.log(msg)
//             console.log(username)
//             // messages.appendChild(msg)
//             // messages.insertBefore(msg, messages.firstChild)
//         }
//     }
// })
