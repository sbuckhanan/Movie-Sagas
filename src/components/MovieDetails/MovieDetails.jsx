import { useHistory } from 'react-router-dom';

function MovieDetails() {
	const history = useHistory();
	return (
		<div key={movie.id} onClick={handleDetails}>
			<h3>{movie.title}</h3>
			<img src={movie.poster} alt={movie.title} />
		</div>
	);
}
