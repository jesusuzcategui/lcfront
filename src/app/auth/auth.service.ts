import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private cookieService: CookieService) { }
  // login http request
  loginUserHttp(data:any){
    let self = this
    let form = new FormData();
    form.append('email',data.email)
    form.append('password',data.password)
    return new Promise((resolve,reject)=>{
      self.http.post('https://api.tarjetalocutorios.com/api/login',form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }
  // Localstorage token seting
  loginUserLS(token:string){
      this.cookieService.set('usertkn', token);
  }

  registerUser(data:any){
    let self = this
    let form = new FormData()
    form.append('name',data.name)
    form.append('email',data.email)
    form.append('password',data.password)
    return new Promise((resolve,reject)=>{
      self.http.post('https://api.tarjetalocutorios.com/api/register',form)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  handelError(error: any){
    console.log(error);
    return throwError(error.message || "Server Error");
  }
}

