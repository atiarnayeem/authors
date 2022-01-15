import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) {}

  getAllAuthors(urlParams?: any, skip?: any): Observable<any> {
    return this.http.get(`${environment.baseUrl}authors?limit=${urlParams? urlParams : 6 }&skip=${skip? skip : 0 }`);
  }
}
