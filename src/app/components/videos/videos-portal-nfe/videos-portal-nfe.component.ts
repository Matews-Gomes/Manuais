import { Component, OnInit } from '@angular/core';
import videosPortalNFe from './videosPortalNFe.json'

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
    const value = target.value
    this.videosFiltrados = this.videos.filter((videos: any) => {
      return videos.titulo.toLocaleLowerCase().includes(value)
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}