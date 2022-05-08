import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import videosPortalFranquias from './videosPortalFranquias.json'

interface Videos{
  titulo: string;
  urlVideo: string;
  descricao: string;
}

@Component({
  selector: 'app-videos-portal-franquias',
  templateUrl: './videos-portal-franquias.component.html',
  styleUrls: ['./videos-portal-franquias.component.scss']
})
export class VideosPortalFranquiasComponent implements OnInit {

  public videos: Videos[] = videosPortalFranquias;
  public videosFiltrados: Videos[] = videosPortalFranquias;

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