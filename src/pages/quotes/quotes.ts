import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  public cat: any;
  public qG: { category: string, quotes: Quote[], icon: string };
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCntrl: AlertController,
  private quoteService:QuotesService
  ) { }

  ngOnInit() {
    this.qG = this.navParams.data;
    this.cat = this.qG.category;
  }

  addFav(selectedQuote: Quote) {
    const alert = this.alertCntrl.create({
      title: "Add Quote",
      subTitle: "Are you sure?",
      message: "Are you sure to add a new quote?",
      enableBackdropDismiss:false,
      buttons: [{
        text: "Sure",
        handler: () => {
          this.quoteService.addQuotesToFavorite(selectedQuote);
        }
      },
      {
        text: "Nope",
        role:"cancel",
        handler: () => {
          console.log('no')
        }
      }]
    });
    alert.present();
  }

  removeFav(qt:Quote){
   return this.quoteService.removeQuotesFromFavorite(qt);
  }

  isFav(qt:Quote){
    return this.quoteService.isFav(qt);
  }

}
