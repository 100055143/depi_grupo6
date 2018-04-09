import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { AssignHoursPage } from '../pages/assign-hours/assign-hours';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';


export const firebaseConfig = {
    apiKey: "AIzaSyDV2yqDjHVnlVZHc1CFE4uYTFPAJ-d0cxc",
    authDomain: "depigrupo6.firebaseapp.com",
    databaseURL: "https://depigrupo6.firebaseio.com",
    projectId: "depigrupo6",
    storageBucket: "depigrupo6.appspot.com",
    messagingSenderId: "997836190563"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    AssignHoursPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    AssignHoursPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
