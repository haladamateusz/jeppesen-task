import { createReducer, on } from '@ngrx/store';
import * as listActions from './list.actions';
import { ListItem } from '../models/listItem.model';

export const listFeatureKey = 'list';

export interface State {
  list: ListItem[];
}

export const initialState: State = {
  list: []
};


export const listReducer = createReducer(
  initialState,

  on(listActions.loadListSuccess, (state, {list}) => ({
    ...state,
    list
  })),

  on(listActions.addItem, (state, {item}) => ({
    ...state,
    list: [...state.list, item]
  })),
);

