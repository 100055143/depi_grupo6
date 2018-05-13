import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserModel } from '../../model/user.model';
import { UserService } from '../../services/user.service';

@IonicPage()
@Component({
  selector: 'page-editempleado',
  templateUrl: 'editempleado.html',
})
export class EditempleadoPage {

    user: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private UserService: UserService) 
    {
        //this.user = this.navParams.data;
        this.user=this.UserService.getUserData(this.navParams.data);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditempleadoPage');
  }

    onUpdate(value: UserModel)
    {
        //this.UserService.(value);
        this.navCtrl.pop();
    }

    onRemove(value: UserModel)
    {
        //this.UserService.removeUnit(value);
        this.navCtrl.pop();
    }

}
