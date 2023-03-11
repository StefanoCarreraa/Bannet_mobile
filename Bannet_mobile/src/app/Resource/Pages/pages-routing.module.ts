import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../Resource/Pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'recibo-servicios',
        loadChildren: () => import('../../Resource/Pages/recibo-servicios/recibo-servicios.module').then( m => m.ReciboServiciosPageModule)
      },
      {
        path: 'servicios-post-venta',
        loadChildren: () => import('../../Resource/Pages/servicios-post-venta/servicios-post-venta.module').then( m => m.ServiciosPostVentaPageModule)
      },
      {
        path: 'medir-velocidad',
        loadChildren: () => import('../../Resource/Pages/medir-velocidad/medir-velocidad.module').then( m => m.MedirVelocidadPageModule)
      },
      {
        path: 'libro-reclamaciones',
        loadChildren: () => import('../../Resource/Pages/libro-reclamaciones/libro-reclamaciones.module').then( m => m.LibroReclamacionesPageModule)
      },
      {
        path: 'comprobantes',
        loadChildren: () => import('../../Resource/Pages/comprobantes/comprobantes.module').then( m => m.ComprobantesPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../../Resource/Pages/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/pages/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pages/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
