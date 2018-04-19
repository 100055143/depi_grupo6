import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { time } from "../model/time.model";

@Injectable()
export class TimeService{

    private timeRef = this.db.list<time>('time');

    constructor(private db:AngularFireDatabase){

    }

    addTime(value: time){
    
        return this.timeRef.push(value);
    }

    updateTime(value: time){

        return this.timeRef.update(value.key,value);
    }

    removeTime(value: time){
        
        return this.timeRef.remove(value.key);
    }

    getAllTime()
    {
        return this.timeRef;
    }
}