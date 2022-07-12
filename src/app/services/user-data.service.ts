import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private _url: string = '../assets/data.json';
  // message: any;
  constructor(private http: HttpClient) {}
  Getusers(): Observable<User[]> {
    return this.http.get<User[]>(this._url);
  }
  // setMessage(data: any) {
  //   this.message = data;
  // }
  // getMessage() {
  //   return this.message;
  // }
}
