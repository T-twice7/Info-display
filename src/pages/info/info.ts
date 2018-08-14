import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Emparr from '../home/arry';
import {Details} from '../home/class';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  from= Emparr;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.from = this.navParams.get("text");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
