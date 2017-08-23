import { createSelector } from 'reselect';

const selectHome = (state) => state.SingleProject;
const selectPost = () => createSelector(
  selectHome,
  (homeState) => homeState.get('post'),
);
const selectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading'),
);
export {
  selectHome,
  selectLoading,
  selectPost,
};
