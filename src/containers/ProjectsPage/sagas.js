import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import { HOST } from '../../global-constants';
import { FETCH_REQUESTED, FETCH_SUCCESS } from './constants';

function* fetchPosts() {
  const postsURL = `${HOST}api/posts`;
  const categoriesURL = `${HOST}api/categories`;
  const posts = yield call(axios.get, postsURL);
  const categories = yield call(axios.get, categoriesURL);
  yield put({ type: FETCH_SUCCESS, data: { posts: posts.data, categories: categories.data } });
}


function* Projects() {
  yield takeLatest(FETCH_REQUESTED, fetchPosts);
}

// Bootstrap sagas
export default Projects;

