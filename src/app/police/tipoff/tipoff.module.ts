import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoffPageRoutingModule } from './tipoff-routing.module';

import { TipoffPage } from './tipoff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoffPageRoutingModule
  ],
  declarations: [TipoffPage]
})
export class TipoffPageModule {}
