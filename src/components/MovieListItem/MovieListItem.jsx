import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//? dispatch to sagas which movie I clicked on to do the get request.
//? Put to reducer that information
//? Update redux with what data I got from the database

function MovieListItem({ movie }) {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleDetails = () => {
		//? Dispatch here
		dispatch({ type: 'GET_DETAILS', payload: movie.id });
		history.push(`/details/${movie.id}`);
	};
	return (
		<div key={movie.id} onClick={handleDetails}>
			<h3>{movie.title}</h3>
			<img src={movie.poster} alt={movie.title} />
		</div>
	);
}

export default MovieListItem;
