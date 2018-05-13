import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { UserModel } from "../model/user.model";

@Injectable()
export class UserService
{
    public mail : string;
    public tabla : string;
    private usersSystemRef = this.db.list('Usuarios/');

    private usersRef;

    constructor(private db:AngularFireDatabase)
    {

    }

    recibirmail(value: string)
    {
        this.mail=value;
        var split= this.mail.split('@',2);
        this.tabla= split[0];
        this.usersRef=this.db.list<UserModel>('Usuarios/' + this.tabla + '/DatosUsuario');
    }

    getUserData(value: string)
    {
        this.usersRef=this.db.object<UserModel>('Usuarios/' + value + '/DatosUsuario');
        return this.usersRef;
    }

    addUser(value: UserModel)
    {   
        return this.usersRef.push(value);
    }

    getAllUsers()
    {
        return this.usersSystemRef;
    }
}