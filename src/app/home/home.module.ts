import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {HomeRoutingModule} from "./home-routing.module";

import { CoreModule } from './../core/core.module';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
