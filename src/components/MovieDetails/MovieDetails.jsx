import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

function MovieDetails() {
	const history = useHistory();
	const details = useSelector((store) => store.details);
	const dispatch = useDispatch();
	//? use to get the id from the url to update page
	let { id } = useParams();

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
		</>
	);
}

export default MovieDetails;
