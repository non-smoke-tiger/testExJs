import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var testFunc;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  exjsText:any;

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad(){
    this.exjsText = testFunc.text;
  }

  testCall() {
    this.exjsText = testFunc.call(this.exjsText);
  }

}
