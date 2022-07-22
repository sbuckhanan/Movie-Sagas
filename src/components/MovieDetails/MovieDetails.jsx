import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

function MovieDetails() {
	const history = useHistory();
	const details = useSelector((store) => store.details);
	const dispatch = useDispatch();
	let { id } = useParams();

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
		</>
	);
}

export default MovieDetails;
