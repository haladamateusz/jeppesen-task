import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user/services/user.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from './user/models/user.model';
import { takeUntil } from 'rxjs/operators';
import { ListService } from './list/services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private unsubscribe$ = new Subject();

  constructor(public userService: UserService, private listService: ListService) {
  }

  ngOnInit(): void {
    this.userService.loadUsers();
    this.listService.loadItems();
    this.userService.getCurrentUser()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(this.currentUser$);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
