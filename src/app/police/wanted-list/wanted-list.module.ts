import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WantedListPageRoutingModule } from './wanted-list-routing.module';

import { WantedListPage } from './wanted-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WantedListPageRoutingModule
  ],
  declarations: [WantedListPage]
})
export class WantedListPageModule {}
