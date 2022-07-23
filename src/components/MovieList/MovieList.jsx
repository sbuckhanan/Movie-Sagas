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
import TextField from '@mui/material/TextField';

function MovieList() {
	const dispatch = useDispatch();
	const movies = useSelector((store) => store.movies);
	const [searchString, setSearchString] = useState('');

	//? get our movies on page load or refresh
	useEffect(() => {
		dispatch({ type: 'FETCH_MOVIES' });
	}, []);

	return (
		<main>
			<Box
				className='form'
				component='form'
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
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
				<Button>Save</Button>
			</Box>
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
