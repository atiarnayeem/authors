import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) {}

  getAllAuthors(): Observable<any> {
    return this.http.get(`${environment.baseUrl}authors?limit=10&skip=20`);
  }
}
