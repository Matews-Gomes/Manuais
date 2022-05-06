import { Component, OnInit } from '@angular/core';
import videosDiaDia from './videosDiaDia.json';

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
    const value = target.value
    this.videosFiltrados = this.videos.filter((videos: any) => {
      return videos.titulo.toLocaleLowerCase().includes(value)
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
