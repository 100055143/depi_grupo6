import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { AssignHoursPage } from '../pages/assign-hours/assign-hours';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  public userName : string = null;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private auth: AuthProvider) 
  {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      //{ title: 'Login', component: LoginPage },
      { title: 'Time', component: ListPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => 
    {

      this.auth.Session.subscribe(session=>{
        if(session)
          {
            this.rootPage = ListPage;

            this.userName = session.email;

          }
          else
          {
            this.rootPage = LoginPage;
          }
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) 
  {
    this.nav.setRoot(page.component);
  }

  CloseSession()
  {
      this.auth.logout();
  }
 
}
