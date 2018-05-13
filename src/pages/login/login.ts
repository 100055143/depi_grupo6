import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ListPage } from '../list/list';
import { UserModel } from '../../model/user.model';
import { UserService } from '../../services/user.service';
import { Observable } from '@firebase/util/dist/esm/src/subscribe';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
@IonicPage()
export class LoginPage {

    public mail : string;
    public tabla : string;

    user= { email : '', password : ''};

    usu: UserModel;

    private users;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              public auth : AuthProvider,
              private UserService: UserService) 
  {
      this.users = this.UserService.getAllUsers()
      .snapshotChanges()
      .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  OnLogin()
  {
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => 
    {   
        
    }
    )
     .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }
    /*
    signin()
    {
    this.auth.registerUser(this.user.email,this.user.password).then((user) => 
    {
        this.UserService.recibirmail(this.user.email);

        this.mail=this.user.email;
        var split= this.mail.split('@',2);
        this.tabla= split[0];

        this.UserService.addUser(this.usu);
        
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })

    }*/

}