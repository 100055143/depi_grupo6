import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectService } from '../../services/project.service';
import { projects } from '../../model/projects.model';
import { unit } from '../../model/units.model';
import { UnitService } from '../../services/unit.service';
import { Observable } from 'rxjs/Observable';
import { ListPage } from '../list/list';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html',
})
export class AddProjectPage 
{

  projects$: Observable<projects[]>;
  units$: Observable<unit[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              afDatabase: AngularFireDatabase,
              private ProjectService: ProjectService,
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
    console.log('ionViewDidLoad AddProjectPage');
  }


  OnAddProject(value: projects)
  {
    this.ProjectService.addProject(value).then(ref => { console.log(ref.key); });
    this.navCtrl.push(ListPage);
  }
}
