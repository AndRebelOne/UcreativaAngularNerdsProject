import { Component } from '@angular/core';
import { Comments } from 'src/app/interfaces/comments.interface';
import { Posts } from 'src/app/interfaces/posts.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {

  public posts: Posts[] = [];
  public comments: Comments [] = [];

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
