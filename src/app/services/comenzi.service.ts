import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComenziService {
  public url = 'https://localhost:44308/api/Comenzi';
  public url1 = 'https://localhost:44308/api/Comenzi/';
  constructor(public http: HttpClient,) { }
  public getComenzi(): Observable<any> {
    
    return this.http.get(`${this.url }`);
  }

  public updateCom(idComanda, status): Observable<any> {
    return this.http.patch<any>(`${this.url1 + idComanda + '?statusTotal=' + status }`, status);
  }
}
