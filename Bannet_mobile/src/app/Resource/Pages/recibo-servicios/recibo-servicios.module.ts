import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReciboServiciosPageRoutingModule } from './recibo-servicios-routing.module';

import { ReciboServiciosPage } from './recibo-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReciboServiciosPageRoutingModule
  ],
  declarations: [ReciboServiciosPage]
})
export class ReciboServiciosPageModule {}
