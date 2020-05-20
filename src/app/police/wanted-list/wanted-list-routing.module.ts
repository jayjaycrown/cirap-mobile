import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WantedListPage } from './wanted-list.page';

const routes: Routes = [
  {
    path: '',
    component: WantedListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WantedListPageRoutingModule {}
