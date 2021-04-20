import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';

export const selectUserState = createFeatureSelector<fromUsers.State>(
  fromUsers.usersFeatureKey
);

export const selectUsers = createSelector(
  selectUserState,
  state => Object.values(state.users),
);

export const selectCurrentUser = createSelector(
  selectUserState,
  state => state.users[state.currentUserId]
);
