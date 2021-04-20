import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {ListItem} from '../models/listItem.model';
import {ListApiService} from '../services/list-api.service';
import {loadList, loadListSuccess} from './list.actions';


@Injectable()
export class ListEffects {

  loadList$ = createEffect(() => this.actions$.pipe(
    ofType(loadList),
    switchMap(() => this.listApiService.getItems()),
    map((data: any) => {
        const listArray: ListItem[] = [];
        for (const v of data.itemsList) {
          listArray.push(v);
        }
        console.log(listArray);
        return loadListSuccess({list: listArray});
      }
    ),
  ));

  constructor(private actions$: Actions, private listApiService: ListApiService) {
  }

}
