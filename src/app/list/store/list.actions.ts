import { createAction, props } from '@ngrx/store';
import { ListItem } from '../models/listItem.model';

export const loadList = createAction(
  '[List] Load List'
);

export const loadListSuccess = createAction(
  '[List] Load List Success',
  props<{ list: ListItem[] }>()
);



