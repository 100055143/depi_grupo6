import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ListPage } from '../list/list';
import { UnitService } from '../../services/unit.service';
import { UserModel } from '../../model/user.model';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { unit } from '../../model/units.model';


@IonicPage()
@Component({
  selector: 'page-altaempleado',
  templateUrl: 'altaempleado.html',
})
    export class AltaempleadoPage {

    public mail : string;
    public tabla : string;

    user= { email : '', password : ''};
    private users;

    units$: Observable<unit[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              public auth : AuthProvider,
              private UserService: UserService,
              private UnitService: UnitService) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AltaempleadoPage');
  }


  ionViewWillEnter()
  {
      this.units$ = this.UnitService
      .getAllUnits()
      .snapshotChanges()
      .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });
  }

    onAddUser(value: UserModel)
    {
        this.UserService.recibirmail(value.email);
        this.UserService.addUser(value);
        this.signin();
        this.navCtrl.pop();
    }

    signin()
    {
        this.auth.registerUser(this.user.email, this.user.password).then((user) =>
        {
            
        })
        .catch(err=>{
        let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: err.message,
            buttons: ['Aceptar']
        });
        //alert.present();
        })

    }





}
