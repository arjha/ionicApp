import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs>
    <ion-tab [root]="favoritesPage" tabTitle="Favorite" tabIcon="star"></ion-tab>
    <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
  </ion-tabs>
  `,
})
export class TabsPage {
  public favoritesPage=FavoritesPage;
  public libraryPage=LibraryPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
