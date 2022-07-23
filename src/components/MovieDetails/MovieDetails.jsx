import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import './MovieDetails.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';

function MovieDetails() {
	const history = useHistory();
	const details = useSelector((store) => store.details);
	const dispatch = useDispatch();
	//? use to get the id from the url to update page
	let { id } = useParams();

	const handleDelete = () => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch({ type: 'DELETE_MOVIE', payload: id });
				Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
				history.push('/');
			} else {
				Swal.fire('Canceled!', 'Your movie is still available.', 'error');
			}
		});
	};

	//? On page load or refresh dispatch to get the information of the movie we are working with
	useEffect(() => {
		dispatch({ type: 'GET_DETAILS', payload: id });
	}, []);

	return (
		<>
			<div>
				<h3>{details.title}</h3>
				<img src={details.poster} alt={details.title} />
				<p>{details.description}</p>
				<ul>
					{details.array_agg.map((genre, i) => (
						<li key={i}>{genre}</li>
					))}
				</ul>
			</div>

			<Button variant='contained' onClick={() => history.push('/')}>
				Back To List
			</Button>
			<Button variant='contained' onClick={() => history.push(`/edit/${id}`)}>
				Edit Movie
			</Button>
			<Button startIcon={<DeleteIcon />} color='error' variant='contained' onClick={handleDelete}>
				Delete Movie
			</Button>
		</>
	);
}

export default MovieDetails;
