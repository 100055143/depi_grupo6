import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth';
import { UnitService } from '../../services/unit.service';
import { ProjectService } from '../../services/project.service';
import { unit } from '../../model/units.model';
import { projects } from '../../model/projects.model';


@IonicPage()
@Component({
  selector: 'page-assign-hours',
  templateUrl: 'assign-hours.html',
})
export class AssignHoursPage 
{
 units$: Observable<unit[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              afDatabase: AngularFireDatabase,
              private UnitService: UnitService) 
  {
    
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

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad AssignHoursPage');
  }

  //Add Time
  OnAdd(value: unit)
  {
    this.UnitService.addUnit(value).then(ref => { console.log(ref.key); });
    this.navCtrl.pop();

    //this.navCtrl.push(ListPage);
  }


}