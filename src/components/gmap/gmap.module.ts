import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gmap } from './gmap';

@NgModule({
  declarations: [
    Gmap,
  ],
  imports: [
    IonicPageModule.forChild(Gmap),
  ],
  exports: [
    Gmap
  ]
})
export class GmapModule {}
