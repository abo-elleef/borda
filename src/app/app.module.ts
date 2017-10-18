import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChapterDetailsModule } from '../pages/chapter-details/chapter-details.module';
import { SettingsModule } from '../pages/settings/settings.module';
import {AboutModalPageModule} from '../pages/about-modal-page/about-modal-page.module'
import { HomePage } from '../pages/home/home';
import {AboutModalPage} from '../pages/about-modal-page/about-modal-page'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMob } from '@ionic-native/admob';
import { Network } from '@ionic-native/network';
import {Intro} from "../pages/intro/intro";
import {IntroModule} from "../pages/intro/intro.module";
import { NativeStorage } from '@ionic-native/native-storage';
// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    ChapterDetailsModule,
    SettingsModule,
    IntroModule,
    AboutModalPageModule,
    IonicModule.forRoot(MyApp,{
      backButtonIcon: 'ios-arrow-forward'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Intro,
    HomePage,
    AboutModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMob,
    // NativePageTransitions,
    Network,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
