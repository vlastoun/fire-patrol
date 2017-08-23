import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { fromJS } from 'immutable';
import { TEST_ACTION } from './constants';

const initialState = fromJS({
  error: {},
});

function globalState(state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return state.set('initialValue', action.testValue);
    default:
      return state;
  }
}

const createGlobalReducer = () => (
  combineReducers({
    globalState,
    route: routerReducer,
  })
);

export default createGlobalReducer;