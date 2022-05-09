import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import videosGerencia from '../../../../assets/Jsons/videosGerencia.json';

interface Videos{
  titulo: string;
  urlVideo: string;
  descricao: string;
}

@Component({
  selector: 'app-videos-gerencia',
  templateUrl: './videos-gerencia.component.html',
  styleUrls: ['./videos-gerencia.component.scss']
})
export class VideosGerenciaComponent implements OnInit {

  public videos: Videos[] = videosGerencia;
  public videosFiltrados: Videos[] = videosGerencia;

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
