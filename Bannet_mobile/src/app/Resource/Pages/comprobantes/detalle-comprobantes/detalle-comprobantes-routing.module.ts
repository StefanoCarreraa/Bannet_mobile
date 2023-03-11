import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleComprobantesPage } from './detalle-comprobantes.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleComprobantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleComprobantesPageRoutingModule {}
