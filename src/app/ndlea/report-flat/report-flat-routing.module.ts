import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportFlatPage } from './report-flat.page';

const routes: Routes = [
  {
    path: '',
    component: ReportFlatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportFlatPageRoutingModule {}
