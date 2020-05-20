import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CivildefenseMenuPageRoutingModule } from './civildefense-menu-routing.module';

import { CivildefenseMenuPage } from './civildefense-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CivildefenseMenuPageRoutingModule
  ],
  declarations: [CivildefenseMenuPage]
})
export class CivildefenseMenuPageModule {}
