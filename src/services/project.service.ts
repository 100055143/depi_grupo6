import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { projects } from "../model/projects.model";

@Injectable()
export class ProjectService{

    private projectRef = this.db.list<projects>('projects');

    constructor(private db:AngularFireDatabase){

    }

    addProject(value: projects)
    {
        return this.projectRef.push(value);
    }

    updateProject(value: projects){

        return this.projectRef.update(value.key,value);
    }

    removeProject(value: projects){
        
        return this.projectRef.remove(value.key);
    }

    getAllProjects()
    {
        return this.projectRef;
    }
}