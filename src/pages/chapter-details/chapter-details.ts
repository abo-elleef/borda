import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import {Settings} from "../settings/settings";
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from '@ionic-native/clipboard';
import {Bordas} from '../../services/borda';
import { Toast } from '@ionic-native/toast';
import { AdMob } from '@ionic-native/admob';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

interface AdMobType {
  banner: string,
  interstitial: string,
  reward_video: string
}



/**
 * Generated class for the ChapterDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chapter-details',
  templateUrl: 'chapter-details.html',
  providers:[SocialSharing, Clipboard, Toast]
})
export class ChapterDetails {
  chapter: any;
  nextChapter: any;
  previousChapter: any;
  intro: any;
  prefixer: number;
  // fontSizeClass: string = 'font-16';
  // fontSizeClassTitle = 'font-18';
  // fontFaceClass: string = 'amiri';
  network_exist: Boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private network: Network,
    private _sharer: SocialSharing,
    private _clipboard: Clipboard,
    private _toast: Toast,
    private admob: AdMob,
    private dom: DomSanitizer,
) {
    var chapterNumber = +navParams.data.index;
    this.previousChapter = Bordas[navParams.data.bordaIndex].chapters[chapterNumber- 1];
    console.log(chapterNumber -1);
    this.chapter = Bordas[navParams.data.bordaIndex].chapters[chapterNumber];
    this.nextChapter = Bordas[navParams.data.bordaIndex].chapters[chapterNumber + 1];
    console.log(chapterNumber +1);
    this.chapter.track_url = this.dom.bypassSecurityTrustResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + this.chapter.track_id + "&amp;auto_play=true&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=true")
    this.prefixer = 0;
    console.log(typeof navParams.data.index);
    console.log(JSON.stringify(chapterNumber));
    for (var i = 0; i < chapterNumber ; i++) {
      console.log(Bordas[navParams.data.bordaIndex].chapters[i]);
      this.prefixer += Bordas[navParams.data.bordaIndex].chapters[i].lines.length;
    }
    this.intro = [
      {id: 1, right: 'مولاي صلي وسلم دائما ابدأ', left: 'علي حيبيك خير الخلق كلهم'},
      {id: 2, right: 'مولاي صلي وسلم دائما ابدأ', left: 'على النبي وأل البيت كلهم'}
    ];
  };
  ionViewWillEnter() {
    // this._nativeStorage.getItem('fontSize').then(data => {
    //   this.fontSizeClass = data ? 'font-' + data : this.fontSizeClass;
    //   this.fontSizeClassTitle = data ? 'font-' +(data + 2) : 'font-20';
    // });
    // this._nativeStorage.getItem('fontFace').then(data => {
    //   this.fontFaceClass = data ? data : this.fontFaceClass;
    // })
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
    this.admob.prepareInterstitial({
      adId: admobid.interstitial,
      // isTesting: true,//comment this out before publishing the app
      autoShow: false
    });
  }
  ionViewDidLoad(){
    this._toast.show(`إضغط علي البيت لمٌشاركته`, '5000', 'bottom').subscribe(
      toast => {
      //  without subscribe method toast is not working on android
      }
    );
    this.network_exist = this.network.type != 'none';
    this.network.onDisconnect().subscribe(() => {
      this.network_exist = false;
    });
    this.network.onConnect().subscribe(() => {
      setTimeout(() => {
        this.network_exist = true;
      }, 1500);
    });
  }
  openSettingsPage(){
    this.navCtrl.push(Settings);
  }
  shareFB(message){
    message = message + ' #البردة #مدح #سيدنا #النبي  @bordaelmadyh  '
    this._toast.show(`تم نسخ البيت . قم بلصقه للمشاركة علي الفيس بوك`, '5000', 'bottom').subscribe(
      toast => {
        //  without subscribe method toast is not working on android
      }
    );
    this._clipboard.copy(message);
    var that  = this ;
    setTimeout(function(){
      that._sharer.share(message,null, null, 'https://goo.gl/Q25Nq3');
    },1500)
  }
  openNextChapter(index){
    this.admob.showInterstitial();
    this.navCtrl.pop();
    this.navCtrl.push(ChapterDetails,{
      index: index,
      bordaIndex: this.navParams.data.bordaIndex

    });

  }
  openPreviousChapter(index){
    this.admob.showInterstitial();
    this.navCtrl.pop();
    this.navCtrl.push(ChapterDetails,{
      index: index-1,
      bordaIndex: this.navParams.data.bordaIndex

    });

  }
  showVideo(){
    console.log('ad clicked');

    this.admob.prepareRewardVideoAd({
      adId: 'ca-app-pub-2772630944180636/9171351872',
    });
  }


}
