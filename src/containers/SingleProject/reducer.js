import { fromJS, List } from 'immutable';
import { FETCH_SUCCESS, FETCH_REQUESTED } from './constants';

const initialState = fromJS({
  post: {
    title: '',
    description: '',
    body: '',
  },
});

function ProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUESTED:
      return state
        .set('loading', true);
    case FETCH_SUCCESS:
      return state
        .set('post', fromJS(action.post.data))
        .set('loading', false);
    default:
      return state;
  }
}

export default ProjectsReducer;
