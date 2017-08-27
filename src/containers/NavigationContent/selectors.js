import { createSelector } from 'reselect';

const selectHome = (state) => state.globalState;
const selectObjects = () => createSelector(
  selectHome,
  (homeState) => homeState.objects,
);
const selectGroups = () => createSelector(
  selectHome,
  (homeState) => homeState.groups,
);


export {
  selectObjects,
  selectGroups,
};
