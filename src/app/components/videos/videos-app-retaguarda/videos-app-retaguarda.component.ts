import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import videosAppRetaguarda from '../../../../assets/Jsons/videosAppRetaguarda.json'

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
    this.videosFiltrados = this.videos.filter((videos: any) => {
      if (target.value == undefined)
      return true;
      return videos.titulo.toLowerCase().indexOf(target.value.toLowerCase()) !== -1;
    })
  }

  constructor(public _sanitizer: DomSanitizer) { }


  ngOnInit(): void {
  }

}
