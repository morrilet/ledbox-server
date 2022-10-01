const WebSocketServer = require('ws');

// Load environment variables from `.env` file using dotenv.
require('dotenv').config()
const WS_PORT = process.env['WS_PORT']

// Start the server.
const wss = new WebSocketServer.Server({ port: WS_PORT });

wss.on('connection', ws => {
    console.log('new client connected');

    ws.on('message', data => {
        console.log(`Data recieved: ${data}`);
    });

    ws.on('close', () => {
        console.log('client disconnected');
    });

    ws.onerror = () => {
        console.log('an error has occurred')
    }
});

console.log(`Server started on port ${WS_PORT}`);