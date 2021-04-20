import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUserSuccess } from './users.actions';
import { map, switchMap } from 'rxjs/operators';
import { UserApiService } from '../services/user-api.service';
import { User } from '../models/user.model';


@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() => this.userApiService.getUsers()),
    map((data: any) => {
        const usersArray: User[] = [];
        for (const v of data.userList) {
          usersArray.push(
            {
              id: v.id - 1,
              name: v.name
            });
        }
        return loadUserSuccess({users: usersArray});
      }
    ),
  ));

  constructor(
    private actions$: Actions,
    private userApiService: UserApiService
  ) {
  }

}
