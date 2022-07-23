import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

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

export default function* updateSaga() {
	yield takeEvery('UPDATE_DETAILS', updateMovie);
}
