import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnelSearchPageRoutingModule } from './personnel-search-routing.module';

import { PersonnelSearchPage } from './personnel-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnelSearchPageRoutingModule
  ],
  declarations: [PersonnelSearchPage]
})
export class PersonnelSearchPageModule {}
