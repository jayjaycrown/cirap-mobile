import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicemenuPage } from './policemenu.page';

const routes: Routes = [
  {
    path: '',
    component: PolicemenuPage,
    children: [
      {
        path: 'personnel-identification',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('../personnel-identification/personnel-identification.module').then(m => m.PersonnelIdentificationPageModule)
      },
      {
        path: 'report-personnel',
        loadChildren: () => import('../report-personnel/report-personnel.module').then(m => m.ReportPersonnelPageModule)
      },
      {
        path: 'tipoff',
        loadChildren: () => import('../tipoff/tipoff.module').then(m => m.TipoffPageModule)
      },
      {
        path: 'crime-report',
        loadChildren: () => import('../crime-report/crime-report.module').then(m => m.CrimeReportPageModule)
      },
      {
        path: 'write-statement',
        loadChildren: () => import('../write-statement/write-statement.module').then(m => m.WriteStatementPageModule)
      },
      {
        path: 'wanted-list',
        loadChildren: () => import('../wanted-list/wanted-list.module').then(m => m.WantedListPageModule)
      },
      {
        path: 'missing-persons',
        loadChildren: () => import('../missing-persons/missing-persons.module').then(m => m.MissingPersonsPageModule)
      },
      {
        path: 'report-flat',
        loadChildren: () => import('../report-flat/report-flat.module').then(m => m.ReportFlatPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'policemenu/tipoff'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicemenuPageRoutingModule {}
