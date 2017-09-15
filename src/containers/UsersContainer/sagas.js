import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USERS_REQUESTED, FETCH_USERS_SUCCESS, ADD_ADMIN_ROLE, REMOVE_ADMIN_ROLE } from './constants';

function* fetchUsers() {
  const URL = 'http://localhost:8080/api/users/usersroles';
  const result = yield call(axios.get, URL);
  yield put({type: FETCH_USERS_SUCCESS, users: result.data});
}

function* addAdminRole(action) {
  const URL = 'http://localhost:8080/api/users/addrole';
  yield call(axios.post, URL, {userEmail: action.email, roleName: 'admin'});
  yield put({type: FETCH_USERS_REQUESTED});
}
function* removeAdminRole(action) {
  const URL = 'http://localhost:8080/api/users/removerole';
  yield call(axios.post, URL, {userEmail: action.email, roleName: 'admin'});
  yield put({type: FETCH_USERS_REQUESTED});
}

function* UsersSaga() {
  yield takeEvery(ADD_ADMIN_ROLE, addAdminRole);
  yield takeEvery(REMOVE_ADMIN_ROLE, removeAdminRole);
  yield takeLatest(FETCH_USERS_REQUESTED, fetchUsers);
}

// Bootstrap sagas
export default UsersSaga;

