import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NativeStorage} from "@ionic-native/native-storage";



/**
 * Generated class for the ChapterDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chapter-details',
  templateUrl: 'chapter-details.html',
  providers:[NativeStorage]
})
export class ChapterDetails {
  chapter: any;
  intro: any;
  prefixer: number;
  fontSizeClass: string = 'font-16';
  fontFaceClass: string = 'amiri';
  constructor(public navCtrl: NavController, public navParams: NavParams, private _nativeStorage: NativeStorage) {
    this.chapter = navParams.data.chapter;
    this.prefixer = navParams.data.prefixer % 167;
    this.intro = [
      {right: 'مولاي صلي وسلم دائما ابدأ', left: 'علي حيبيك خير الخلق كلهم'},
      {right: 'مولاي صلي وسلم دائما ابدأ', left: 'على النبي وأل البيت كلهم'}

    ];
  };
  ionViewWillEnter() {
    this._nativeStorage.getItem('fontSize').then(data => {
      this.fontSizeClass = data ? 'font-' + data : this.fontSizeClass;
      console.log(this.fontSizeClass);
    });
    this._nativeStorage.getItem('fontFace').then(data => {
      this.fontFaceClass = data ? data : this.fontFaceClass;
      console.log(this.fontFaceClass);
    })
  }

}
