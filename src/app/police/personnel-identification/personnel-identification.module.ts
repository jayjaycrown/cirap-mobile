import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnelIdentificationPageRoutingModule } from './personnel-identification-routing.module';

import { PersonnelIdentificationPage } from './personnel-identification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnelIdentificationPageRoutingModule
  ],
  declarations: [PersonnelIdentificationPage]
})
export class PersonnelIdentificationPageModule {}
