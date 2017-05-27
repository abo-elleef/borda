import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChapterDetails } from './chapter-details';

@NgModule({
  declarations: [
    ChapterDetails,
  ],
  imports: [
    IonicPageModule.forChild(ChapterDetails),
  ],
  exports: [
    ChapterDetails
  ]
})
export class ChapterDetailsModule {}
