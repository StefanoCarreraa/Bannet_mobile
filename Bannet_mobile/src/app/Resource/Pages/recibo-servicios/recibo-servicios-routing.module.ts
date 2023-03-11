import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReciboServiciosPage } from './recibo-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: ReciboServiciosPage
  },  {
    path: 'detalle-recibos',
    loadChildren: () => import('../../../Resource/Pages/recibo-servicios/detalle-recibos/detalle-recibos.module').then( m => m.DetalleRecibosPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReciboServiciosPageRoutingModule {}
