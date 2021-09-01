import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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

