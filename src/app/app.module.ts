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
import { AddUnitPage } from '../pages/add-unit/add-unit'
import { AddProjectPage } from '../pages/add-project/add-project'
import { UnitPage } from '../pages/unit/unit';
import { VerRegistroPage } from '../pages/ver-registro/ver-registro';
import { VerHorasExtraPage } from '../pages/ver-horas-extra/ver-horas-extra';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { UnitService } from '../services/unit.service';
import { ProjectService } from '../services/project.service';

import { TodoService } from '../services/todo.service';
import { RegisterService } from '../services/register.service';


export const firebaseConfig = {
    apiKey: "AIzaSyDIoXySgQ5zNAxF26KPZAtNwasnQSknRVo",
    authDomain: "asignacion-de-horas.firebaseapp.com",
    databaseURL: "https://asignacion-de-horas.firebaseio.com",
    projectId: "asignacion-de-horas",
    storageBucket: "asignacion-de-horas.appspot.com",
    messagingSenderId: "1007331298205"

};

/*
    apiKey: "AIzaSyDV2yqDjHVnlVZHc1CFE4uYTFPAJ-d0cxc",
    authDomain: "depigrupo6.firebaseapp.com",
    databaseURL: "https://depigrupo6.firebaseio.com",
    projectId: "depigrupo6",
    storageBucket: "depigrupo6.appspot.com",
    messagingSenderId: "997836190563"

*/


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    AddUnitPage,
    AddProjectPage,
    UnitPage,
    VerRegistroPage,
    VerHorasExtraPage
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
    AddUnitPage,
    AddProjectPage,
    UnitPage,
    VerRegistroPage,
    VerHorasExtraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UnitService,
    ProjectService,
    TodoService,
    RegisterService
  ]
})
export class AppModule {}
