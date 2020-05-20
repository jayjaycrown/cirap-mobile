import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnelIdentificationPage } from './personnel-identification.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnelIdentificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnelIdentificationPageRoutingModule {}
