import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrscmenuPage } from './frscmenu.page';

const routes: Routes = [
  {
    path: '',
    component: FrscmenuPage,
    children: [
      {
        path: 'personnel-search',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('../personnel-search/personnel-search.module').then(m => m.PersonnelSearchPageModule)
      },
      {
        path: 'report-personnel',
        loadChildren: () => import('../report-personnel/report-personnel.module').then(m => m.ReportPersonnelPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'frscmenu/personnel-search'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrscmenuPageRoutingModule {}