import { Component, OnInit } from '@angular/core';
import manuaisCadastroData from '../../../../assets/Jsons/manuaisCadastros.json'

interface Manual{
  nome: string;
  arquivo: string;
}

@Component({
  selector: 'app-manuais-cadastros',
  templateUrl: './manuais-cadastros.component.html',
  styleUrls: ['./manuais-cadastros.component.scss']
})
export class ManuaisCadastrosComponent implements OnInit {

  public manuais: Manual[] = manuaisCadastroData;
  public manuaisFiltrados: Manual[] = manuaisCadastroData;

  Search(e: Event): void{
    const target = e.target as HTMLInputElement
    this.manuaisFiltrados = this.manuais.filter((manuais: any) => {
      if (target.value == undefined)
      return true;
      return manuais.nome.toLowerCase().indexOf(target.value.toLowerCase()) !== -1;
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
