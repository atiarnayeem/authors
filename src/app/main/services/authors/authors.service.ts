import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from '../../models/authors.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private subject = new BehaviorSubject(<Author[]>([]));
  authors$: Observable<Author[]> = this.subject.asObservable();

  // travelClaimData = new BehaviorSubject(null);


  constructor(private http: HttpClient) {}

  getAllAuthors(): Observable<any> {
    return this.http.get(`${environment.baseUrl}authors?limit=5&skip=0`);
  }
}
