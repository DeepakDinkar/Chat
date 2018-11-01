import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: 'left', component: LeftMenuComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'gallery', loadChildren: './mid-gallery/gallery.module#GalleryModule' },
  { path: '', pathMatch: 'full', redirectTo: 'chat' }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
