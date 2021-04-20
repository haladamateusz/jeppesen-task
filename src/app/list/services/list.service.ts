import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadList } from '../store/list.actions';
import { Observable } from 'rxjs';
import { selectList } from '../store/list.selectors';
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

  loadItems(): void {
    this.store.dispatch(loadList());
  }
}
