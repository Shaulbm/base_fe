import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { PersonalUserData } from './personal-user-data';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonalUserDataService {
  private userDetailsUrl = 'api/user';
  constructor(private http: HttpClient) { }

  getUserDetails(userId: string): Observable<PersonalUserData> {
    console.log('trying to fetch...');
    return this.http.get<PersonalUserData>(this.userDetailsUrl);
  }
}
