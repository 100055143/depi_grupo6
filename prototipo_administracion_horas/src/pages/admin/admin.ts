import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerunidadesPage } from '../verunidades/verunidades';
import { VerproyectosPage } from '../verproyectos/verproyectos';

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
    this.navCtrl.push(VerproyectosPage)
  }

}
