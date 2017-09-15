import { fork, all } from 'redux-saga/effects';
import AdminUser from './containers/UsersContainer/sagas';
import AppSaga from './containers/App/sagas';

const sagas = [
  AppSaga,
  AdminUser,
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));
  yield all([...globalSagasForks]);
}

export default globalSagas;
