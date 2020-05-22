import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissingPersonsPageRoutingModule } from './missing-persons-routing.module';

import { MissingPersonsPage } from './missing-persons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissingPersonsPageRoutingModule
  ],
  declarations: [MissingPersonsPage]
})
export class MissingPersonsPageModule {}
