const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
	// Add query to get all genres
	res.sendStatus(500);
});

router.put('/update/:id', (req, res) => {
	let queryText;
	const id = req.params.id;
	const { type, genreId } = req.body;
	if (type === 'ADD') {
		queryText = 'INSERT INTO movies_genres (movie_id, genre_id) VALUES ($1, $2);';
	} else if (type === 'REMOVE') {
		queryText = 'DELETE FROM movies_genres WHERE movie_id = $1 AND genre_id = $2;';
	}
	pool
		.query(queryText, [id, genreId])
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			console.log('ERROR: UPDATING GENRES', err);
			res.sendStatus(500);
		});
});

module.exports = router;
