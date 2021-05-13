import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(public http: HttpClient) { }

  public getPostsFromHttp() {

    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');

  }

  public getUserPost(id: string): Observable<any> {
    return this.http.get<Posts[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`,{ observe: 'body', responseType: 'json' });
  }
}
