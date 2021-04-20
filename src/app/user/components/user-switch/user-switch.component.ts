import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-switch',
  templateUrl: './user-switch.component.html',
  styleUrls: ['./user-switch.component.scss']
})
export class UserSwitchComponent implements OnInit, OnDestroy {
  users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(null);
  currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private unsubscribe$ = new Subject();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(this.users$);
    this.userService.getCurrentUser()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(this.currentUser$);
  }

  selectUser(id: number): void {
    this.userService.switchUser(id);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
