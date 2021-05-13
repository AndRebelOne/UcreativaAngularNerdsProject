import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { HomeComponent } from './components/home/home.component';
import { UsersInfoComponent } from './components/users-info/users-info.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [

  {path:"all-posts", component:AllPostsComponent},
  {path:"create-post", component:CreatePostComponent},
  {path:"users", component:UsersComponent},
  {path:"home", component:HomeComponent},
  {path:"users-info/:id", component:UsersInfoComponent},
  {path:"comments/:id", component:CommentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
