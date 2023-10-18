import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaugeOneComponent } from './gauge-one/gauge-one.component';
import { ZincChartComponent } from './zinc-chart/zinc-chart.component';
import { ChartThreeComponent } from './chart-three/chart-three.component';



@NgModule({
  declarations: [
    AppComponent,
    GaugeOneComponent,
    ZincChartComponent,
    ChartThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
