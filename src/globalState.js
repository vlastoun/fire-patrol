import * as R from 'ramda';
import { TEST_ACTION } from './constants';

const initialState = {
  error: {},
  initialValue: '',
};

function globalState(state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return R.assoc('initialValue', action.testValue, state);
    default:
      return state;
  }
}

export default globalState;
