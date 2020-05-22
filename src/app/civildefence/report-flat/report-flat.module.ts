import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportFlatPageRoutingModule } from './report-flat-routing.module';

import { ReportFlatPage } from './report-flat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportFlatPageRoutingModule
  ],
  declarations: [ReportFlatPage]
})
export class ReportFlatPageModule {}
