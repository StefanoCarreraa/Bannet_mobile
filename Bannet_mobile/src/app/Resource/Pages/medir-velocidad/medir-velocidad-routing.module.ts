import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedirVelocidadPage } from './medir-velocidad.page';

const routes: Routes = [
  {
    path: '',
    component: MedirVelocidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedirVelocidadPageRoutingModule {}
