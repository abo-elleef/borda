import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutModalPage } from './about-modal-page';

@NgModule({
  declarations: [
    AboutModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutModalPage),
  ],
  exports: [
    AboutModalPage
  ]
})
export class AboutModalPageModule {}
