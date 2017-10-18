import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Styling } from '../../services/Globals';

/**
 * Generated class for the AboutModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about-modal-page',
  templateUrl: 'about-modal-page.html',
})
export class AboutModalPage {
    fontSize: string = Styling.fontSize;
    fontFaceClass: string = Styling.fontFace;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _nativeStorage: NativeStorage
    ) {
  }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AboutModalPage');
    }
    ionViewWillEnter() {
        this._nativeStorage.getItem('fontSize').then(data =>{
          this.fontSize = data ?  data : this.fontSize;
        });
        this._nativeStorage.getItem('fontFace').then(data => {
          this.fontFaceClass = data ? data: this.fontFaceClass
        });
    }

}
