import { fork, all } from 'redux-saga/effects';
import AppSaga from './containers/App/sagas';

const sagas = [
  AppSaga,
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));
  yield all([...globalSagasForks]);
}

export default globalSagas;
