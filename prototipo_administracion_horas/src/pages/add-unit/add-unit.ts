import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { unit } from '../../model/units.model';
import { UnitService } from '../../services/unit.service';
import { ListPage } from '../list/list';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-add-unit',
  templateUrl: 'add-unit.html',
})
export class AddUnitPage {

    units$: Observable<unit[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              afDatabase: AngularFireDatabase,
              private UnitService: UnitService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUnitPage');
  }

  OnAddUnit(value: unit)
  {
    this.UnitService.addUnit(value).then(ref => { console.log(ref.key); });
    this.navCtrl.pop();
  }

}
