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
    path: 'policemenu',
    loadChildren: () => import('./police/policemenu/policemenu.module').then( m => m.PolicemenuPageModule)
  },
  {
    path: 'armymenu',
    loadChildren: () => import('./army/army-menu/army-menu.module').then( m => m.ArmyMenuPageModule)
  },
  {
    path: 'civildefense',
    loadChildren: () => import('./civildefence/civildefense-menu/civildefense-menu.module').then( m => m.CivildefenseMenuPageModule)
  },
  {
    path: 'frscmenu',
    loadChildren: () => import('./frsc/frscmenu/frscmenu.module').then( m => m.FrscmenuPageModule)
  },
  {
    path: 'immigrationmenu',
    loadChildren: () => import('./immigration/immigrationmenu/immigrationmenu.module').then( m => m.ImmigrationmenuPageModule)
  },
  {
    path: 'ndleamenu',
    loadChildren: () => import('./ndlea/ndleamenu/ndleamenu.module').then( m => m.NdleamenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
