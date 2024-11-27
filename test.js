const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');

    socket.on('message', (message) => {
        console.log('Mensaje recibido:', message.toString());

        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    socket.on('close', () => {
        console.log('Cliente desconectado');
    });
});