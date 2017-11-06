import {Component, ViewChild} from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import {ActuListPage} from '../actus-list/actus-list';
import {InformationPage} from '../information/information';
import {ContactListPage} from '../contact-list/contact-list';


@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl: NavController) {
    }

    openInformation(){
        this.navCtrl.push(InformationPage)
    }

    openActuList(){
        this.navCtrl.push(ActuListPage)
    }

    openContactList(){
        this.navCtrl.push(ContactListPage)
    }

    ngAfterViewInit() {
      this.slides.pager = true;
    }

    openShowList() {
        this.navCtrl.push(ActuListPage);
    }
}