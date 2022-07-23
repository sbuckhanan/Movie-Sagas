import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* movieDelete(action) {
	//? Hold the id that was sent over in dispatch for the MovieListItem component on click
	const id = action.payload;
	try {
		//? Request the details from the server by ID
		yield axios.delete(`/api/movie/${id}`);
		//? After details come back send them to the reducer to update state
		yield put({ type: 'FETCH_MOVIES' });
	} catch (err) {
		console.log('get details error', err);
	}
}

export default function* deleteSaga() {
	yield takeEvery('DELETE_MOVIE', movieDelete);
}
