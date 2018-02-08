import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {NativeStorage} from '@ionic-native/native-storage';
import {Styling} from '../../services/Globals';
import { AppAvailability } from '@ionic-native/app-availability';


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
  providers:[AppAvailability]
})
export class AboutModalPage {
  fontSize: string = Styling.fontSize;
  fontFaceClass: string = Styling.fontFace;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public appAvailability: AppAvailability,
              private _nativeStorage: NativeStorage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutModalPage');
  }

  ionViewWillEnter() {
    // this._nativeStorage.getItem('fontSize').then(data => {
    //   this.fontSize = data ? data : this.fontSize;
    // });
    // this._nativeStorage.getItem('fontFace').then(data => {
    //   this.fontFaceClass = data ? data : this.fontFaceClass
    // });
  }
  openTwitterPage(){
    this.appAvailability.check('com.twitter.android').then((isApp) => {
      if(isApp){
        window.open('twitter://user?screen_name=bordaelmadyh', '_system', 'location=no');
      } else {
        window.open('https://twitter.com/bordaelmadyh', '_system', 'location=no');
      }
    });
    // window.open("https://www.facebook.com/1683000118439406/", '_system', 'location=yes')
  }

  openFaceBookPage(){
    this.appAvailability.check('com.facebook.katana').then((isApp) => {
      if(isApp){
        window.open('fb://page/1683000118439406/', '_system', 'location=no');
      } else {
        window.open('https://facebook.com/bordaelmadyh/', '_system', 'location=no');
      }
    });
  }

}
