import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissingPersonsPage } from './missing-persons.page';

const routes: Routes = [
  {
    path: '',
    component: MissingPersonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissingPersonsPageRoutingModule {}
