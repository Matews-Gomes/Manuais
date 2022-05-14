import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LinksAvt } from 'src/app/models/linksAvt.model';
import { LinksDist } from 'src/app/models/linksDist.model';
import { ManuaisService } from 'src/app/service/manuais.service';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  public links: LinksAvt[] = [];
  public linksFiltrados: LinksAvt[] = [];

  public linksDist: LinksDist[] = [];
  public linksDistFiltrados: LinksDist[] = [];

  constructor(
    public _sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService,
    private _manuaisService: ManuaisService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getLinksAvt();
    this.getLinksDist();
  }

  public getLinksAvt(): void{
    this._manuaisService.getLinksAva().subscribe({
      next: (_links: LinksAvt[])=>{
        this.links = _links;
        this.linksFiltrados = this.links
      },
      error: (err: any)=>{
        this.spinner.hide()
        this.toastr.error('Nenhum manual encontrado!', 'Error 404');
      },
      complete: ()=> this.spinner.hide()
    });
  }

  public getLinksDist(): void{
    this._manuaisService.getLinksDist().subscribe({
      next: (_links: LinksDist[])=>{
        this.linksDist = _links;
        this.linksDistFiltrados = this.linksDist
      },
      error: (err: any)=>{
        this.spinner.hide()
        this.toastr.error('Nenhum manual encontrado!', 'Error 404');
      },
      complete: ()=> this.spinner.hide()
    });
  }

}
