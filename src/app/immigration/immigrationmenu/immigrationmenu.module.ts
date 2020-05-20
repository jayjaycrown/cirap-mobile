import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImmigrationmenuPageRoutingModule } from './immigrationmenu-routing.module';

import { ImmigrationmenuPage } from './immigrationmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImmigrationmenuPageRoutingModule
  ],
  declarations: [ImmigrationmenuPage]
})
export class ImmigrationmenuPageModule {}
