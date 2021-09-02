import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// MDB DEPENDENCYS
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { UserListComponent } from './pages/user-list/user-list.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MdbFormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MdbFormsModule
  ]
})
export class AuthModule { }
