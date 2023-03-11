import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleComprobantesPageRoutingModule } from './detalle-comprobantes-routing.module';

import { DetalleComprobantesPage } from './detalle-comprobantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleComprobantesPageRoutingModule
  ],
  declarations: [DetalleComprobantesPage]
})
export class DetalleComprobantesPageModule {}
