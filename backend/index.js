const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});

const currentUsers = [];

io.on('connection', (socket) => {
  console.log('new connection', socket.id);
  currentUsers.push(socket.handshake.query.name);
  console.log(currentUsers);

  socket.on('message', ({ name, content }) => {
    console.log('new message from ', name, 'with ', content);
    socket.broadcast.emit('messageBack', { name, content });
  });

  socket.on('disconnect', () => {
    socket.emit('messageBack', { name: 'wow', message: 'render' });
  });
});

http.listen(8080, function () {
  console.log('listening on port 8080');
});
