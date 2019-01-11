import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarChartComponent } from './bar-chart.component';
import { BarChartRoutingModule } from './bar-chart-routing.module';

@NgModule({
  imports: [CommonModule,  BarChartRoutingModule],
  declarations: [BarChartComponent]
})
export class BarChartModule {}