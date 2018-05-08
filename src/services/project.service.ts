import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { projects } from "../model/projects.model";
import { unit } from '../model/units.model';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import { map } from 'rxjs/operators';



@Injectable()
export class ProjectService{

    private projectRef = this.db.list<projects>('projects');

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

}