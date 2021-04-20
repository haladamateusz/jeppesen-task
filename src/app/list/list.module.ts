import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './store/list.effects';
import { ListDashboardComponent } from './components/list-dashboard/list-dashboard.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [ListDashboardComponent, ListItemComponent],
  exports: [ListDashboardComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ListEffects])
  ]
})
export class ListModule { }
