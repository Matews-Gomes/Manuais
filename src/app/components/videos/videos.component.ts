import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  videos = [
    {"nome":"App-retaguarda", "src": "https://www.youtube.com/embed/c3syyhz0weY"}
  ]

}
