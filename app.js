const app = require('./config/server');

let server = app.listen(3000, () => {
    console.log('Server is running');
});

require('socket.io').listen(server);
