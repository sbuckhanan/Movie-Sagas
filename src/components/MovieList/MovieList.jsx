import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';
import './MovieList.css';

function MovieList() {
	const dispatch = useDispatch();
	const movies = useSelector((store) => store.movies);

	//? get our movies on page load or refresh
	useEffect(() => {
		dispatch({ type: 'FETCH_MOVIES' });
	}, []);

	return (
		<main>
			<h1>MovieList</h1>
			<section className='movies'>
				{movies.map((movie) => {
					return <MovieListItem movie={movie} key={movie.id} />;
				})}
			</section>
		</main>
	);
}

export default MovieList;
