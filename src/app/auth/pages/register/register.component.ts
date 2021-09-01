import { AuthService } from '../../auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerData : any = {
    name:'',
    email:'',
    password:''
  }

  constructor(private service : AuthService,private toastr: ToastrService ) { }

  ngOnInit(): void {

    this.toastr.success('Hello world!', 'Toastr fun!', {
      timeOut: 3000,
      positionClass:'toast-top-right'
    });
  }

  sendRegister(){
    this.service.registerUser(this.registerData).then((response:any)=>{
      console.log(response)
    }).catch((error:any)=>{
      console.log(error)
    })
  }

}
