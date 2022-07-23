import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* movieSearch(action) {
	//? Hold the id that was sent over in dispatch for the MovieListItem component on click
	const search = action.payload;
	try {
		//? Request the movies from the server by ID
		const movies = yield axios.get(`/api/movie/search/${search}`);
		yield console.log('DETAILS OF RETURN', movies);
		//? After movies come back send them to the reducer to update state
		yield put({ type: 'SET_SEARCH', payload: movies.data });
	} catch (err) {
		console.log('get details error', err);
	}
}

export default function* searchSaga() {
	yield takeEvery('GET_SEARCH', movieSearch);
}
