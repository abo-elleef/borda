import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import {Styling} from '../../services/Globals'


/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {
  fontSize: string = Styling.fontSize;
  fontFaceClass: string = Styling.fontFace;
  fontSizeString: string = '';
  fontFaceClassString: string = '';
  fontFaceContentClass: string = 'hide';
  fontSizeContentClass: string = 'hide';
  translator: Object = {
    fontFace: {
      amiri: 'الأميري',
      kufi: 'الكوفي',
      uthmani: 'العثناني',
    },
    fontSize: {
      largeFont: 'كبير',
      normalFont: 'متوسط',
      smallFont: 'صغير'
    }
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _nativeStorage: NativeStorage
  ) {
  }
  ionViewWillEnter() {
    this._nativeStorage.getItem('fontSize').then(data =>{
      this.fontSize = data ?  data : this.fontSize;
      this.fontSizeString = this.translator['fontSize'][this.fontSize]
    });
    this._nativeStorage.getItem('fontFace').then(data => {
      this.fontFaceClass = data ? data: this.fontFaceClass;
      this.fontFaceClassString = this.translator['fontFace'][this.fontFaceClass]
    });
  }
  changeFont(fontFace){
    this._nativeStorage.setItem('fontFace', fontFace);
    this.fontFaceClass = fontFace;
    this.fontFaceClassString = this.translator['fontFace'][this.fontFaceClass]
  }
  changeFontSize(fontSize){
    this._nativeStorage.setItem('fontSize', fontSize);
    this.fontSize = fontSize;
    this.fontSizeString = this.translator['fontSize'][this.fontSize]
  }
  toggleFontSizeContent(){
    this.fontSizeContentClass = this.fontSizeContentClass == 'hide' ? 'fadeIn' : 'hide'
  }
  toggleFontFaceContent(){
    this.fontFaceContentClass = this.fontFaceContentClass == 'hide' ? 'fadeIn' : 'hide'
  }

}
