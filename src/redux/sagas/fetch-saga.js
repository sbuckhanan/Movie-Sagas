import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

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

export default function* fetchSaga() {
	yield takeEvery('FETCH_MOVIES', fetchAllMovies);
}
