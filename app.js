const app = require('./config/server');

let server = app.listen(3000, () => {
    console.log('Server is running');
});

let io = require('socket.io').listen(server);

io.on('connection', (socket) => {
    console.log("New client connected");
});
