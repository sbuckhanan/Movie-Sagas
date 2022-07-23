// should be in own file. along with all sagas
import { all } from 'redux-saga/effects';
import detailSaga from './detail-saga';
import fetchSaga from './fetch-saga';
import updateSaga from './update-saga';
import searchSaga from './search-saga';
import postSaga from './post-saga';
import deleteSaga from './delete-saga';

// Create the rootSaga generator function
export default function* rootSaga() {
	yield all([detailSaga(), fetchSaga(), updateSaga(), searchSaga(), postSaga(), deleteSaga()]);
}
