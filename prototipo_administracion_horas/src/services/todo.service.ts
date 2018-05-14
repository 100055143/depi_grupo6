import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Tarea } from "../model/todo.model";

@Injectable()
export class TodoService{

    public mail : string;
    public tabla : string;

    private tareasRef;
    private horasRef;

    constructor(private db:AngularFireDatabase){

    }

    recibirmail(value: string){
        this.mail=value;
        var split= this.mail.split('@',2);
        this.tabla= split[0];
       //console.log(this.tabla);
       this.tareasRef=this.db.list<Tarea>(this.tabla +'/Horas Extra')
    }
    addTarea(value: Tarea){
    
        return this.horasRef.push(value);
    }

    updateTarea(value: Tarea){

        return this.horasRef.update(value.key,value);
    }

    removeTarea(value: Tarea){
        
        return this.horasRef.remove(value.key);
    }

    getTarea(){
        
        return this.tareasRef;
    }

    getHoras(value: string)
    {
        return this.horasRef=this.db.list<Tarea>('Usuarios/' + value + '/Horas Extra');
    }
}