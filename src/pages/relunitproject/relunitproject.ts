import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectService } from '../../services/project.service';
import { projects } from '../../model/projects.model';
import { unit } from '../../model/units.model';
import { UnitService } from '../../services/unit.service';
import { Observable } from 'rxjs/Observable';
import { ListPage } from '../list/list';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { RelUnitEmplService } from '../../services/relunitempl.service';
import { RelUnitProj } from '../../model/relunitproj.model';


@IonicPage()
@Component({
  selector: 'page-relunitproject',
  templateUrl: 'relunitproject.html',
})
export class RelunitprojectPage {

  projects$: Observable<projects[]>;
  units$: Observable<unit[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              afDatabase: AngularFireDatabase,
              private ProjectService: ProjectService,
              private UnitService: UnitService,
              private RelUnitEmplService: RelUnitEmplService) 
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
    
    
    this.projects$= this.ProjectService
      .getAllProjects()
      .snapshotChanges()
      .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelunitprojectPage');
  }
  
    OnAddProject(value: RelUnitProj)
  {
    this.RelUnitEmplService.addRelUnitProj(value).then(ref => { console.log(ref.key); });
    this.navCtrl.pop();
  }

}
