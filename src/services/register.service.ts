import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Registro } from "../model/registro.model";
import { Observable } from "rxjs/Observable";


@Injectable()
export class RegisterService{

    public mail : string;
    public tabla : string;
    public unidad : string;

    private contactsRef;

    private horasRef;
   
    constructor(private db:AngularFireDatabase ){

    }
    recibirunidad(value: string){
        this.unidad=value;
        console.log(this.unidad);
    }

    recibirmail(value: string){
        this.mail=value;
        var split= this.mail.split('@',2);
        this.tabla= split[0];
        this.contactsRef=this.db.list<Registro>('Usuarios/');
    
    }
      
    addContact(value: Registro){
    
        return this.horasRef.push(value); 
    }

    updateContact(value: Registro){

        return this.horasRef.update(value.key,value);
    }

    removeContact(value: Registro){

        return this.horasRef.remove(value.key);
    }

    getContacts(){

        return this.contactsRef;
    }

    getHoras(value: string)
    {
        return this.horasRef=this.db.list<Registro>('Usuarios/' + value + '/HorasIngresadas');
    }


}