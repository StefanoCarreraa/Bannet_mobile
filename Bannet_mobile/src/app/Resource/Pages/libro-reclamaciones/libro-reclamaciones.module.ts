import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibroReclamacionesPageRoutingModule } from './libro-reclamaciones-routing.module';

import { LibroReclamacionesPage } from './libro-reclamaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibroReclamacionesPageRoutingModule
  ],
  declarations: [LibroReclamacionesPage]
})
export class LibroReclamacionesPageModule {} 
