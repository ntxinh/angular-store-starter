import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Configuration } from 'src/app/app.constants';

@Injectable()
export class NewsApiService {

  constructor(private http: HttpClient, private configuration: Configuration) {}

  // get(): Observable<any> {
  //   return this.http.get(`${this.configuration.Server}/News/Get`);
  // }
}
