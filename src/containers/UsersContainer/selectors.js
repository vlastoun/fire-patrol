import { createSelector } from 'reselect';

const selectHome = (state) => state.adminUsers;
const selectUsers = () => createSelector(
  selectHome,
  (homeState) => homeState.users,
);


export {
  selectUsers,
};
