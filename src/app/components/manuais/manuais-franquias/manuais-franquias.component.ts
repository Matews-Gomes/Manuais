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
