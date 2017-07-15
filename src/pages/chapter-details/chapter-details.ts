import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



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
})
export class ChapterDetails {
  chapter: any;
  intro: any;
  prefixer: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chapter = navParams.data.chapter;
    this.prefixer = navParams.data.prefixer;
    this.intro = [
      {right: 'مولاي صلي وسلم دائما ابدأ', left: 'علي حيبيك خير الخلق كلهم'},
      {right: 'يا رب صلي علي محمد وعلي', left: 'سادتنا اله وصحبه الكرم'}

    ];
  };

  ionViewDidLoad() {
  }

}
