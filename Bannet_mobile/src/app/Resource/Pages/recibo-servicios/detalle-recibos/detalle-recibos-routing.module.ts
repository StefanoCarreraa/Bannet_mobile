import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleRecibosPage } from './detalle-recibos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleRecibosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleRecibosPageRoutingModule {}
