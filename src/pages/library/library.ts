import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';  
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';
import { QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
   quotesPage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quotesPage=QuotesPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  quoteCollection:{category:string,quotes:Quote[],icon:string}[];

  ngOnInit(){
    this.quoteCollection=quotes;
  }

  

}
