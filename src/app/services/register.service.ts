import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../module/cont/register/register.component';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public url = 'https://localhost:44308/api/Account/register';
  public url2 = 'https://localhost:44308/api/Clienti';
  //public url3 = 'https://localhost:44308/api/Angajati';

  constructor(
    public http: HttpClient,

  ) { }

  public addRegister(user): Observable<any> {
    
    return this.http.post(`${this.url}`,user);
  }

  public addClient(user): Observable<any> {
    
    return this.http.post(`${this.url2}`,user);
  }

  // public addAngajati(user): Observable<any> {
    
  //   return this.http.post(`${this.url3}`,user);
  // }

}
