import { createSelector } from 'reselect';

const selectHome = (state) => state.Projects;
const selectCategories = () => createSelector(
  selectHome,
  (homeState) => homeState.get('categories'),
);
const selectPosts = () => createSelector(
  selectHome,
  (homeState) => homeState.get('posts'),
);

export {
  selectPosts,
  selectHome,
  selectCategories,
};
