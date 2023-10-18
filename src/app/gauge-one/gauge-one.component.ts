import { Component, Input, OnInit } from '@angular/core';

import Chart from 'chart.js/auto';


@Component({
  selector: 'app-gauge-one',
  templateUrl: './gauge-one.component.html',
  styleUrls: ['./gauge-one.component.scss']
})
export class GaugeOneComponent implements OnInit {
  public chart: any;



  ngOnInit() {
    this.createChart();
  }

  createChart() {

    const gaugeChartText ={


      id:'gaugeChartText',
      afterDatasetsDraw(chart:any, args:any , pluginsOption:any){
       const {ctx , data , chartArea:{top , bottom , left , right , width , height},scales:{r} } = chart
       ctx.save()
      //  console.log(chart.getDatasetMeta(0).data[0].x)
       const xCoor =chart.getDatasetMeta(0).data[0].x
       const yCoor =chart.getDatasetMeta(0).data[0].y
       const score =data.datasets[0].data[0]

       ctx.fillRect(xCoor , yCoor, 400, 1)
       ctx.font ='20px sans-serif'
       ctx.fillStyle= '#666'
       ctx.textBaseLine='top'

       ctx.textAlign='left'
       ctx.fillText('300', left , yCoor + 20)

       ctx.textAlign='right'
       ctx.fillText('850', right - 20 , yCoor + 20)

       ctx.font ='150px sans-serif'
       ctx.textAlign='center'
       ctx.textBaseLine='bottom'
       ctx.fillText(score, xCoor , yCoor )

       ctx.font ='150px sans-serif'
       ctx.textAlign='center'
       ctx.textBaseLine='bottom'
       ctx.fillText('Fair', xCoor , yCoor - 120 )


      },


    }


    this.chart = new Chart("MyChart", {
      type: "doughnut", //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Mon', 'Tues', 'Wed'],
        datasets: [{
          label: 'My First Dataset',
          data: [18, 12, 6],
          backgroundColor: [
            'rgba(255, 26, 104 , 1)',
            'rgba(255, 206, 86 , 1)',
            'rgba(75, 192, 192 , 1)',

          ],

          // needleValue:36,
          borderColor:'white',
          borderWidth:2,
          borderRadius:5

        }],

      },
      options: {
        aspectRatio: 1.5,
        cutout:'90%',
        circumference:180,
        rotation:270,

      },


      plugins:[gaugeChartText]


    });



  }


}
