import { Component, OnInit } from '@angular/core';
import manuaisFinanceiro from '../../../../assets/Jsons/manuaisFinanceiro.json';

interface Manual{
  nome: string;
  arquivo: string;
}

@Component({
  selector: 'app-manuais-financeiro',
  templateUrl: './manuais-financeiro.component.html',
  styleUrls: ['./manuais-financeiro.component.scss']
})
export class ManuaisFinanceiroComponent implements OnInit {

  public manuais: Manual[] = manuaisFinanceiro;
  public manuaisFiltrados: Manual[] = manuaisFinanceiro;

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
