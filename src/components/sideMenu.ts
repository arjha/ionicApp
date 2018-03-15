import { Component } from "@angular/core";

@Component({
    selector:'app-sideMenu',
    template:`
    <ion-buttons start>
      <button ion-button menuToggle>
        <ion-icon name="menu"></ion-icon>
      </button>
    </ion-buttons>
    `
})
export class SideMenuPageComponent{

}