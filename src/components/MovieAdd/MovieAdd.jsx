import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './MovieAdd.css';

function MovieAdd() {
	const history = useHistory();
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState();
	const [poster, setPoster] = useState('');
	const [genre_id, setGenreId] = useState(1);

	//? this updates the new pathVariable onChange to the object of the file
	//? this is the onchange function
	const addFile = (event) => {
		setImage(event.target.files[0]);
		setPoster(`images/${event.target.files[0].name}`);
	};

	//? this formats the image into the format that is needed for upload and sends it over via post request
	const handleSubmit = (event) => {
		const data = new FormData();
		//? name of input and then name of the variable holding the image
		data.append('image', image);

		dispatch({ type: 'POST_MOVIE', payload: { title, poster, description, data, genre_id } });

		history.push('/');

		// axios
		// 	.post('/gallery/image', data)
		// 	.then((response) => {
		// 		console.log(response);
		// 	})
		// 	.catch((error) => {
		// 		alert('Error with post', error);
		// 	});
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
					id='filled-textarea'
					label='Title'
					variant='filled'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<TextField
					min='1'
					max='13'
					type='number'
					label='Genre'
					variant='filled'
					value={genre_id}
					onChange={(e) => setGenreId(Number(e.target.value))}
				/>
				<TextField type='file' name='image' label='Image' variant='filled' onChange={addFile} />
				<TextField
					fullWidth
					id='filled-textarea'
					multiline
					rows={6}
					label='Description'
					variant='filled'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<div className='movieAddButtons'>
					<Button variant='contained' onClick={() => history.push(`/details/${id}`)}>
						Cancel
					</Button>
					<Button variant='contained' onClick={handleSubmit}>
						Submit
					</Button>
				</div>
			</Box>
			<h3>Genre Key</h3>
			<ul className='genreList'>
				<li className='genreListItem'>1. Adventure</li>
				<li className='genreListItem'>2. Animated</li>
				<li className='genreListItem'>3. Biographical</li>
				<li className='genreListItem'>4. Comedy</li>
				<li className='genreListItem'>5. Disaster</li>
				<li className='genreListItem'>6. Drama</li>
				<li className='genreListItem'>7. Epic</li>
				<li className='genreListItem'>8. Fantasy</li>
				<li className='genreListItem'>9. Musical</li>
				<li className='genreListItem'>10. Romantic</li>
				<li className='genreListItem'>11. Science Fiction</li>
				<li className='genreListItem'>12. Space-Opera</li>
				<li className='genreListItem'>13. Superhero</li>
			</ul>
		</>
	);
}

export default MovieAdd;
