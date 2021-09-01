import { AuthService } from '../../auth.service';
import { Component, OnInit } from '@angular/core';
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

  constructor(private service : AuthService ) { }

  ngOnInit(): void {
  }

  sendRegister(){
    this.service.registerUser(this.registerData).then((response:any)=>{
      console.log(response)
    }).catch((error:any)=>{
      console.log(error)
    })
  }

}
