import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrimeReportPageRoutingModule } from './crime-report-routing.module';

import { CrimeReportPage } from './crime-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrimeReportPageRoutingModule
  ],
  declarations: [CrimeReportPage]
})
export class CrimeReportPageModule {}
