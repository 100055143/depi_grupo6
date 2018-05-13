import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { TodoService } from '../../services/todo.service';
import { RegisterService } from '../../services/register.service';
import { AdminPage } from '../../pages/admin/admin';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userName : string = null;
  public userUnidad : any = null;

  constructor(public navCtrl: NavController, 
              public auth : AuthProvider,
              private RegisterService: RegisterService,
              private TodoService: TodoService) {

  }

  onLogin()
  {
    this.navCtrl.push(LoginPage);
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

   }

}
