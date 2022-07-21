import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails() {
	const history = useHistory();
	const details = useSelector((store) => store.details);

	return (
		<>
			<div>
				<h3>{details.title}</h3>
				<img src={details.poster} alt={details.title} />
				<p>{details.description}</p>
			</div>

			<button onClick={() => history.push('/')}>Go Back</button>
		</>
	);
}

export default MovieDetails;
