import {Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ListService } from '../../services/list.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { ListItem } from '../../models/listItem.model';

@Component({
  selector: 'app-list-dashboard',
  templateUrl: './list-dashboard.component.html',
  styleUrls: ['./list-dashboard.component.scss']
})
export class ListDashboardComponent implements OnInit, OnDestroy {

  items$: BehaviorSubject<ListItem[]> = new BehaviorSubject<ListItem[]>(null);
  private unsubscribe$ = new Subject();

  constructor(private listService: ListService) {
  }

  ngOnInit(): void {

    this.listService.getUserItems()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(this.items$);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
