const app = require('./src/server.js');
const port = process.env.PORT || 8000;

const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.static(__dirname + '/views/'));


// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/quizThingy.html'));
});

// Server
const port = process.env.PORT || 8000;

// Server
app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});
