import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import videosDiaDia from '../../../../assets/Jsons/videosDiaDia.json';

interface Videos{
  titulo: string;
  urlVideo: string;
  descricao: string;
}

@Component({
  selector: 'app-videos-diadia',
  templateUrl: './videos-diadia.component.html',
  styleUrls: ['./videos-diadia.component.scss']
})
export class VideosDiadiaComponent implements OnInit {

  public videos: Videos[] = videosDiaDia;
  public videosFiltrados: Videos[] = videosDiaDia;

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
