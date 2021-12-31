const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(http, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});

let currentUsers = [];

app.use(cors);
app.get('/allUsers', (req, res) => {
  console.log('i am here');
  res.send(currentUsers);
});

io.on('connection', (socket) => {
  const name = socket.handshake.query.name;
  const newUser = { name, id: socket.id };
  currentUsers.push(newUser);
  socket.emit('allUsers', { currentUsers });
  socket.broadcast.emit('newUser', { newUser });

  socket.on('message', ({ name, content }) => {
    socket.broadcast.emit('messageBack', { name, content, private: false });
  });

  socket.on('privateMessage', ({ name, content, toId }) => {
    io.to(toId).emit('messageBack', { name, content, private: true });
  });

  socket.on('disconnect', () => {
    currentUsers = currentUsers.filter((user) => user.name !== name);
    socket.broadcast.emit('userDisconnect', {
      name,
      content: `${name} disconnect`,
    });
  });
});

http.listen(8080, function () {
  console.log('listening on port 8080');
});
