import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import createGlobalReducer from './global-reducer';
import globalSagas from './global-sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const middlewares = [
  // Middleware for intercepting and dispatching navigation actions
  sagaMiddleware,
];

const store = createStore(
  createGlobalReducer(),
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

sagaMiddleware.run(globalSagas);

export default store;
