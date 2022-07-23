import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
//? import store
import storeInstance from './redux/reducers/store';

// Create the rootSaga generator function
export default function* rootSaga() {
	yield takeEvery('FETCH_MOVIES', fetchAllMovies);
	yield takeEvery('GET_DETAILS', movieDetails);
	yield takeEvery('UPDATE_DETAILS', updateMovie);
}

function* movieDetails(action) {
	//? Hold the id that was sent over in dispatch for the MovieListItem component on click
	const id = action.payload;
	try {
		//? Request the details from the server by ID
		const details = yield axios.get(`/api/movie/details/${id}`);
		yield console.log('DETAILS OF RETURN', details);
		//? After details come back send them to the reducer to update state
		yield put({ type: 'SET_DETAILS', payload: details.data[0] });
	} catch (err) {
		console.log('get details error', err);
	}
}

function* fetchAllMovies() {
	// get all movies from the DB
	try {
		//? hold our results in a variable
		const movies = yield axios.get('/api/movie');
		console.log('get all:', movies.data);
		//? after results come back send it to our reducer to hold the results to use
		yield put({ type: 'SET_MOVIES', payload: movies.data });
	} catch {
		console.log('get all error');
	}
}

function* updateMovie(action) {
	//? object destructure the action payload
	const { id, movieTitle, movieDescription } = action.payload;
	try {
		//? put request to update our selected movie
		yield axios.put(`/api/movie/update/${id}`, { id, movieTitle, movieDescription });
		//? after that is done then do a get request to update our screens
		yield put({ type: 'FETCH_MOVIES' });
	} catch (err) {
		console.log('ERROR UPDATING', err);
	}
}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={storeInstance}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
