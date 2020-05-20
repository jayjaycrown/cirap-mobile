import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportPersonnelPageRoutingModule } from './report-personnel-routing.module';

import { ReportPersonnelPage } from './report-personnel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportPersonnelPageRoutingModule
  ],
  declarations: [ReportPersonnelPage]
})
export class ReportPersonnelPageModule {}
