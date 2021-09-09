import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartsModule } from 'angular-bootstrap-md';
@Component({
  selector: 'app-dashboardmain',
  templateUrl: './dashboardmain.component.html',
  styleUrls: ['./dashboardmain.component.scss']
}) 
export class DashboardmainComponent implements OnInit {

  @ViewChild('mychart') mychart : ElementRef | any;

  





  ngOnInit(){



    

  }

}
