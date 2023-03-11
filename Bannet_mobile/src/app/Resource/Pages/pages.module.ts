import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PagesPage } from './pages.page';
import { PagesPageRoutingModule } from './pages-routing.module';
import { TabBarModule } from '../../tab-bar/tab-bar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesPageRoutingModule,
    TabBarModule
  ],
  declarations: [PagesPage]
})
export class PagesPageModule {}
