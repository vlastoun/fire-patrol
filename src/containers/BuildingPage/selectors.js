import { createSelector } from 'reselect';

const selectHome = (state) => state.globalState;
const selectObjects = () => createSelector(
  selectHome,
  (homeState) => homeState.objects,
);

export {
  selectObjects,
};
