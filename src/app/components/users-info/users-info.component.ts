import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/interfaces/posts.interface';
import { Users } from 'src/app/interfaces/users.interface';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})

export class UsersInfoComponent implements OnInit {

  // arrays
  public posts:Posts[] = [];
  public users?:Users;

  // variables
  public userID: string = "";
  public Curl: string = "";
  public userIDSubscription: any;
  
  constructor(
    private postService: PostsService,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.userID = this.route.snapshot.params.id;
    this.route.paramMap.subscribe(params => {
      this.userIDSubscription = params.get("id")
    });

    this.router.events.subscribe(() =>{
      this.Curl = this.router.url;
    })

    this.Curl = this.router.url;


    this.usersService.getUserInfo(this.userID).subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Completed');
      }
    );

    this.postService.getUserPost(this.userID).subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Completed');
      }
    );

   

  }


}
