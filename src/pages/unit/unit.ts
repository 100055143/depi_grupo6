import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { unit } from '../../model/units.model';
import { UnitService } from '../../services/unit.service';
import { ListPage } from '../list/list';

@IonicPage()
@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html',
})
export class UnitPage 
{
  unit: unit;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private UnitService: UnitService) 
  {
    this.unit = this.navParams.data;
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad UnitPage');
  }

  OnRemoveUnit(value: unit)
  {
    this.UnitService.removeUnit(value);
    this.navCtrl.pop();
  }

  OnUpdateUnit(value: unit)
  {
      this.UnitService.updateUnit(value);
      this.navCtrl.push(ListPage);
  }
}