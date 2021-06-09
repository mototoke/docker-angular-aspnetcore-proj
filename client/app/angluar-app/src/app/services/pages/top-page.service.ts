import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopPageService {

  // private headers : HttpHeaders = new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*')
  // .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
  // .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

  constructor(private http: HttpClient) { 

  }

  public getMsg(): Observable<any> {

    const url: string = `${environment.baseUrl}/WeatherForecast`;

    const httpOptions  = {
      headers: new HttpHeaders({
        // 'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      })
    }

    return this.http.get(url, httpOptions).pipe(
      catchError(this.handleError('getMsg', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
