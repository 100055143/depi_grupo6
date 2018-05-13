import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { unit } from '../../model/units.model';
import { UnitService } from '../../services/unit.service';


@IonicPage()
@Component({
  selector: 'page-editunit',
  templateUrl: 'editunit.html',
})
export class EditunitPage {

    units: unit;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                private UnitService: UnitService) 
    {
        this.units = this.navParams.data;
    console.log(this.units.key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditunitPage');
  }

    onUpdate(value: unit)
    {
        this.UnitService.updateUnit(value);
        this.navCtrl.pop();
    }

    onRemove(value: unit)
    {
        this.UnitService.removeUnit(value);
        this.navCtrl.pop();
    }
}
