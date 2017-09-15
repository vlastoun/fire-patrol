import * as R from 'ramda';
import {FETCH_USERS_SUCCESS} from './constants';


const initialState = {
  users: [],
};

function AdminUsers(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return R.assoc('users', action.users, state);
    default:
      return state;
  }
}

export default AdminUsers;
