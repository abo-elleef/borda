import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {Settings} from "../settings/settings";
import {Bordas} from '../../services/borda';
import { Styling} from '../../services/Globals';
import { NativeStorage } from '@ionic-native/native-storage';
// import {ChapterDetails} from "../chapter-details/chapter-details";
// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import {AboutModalPage} from '../about-modal-page/about-modal-page'



/**
 * Generated class for the Intro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
 export class Intro {
  fontSize: string = Styling.fontSize;
  fontFaceClass: string = Styling.fontFace;
  slideOptions: any = {};
  bordas: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private _nativeStorage: NativeStorage,
    private _alert: AlertController
    ) {
    this.bordas = Bordas
}

ionViewDidLoad() {
    // console.log('ionViewDidLoad Intro');
}
ionViewWillEnter() {
    // this._nativeStorage.getItem('fontSize').then(data =>{
    //   this.fontSize = data ?  data : this.fontSize;
    // });
    // this._nativeStorage.getItem('fontFace').then(data => {
    //   this.fontFaceClass = data ? data: this.fontFaceClass
    // });
}
// ionViewWillLeave() {

  // this.slideOptions = {
  //   direction: 'left',
  //   duration: 150,
  //   // slowdownfactor: -1,
  //   // slidePixels: 20,
  //   // iosdelay: 70,
  //   androiddelay: 0,
  //   // fixedPixelsTop: 0,
  //   // fixedPixelsBottom: 0
  //  };

  // this.nativePageTransitions.slide(this.slideOptions)
  // .then(onSuccess)
  // .catch(onError);

// }
  openHomePage(index){
      // this.nativePageTransitions.slide(this.slideOptions);
      this.navCtrl.push(HomePage,{index: index});
  }
  openSettingsPage(){
      this.navCtrl.push(Settings);
  }
  openAboutModal(){
    var modalPage = this.modalCtrl.create(AboutModalPage);
    modalPage.present();

  }
}
