import * as R from 'ramda';
import {groups, objects} from './data/index';
import {GET_CORRECT_BUILDING} from './constants';

const initialState = {
  error: {},
  initialValue: '',
  groups,
  objects,
  activeBuilding: {},
};
/* eslint-disable */
function globalState(state = initialState, action) {
  switch (action.type) {
    case GET_CORRECT_BUILDING:
      return R.assoc(
        'activeBuilding',
        R.find(R.propEq('id', action.id))(state.objects),
        state)
    default:
      return state;
  }
}

export default globalState;
