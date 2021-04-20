import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem, loadList } from '../store/list.actions';
import { Observable } from 'rxjs';
import { selectList, selectUserIdAndNextItemId } from '../store/list.selectors';
import { ListItem } from '../models/listItem.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private store: Store) {
  }

  getUserItems(): Observable<ListItem[]> {
    return this.store.select(selectList);
  }

  getUserIdAndNewItemId(): Observable<any> {
    return this.store.select(selectUserIdAndNextItemId);
  }

  loadItems(): void {
    this.store.dispatch(loadList());
  }

  addNewItem(item: ListItem): void {
    this.store.dispatch(addItem({item}));
  }

}
