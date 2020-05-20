import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WriteStatementPage } from './write-statement.page';

const routes: Routes = [
  {
    path: '',
    component: WriteStatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriteStatementPageRoutingModule {}
