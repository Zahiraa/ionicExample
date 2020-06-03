import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'phone',
    loadChildren: () => import('./phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'convert',
    loadChildren: () => import('./convert/convert.module').then( m => m.ConvertPageModule)
  },
  {
    path: 'sqlite',
    loadChildren: () => import('./sqlite/sqlite.module').then( m => m.SqlitePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
