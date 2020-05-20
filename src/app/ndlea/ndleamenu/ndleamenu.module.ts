import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NdleamenuPageRoutingModule } from './ndleamenu-routing.module';

import { NdleamenuPage } from './ndleamenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NdleamenuPageRoutingModule
  ],
  declarations: [NdleamenuPage]
})
export class NdleamenuPageModule {}
