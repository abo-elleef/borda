import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import {Settings} from "../settings/settings";
import {NativeStorage} from "@ionic-native/native-storage";
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from '@ionic-native/clipboard';
import {Borda, Modaraya, Mohmadya} from '../../services/borda';




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
  providers:[NativeStorage, SocialSharing, Clipboard]
})
export class ChapterDetails {
  chapter: any;
  intro: any;
  prefixer: number;
  fontSizeClass: string = 'font-16';
  fontSizeClassTitle = 'font-18';
  fontFaceClass: string = 'amiri';
  network_exist: Boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _nativeStorage: NativeStorage,
    private network: Network,
    private _sharer: SocialSharing,
    private _clipboard: Clipboard



) {
    var chapterNumber = +navParams.data.index
    if (chapterNumber <= 10) {
      this.chapter = Borda.chapters[navParams.data.index];
      this.prefixer = 0;
      console.log(typeof navParams.data.index);
      console.log(JSON.stringify(chapterNumber));
      for (var i = 0; i < chapterNumber ; i++) {
        console.log(i);
        console.log(Borda.chapters[i]);
        this.prefixer += Borda.chapters[i].lines.length;
      }
    }
    if (chapterNumber == 11){
      this.chapter = Mohmadya.chapters[0];
      this.prefixer = 0
    }
    if (chapterNumber == 12){
      this.chapter = Modaraya.chapters[0];
      this.prefixer = 0
    }
    this.intro = [
      {right: 'مولاي صلي وسلم دائما ابدأ', left: 'علي حيبيك خير الخلق كلهم'},
      {right: 'مولاي صلي وسلم دائما ابدأ', left: 'على النبي وأل البيت كلهم'}

    ];
  };
  ionViewWillEnter() {
    this._nativeStorage.getItem('fontSize').then(data => {
      this.fontSizeClass = data ? 'font-' + data : this.fontSizeClass;
      this.fontSizeClassTitle = data ? 'font-' +(data + 2) : 'font-20';
    });
    this._nativeStorage.getItem('fontFace').then(data => {
      this.fontFaceClass = data ? data : this.fontFaceClass;
    })
  }
  ionViewDidLoad(){
    this.network_exist = this.network.type != 'none';
    this.network.onDisconnect().subscribe(() => {
      this.network_exist = false;
    });
    this.network.onConnect().subscribe(() => {
      setTimeout(() => {
        this.network_exist = true;
      }, 2000);
    });
  }
  openSettingsPage(){
    this.navCtrl.push(Settings);
  }
  shareFB(message){
    // remember to add a link to the app here
    this._clipboard.copy(message);
    this._sharer.share(message);
  }
  nextChapter(index){
    this.navCtrl.push(ChapterDetails,{
      index: index
    })

  }


}
