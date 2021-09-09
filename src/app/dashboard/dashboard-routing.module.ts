import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DashboardmainComponent } from './pages/dashboardmain/dashboardmain.component';


const routes : Routes = [
  {
    path: '',
    children: [
      { path: 'main', component: DashboardmainComponent },
      { path: '**', redirectTo: 'main' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule { }
