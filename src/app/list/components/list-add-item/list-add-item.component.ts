import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ListService} from '../../services/list.service';
import {ListApiService} from '../../services/list-api.service';
import {switchMap, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-list-add-item',
  templateUrl: './list-add-item.component.html',
  styleUrls: ['./list-add-item.component.scss']
})
export class ListAddItemComponent implements OnInit {
  itemForm: FormGroup;

  constructor(private listService: ListService, private listApiService: ListApiService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.itemForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      creatorId: new FormControl('')
    });
  }

  onSubmit(): void {
    this.listService.getUserIdAndNewItemId().pipe(
      take(1),
      tap(data => {
          this.itemForm.patchValue({
            id: data.nextItemId,
            creatorId: data.userId
          });
          this.listService.addNewItem(this.itemForm.value);
          this.itemForm.reset();
        }
      )).subscribe();
  }
}
