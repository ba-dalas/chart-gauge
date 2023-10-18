import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-chart-three',
  templateUrl: './chart-three.component.html',
  styleUrls: ['./chart-three.component.scss']
})


export class ChartThreeComponent implements AfterViewInit {
  public doughnutChartPlugins = [DatalabelsPlugin];

  @ViewChild('myChart') chartCanvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const ctx: CanvasRenderingContext2D = this.chartCanvas.nativeElement.getContext('2d')!;
    const data = [30, 34, 44];
    const needleVal  = 27;

    new Chart(ctx, {
      type: 'doughnut',
      plugins: [{
        id: '',
        afterDraw: (chart) => {
          // var needleValue = chart.config.data.datasets[0].needleValue;
          var needleValue = needleVal;
          var dataTotal = chart.config.data.datasets[0].data.reduce((a:any, b:any) => a + b, 0);
          var angle = Math.PI + (1 / dataTotal * needleValue * Math.PI);
          var ctx = chart.ctx;
          var cw = chart.canvas.offsetWidth;
          var ch = chart.canvas.offsetHeight;
          var cx = cw / 2;
          var cy = ch - 6;

          ctx.translate(cx, cy);
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.moveTo(0, -3);
          ctx.lineTo(ch - 20, 0);
          ctx.lineTo(0, 3);
          ctx.fillStyle = 'rgb(0, 0, 0)';
          ctx.fill();
          ctx.rotate(-angle);
          ctx.translate(-cx, -cy);
          ctx.beginPath();
          ctx.arc(cx, cy, 5, 0, Math.PI * 2);
          ctx.fill();
        }
      }],
      data: {
        // labels: [],
        labels: data.map(value => `${value}`),
        datasets: [{
          data: data,

          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(63, 191, 63, 1)'
          ],

        }]
      },
      // needleValue: 27,
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.dataset.data[context.dataIndex] || '';
                return `Value: ${label}`;
              },

            },

          }


        },

        responsive: false,
        aspectRatio: 2,
        layout: {
          padding: {
            bottom: 3
          }
        },
        rotation: -90,
        cutout: '50%',
        circumference: 180,

        animation: {
          animateRotate: false,
          animateScale: true
        }
      }
    });
  }
}

