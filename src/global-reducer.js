import { combineReducers } from 'redux';
import globalState from './globalState';
import adminUsers from './containers/UsersContainer/reducer';

const createGlobalReducer = () => (
  combineReducers({
    globalState,
    adminUsers,
  })
);

export default createGlobalReducer;
