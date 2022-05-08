import { Component, OnInit } from '@angular/core';
import manuaisPdv from '../../../../assets/Jsons/manuaisPdv.json'

interface Manual{
  nome: string;
  arquivo: string;
}

@Component({
  selector: 'app-manuais-pdv',
  templateUrl: './manuais-pdv.component.html',
  styleUrls: ['./manuais-pdv.component.scss']
})
export class ManuaisPDVComponent implements OnInit {

  public manuais: Manual[] = manuaisPdv;
  public manuaisFiltrados: Manual[] = manuaisPdv;

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
