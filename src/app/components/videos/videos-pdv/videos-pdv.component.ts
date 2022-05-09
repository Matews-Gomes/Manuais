import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import videosPDV from '../../../../assets/Jsons/videosPDV.json'

interface Videos{
  titulo: string;
  urlVideo: string;
  descricao: string;
}

@Component({
  selector: 'app-videos-pdv',
  templateUrl: './videos-pdv.component.html',
  styleUrls: ['./videos-pdv.component.scss']
})
export class VideosPDVComponent implements OnInit {

  public videos: Videos[] = videosPDV;
  public videosFiltrados: Videos[] = videosPDV;

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
