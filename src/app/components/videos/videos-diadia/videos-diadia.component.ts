import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Videos } from 'src/app/models/videos.model';
import { VideosService } from 'src/app/service/videos.service';


@Component({
  selector: 'app-videos-diadia',
  templateUrl: './videos-diadia.component.html',
  styleUrls: ['./videos-diadia.component.scss']
})
export class VideosDiadiaComponent implements OnInit {

  public videos: Videos[] = [];
  public videosFiltrados: Videos[] = [];
  private _filtroLista: string = '';

  public get filtroLista(): string{
    return this._filtroLista;
  }

  video!: Videos[];

  public set filtroLista(value: string){
    this._filtroLista = value;
    this.videosFiltrados = this.filtroLista ? this.Search(this.filtroLista) : this.videos;
  }

  public Search(filtrarPor: string): Videos[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.videosFiltrados.filter(
      (video: {titulo: string;}) => video.titulo.toLocaleLowerCase().indexOf(filtrarPor) !== -1)
  }

  constructor(
    public _sanitizer: DomSanitizer,
    private _videosService: VideosService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
    ) { }

    ngOnInit(): void {
      this.spinner.show();
      this.getVideos();
    }
    public getVideos(): void{
      this._videosService.getVideosDia().subscribe({
        next: (_videos: Videos[])=>{
          this.videos = _videos;
          this.videosFiltrados = this.videos
        },
        error: (err: any)=>{
          this.spinner.hide()
          this.toastr.error('Nenhum video encontrado!', 'Error 404');
        },
        complete: ()=> this.spinner.hide()
      });
    }
}
