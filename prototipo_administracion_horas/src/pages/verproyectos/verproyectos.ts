import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { projects } from '../../model/projects.model';
import { AddProjectPage } from '../add-project/add-project';
import { ProjectService } from '../../services/project.service';
import { Observable } from 'rxjs/Observable';
import { EditprojectPage } from '../editproject/editproject';


@IonicPage()
@Component({
  selector: 'page-verproyectos',
  templateUrl: 'verproyectos.html',
})
export class VerproyectosPage {

  projects$: Observable<projects[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private ProjectService: ProjectService) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerproyectosPage');
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

  onAddProject()
  {
    this.navCtrl.push(AddProjectPage);
  }

  itemTapped($event, projects) 
  {
    this.navCtrl.push(EditprojectPage, projects);
  }
}
