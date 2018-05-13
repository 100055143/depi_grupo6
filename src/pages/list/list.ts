import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AssignHoursPage } from '../assign-hours/assign-hours';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth';
import { UnitService } from '../../services/unit.service';
import { ProjectService } from '../../services/project.service';
import { UserService } from '../../services/user.service';
import { unit } from '../../model/units.model';
import { projects } from '../../model/projects.model';
import { Registro } from '../../model/registro.model';
import { Tarea } from '../../model/todo.model';
import { TodoService } from '../../services/todo.service';
import { RegisterService } from '../../services/register.service';
import { UserModel } from '../../model/user.model';
import { VerRegistroPage } from '../../pages/ver-registro/ver-registro';
import { VerHorasExtraPage } from '../../pages/ver-horas-extra/ver-horas-extra';
import * as firebase from 'firebase/app';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage 
{
  selectedItem: any;
  units$: Observable<unit[]>;

  tareas$: Observable<Tarea[]>;
  users$: Observable<any[]>;
  horasIngresadas$: Observable<Registro[]>;

  public userName : string = null;
  public userUnidad : any = null;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              afDatabase: AngularFireDatabase,
              public auth : AuthProvider,
              private UnitService: UnitService,
              private RegisterService: RegisterService,
              private TodoService: TodoService,
              private db: AngularFireDatabase,
              private UserService: UserService) 
  {
  }

  ionViewWillEnter()
  {

      this.auth.Session.subscribe(session=>{
      if(session){
          this.userName = session.email;
          this.RegisterService.recibirmail(this.userName);
          this.TodoService.recibirmail(this.userName);   
                }    
        }
      );

      this.units$ = this.UnitService
      .getAllUnits()
      .snapshotChanges()
      .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });

      this.users$ = this.UserService
      .getAllUsers()
      .snapshotChanges()
      .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });

      this.horasIngresadas$ = this.RegisterService
      .getHoras('jose')
      .snapshotChanges()
      .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });

      this.tareas$ = this.TodoService
      .getHoras('jose')
      .snapshotChanges()
      .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });

  }


  itemTapped($event, Registro) 
  {
    this.navCtrl.push(VerRegistroPage, Registro);
  }

  itemExtraTapped($event, Tarea)
  {
    this.navCtrl.push(VerHorasExtraPage, Tarea);
  }

}