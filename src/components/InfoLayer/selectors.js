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

const selectIsHoveringActive = () => createSelector(
  selectHome,
  (homeState) => homeState.isHoveringActive,
);

const selectHoveringOn = () => createSelector(
  selectHome,
  (homeState) => homeState.hoveringOn,
);


export {
  selectHoveringOn,
  selectIsHoveringActive,
  selectObjects,
  selectGroups,
};
