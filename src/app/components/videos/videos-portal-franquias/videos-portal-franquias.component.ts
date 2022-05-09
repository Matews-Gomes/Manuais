import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import videosPortalFranquias from '../../../../assets/Jsons/videosPortalFranquias.json'

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
