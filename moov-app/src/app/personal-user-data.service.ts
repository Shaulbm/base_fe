import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalUserDataService {
  private userDetailsUrl = 'api/heroes';
  constructor() { }

  getUserDetails(userId: string): Observable<PersonalUserData[]> {
    return this.http.get<PersonalUserData[]>(this.userDetailsUrl)
  }
}
