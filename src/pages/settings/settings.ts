import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private quoteService: QuotesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  alterBg(toggle: Toggle) {
    this.quoteService.alterBackgroung(toggle.checked);
  }
  checkAlterBg() {
    return this.quoteService.checkBgStatus();
  }
}
