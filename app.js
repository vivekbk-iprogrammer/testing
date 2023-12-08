const express = require('express');
const router = require('./routes/router');
require('dotenv').config()

const server = express();

server.use(express.json());


server.use('/', router);

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log('server is listen on port', PORT);
});
