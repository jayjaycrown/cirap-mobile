import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmyMenuPageRoutingModule } from './army-menu-routing.module';

import { ArmyMenuPage } from './army-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmyMenuPageRoutingModule
  ],
  declarations: [ArmyMenuPage]
})
export class ArmyMenuPageModule {}
