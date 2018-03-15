import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage: any = TabsPage;
  settingsPage: any = SettingsPage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
     private menuCntrl:MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  load(page: any) {
    this.nav.setRoot(page);
    this.menuCntrl.close();
  }
}

