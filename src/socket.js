import openSocket from 'socket.io-client'
const PORT = 5000

const socket = openSocket(`http://localhost:${PORT}`)
export default socket

