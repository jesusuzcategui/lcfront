import { DashboardmainComponent } from './pages/dashboardmain/dashboardmain.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'/',
    loadChildren: () => import('./pages/dashboardmain').then(m => m.DashboardmainComponent)
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DashboardRoutingModule { }
