// should be in own file. along with all sagas
import { all } from 'redux-saga/effects';
import detailSaga from './detail-saga';
import fetchSaga from './fetch-saga';
import updateSaga from './update-saga';

// Create the rootSaga generator function
export default function* rootSaga() {
	yield all([detailSaga(), fetchSaga(), updateSaga()]);
}
