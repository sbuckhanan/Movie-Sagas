import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './MovieListItem.css';

//? dispatch to sagas which movie I clicked on to do the get request.
//? Put to reducer that information
//? Update redux with what data I got from the database

function MovieListItem({ movie }) {
	const history = useHistory();
	const dispatch = useDispatch();

	//? used to send our movie id over to sagas to get the specific details of that movie
	const handleDetails = () => {
		//? Dispatch here to sagas
		dispatch({ type: 'GET_DETAILS', payload: movie.id });
		//? send us to the details page of that id
		history.push(`/details/${movie.id}`);
	};

	return (
		<>
			<Card className='card' sx={{ maxWidth: 345 }} onClick={handleDetails}>
				<CardActionArea>
					<CardMedia
						className='cardImg'
						component='img'
						height='200'
						image={movie.poster}
						alt={movie.title}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{movie.title}
						</Typography>
						<Typography variant='body2'>{movie.array_agg.map((genre) => `${genre} `)}</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	);
	// return (
	// 	<div key={movie.id} onClick={handleDetails}>
	// 		<h3>{movie.title}</h3>
	// 		<img src={movie.poster} alt={movie.title} />
	// 	</div>
	// );
}

export default MovieListItem;
