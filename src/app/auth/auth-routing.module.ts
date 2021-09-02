import { LoggedUserGuard } from './../guard/logged-user.guard';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserListComponent } from './pages/user-list/user-list.component';
const routes : Routes =
  [
    {
      path: '',
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'list',
         component: UserListComponent,
         canActivate: [LoggedUserGuard]
        },
        { path: '**', redirectTo: 'login' },
      ]
    }
  ]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
