import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  public person: string;
  public text: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCntrl: ViewController ) {
  }

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text=this.navParams.get('text');
  }
  closeModal(remove=false){
    this.viewCntrl.dismiss(remove);
  }

}
