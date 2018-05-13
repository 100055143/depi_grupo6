import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserModel } from '../../model/user.model';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { AltaempleadoPage } from '../altaempleado/altaempleado';
import { EditempleadoPage } from '../editempleado/editempleado';


@IonicPage()
@Component({
  selector: 'page-verempleado',
  templateUrl: 'verempleado.html',
})
export class VerempleadoPage {

  users$: Observable<any[]>;

  user: UserModel;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              public auth : AuthProvider,
              private UserService: UserService) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerempleadoPage');
  }

  ionViewWillEnter()
  {
      this.users$ = this.UserService
      .getAllUsers()
      .snapshotChanges()
      .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });
  }


    onAddUser()
    {
       this.navCtrl.push(AltaempleadoPage);
    }

  itemTapped($event, value: KeyType)
  {
      this.user=this.UserService.getUserData(value.toString()).snapshotChanges()
      .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });

      this.navCtrl.push(EditempleadoPage, value);
  }

}
