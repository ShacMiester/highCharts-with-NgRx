import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { StoreModule } from '@ngrx/store';
import { reducer } from './data.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    StoreModule.forRoot({data:reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
