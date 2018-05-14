import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { RelUnitEmpl } from "../model/relunitempl.model";
import { Registro } from "../model/registro.model";
import { Observable } from "rxjs/Observable";
import { RelUnitProj } from "../model/relunitproject.model";


@Injectable()
export class RelUnitEmplService{

    public unidad : string;

    private relunitemplRef = this.db.list<RelUnitEmpl>('relunitempl/');
    private emplsRef = this.db.list('Usuarios/');

    private relunitprojRef = this.db.list<RelUnitProj>('relunitproj/');
   
    constructor(private db:AngularFireDatabase )
    {

    }

    addRelUnitProj(value: RelUnitProj)
    {
        return this.relunitprojRef.push(value); 
    }
      
    addRelUnitEmployee(value: RelUnitEmpl){
    
        return this.relunitemplRef.push(value); 
    }

    updateRelUnitEmployee(value: RelUnitEmpl){

        return this.relunitemplRef.update(value.key,value);
    }

    removeRelUnitEmployee(value: RelUnitEmpl){
        
        return this.relunitemplRef.remove(value.key);
    }

    getRelUnitEmployees(){

        return this.relunitemplRef;
    }

    getEmpls()
    {
        return this.emplsRef;
    }


}