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
	let { id } = useParams();

	const [movieTitle, seMovieTitle] = useState('');
	const [movieDescription, setMovieDescription] = useState('');

	useEffect(() => {
		dispatch({ type: 'GET_DETAILS', payload: id });
	}, []);

	const handleSubmit = () => {
		dispatch({ type: 'UPDATE_DETAILS', payload: { movieTitle, movieDescription } });
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
					defaultValue={details.title}
					onChange={(e) => setMovieTitle(e.target.value)}
				/>
				<TextField
					fullWidth
					id='filled-textarea'
					multiline
					rows={6}
					label='Description'
					variant='filled'
					defaultValue={details.description}
					onChange={(e) => setMovieDescription(e.target.value)}
				/>
				<div className='buttonWrapper'>
					<Button onClick={() => history.push(`/details/${id}`)}>Cancel</Button>
					<Button onClick={handleSubmit}>Submit</Button>
				</div>
			</Box>
		</>
	);
}

export default EditMovie;
