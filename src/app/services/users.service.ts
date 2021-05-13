import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  public getUsersFromHttp() {

    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users');

  }

  public getUserInfo(id: string): Observable<any> {
    return this.http.get<Users[]>(`https://jsonplaceholder.typicode.com/users/${id}`,
    { observe: 'body', responseType: 'json' });
  }

}
