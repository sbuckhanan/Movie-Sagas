import './MovieSearch.css';
import MovieListItem from '../MovieListItem/MovieListItem';
import { useSelector } from 'react-redux';

function MovieSearch() {
	const search = useSelector((store) => store.search);
	//? import movies from redux store
	//? map through that array
	return (
		<section className='movies'>
			{search.map((movie) => {
				return <MovieListItem movie={movie} key={movie.id} />;
			})}
		</section>
	);
}

export default MovieSearch;
