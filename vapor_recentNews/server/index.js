const express = require('express');
const App = express();
const bodyParser = require('body-parser');
const port = 3003;
const db = require('../database');
const path = require('path');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

App.use(express.static('public'));

App.listen(port, () => { console.log(`listening on port ${port}!`)});

App.get('/updates', (req, res) => {
	db.getUpdates((err, data) => {
		if (err) {
			console.log('[server/index.jsx:18] err getting updates from db!', err);
			return;
		}

		res.status(200);
		res.send(data);
	})
})

App.get('/games_updates/:id', (req, res) => {

	db.getGame(req.params.id, (err, data) => {
		if (err) {
			console.log('[server/index.jsx: 33] err getting updates from db!', err);
			return;
		}

		res.status(200);
		res.send(data);
	})
})