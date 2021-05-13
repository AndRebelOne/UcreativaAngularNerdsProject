import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public users: Users[] = [];

  constructor(public usersService: UsersService) { 

    const postsObservable$ = this.usersService.getUsersFromHttp();
    postsObservable$.subscribe((result) => {

      this.users = result;
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
