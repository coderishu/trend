import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  catalogUrl = 'assets/json/catalog.json';

getCatalog(): Observable<any> {
  return this.http.get(this.catalogUrl);
}
}
