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
  fontSizeClass: string = 'font-16';
  fontSize: number = 16;
  fontFaceClass: string = 'amiri';
  constructor(public navCtrl: NavController, public navParams: NavParams, private _nativeStorage: NativeStorage) {

  }

  ionViewWillEnter() {
    this._nativeStorage.getItem('fontSize').then(data =>{
      this.fontSizeClass = data ?  'font-'+data : this.fontSizeClass;
      this.fontSize = data;


    });
    this._nativeStorage.getItem('fontFace').then(data => {
      this.fontFaceClass = data ? data: this.fontFaceClass
      console.log(this.fontFaceClass);
    });
  }
  changeFont(fontFace){
    this.fontFaceClass = fontFace;
    this._nativeStorage.setItem('fontFace', fontFace).then(data => {
      this._nativeStorage.getItem('fontFace').then(data => console.log(data))
      }
    )
  }
  sliderChanged(fontSize){
    this.fontSize = fontSize;
    this.fontSizeClass = 'font-'+fontSize;
    this._nativeStorage.setItem('fontSize', fontSize).then(data => {
        this._nativeStorage.getItem('fontSize').then(data => console.log(data))
      }
    );
    console.log('slider changed to  '+ fontSize);
  }

}
