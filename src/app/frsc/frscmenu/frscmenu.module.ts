import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrscmenuPageRoutingModule } from './frscmenu-routing.module';

import { FrscmenuPage } from './frscmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrscmenuPageRoutingModule
  ],
  declarations: [FrscmenuPage]
})
export class FrscmenuPageModule {}
