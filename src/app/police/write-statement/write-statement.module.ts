import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteStatementPageRoutingModule } from './write-statement-routing.module';

import { WriteStatementPage } from './write-statement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WriteStatementPageRoutingModule
  ],
  declarations: [WriteStatementPage]
})
export class WriteStatementPageModule {}
