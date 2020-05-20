import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrimeReportPage } from './crime-report.page';

const routes: Routes = [
  {
    path: '',
    component: CrimeReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrimeReportPageRoutingModule {}
