import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {WelcomeComponent} from "./pages/welcome/welcome.component";

const routes : Routes = [
  {
    path: '',
    children: [
      {path: '', component: WelcomeComponent},
      {path: '**', redirectTo: ''}
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
