import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* updateGenre(action) {
	const { type, id, genreId } = action.payload;
	try {
		//? put request to update our selected movie
		yield axios.put(`/api/genre/update/${id}`, { type, genreId });
		//? after that is done then do a get request to update our screens
		yield put({ type: 'GET_DETAILS', payload: id });
		yield put({ type: 'FETCH_MOVIES' });
	} catch (err) {
		console.log('ERROR UPDATING', err);
	}
}

export default function* updateGenreSaga() {
	yield takeEvery('UPDATE_GENRE', updateGenre);
}
