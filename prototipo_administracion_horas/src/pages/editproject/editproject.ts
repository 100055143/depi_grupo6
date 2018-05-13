import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { projects } from '../../model/projects.model';
import { ProjectService } from '../../services/project.service';
import { unit } from '../../model/units.model';
import { UnitService } from '../../services/unit.service';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-editproject',
  templateUrl: 'editproject.html',
})
export class EditprojectPage {

    project: projects;
    units$: Observable<unit[]>;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                private ProjectService: ProjectService,
                private UnitService: UnitService) 
    {
        this.project = this.navParams.data;
    console.log(this.project.key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprojectPage');
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

    onUpdate(value: projects)
    {
        this.ProjectService.updateProject(value);
        this.navCtrl.pop();
    }

    onRemove(value: projects)
    {
        this.ProjectService.removeProject(value);
        this.navCtrl.pop();
    }
}
