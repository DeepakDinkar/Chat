// Server Configuration
const express = require('express');
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
app.post('/login', (req, res) => loginUser(req, res));
app.post('/register', (req, res) => registerUser(req, res));

// Socket Connections
io.on('connection', socket => {
    connectUser(socket);
});

// Listening to Port
http.listen(3000, () => {
    console.log('listening on 3000');
});

// Connects user or replaces the socket.id with existing user
function connectUser(socket) {
    socket.on('updateUser', userName => {
        const user = validateUser(userName);
        console.log(validateUser(userName));
        if(user){
            user.id = socket.id;
        }
    });
    sendMessage(socket);
}

// Manipulation Functions
function loginUser(request, response) {
    const user = validateUser(request.body.userName);
    user ? response.send({
        success: true
    }) : response.sendStatus(404);
}

function registerUser(request, response) {
    const user = validateUser(request.body.userName);
    if (user === undefined) {
        users.push(request.body);
        response.send({
            success: true
        });
    } else {
        response.sendStatus(404);
    }
}

function removeUser(socket) {
    socket.on('disconnect', disconnectSocket => {
        const index = users.findIndex(user => user.userName === disconnectSocket);
    });
}

function sendMessage(socket) {
    socket.on('message', senderMsg => {
        const receiver = users.find(user => user.userName === senderMsg.to);
        socket.to(receiver.id).emit('message', senderMsg);
        socket.emit('message', senderMsg);
    });
}

function groupMessage(socket) {
    socket.on('groupMessage', group => {
        socket.to(group.id).emit(group.msg);
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


//Methods used for maintain users

function validateUser(user) {
    return users.find(existingUser => existingUser.userName === user);
}
