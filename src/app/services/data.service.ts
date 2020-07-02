import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  tap  } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor( private http: HttpClient ) { }

  public getPlaceHolder$() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get( url )
    .pipe(
      tap( console.log )
    );
  }


}
