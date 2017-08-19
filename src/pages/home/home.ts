import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ChapterDetails} from '../chapter-details/chapter-details';
import { Chapters, Borda} from '../../services/borda';
import {Settings} from "../settings/settings";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chapters: any = Chapters;
  prefixer: number = 0;
  // fontSizeClassDesc: string = 'font-16';
  // fontSizeClassTitle: string = 'font-20';
  fontSizeClass: string = 'font-16';
  fontFaceClass: string = 'amiri';

  constructor(public navCtrl: NavController) {
  }

  ionViewDidEnter() {
    console.log(typeof Chapters)
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
      index: index
    })
  }
  openSettingsPage(){
    this.navCtrl.push(Settings);
  }

}
