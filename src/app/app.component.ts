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
  title = "app";
  chart;
  updateFlag = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;

  chartOptions = {
    series: [

    ],
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



  constructor(private store: Store<AppState>) {
    const self = this;

    this.chartCallback = chart => {
      // saving chart reference
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
    this.store.dispatch(new DataActions.AddData({ name: 'test', data: [Math.random() * 1500, Math.random() * 1009, Math.random() * 10039,Math.random() * 1009, Math.random() * 1009, Math.random() * 100,Math.random() * 100, Math.random() * 1009, Math.random() * 1009,Math.random() * 1009, Math.random() * 1009, Math.random() * 100] }))
    self.updateFlag = true;

  }
}
