import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GalleryRoutingModule } from './gallery-routing.module';
import { MidGalleryComponent } from './mid-gallery.component';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
  ],
  declarations: [MidGalleryComponent]
})
export class GalleryModule { }
