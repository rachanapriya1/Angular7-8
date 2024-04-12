import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'http://your-backend-api-url/persons';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  getPerson(id: string): Observable<Person> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Person>(url);
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  updatePerson(id: string, person: Person): Observable<Person> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Person>(url, person);
  }

  deletePerson(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
