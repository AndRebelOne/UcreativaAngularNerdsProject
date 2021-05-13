import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/interfaces/comments.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments: Comments[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
