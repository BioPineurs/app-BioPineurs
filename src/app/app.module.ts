import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {ActuListPage} from '../pages/actus-list/actus-list';
import {ActuDetailPage} from '../pages/actu-detail/actu-detail';
import {ActuCreatePage} from '../pages/actus-create/actus-create';
import {ContactListPage} from '../pages/contact-list/contact-list';
import {ContactDetailPage} from '../pages/contact-detail/contact-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';
import {InformationPage} from '../pages/information/information';

import {ActuService} from "../providers/actu-service-rest";
import {ContactService} from "../providers/contact-service-rest";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Autosize } from '../directives/autosize/autosize';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    ActuListPage,
    ActuDetailPage,
    ActuCreatePage,
    ContactListPage,
    ContactDetailPage,
    FavoriteListPage,
    InformationPage,
    Autosize
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    ActuListPage,
    ActuDetailPage,
    ActuCreatePage,
    ContactListPage,
    ContactDetailPage,
    FavoriteListPage,
    InformationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ActuService,
    ContactService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
