import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tarea } from '../../model/todo.model';
import { TodoService } from '../../services/todo.service';
import { concat } from 'rxjs/operators/concat';


@IonicPage()
@Component({
  selector: 'page-ver-horas-extra',
  templateUrl: 'ver-horas-extra.html',
})
export class VerHorasExtraPage {

  tareap: Tarea;
  constructor(public navCtrl: NavController, public navParams: NavParams, private TodoService: TodoService) {
  
    this.tareap = this.navParams.data;
    console.log(this.tareap.key);
  }
  onUpdateTarea(value: Tarea){

    this.TodoService.updateTarea(value);
    this.navCtrl.pop();

  }

  onRemoveTarea(value: Tarea){

    this.TodoService.removeTarea(value);
    this.navCtrl.pop();

  }

    onChangeNoValid(value: Tarea)
    {
        value.valid = false;
    }

    onChangeValid(value: Tarea)
    {
        value.novalid = false;
    }
    
  }