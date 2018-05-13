import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerunidadesPage } from '../verunidades/verunidades';
import { VerproyectosPage } from '../verproyectos/verproyectos';
import { RelunidadempleadoPage } from '../relunidadempleado/relunidadempleado';
import { AddProjectPage } from '../add-project/add-project';
import { RelunitprojectPage } from '../relunitproject/relunitproject';


@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  onViewUnits()
  {
    this.navCtrl.push(VerunidadesPage);
  }

  onViewProjects()
  {
    this.navCtrl.push(VerproyectosPage);
  }

  onViewRelUnitEmployee()
  {
    this.navCtrl.push(RelunidadempleadoPage);
  }

  onViewRelUnitProject()
  {
    this.navCtrl.push(RelunitprojectPage);
  }

}
