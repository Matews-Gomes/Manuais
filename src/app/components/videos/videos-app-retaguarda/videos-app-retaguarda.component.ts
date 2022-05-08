import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import videosAppRetaguarda from './videosAppRetaguarda.json'

interface Videos{
  titulo: string;
  urlVideo: string;
  descricao: string;
}

@Component({
  selector: 'app-videos-app-retaguarda',
  templateUrl: './videos-app-retaguarda.component.html',
  styleUrls: ['./videos-app-retaguarda.component.scss']
})
export class VideosAppRetaguardaComponent implements OnInit {

  public videos: Videos[] = videosAppRetaguarda;
  public videosFiltrados: Videos[] = videosAppRetaguarda;

  Search(e: Event): void{
    const target = e.target as HTMLInputElement
    const value = target.value
    this.videosFiltrados = this.videos.filter((videos: any) => {
      return videos.titulo.toLocaleLowerCase().includes(value)
    })
  }
  constructor(public _sanitizer: DomSanitizer) { }


  ngOnInit(): void {
  }

}
