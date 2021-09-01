import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';

// MDB DEPENDENCYS
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MdbFormsModule,
    FormsModule
  ],
  exports: [
    MdbFormsModule
  ]
})
export class AuthModule { }
