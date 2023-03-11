import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Resource/Pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Resource/Admin/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Resource/Admin/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./Resource/Admin/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./Resource/Pages/pages.module').then( m => m.PagesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
