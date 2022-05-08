import { Component, OnInit } from '@angular/core';
import manuaisFranquiasData from '../../../../assets/Jsons/manuaisFranquias.json'

interface Manual{
  nome: string;
  arquivo: string;
}

@Component({
  selector: 'app-manuais-franquias',
  templateUrl: './manuais-franquias.component.html',
  styleUrls: ['./manuais-franquias.component.scss']
})
export class ManuaisFranquiasComponent implements OnInit {

  public manuais: Manual[] = manuaisFranquiasData;
  public manuaisFiltrados: Manual[] = manuaisFranquiasData;

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
