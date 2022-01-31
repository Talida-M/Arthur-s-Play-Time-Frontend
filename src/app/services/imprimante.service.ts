import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imprimante } from '../interface/imprimante';
@Injectable({
  providedIn: 'root'
})
export class ImprimanteService {
  public url = 'https://localhost:44308/api/Imprimante/';
  public url1 = 'https://localhost:44308/api/Imprimante/';
 
  constructor(
    public http: HttpClient,
  ) {}

  public getImprimante() : Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }

  public addImprimanta(imprimanta: Imprimante): Observable<any> {
    return this.http.post<any>(`${this.url}/fromBody`, imprimanta);
  }
  public deleteImprimanta(id): Observable<any> {
    return this.http.delete(`${this.url1 + id  }`);
  }

  public editImprimanta(imprimanta, status): Observable<any> {
    if (status === 'Ocupata'){
      return this.http.patch<any>(`${this.url + imprimanta + '?statusNou=Disponibila'}`, 'Disponibila');
    }
    else{
      return this.http.patch<any>(`${this.url + imprimanta + '?statusNou=Ocupata'}`, 'Ocupata');
    }
        //return this.http.patch<any>(`${this.url + imprimanta ?statusNou = Disponibila"}`, status);

  }

}
