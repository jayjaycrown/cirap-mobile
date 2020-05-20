import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportPersonnelPage } from './report-personnel.page';

const routes: Routes = [
  {
    path: '',
    component: ReportPersonnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportPersonnelPageRoutingModule {}
