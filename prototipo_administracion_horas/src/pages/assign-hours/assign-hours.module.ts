import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignHoursPage } from './assign-hours';

@NgModule({
  declarations: [
    AssignHoursPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignHoursPage),
  ],
})
export class AssignHoursPageModule {}
