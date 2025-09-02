const WebSocket = require('ws');
const server = new WebSocket.Server({ port: '8080'});

console.log("Listening on port 8080");

server.on('connection', socket => {

    socket.on('message', message => {

        socket.send('Connected ${message}');
    })
})

console.log("Hello");