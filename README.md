# Angular API User Posts

* App to get user data from an external [JSONPlaceholder](https://jsonplaceholder.typicode.com) API.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Angular httpClient used to get API data.

## Screenshots

![Example screenshot](./img/users.png).

## Technologies

* [Angular v8.0.0](https://angular.io/)

* [Angular CLI v8.0.1](https://cli.angular.io/)

* [RxJS Library v6.5.2](https://angular.io/guide/rx-library) used to [subscribe](http://reactivex.io/documentation/operators/subscribe.html) to the API data [observable](http://reactivex.io/documentation/observable.html).

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

* `data.service.ts` using httpClient service with a `getUser()` function to get user details from the API.

```typescript

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) { }

  //get array of users from API url
  getUsers() {
    return this._http.get<User[]>(this.apiUrl);
  }
}

```

## Features

* Angular httpClient used to get data from an external API.

* Updated to latest Angular 8 version with all dependency conflicts resolved.

* simple angular pipe used: `{{ user.name | uppercase }}` to convert username to uppercase.

## Status & To-Do List

* Status: Working.

* To-Do: add mat-cards to improve UI.

## Inspiration

* [Original tutorial: How to use Angular 7 HttpClientModule with REST API](https://www.youtube.com/watch?v=yAT2HHusDDk)
* [Article on HttpClient: Angular Http — Angular 6 HttpClient Tutorial](https://www.techiediaries.com/angular-http-client/)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
