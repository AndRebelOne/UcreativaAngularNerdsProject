// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { UsersInfoComponent } from './components/users-info/users-info.component';
import { CommentsComponent } from './components/comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPostsComponent,
    CreatePostComponent,
    UsersComponent,
    HomeComponent,
    UsersInfoComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
