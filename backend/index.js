const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('new connection');

  socket.on('message', ({ name, message }) => {
    io.emit('messageBack', { name, message });
  });

  socket.on('disconnect', () => {
    io.emit('messageBack', { name: 'wow', message: 'render' });
  });
});

http.listen(3000, function () {
  console.log('listening on port 3000');
});
