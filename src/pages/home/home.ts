import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import Emparr from '../home/arry';
import {Details} from '../home/class';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  show(Name)
  {
      let data = new Details(Name);
    Emparr.push(data);
    this.navCtrl.push(InfoPage);
    
  }

}
