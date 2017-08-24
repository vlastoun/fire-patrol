import { combineReducers } from 'redux';
import globalState from './globalState';

const createGlobalReducer = () => (
  combineReducers({
    globalState,
  })
);

export default createGlobalReducer;
