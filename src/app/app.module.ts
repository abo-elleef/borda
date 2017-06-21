import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

 import { ChapterDetailsModule } from '../pages/chapter-details/chapter-details.module';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMob } from '@ionic-native/admob';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    ChapterDetailsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMob,
    DeviceOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
