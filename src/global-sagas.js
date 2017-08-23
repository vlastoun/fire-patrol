import { fork, all } from 'redux-saga/effects';
import AppSaga from './containers/App/sagas';
import PostsSaga from './containers/ProjectsPage/sagas';
import SingleProject from './containers/SingleProject/sagas'

const sagas = [
  AppSaga,
  PostsSaga,
  SingleProject,
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));
  yield all([...globalSagasForks]);
}

export default globalSagas;
