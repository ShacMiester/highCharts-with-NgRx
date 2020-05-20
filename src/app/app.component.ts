import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
import { Store } from '@ngrx/store';
import * as DataActions from "./data.actions";
import { AppState } from './app.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chart;
  updateFlag = false;
  updatePie = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;

  chartOptions = {
    series: [],
    exporting: {
      enabled: true
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: "Data"
      }
    }
  };

  pieChart = {
    chart: {
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      name: 'sales'
    },
    title: {
      text: 'Companies sales this month'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
        }
      }
    },
    series: [{

      data: [
        ['Firefox', 45.0],
        ['IE', 26.8],
        ['chrome', 15],
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7]
      ]
    }]
  };


  constructor(private store: Store<AppState>) {
    const self = this;
    this.chartCallback = chart => {
      self.chart = chart;
    };
    this.store.select('data').subscribe(
      a => {
        this.chartOptions.series = a;
      }
    )
  }


  ngOnInit() { }

  updateChart() {
    const self = this;
    this.store.dispatch(new DataActions.AddData({ name: 'test', data: [Math.random() * 1500, Math.random() * 1009, Math.random() * 10039, Math.random() * 1009, Math.random() * 1009, Math.random() * 100, Math.random() * 100, Math.random() * 1009, Math.random() * 1009, Math.random() * 1009, Math.random() * 1009, Math.random() * 100] }))
    self.updateFlag = true;
    this.pieChart.series = [{

      data: [
        ['Firefox', Math.random()*100],
        ['IE', Math.random()*100],
        ['b', Math.random()*100],
        ['c', Math.random()*100],
      ]
    }]
    this.updatePie = true;

  }
}
