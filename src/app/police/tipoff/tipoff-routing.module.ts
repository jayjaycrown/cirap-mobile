import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoffPage } from './tipoff.page';

const routes: Routes = [
  {
    path: '',
    component: TipoffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoffPageRoutingModule {}
