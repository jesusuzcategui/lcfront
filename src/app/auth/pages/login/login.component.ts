import { AuthService } from '../../auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = this.FormBuilder.group({
    email: ['',[Validators.required]],
    password: ['',[
      Validators.required,
      Validators.minLength(6),
    ]]
  })

  constructor(private router:Router ,private service : AuthService,private toastr: ToastrService , private FormBuilder : FormBuilder) { }

  ngOnInit(): void {
  }
  doLogin(){
    this.service.loginUserHttp(this.loginForm.value).then((response:any)=>{
      if(response){
        this.service.loginUserLS(response.data.access_token);
        this.toastr.success('Bienvenido otra vez', 'Hola !', {
          timeOut: 3000,
          positionClass:'toast-top-right'
        });
      }
    }).catch((error)=>{
      console.log(error);

    })
  }
}
