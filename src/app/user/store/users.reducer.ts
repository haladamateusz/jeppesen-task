import { createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';
import {User} from '../models/user.model';

export const usersFeatureKey = 'users';

export interface State {
  users: { [key: number]: User };
  currentUserId?: number;
}

export const initialState: State = {
  users: [],
  currentUserId: null
};


export const usersReducer = createReducer(
  initialState,

  on(UsersActions.loadUserSuccess, (state, {users}) => ({
    ...state,
    users,
    currentUserId: 0
  })),

  on(UsersActions.switchUser, (state, {id}) => ({
    ...state,
    currentUserId: id,
  }))
);

