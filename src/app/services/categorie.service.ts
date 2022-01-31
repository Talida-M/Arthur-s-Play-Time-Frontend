import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

public url = 'https://localhost:44308/api/categorie/categorie';
public url2 = 'https://localhost:44308/api/Categorie/CategCuProduse/';

  constructor(
    public http: HttpClient,
  ) { }

  public GetCategories(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  public GetProduse(cod): Observable<any> {
    
    return this.http.get(`${this.url2 + cod}`);
  }

}
