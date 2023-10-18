import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';




@Component({
  selector: 'app-zinc-chart',
  templateUrl: './zinc-chart.component.html',
  styleUrls: ['./zinc-chart.component.scss']
})
export class ZincChartComponent  implements AfterViewInit {

  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  private chart!: Chart;
  // ... rest of your code

  ngAfterViewInit() {
    this.setupChart();
  }

  setupChart() {
    const data: never[] = [/* your initial data array */];
    const value =0 /* your initial value */;

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    console.log('ctx', ctx)
    const chartConfig: ChartConfiguration = {
      type: 'polarArea',
      data: {
        labels: ['Success', 'Warning', 'Warning', 'Error'],
        datasets: [{
          data: data,
          backgroundColor: ['green', 'yellow', 'orange', 'red'],
          borderWidth: 2
        }]
      },
      // options: {
      //   responsive: true,
      //   // title: {
      //   //   display: true,
      //   //   text: 'Gauge chart with datalabels plugin'
      //   // },
      //   scale: {
      //     ticks: {
      //       display: false,
      //       suggestedMin: 0,
      //       suggestedMax: 100
      //     }
      //   }
      // }
    };

    this.chart = new Chart(ctx, chartConfig);
  }
}
