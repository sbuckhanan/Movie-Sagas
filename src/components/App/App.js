import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import EditMovie from '../EditMovie/EditMovie';
import Header from '../Header/Header';
import MovieSearch from '../MovieSearch/MovieSearch';

// TODO Ability to add or remove a genre from a movie

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Route path='/' exact>
					<MovieList />
				</Route>
				<Route path='/details/:id' exact>
					<MovieDetails />
				</Route>
				<Route path='/edit/:id' exact>
					<EditMovie />
				</Route>
				<Route path='/search/:id' exact>
					<MovieSearch />
				</Route>

				{/* Details page */}
				{/* Add Movie page */}
			</div>
		</Router>
	);
}

export default App;
