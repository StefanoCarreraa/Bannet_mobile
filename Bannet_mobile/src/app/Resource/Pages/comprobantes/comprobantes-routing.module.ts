import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprobantesPage } from './comprobantes.page';
import { DetalleComprobantesPage } from './detalle-comprobantes/detalle-comprobantes.page';

const routes: Routes = [
  {
    path: '',
    component: ComprobantesPage
  },
  {
    path: 'detalle-comprobantes',
    loadChildren: () => import('../../../Resource/Pages/comprobantes/detalle-comprobantes/detalle-comprobantes.module').then( m => m.DetalleComprobantesPageModule)
  },
  {
    path: 'detalle-comprobantes/:result',
    component: DetalleComprobantesPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprobantesPageRoutingModule {}
