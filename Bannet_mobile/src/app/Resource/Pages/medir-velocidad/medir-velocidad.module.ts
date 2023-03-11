import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedirVelocidadPageRoutingModule } from './medir-velocidad-routing.module';

import { MedirVelocidadPage } from './medir-velocidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedirVelocidadPageRoutingModule
  ],
  declarations: [MedirVelocidadPage]
})
export class MedirVelocidadPageModule {}
