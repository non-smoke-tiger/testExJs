import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var testFunc;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad(){
    alert(testFunc.call('test'));
  }

}
