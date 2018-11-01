import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { MidGalleryComponent } from './mid-gallery.component';

const routes: Routes = [{ path: '', component: MidGalleryComponent }];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class GalleryRoutingModule {}
