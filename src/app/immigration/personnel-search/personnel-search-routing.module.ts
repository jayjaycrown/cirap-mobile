import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnelSearchPage } from './personnel-search.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnelSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnelSearchPageRoutingModule {}
