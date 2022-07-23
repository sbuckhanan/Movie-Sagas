import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* postMovie(action) {
	const { title, poster, description, data, genre_id } = action.payload;
	try {
		//? POST REQUESTS. POST IMAGE TO FILES FIRST
		yield axios.post('/api/movie/image', data);
		yield axios.post('/api/movie', { title, poster, description, genre_id });
		//? After post. Get the movies again
		yield put({ type: 'FETCH_MOVIES' });
	} catch (err) {
		console.log('get details error', err);
	}
}

export default function* postSaga() {
	yield takeEvery('POST_MOVIE', postMovie);
}
