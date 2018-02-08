import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {ChapterDetails} from '../chapter-details/chapter-details';
import {Settings} from "../settings/settings";
import {Bordas} from '../../services/borda';
import {Styling} from '../../services/Globals';
import { NativeStorage } from '@ionic-native/native-storage';
import {AboutModalPage} from '../about-modal-page/about-modal-page'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  borda = {};
  prefixer: number = 0;
  index: number =0;
  fontSize: string = Styling.fontSize;
  fontFaceClass: string = Styling.fontFace;
  // fontSizeClassDesc: string = 'font-16';
  // fontSizeClassTitle: string = 'font-20';
  // fontSizeClass: string = 'font-16';
  // fontFaceClass: string = 'amiri';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private _nativeStorage: NativeStorage) {
    // console.log(JSON.stringify(navParams.data));
    this.index = +navParams.data.index;
    this.borda = Bordas[this.index];
    // console.log(this.index);
  }

  ionViewDidEnter() {
  };

  ionViewWillEnter() {
    // this._nativeStorage.getItem('fontSize').then(data =>{
    //   this.fontSize = data ?  data : this.fontSize;
    // });
    // this._nativeStorage.getItem('fontFace').then(data => {
    //   this.fontFaceClass = data ? data: this.fontFaceClass
    // });
  }

  openChapter(index) {
    this.navCtrl.push(ChapterDetails, {
      index: index,
      bordaIndex: this.index,
    })
  }

  openSettingsPage(){
    this.navCtrl.push(Settings);
  }

  openAboutModal(){
    var modalPage = this.modalCtrl.create(AboutModalPage);
    modalPage.present();
  }

  openFullPeotry(){
    this.navCtrl.push(ChapterDetails, {
      index: null,
      bordaIndex: this.index,
      full_peotry: true,
    })
  }


}
