import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosPostVentaPageRoutingModule } from './servicios-post-venta-routing.module';

import { ServiciosPostVentaPage } from './servicios-post-venta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosPostVentaPageRoutingModule
  ],
  declarations: [ServiciosPostVentaPage]
})
export class ServiciosPostVentaPageModule {}
