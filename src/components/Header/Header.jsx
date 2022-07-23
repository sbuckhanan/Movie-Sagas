//? Attempt nav bar. Imports for navbar
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Header() {
	//? Define the things shown on the navbar
	const navItems = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Home', path: '/contact' },
	];

	return (
		<>
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
		</>
	);
}

export default Header;
