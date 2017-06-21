import { Component } from '@angular/core';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';
import { Platform } from 'ionic-angular';
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
  class_value: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public deviceOrientation: DeviceOrientation, public plt: Platform) {
    console.log(navParams.data.chapter);
    this.chapter = navParams.data.chapter;
  };

  ionViewDidLoad() {
  }

}
