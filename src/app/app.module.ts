import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Gmap } from '../components/gmap/gmap';

import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Gmap
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Gmap
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
