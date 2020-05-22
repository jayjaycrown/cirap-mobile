import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CivildefenseMenuPage } from './civildefense-menu.page';

const routes: Routes = [
  {
    path: '',
    component: CivildefenseMenuPage,
    children: [
      {
        path: 'personnel-search',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('../personnel-search/personnel-search.module').then(m => m.PersonnelSearchPageModule)
      },
      {
        path: 'report-personnel',
        loadChildren: () => import('../report-personnel/report-personnel.module').then(m => m.ReportPersonnelPageModule)
      },
      {
        path: 'report-flat',
        loadChildren: () => import('../report-flat/report-flat.module').then(m => m.ReportFlatPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'civildefense/personnel-search'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CivildefenseMenuPageRoutingModule {}
