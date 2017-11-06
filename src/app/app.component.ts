import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {ContactListPage} from '../pages/contact-list/contact-list';
import {ActuListPage} from '../pages/actus-list/actus-list';
import {ActuCreatePage} from '../pages/actus-create/actus-create';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';
import {InformationPage} from '../pages/information/information';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = WelcomePage;

    appMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.appMenuItems = [
            {title: 'Accueil', component: WelcomePage, icon: 'bookmark'},
            {title: 'En savoir plus sur le master', component: InformationPage, icon: 'bulb'},
            {title: 'Actualités', component: ActuListPage, icon: 'flame'},
            {title: 'Annuaire', component: ContactListPage, icon: 'contacts'},
            {title: 'Actualités enregistrées', component: FavoriteListPage, icon: 'star'}
        ];

        this.helpMenuItems = [
            {title: 'Publier une actualité', component: ActuCreatePage, icon: 'create'},
            {title: 'A propos', component: AboutPage, icon: 'information-circle'},
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
