import { createSelector } from 'reselect';

const selectHome = (state) => state.globalState;
const selectBuilding = () => createSelector(
  selectHome,
  (homeState) => homeState.activeBuilding,
);

export {
  selectBuilding,
};
