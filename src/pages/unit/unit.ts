import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; //AngularFireList
import { unit } from '../../model/units.model';
import { UnitService } from '../../services/unit.service';
import { ListPage } from '../list/list';
import { ProjectService } from '../../services/project.service';
import { projects } from '../../model/projects.model';

@IonicPage()
@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html',
})
export class UnitPage 
{
  unit: unit;
  projects$: Observable<projects[]>;
  //nameProj: string = null;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private UnitService: UnitService,
              private ProjectService: ProjectService) 
  {
    this.unit = this.navParams.data;
    //this.nameProj = this.unit.name;
  }


  ionViewWillEnter()
  {   
      this.projects$ = this.ProjectService
      .getAllProjects()
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
    console.log('ionViewDidLoad UnitPage');
  }

  OnRemoveUnit(value: unit)
  {
    this.UnitService.removeUnit(value);
    this.navCtrl.pop();
  }

  OnUpdateUnit(value: unit)
  {
      this.UnitService.updateUnit(value);
      this.navCtrl.push(ListPage);
  }
}