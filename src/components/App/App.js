import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import { Link } from 'react-router-dom';

//? Attempt nav bar. Imports for navbar
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EditMovie from '../EditMovie/EditMovie';

//? Define the things shown on the navbar
const navItems = [
	{ name: 'Home', path: '/' },
	{ name: 'About', path: '/about' },
	{ name: 'Home', path: '/contact' },
];

function App() {
	return (
		<Router>
			<div className='App'>
				<AppBar className='appBar' component='nav'>
					<Toolbar>
						<Typography
							variant='h6'
							component='div'
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
							The Movies Saga!
						</Typography>
						<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							{navItems.map((item, i) => (
								<Link to={item.path} key={i}>
									<Button sx={{ color: '#fff' }}>{item.name}</Button>
								</Link>
							))}
						</Box>
					</Toolbar>
				</AppBar>
				<Toolbar />
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
