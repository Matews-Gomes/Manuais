import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { Manuais } from 'src/app/models/manuais.model';
import { ManuaisService } from 'src/app/service/manuais.service';

@Component({
  selector: 'app-manuais-financeiro',
  templateUrl: './manuais-financeiro.component.html',
  styleUrls: ['./manuais-financeiro.component.scss']
})
export class ManuaisFinanceiroComponent implements OnInit {

  public manuais: Manuais[] = [];
  public manuaisFiltrados: Manuais[] = [];
  private _filtroLista: string = '';

  public get filtroLista(): string{
    return this._filtroLista;
  }

  manual!: Manuais[];

  public set filtroLista(value: string){
    this._filtroLista = value;
    this.manuaisFiltrados = this.filtroLista ? this.Search(this.filtroLista) : this.manuais;
  }

  public Search(filtrarPor: string): Manuais[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.manuaisFiltrados.filter(
      (manual: {nome: string;}) => manual.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1)
  }

  constructor(
    private _manuaisService: ManuaisService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getManuais();
  }

  public getManuais(): void{
    this._manuaisService.getManuaisFin().subscribe({
      next: (_manuais: Manuais[])=>{
        this.manuais = _manuais;
        this.manuaisFiltrados = this.manuais
      },
      error: (err: any)=>{
        this.spinner.hide()
        this.toastr.error('Nenhum manual encontrado!', 'Error 404');
      },
      complete: ()=> this.spinner.hide()
    });
  }

}
