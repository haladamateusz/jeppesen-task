import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './store/list.effects';
import { ListDashboardComponent } from './components/list-dashboard/list-dashboard.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListAddItemComponent } from './components/list-add-item/list-add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListDashboardComponent, ListItemComponent, ListAddItemComponent],
  exports: [ListDashboardComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ListEffects]),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListModule { }
