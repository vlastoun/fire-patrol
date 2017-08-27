import { takeLatest, put } from 'redux-saga/effects';
import { TESTSAGAS } from './constants';
import { TEST_ACTION } from './../../constants';

function* testSaga() {
  yield put({type: TEST_ACTION, testValue: 'message from sagas' });
}


function* AppSaga() {
  yield takeLatest(TESTSAGAS, testSaga);
}

// Bootstrap sagas
export default AppSaga;

