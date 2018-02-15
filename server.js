const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const config = require('./.config.js');

const server = express();
const PORT = config.port;
const GMAPS_KEY = config.gmaps.key;



server.listen(PORT, err => {
    if (err) {
        console.log(`Error starting server: ${err}`);
    } else {
        console.log(`App listening on port: ${PORT}`);
    }
});


server.get('/', (req, res) => {
    res.send(
        '<p>Hello Troy!</p>'+
        '<p>The fun stuff is at ...</p>' // edit to show main folder for calls
    );
});
