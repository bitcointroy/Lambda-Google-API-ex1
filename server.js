const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const config = require('./.config.js');
// const details = require('./data/placeDetails.json');

const server = express();
const PORT = config.port;
const STATUS_SUCCESS = 200;
const STATUS_USER_ERROR = 422;
const KEY_GMAPS = config.gmaps.key;
const URI_TEXT_SEARCH = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';

server.get('/place', (req, res) => {
	const place = req.query.place;
	const url = URI_TEXT_SEARCH + place + '&key=' + KEY_GMAPS;
	fetch(url)
		.then((place) => place.json())
		.then((place) => {
			console.log(place);
			res.status(STATUS_SUCCESS);
			res.send(place);
		})
		.catch((err) => {
			res.status(STATUS_USER_ERROR);
			res.send({ err: err });
		});
});

// const getLocation = async url => {
//     try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json);
//     }
// }

server.listen(PORT, (err) => {
	if (err) {
		console.log(`Error starting server: ${err}`);
	} else {
		console.log(`App listening on port: ${PORT}`);
	}
});

// server.get('/places', (req, res) => {
//     getLocation(search);

// });

server.get('/', (req, res) => {
	res.send(
		'<p>Hello Troy!</p>' + '<p>The fun stuff is at ...</p>' // edit to show main folder for calls
	);
});

// console.log(details.result.opening_hours.weekday_text);
