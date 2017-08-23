import { fromJS, List } from 'immutable';
import { FETCH_SUCCESS, FETCH_REQUESTED } from './constants';

const initialState = fromJS({
  posts: [],
  categories: [],
  loading: false,
});

function ProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUESTED:
      return state
        .set('loading', true);
    case FETCH_SUCCESS:
      return state
        .set('categories', List(action.data.categories))
        .set('posts', List(action.data.posts))
        .set('loading', false);
    default:
      return state;
  }
}

export default ProjectsReducer;
