const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var cors = require('cors');

app.use(cors());

app.get('/', (req, res) => res.send('Hello World'));

io.on('connection', socket => {
  sendMessage(socket);
  notifyTyping(socket);
});

http.listen(3000, () => {
  console.log('listening on 3000');
});

function sendMessage(socket) {
  socket.on('message', msg => {
    socket.broadcast.emit('message', msg);
  });
}

function notifyTyping(socket) {
  socket.on('typing', msg => {
      socket.broadcast.emit('typing', msg);
    });
  }