import * as R from 'ramda';
import {groups, objects} from './data/index';
import {HOVERING_ON_ID, HOVERING_STOPPED} from './constants';

const initialState = {
  error: {},
  initialValue: '',
  groups,
  objects,
  hoveringOn: null,
  isHoveringActive: false,
};

function globalState(state = initialState, action) {
  switch (action.type) {
    case HOVERING_ON_ID:
      return R.evolve({
        isHoveringActive: R.always(true),
        hoveringOn: R.always(action.id),
      }, state);
    case HOVERING_STOPPED:
      return R.evolve({
        isHoveringActive: R.always(false),
        hoveringOn: R.always(null),
      }, state);
    default:
      return state;
  }
}

export default globalState;
