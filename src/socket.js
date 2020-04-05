import openSocket from 'socket.io-client'
const URL = "http://localhost"
const PORT = "5000"

export const url = `${URL}:${PORT}`

const socket = openSocket(`${url}`)
export default socket

