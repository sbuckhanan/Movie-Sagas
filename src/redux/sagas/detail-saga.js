import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

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

export default function* detailSaga() {
	yield takeEvery('GET_DETAILS', movieDetails);
}
