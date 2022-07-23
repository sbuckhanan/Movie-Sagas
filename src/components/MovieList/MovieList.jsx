import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';
import './MovieList.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

function MovieList() {
	const dispatch = useDispatch();
	const movies = useSelector((store) => store.movies);
	const [searchString, setSearchString] = useState('');

	//? get our movies on page load or refresh
	useEffect(() => {
		dispatch({ type: 'FETCH_MOVIES' });
	}, []);

	const handleSearch = (e) => {
		e.preventDefault();
		console.log('SEARCH FOR', searchString);
		setSearchString('');
	};

	return (
		<main>
			<Box
				className='form'
				component='form'
				sx={{
					width: 500,
					maxWidth: '100%',
				}}
				noValidate
				autoComplete='off'>
				<FormControl fullWidth sx={{ m: 1, width: '100%' }}>
					<InputLabel htmlFor='outlined-adornment'>Search</InputLabel>
					<OutlinedInput
						fullWidth
						id='outlined-adornment'
						value={searchString}
						onChange={(e) => setSearchString(e.target.value)}
						label='Search'
					/>
				</FormControl>
				<Button variant='contained' onClick={handleSearch}>
					Search
				</Button>
			</Box>
			<h1 className='movieList'>MovieList</h1>
			<section className='movies'>
				{movies.map((movie) => {
					return <MovieListItem movie={movie} key={movie.id} />;
				})}
			</section>
		</main>
	);
}

export default MovieList;
