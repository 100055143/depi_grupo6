import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; //AngularFireList
import { projects } from "../model/projects.model";
import { unit } from '../model/units.model';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import { map } from 'rxjs/operators';



@Injectable()
export class ProjectService{

    private projectRef = this.db.list<projects>('projects');


    //public projects: Observable<projects[]>;

    //public filteredProjects: FirebaseListObservable<projects[]>;

    filteredProjects$: Observable<projects[]>;


    constructor(private db:AngularFireDatabase,
                public alertCtrl: AlertController)
    {
    }

    addProject(value: projects, valueUnit: unit)
    {
        return this.projectRef.push(value);
    }

    updateProject(value: projects)
    {
        return this.projectRef.update(value.key,value);
    }

    removeProject(value: projects)
    {        
        return this.projectRef.remove(value.key);
    }

    getAllProjects()
    {
        return this.projectRef;
    }

    /*
    getFilterProjects(name: String) 
    {
        return this.filteredProjects$ = this.ProjectService
      .getAllProjects()
      .snapshotChanges()
      .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });
    }*/



    
    /*
        return this.filteredProjects = this.db.list<projects>('projects').subscribe(projects => 
        {
            this.projects.units = 'Unidad 1';
        });
    */


}