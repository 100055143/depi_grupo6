import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AssignHoursPage } from '../assign-hours/assign-hours';
import { UnitPage } from '../unit/unit';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth';
import { UnitService } from '../../services/unit.service';
import { ProjectService } from '../../services/project.service';
import { unit } from '../../model/units.model';
import { projects } from '../../model/projects.model';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage 
{
  selectedItem: any;
  units$: Observable<unit[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              afDatabase: AngularFireDatabase,
              public auth : AuthProvider,
              private UnitService: UnitService) 
  {
    this.selectedItem = navParams.get('unit');
  }

  ionViewWillEnter()
  {
      this.units$ = this.UnitService
      .getAllUnits()
      .snapshotChanges()
      .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       }); 
    
  }


  itemTapped($event, unit) 
  {
    this.navCtrl.push(UnitPage, unit);
  }


  onAssignHours()
  {
    this.navCtrl.push(AssignHoursPage);
  }
}