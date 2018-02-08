import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {Network} from '@ionic-native/network';
import {Settings} from "../settings/settings";
import {SocialSharing} from '@ionic-native/social-sharing';
import {Clipboard} from '@ionic-native/clipboard';
import {Bordas} from '../../services/borda';
import {Styling} from '../../services/Globals';
import {Toast} from '@ionic-native/toast';
import {AdMob} from '@ionic-native/admob';
import {DomSanitizer} from '@angular/platform-browser';
import {NativeStorage} from '@ionic-native/native-storage';
import {AboutModalPage} from '../about-modal-page/about-modal-page';
import domtoimage from 'dom-to-image';


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
  providers: [SocialSharing, Clipboard, Toast]
})
export class ChapterDetails {
  share_list = [];
  filteredData = [];
  chapter: any;
  nextChapter: any;
  previousChapter: any;
  search_text: string;
  intro: any;
  searchActive: Boolean=false;
  prefixer: number;
  hideTitle: Boolean=false;
  fontSize: string = Styling.fontSize;
  fontFaceClass: string = Styling.fontFace;
  network_exist: Boolean;
  share_class: string= 'hide';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private network: Network,
              private _sharer: SocialSharing,
              private _clipboard: Clipboard,
              private _toast: Toast,
              private admob: AdMob,
              private dom: DomSanitizer,
              private _nativeStorage: NativeStorage) {
    this.prefixer = 0;
    if (navParams.data.full_peotry) {
      var fullPeotryLines = [];
      for (var i = 0; i < Bordas[navParams.data.bordaIndex].chapters.length; i++) {
        if (!Bordas[navParams.data.bordaIndex].chapters[i]['extra']) {
          for (var j = 0; j < Bordas[navParams.data.bordaIndex].chapters[i].lines.length; j++) {
            fullPeotryLines.push(Bordas[navParams.data.bordaIndex].chapters[i].lines[j])
          }
        }
      }
      this.chapter = {
        name: Bordas[navParams.data.bordaIndex].desc,
        desc: Bordas[navParams.data.bordaIndex].name,
        lines: fullPeotryLines,
        full_peotry: true
      }
    } else {
      var chapterNumber = +navParams.data.index;
      this.previousChapter = Bordas[navParams.data.bordaIndex].chapters[chapterNumber - 1];
      this.chapter = Bordas[navParams.data.bordaIndex].chapters[chapterNumber];
      this.nextChapter = Bordas[navParams.data.bordaIndex].chapters[chapterNumber + 1];
      this.chapter.track_url = this.dom.bypassSecurityTrustResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + this.chapter.track_id + "&amp;auto_play=true&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=true")
      if (!this.chapter.extra) {
        for (var i = 0; i < chapterNumber; i++) {
          this.prefixer += Bordas[navParams.data.bordaIndex].chapters[i].lines.length;
        }
      }
    }
    this.filteredData = this.chapter.lines;
    this.intro = [
      {id: 1, right: 'مولاي صلي وسلم دائما أبدا', left: 'علي حيبيك خير الخلق كلهم'},
      {id: 2, right: 'مولاي صلي وسلم دائما أبدا', left: 'على النبي وأل البيت كلهم'}
    ];
  };

  ionViewWillEnter() {
    // this._nativeStorage.getItem('fontSize').then(data => {
    //   this.fontSize = data ? data : this.fontSize;
    // });
    // this._nativeStorage.getItem('fontFace').then(data => {
    //   this.fontFaceClass = data ? data : this.fontFaceClass
    // });
    var admobid: AdMobType;
    this.share_list = [];
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

  ionViewDidLoad() {
    // this._toast.show(`إضغط علي البيت لمٌشاركته`, '5000', 'bottom').subscribe(
    //   toast => {
    //   //  without subscribe method toast is not working on android
    //   }
    // );
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

  toggleSelection(line) {
    line.selected = !line.selected
    if (line.selected) {
      // this.share_class = 'hide';
      this.share_list.push(line)
    } else {
      // this.share_class= '';
      this.share_list.splice(this.share_list.indexOf(line), 1)
    }
  }

  shareFB(lines) {
    var that = this;
    that.share_list = lines;
    // message = message + ' #البردة #مدح #سيدنا #النبي  @bordaelmadyh  '
    that.share_class = '';
    setTimeout(function () {
      // that._sharer.share(message,null, null, 'https://goo.gl/Q25Nq3');
      var node = document.getElementById('share_list');
      domtoimage.toPng(node)
        .then(function (dataUrl) {
          that._sharer.share(null, 'text', dataUrl)
          for (var i = 0; i < that.share_list.length; i++) {
            that.share_list[i].selected = false;
          }
          // setTimeout(function(){
            that.share_class = 'hide';
          // }, 500);
          that.share_list = [];
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', JSON.stringify({message: error.message, stack: error.stack}));
        });
    }, 500)
    this._toast.show(`جاري إنشاء الصورة....`, '5000', 'bottom').subscribe(
      toast => {
        //  without subscribe method toast is not working on android
      }
    );
  }

  onSearchInput(event) {
    var simplifyArabic  = function (str) {
      return str.replace(new RegExp(String.fromCharCode(1617, 124, 1614, 124, 1611, 124, 1615, 124, 1612, 124, 1616, 124, 1613, 124, 1618), "g"), "");
    };
    this.filteredData = [];
    for (var i = 0; i < this.chapter.lines.length; i++) {
      if (simplifyArabic(this.chapter.lines[i]['left']).search(this.search_text) > -1 || simplifyArabic(this.chapter.lines[i]['right']).search(this.search_text) > -1) {
        this.filteredData.push(this.chapter.lines[i])
      }
    }
  }

  onSearchCancel() {
    this.searchActive = false;
    this.hideTitle = false;
    this.filteredData = this.chapter.lines;
  }

  openNextChapter(index) {
    this.admob.showInterstitial();
    this.navCtrl.pop();
    this.navCtrl.push(ChapterDetails, {
      index: index,
      bordaIndex: this.navParams.data.bordaIndex

    });

  }

  openPreviousChapter(index) {
    this.admob.showInterstitial();
    this.navCtrl.pop();
    this.navCtrl.push(ChapterDetails, {
      index: index - 1,
      bordaIndex: this.navParams.data.bordaIndex

    });

  }

  openSettingsPage() {
    this.navCtrl.push(Settings);
  }

  openAboutModal() {
    var modalPage = this.modalCtrl.create(AboutModalPage);
    modalPage.present();
  }
  activateSearch(){
    this.searchActive = true
    this.hideTitle = true;
  };

  showVideo() {
    console.log('ad clicked');

    this.admob.prepareRewardVideoAd({
      adId: 'ca-app-pub-2772630944180636/9171351872',
    });
  }


}
