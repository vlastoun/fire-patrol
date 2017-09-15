import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USERS_REQUESTED, FETCH_USERS_SUCCESS } from './constants';

function* fetchUsers() {
  const URL = 'http://localhost:8080/api/users/usersroles';
  const result = yield call(axios.get, URL);
  yield put({type: FETCH_USERS_SUCCESS, users: result.data});
}


function* UsersSaga() {
  yield takeLatest(FETCH_USERS_REQUESTED, fetchUsers);
}

// Bootstrap sagas
export default UsersSaga;

