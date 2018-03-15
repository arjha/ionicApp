import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  public quotes: Quote[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private quotesService: QuotesService,
    private modalCntrl: ModalController,
    private servive:QuotesService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }
  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuote();
  }
  viewQuote(quote: Quote) {
    const modal = this.modalCntrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.delQuote(quote);
      }
    });
  }

  delQuote(quote:Quote){
    this.quotesService.removeQuotesFromFavorite(quote);
    //this.quotes=this.quotesService.getFavoriteQuote();
    const pos=this.quotes.findIndex((quoteEl:Quote)=>{
      return quoteEl.id===quote.id;
    });
    this.quotes.splice(pos,1);
  }
  changeBg(){
    return this.servive.checkBgStatus()?'alterBg':'quoteBg';
  }
  altBg(){
    return this.servive.checkBgStatus();
  }

}
