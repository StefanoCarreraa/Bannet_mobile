import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibroReclamacionesPage } from './libro-reclamaciones.page';

const routes: Routes = [
  {
    path: '',
    component: LibroReclamacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibroReclamacionesPageRoutingModule {}
