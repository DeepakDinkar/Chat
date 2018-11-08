// Server Configuration
const express = require('express');
const rxjs = require('rxjs');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var cors = require('cors');
const bodyParser = require('body-parser');
const users = [];
app.use(cors());
app.use(bodyParser.json());

// Routing Methods
app.get('/', (req, res) => res.send('Hello World'));
app.get('/contacts', (req, res) => res.send(users));
app.post('/login', (req, res) => validateUser(req, res));
app.post('/register', (req, res) => registerUser(req, res));

// Socket Connections
io.on('connection', socket => {
    createUser(socket);
    sendMessage(socket);
    notifyTyping(socket);
    removeUser(socket);
});

// Listening to Port
http.listen(3000, () => {
    console.log('listening on 3000');
});

// Manipulation Functions

function validateUser(request, response) {
    const user = users.find(existingUser => existingUser.userName === request.body.userName);
    user ? response.send({success: true}) : response.sendStatus(404);
}

function registerUser(request, response) {
    users.push(request.body);
    response.send({success: true});
}

function createUser(socket) {
    socket.on('creatUser', user => {
        const index = users.findIndex(existingUser => existingUser === user);
        users[index].id = socket.id;
    });
}

function removeUser(socket) {
    socket.on('disconnect', disconnectSocket => {
        const index = users.findIndex(user => user.userName === disconnectSocket);
    });
}

function sendMessage(socket) {
    socket.on('message', msg => {

        io.emit('message', msg);
    });
}

function notifyTyping(socket) {
    socket.on('typing', msg => {
        socket.broadcast.emit('typing', msg);
    });
}

function sendPrivateMessage(socket) {
    socket.on('private', msg => {
        io.to(msg.toId).emit('private', msg);
    });

}
