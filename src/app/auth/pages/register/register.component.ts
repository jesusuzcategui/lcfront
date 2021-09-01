import { AuthService } from '../../auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.FormBuilder.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required]],
    password: ['',[
      Validators.required,
      Validators.minLength(6),
    ]],
    acceptTerms: [false,[
      Validators.required,
      Validators.requiredTrue
    ]]
  })

  constructor(private router:Router ,private service : AuthService,private toastr: ToastrService , private FormBuilder : FormBuilder) { }

  ngOnInit(): void {
  /*  this.toastr.success('Hello world!', 'Toastr fun!', {
      timeOut: 3000,
      positionClass:'toast-top-right'
    }); */
  }

  sendRegister(){

    this.service.registerUser(this.registerForm.value).then((response:any)=>{

      if(response.status === 'ok'){
        this.toastr.success('Bienvenido!', 'Ya eres un usuario', {
          timeOut: 3000,
          positionClass:'toast-top-right'
        });

         this.router.navigate(['/']);
      }
    }).catch((error:any)=>{
      if(error.status == 405){
        this.toastr.error('Este correo ya esta registrado!', 'Inicia sesion', {
          timeOut: 3000,
          positionClass:'toast-top-right'
        });
      }else{
        this.toastr.error('OH NO', 'ERROR  DE SERVIDOR', {
          timeOut: 3000,
          positionClass:'toast-top-right'
        });
      }
    })

  }

}
