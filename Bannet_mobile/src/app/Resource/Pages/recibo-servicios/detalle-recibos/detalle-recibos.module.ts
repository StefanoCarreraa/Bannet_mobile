import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleRecibosPageRoutingModule } from './detalle-recibos-routing.module';

import { DetalleRecibosPage } from './detalle-recibos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleRecibosPageRoutingModule
  ],
  declarations: [DetalleRecibosPage]
})
export class DetalleRecibosPageModule {}
