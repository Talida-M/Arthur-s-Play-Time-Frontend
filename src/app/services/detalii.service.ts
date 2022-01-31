import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetaliiService {
  public url = 'https://localhost:44308/api/DetaliiComanda/';
  public url1 = 'https://localhost:44308/api/Comenzi/';
  constructor(public http: HttpClient,) { }
  public getComanda(id): Observable<any> {
    
    return this.http.get(`${this.url1 + id}`);
  }

  public updateCom(comanda, stat): Observable<any> {
    return this.http.patch<any>(`${this.url + comanda + '?stat=stat' }`, stat);
  }
}
