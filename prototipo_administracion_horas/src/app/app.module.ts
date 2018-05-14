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
import { AdminPage } from '../pages/admin/admin';
import { AddUnitPage } from '../pages/add-unit/add-unit'
import { AddProjectPage } from '../pages/add-project/add-project'
import { VerRegistroPage } from '../pages/ver-registro/ver-registro';
import { VerHorasExtraPage } from '../pages/ver-horas-extra/ver-horas-extra';
import { VerunidadesPage } from '../pages/verunidades/verunidades';
import { VerproyectosPage } from '../pages/verproyectos/verproyectos';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { EditunitPage } from '../pages/editunit/editunit';
import { EditprojectPage } from '../pages/editproject/editproject';
import { RelunidadempleadoPage } from '../pages/relunidadempleado/relunidadempleado';
import { VerempleadoPage } from '../pages/verempleado/verempleado';
import { AltaempleadoPage } from '../pages/altaempleado/altaempleado';
import { EditempleadoPage } from '../pages/editempleado/editempleado';
import { RelunitprojectPage } from '../pages/relunitproject/relunitproject';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { UnitService } from '../services/unit.service';
import { ProjectService } from '../services/project.service';
import { RelUnitEmplService } from '../services/relunitempl.service';
import { UserService } from '../services/user.service';

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
    AdminPage,
    AddUnitPage,
    AddProjectPage,
    VerRegistroPage,
    VerHorasExtraPage,
    VerunidadesPage,
    VerproyectosPage,
    DashboardPage,
    EditunitPage,
    EditprojectPage,
    RelunidadempleadoPage,
    VerempleadoPage,
    AltaempleadoPage,
    EditempleadoPage,
    RelunitprojectPage
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
    VerRegistroPage,
    VerHorasExtraPage,
    AdminPage,
    VerunidadesPage,
    VerproyectosPage,
    DashboardPage,
    EditunitPage,
    EditprojectPage,
    RelunidadempleadoPage,
    VerempleadoPage,
    AltaempleadoPage,
    EditempleadoPage,
    RelunitprojectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UnitService,
    ProjectService,
    TodoService,
    RegisterService,
    RelUnitEmplService,
    UserService
  ]
})
export class AppModule {}
