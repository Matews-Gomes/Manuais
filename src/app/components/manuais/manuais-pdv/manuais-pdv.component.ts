import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manuais-pdv',
  templateUrl: './manuais-pdv.component.html',
  styleUrls: ['./manuais-pdv.component.scss']
})
export class ManuaisPDVComponent implements OnInit {

  filtroSite: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  manuais = [
    {"nome": "Cadastro de Metas","arquivo": "../../../../assets/Cadastros/cadastrometa.pdf"},
    {"nome": "Cadastro de Clientes","arquivo": "../../../../assets/Cadastros/Cadastro_Clientes.pdf"},
    {"nome": "Pedido Delivery Cliente","arquivo": "../../../../assets/Portal franquias/Manual Pedido Delivery Cliente (PortalFranquias).pdf"},
    {"nome": "Cadastro de Fornecedores","arquivo": "../../../../assets/Cadastros/CADASTRO_FORNECEDORES.pdf"},
    {"nome": "Entrada de Mercadoria Pendencias","arquivo": "../../../../assets/Portal franquias/Manual Entrada de Mercadoria Pendencias (PortalFranquias).jpg"},
    {"nome": "Lançamento Contas a Pagar","arquivo": "../../../../assets/Portal franquias/Manual Lançamento Contas a Pagar (PortalFranquias).pdf"},
    {"nome": "Programa de Contagem de Inventario Diario","arquivo": "../../../../assets/Portal franquias/Manual Programa de Contagem de Inventario Diario (PortalFranquias).pdf"},
    {"nome": "Programa de Contagem de Inventario Diario Gerencia","arquivo": "../../../../assets/Portal franquias/Manual Programa de Contagem de Inventario Diario Gerencia (PortalFranquias).pdf"},
  ]
}
