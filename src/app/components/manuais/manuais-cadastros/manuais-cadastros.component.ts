import { Component, OnInit } from '@angular/core';
import manuaisCadastroData from './manuaisCadastros.json'

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
    const value = target.value
    this.manuaisFiltrados = this.manuais.filter((manuais: any) => {
      return manuais.nome.toLocaleLowerCase().includes(value)
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
