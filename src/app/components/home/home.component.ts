import { Component } from '@angular/core';
import { Posts } from 'src/app/interfaces/posts.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public posts: Posts[] = [];

  constructor(public postsService: PostsService) { 

    const postsObservable$ = this.postsService.getPostsFromHttp();
    postsObservable$.subscribe((result) => {

      this.posts = result;
    },
    (error)=>{
      console.log(error)
    },
    ()=>{
      console.log("Completed")
    }
    );


  }

}
