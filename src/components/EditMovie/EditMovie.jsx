import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './EditMovie.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

	return (
		<>
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
		</>
	);
}

export default EditMovie;
