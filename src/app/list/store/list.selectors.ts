import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
import { selectCurrentUser } from '../../user/store/users.selectors';

export const selectListState = createFeatureSelector<fromList.State>(
  fromList.listFeatureKey
);

export const selectList = createSelector(
  selectListState,
  selectCurrentUser,
  (a, b) => {
    return a.list.filter(item => item.creatorId === b.id);
  }
);

export const selectUserIdAndNextItemId = createSelector(
  selectListState,
  selectCurrentUser,
  (a, b) => {
    return {userId: b.id, nextItemId: a.list.length - 1};
  }
);
