import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddUnitPage } from '../add-unit/add-unit';
import { unit } from '../../model/units.model';
import { UnitService } from '../../services/unit.service';
import { Observable } from 'rxjs/Observable';
import { EditunitPage } from '../editunit/editunit';



@IonicPage()
@Component({
  selector: 'page-verunidades',
  templateUrl: 'verunidades.html',
})
export class VerunidadesPage {


  units$: Observable<unit[]>;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private UnitService: UnitService) 
  {
    
  }

  ionViewWillEnter()
  {
      this.units$ = this.UnitService
      .getAllUnits()
      .snapshotChanges()
      .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerunidadesPage');
  }

  onAddUnit()
  {
    this.navCtrl.push(AddUnitPage);
  }

  itemTapped($event, unit) 
  {
    this.navCtrl.push(EditunitPage, unit);
  }

}
