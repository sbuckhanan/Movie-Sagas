import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './EditMovie.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function EditMovie() {
	const history = useHistory();
	const details = useSelector((store) => store.details);
	const dispatch = useDispatch();
	//? used to get the parms of the id from the url in case of page refresh
	let { id } = useParams();

	//? Local state to hold our input values
	const [movieTitle, setMovieTitle] = useState(details.title);
	const [movieDescription, setMovieDescription] = useState(details.description);

	//? handle page reload
	//? get the details of the id we are editing on page refresh
	useEffect(() => {
		dispatch({ type: 'GET_DETAILS', payload: id });
	}, []);

	const handleSubmit = () => {
		//? Dispatch to saga to update the movie
		dispatch({ type: 'UPDATE_DETAILS', payload: { id, movieTitle, movieDescription } });
		//? Go to the details page of the id we are working on
		history.push(`/details/${id}`);
	};

	const addGenre = (e) => {
		//? hold the id of the genre we clicked
		const genreId = Number(e.target.value);
		console.log(genreId);
		//? dispatch to update grenres in sagas
		dispatch({ type: 'UPDATE_GENRE', payload: { type: 'ADD', id, genreId } });
	};

	const removeGenre = (e) => {
		//? hold the id of the genre we clicked
		const genreId = Number(e.target.value);
		console.log(genreId);
		//? dispatch to update grenres in sagas
		dispatch({ type: 'UPDATE_GENRE', payload: { type: 'REMOVE', id, genreId } });
	};

	return (
		<>
			<h3 className='editMovie'>Edit Movie</h3>
			<Box
				className='form'
				component='form'
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'>
				<TextField
					fullWidth
					id='filled-textarea'
					multiline
					rows={6}
					label='Title'
					variant='filled'
					value={movieTitle}
					onChange={(e) => setMovieTitle(e.target.value)}
				/>
				<TextField
					fullWidth
					id='filled-textarea'
					multiline
					rows={6}
					label='Description'
					variant='filled'
					value={movieDescription}
					onChange={(e) => setMovieDescription(e.target.value)}
				/>
				<div className='buttonWrapper'>
					<Button onClick={() => history.push(`/details/${id}`)}>Cancel</Button>
					<Button onClick={handleSubmit}>Save</Button>
				</div>
			</Box>
			<h3>Current Genres</h3>
			<p>{details.array_agg.map((genre) => `${genre} `)}</p>
			<h3 className='editMovie'>Add Genres</h3>
			<ButtonGroup variant='contained' aria-label='outlined primary button group'>
				<Button onClick={addGenre} value='1'>
					Adventure
				</Button>
				<Button onClick={addGenre} value='2'>
					Animated
				</Button>
				<Button onClick={addGenre} value='3'>
					Biographical
				</Button>
				<Button onClick={addGenre} value='4'>
					Comedy
				</Button>
				<Button onClick={addGenre} value='5'>
					Disaster
				</Button>
				<Button onClick={addGenre} value='6'>
					Drama
				</Button>
				<Button onClick={addGenre} value='7'>
					Epic
				</Button>
				<Button onClick={addGenre} value='8'>
					Fantasy
				</Button>
				<Button onClick={addGenre} value='9'>
					Musical
				</Button>
				<Button onClick={addGenre} value='10'>
					Romantic
				</Button>
				<Button onClick={addGenre} value='11'>
					Science Fiction
				</Button>
				<Button onClick={addGenre} value='12'>
					Space-Opera
				</Button>
				<Button onClick={addGenre} value='13'>
					Superhero
				</Button>
			</ButtonGroup>
			<h3 className='editMovie'>Remove Genres</h3>
			<ButtonGroup color='error' variant='contained' aria-label='outlined primary button group'>
				<Button onClick={removeGenre} value='1'>
					Adventure
				</Button>
				<Button onClick={removeGenre} value='2'>
					Animated
				</Button>
				<Button onClick={removeGenre} value='3'>
					Biographical
				</Button>
				<Button onClick={removeGenre} value='4'>
					Comedy
				</Button>
				<Button onClick={removeGenre} value='5'>
					Disaster
				</Button>
				<Button onClick={removeGenre} value='6'>
					Drama
				</Button>
				<Button onClick={removeGenre} value='7'>
					Epic
				</Button>
				<Button onClick={removeGenre} value='8'>
					Fantasy
				</Button>
				<Button onClick={removeGenre} value='9'>
					Musical
				</Button>
				<Button onClick={removeGenre} value='10'>
					Romantic
				</Button>
				<Button onClick={removeGenre} value='11'>
					Science Fiction
				</Button>
				<Button onClick={removeGenre} value='12'>
					Space-Opera
				</Button>
				<Button onClick={removeGenre} value='13'>
					Superhero
				</Button>
			</ButtonGroup>
		</>
	);
}

export default EditMovie;
