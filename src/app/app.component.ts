import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMob } from '@ionic-native/admob';
import {Intro} from "../pages/intro/intro";
interface AdMobType {
  banner: string,
  interstitial: string,
  reward_video: string
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  rootPage:any = Intro;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private admob: AdMob) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      var admobid: AdMobType;
      if (/(android)/i.test(navigator.userAgent)) {
        admobid = { // for Android
          banner: 'ca-app-pub-2772630944180636/3185523871',
          interstitial: 'ca-app-pub-2772630944180636/6218561984',
          reward_video: 'ca-app-pub-2772630944180636/9171351872'
        };
      } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = { // for iOS
          banner: 'ca-app-pub-234234234234324/234234234234',
          interstitial: 'ca-app-pub-2772630944180636/6218561984',
          reward_video: 'ca-app-pub-2772630944180636/9171351872'
        };
      } else {
        admobid = { // for Windows Phone
          banner: 'ca-app-pub-234234234234324/234234234234',
          interstitial: 'ca-app-pub-2772630944180636/6218561984',
          reward_video: 'ca-app-pub-2772630944180636/9171351872'
        };
      }

      this.admob.createBanner({
        adId: admobid.banner,
        // isTesting: true,//comment this out before publishing the app
        autoShow: true
      })
    });
  }
}
