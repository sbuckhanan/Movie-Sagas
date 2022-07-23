import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import EditMovie from '../EditMovie/EditMovie';
import Header from '../Header/Header';

// TODO Ability to add or remove a genre from a movie, Move sagas and reducers to their own folders/files (files created)

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

				{/* Details page */}
				{/* Add Movie page */}
			</div>
		</Router>
	);
}

export default App;
