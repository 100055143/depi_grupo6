import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { unit } from "../model/units.model";

@Injectable()
export class UnitService
{

    private unitsRef = this.db.list<unit>('Units');

    constructor(private db:AngularFireDatabase)
    {

    }

    addUnit(value: unit){
    
        return this.unitsRef.push(value);
    }

    updateUnit(value: unit){

        return this.unitsRef.update(value.key,value);
    }

    removeUnit(value: unit)
    {        
        return this.unitsRef.remove(value.key);
    }

    getAllUnits()
    {
        return this.unitsRef;
    }
}