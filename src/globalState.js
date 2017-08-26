import {groups, objects} from './data/index';

const initialState = {
  error: {},
  initialValue: '',
  groups,
  objects,
};
/* eslint-disable */
function globalState(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default globalState;
