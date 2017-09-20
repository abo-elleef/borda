import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {Settings} from "../settings/settings";
import {Bordas} from '../../services/borda';
import {ChapterDetails} from "../chapter-details/chapter-details";

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
  // fontSizeClass: string = 'font-16';
  // fontSize: number = 16;
  // fontFaceClass: string = 'cairo';
  bordas: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bordas = Bordas
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad Intro');
  }
  ionViewWillEnter() {
    // this._nativeStorage.getItem('fontSize').then(data =>{
    //   this.fontSizeClass = data ?  'font-'+data : this.fontSizeClass;
    //   this.fontSize = data;
    //
    //
    // });
    // this._nativeStorage.getItem('fontFace').then(data => {
    //   this.fontFaceClass = data ? data: this.fontFaceClass
    //   console.log(this.fontFaceClass);
    // });
  }
  openSettingsPage(){
    this.navCtrl.push(Settings);
  }
  openHomePage(index){
    this.navCtrl.push(HomePage,{index: index});
  }

}
