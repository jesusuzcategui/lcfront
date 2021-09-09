import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardmainComponent } from './pages/dashboardmain/dashboardmain.component';
import { ChartsModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    DashboardmainComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule
  ]
})
export class DashboardModule { }
