import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manuais',
  templateUrl: './manuais.component.html',
  styleUrls: ['./manuais.component.scss']
})
export class ManuaisComponent implements OnInit {

  filtroSite: string = '';

  constructor() { }

  ngOnInit() {
  }

  manuais = [
    {"nome": "Manual NF Devolucao","arquivo": "../../../assets/PortalNFe/Manual NF Devolucao (criar pedido, faturar e transmitir Sefaz) (PortalNFE).pdf"},
    {"nome": "Manual NF Vendas, remessa","arquivo": "../../../assets/PortalNFe/Manual NF Vendas, remessa (criar pedido, faturar e transmitir Sefaz) (PortalNFE).pdf"},
    {"nome": "Cadastro Clientes","arquivo": "../../../assets/Cadastros/Cadastro_Clientes.pdf"},
  ]
}
