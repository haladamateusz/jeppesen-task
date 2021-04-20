import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddItemComponent } from './list-add-item.component';

describe('ListAddItemComponent', () => {
  let component: ListAddItemComponent;
  let fixture: ComponentFixture<ListAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
