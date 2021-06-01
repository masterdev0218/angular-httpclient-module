/*
Injectable: A marker metadata that marks a class as available to Injector for creation.
The HttpClient in @angular/common/http offers a simplified client HTTP API for Angular applications that rests on the XMLHttpRequest interface exposed by browsers.
The User model is imported from the user class in user.model.ts
*/

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class DataService {
  apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http: HttpClient) {}

  //get array of users from API url
  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.apiUrl);
  }
}
