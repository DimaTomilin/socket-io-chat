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
  console.log('new connection', socket.id, 'with name ', name);
  const newUser = { name, id: socket.id };
  currentUsers.push(newUser);
  socket.emit('allUsers', { currentUsers });
  socket.broadcast.emit('newUser', { newUser });

  socket.on('message', ({ name, content }) => {
    console.log('new message from ', name, 'with ', content);
    socket.broadcast.emit('messageBack', { name, content });
  });

  socket.on('disconnect', () => {
    console.log('disconnect');
    currentUsers = currentUsers.filter((user) => user.name !== name);
    console.log(currentUsers);
    socket.broadcast.emit('messageBack', {
      name,
      content: `${name} disconnect`,
    });
  });
});

http.listen(8080, function () {
  console.log('listening on port 8080');
});
