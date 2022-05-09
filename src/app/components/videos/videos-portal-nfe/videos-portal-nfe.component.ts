import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import videosPortalNFe from '../../../../assets/Jsons/videosPortalNFe.json'

interface Videos{
  titulo: string;
  urlVideo: string;
  descricao: string;
}

@Component({
  selector: 'app-videos-portal-nfe',
  templateUrl: './videos-portal-nfe.component.html',
  styleUrls: ['./videos-portal-nfe.component.scss']
})
export class VideosPortalNfeComponent implements OnInit {

  public videos: Videos[] = videosPortalNFe;
  public videosFiltrados: Videos[] = videosPortalNFe;

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
