import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicemenuPageRoutingModule } from './policemenu-routing.module';

import { PolicemenuPage } from './policemenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicemenuPageRoutingModule
  ],
  declarations: [PolicemenuPage]
})
export class PolicemenuPageModule {}
