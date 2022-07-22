const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
	// const query = `SELECT * FROM movies ORDER BY "title" ASC`;
	const query = `SELECT movies.id, title, poster, description, array_agg(genres.name) FROM movies JOIN movies_genres ON movies.id = movies_genres.movie_id JOIN genres ON genres.id = movies_genres.genre_id
	GROUP BY movies.id
	ORDER BY "title" ASC;`;
	pool
		.query(query)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			console.log('ERROR: Get all movies', err);
			res.sendStatus(500);
		});
});

//? Specific get route to get a movie by id along with all of the genres
router.get('/details/:id', (req, res) => {
	//? Hold our id that we sent from client
	const id = req.params.id;
	//? Get the specific movie alone with the genres in an array
	const query = `SELECT movies.id, title, poster, description, array_agg(genres.name) FROM movies JOIN movies_genres ON movies.id = movies_genres.movie_id JOIN genres ON genres.id = movies_genres.genre_id
	WHERE movies.id = $1
	GROUP BY movies.id;`;
	//? run our query
	pool
		.query(query, [id])
		.then((result) => {
			console.log(result.rows);
			res.send(result.rows);
		})
		.catch((err) => {
			console.log('ERROR: Get all movies', err);
			res.sendStatus(500);
		});
});

router.post('/', (req, res) => {
	console.log(req.body);
	// RETURNING "id" will give us back the id of the created movie
	const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`;

	// FIRST QUERY MAKES MOVIE
	pool
		.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
		.then((result) => {
			console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!

			const createdMovieId = result.rows[0].id;

			// Now handle the genre reference
			const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `;
			// SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
			pool
				.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id])
				.then((result) => {
					//Now that both are done, send back success!
					res.sendStatus(201);
				})
				.catch((err) => {
					// catch for second query
					console.log(err);
					res.sendStatus(500);
				});

			// Catch for first query
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
});
//? Put request to update our movie information
router.put('/update/:id', (req, res) => {
	//? object destructure req.body
	const { id, movieTitle, movieDescription } = req.body;
	//? query that we are running
	const queryText = `UPDATE movies SET title=$1, description=$2 WHERE id=$3`;
	pool
		.query(queryText, [movieTitle, movieDescription, id])
		.then((result) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log('ERROR: UPDATE movie', err);
			res.sendStatus(500);
		});
});

module.exports = router;
