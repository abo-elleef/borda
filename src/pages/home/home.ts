import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ChapterDetails} from '../chapter-details/chapter-details';
import {Settings} from "../settings/settings";
import {Bordas} from '../../services/borda';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  borda = {};
  prefixer: number = 0;
  index: number =0;
  // fontSizeClassDesc: string = 'font-16';
  // fontSizeClassTitle: string = 'font-20';
  // fontSizeClass: string = 'font-16';
  // fontFaceClass: string = 'amiri';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(JSON.stringify(navParams.data));
    this.index = +navParams.data.index;
    this.borda = Bordas[this.index];
    console.log(this.index);
  }

  ionViewDidEnter() {
  };

  ionViewWillEnter() {
    // this._nativeStorage.getItem('fontSize').then(data => {
    //   this.fontSizeClass = data ? 'font-' + data : this.fontSizeClass;
    //   // this.fontSizeClassTitle = data ? 'font-' +(data + 2) : 'font-20';
    //   // this.fontSizeClassDesc = data ? 'font-' +(data - 2) : 'font-16';
    // });
    // this._nativeStorage.getItem('fontFace').then(data => {
    //   this.fontFaceClass = data ? data : this.fontFaceClass;
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

}
