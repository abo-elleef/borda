import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';


/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers:[NativeStorage]
})
export class Settings {
  fontSizeClass: string = 'font-14';
  fontSize: number = 14;
  fontFaceClass: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private _nativeStorage: NativeStorage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings');
  }
  changeFont(fontFace){
    this.fontFaceClass = fontFace;
    // this._nativeStorage.setItem('fontSize', fontFace).then(data => {
    //   this._nativeStorage.getItem('fontSize').then(data => console.log(data))
    //   }
    // )
  }
  sliderChanged(fontSize){
    this.fontSize = fontSize;
    this.fontSizeClass = 'font-'+fontSize;
    console.log('slider changed to  '+ fontSize);
  }

}
