import { Component } from '@angular/core';
import { Posts } from 'src/app/interfaces/posts.interface';
import { Users } from 'src/app/interfaces/users.interface';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  public users: Users[] = [];
  public posts: Posts[] = [];
  public id?: number;
  public userId?: number;
  public body: string = "";
  public title: string = "";

  constructor(public usersService: UsersService, public postService: PostsService) {

    const postsObservable$ = this.postService.getPostsFromHttp();
    postsObservable$.subscribe((post) => {
      console.log("Created posts Service", post);
      this.posts = post;
    },
      (error) => {
        console.log(error);
      },
      () => {
        console.log("Post service Completed")
      }
    );

    const usersObservable$ = this.usersService.getUsersFromHttp();
    usersObservable$.subscribe((user) => {
      console.log("Created users Service", user);
      this.users = user;
    },
      (error) => {
        console.log(error);
      },
      () => {
        console.log("User service Completed")
      }
    );


  }

  public createNewPost() {
    const newPost: Posts =
    { 
      userId: this.userId,
      id: 0,
      title: this.title,
      body: this.body,
    };
    console.log("creating post component", newPost);
    this.postService.getPostsFromHttp();
  }

}
