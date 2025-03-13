require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

io.on('connection', (socket) => {
    console.log('User connected');
    socket.on('vote', (pollData) => {
        io.emit('voteUpdate', pollData);
    });
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/polls', require('./routes/polls'));


server.listen(5000, () => console.log('Server running on port 5000'));
