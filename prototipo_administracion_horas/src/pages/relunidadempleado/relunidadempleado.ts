import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { unit } from '../../model/units.model';
import { UnitService } from '../../services/unit.service';
import { RelUnitEmplService } from '../../services/relunitempl.service';
import { Observable } from 'rxjs/Observable';
import { RelUnitEmpl } from '../../model/relunitempl.model'



@IonicPage()
@Component({
  selector: 'page-relunidadempleado',
  templateUrl: 'relunidadempleado.html',
})
    export class RelunidadempleadoPage 
{

    units$: Observable<unit[]>;
    empls$: Observable<any[]>;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private UnitService: UnitService,
                private RelUnitEmplService: RelUnitEmplService) 
    {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelunidadempleadoPage');
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

      this.empls$ = this.RelUnitEmplService
      .getEmpls()
      .snapshotChanges()
      .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });


  }



    onAddRelUnitEmpl(value: RelUnitEmpl)
    {
        this.RelUnitEmplService.addRelUnitEmployee(value);
        this.navCtrl.pop();
    }
}
