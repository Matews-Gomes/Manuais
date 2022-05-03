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
    {"nome": "Cadastro de Metas","arquivo": "../../../assets/Cadastros/cadastrometa.pdf"},
    {"nome": "Cadastro de Clientes","arquivo": "../../../assets/Cadastros/Cadastro_Clientes.pdf"},
    {"nome": "Cadastro de Fornecedor","arquivo": "../../../assets/Cadastros/CADASTRO_FORNECEDORES.pdf"},
    {"nome": "Emitir NFe Vendas","arquivo": "../../../assets/EMITIR_NFE/EMITIR_NFE_VENDA.pdf"},
    {"nome": "Emitir NFe Trocas","arquivo": "../../../assets/EMITIR_NFE/EMITIR_NFE_TROCAS.pdf"},
    {"nome": "Emitir NFe Remessa","arquivo": "../../../assets/EMITIR_NFE/EMITIR_NFE_REMESSA.pdf"},
    {"nome": "Emitir NFe Devolução","arquivo": "../../../assets/EMITIR_NFE/EMITIR_NFE_DEVOLUCAO.pdf"},
    {"nome": "Emitir NFe Provadores","arquivo": "../../../assets/EMITIR_NFE/EMITIR_NFE_PROVADORES.pdf"},
    {"nome": "Emitir NFe Substituição","arquivo": "../../../assets/EMITIR_NFE/EMITIR_NFE_SUBSTITUICAOO.pdf"},
    {"nome": "Transmitir NFe","arquivo": "../../../assets/EMITIR_NFE/TRANSMITIRNFE.pdf"},
    {"nome": "Contagem Diaria Gerençia","arquivo": "../../../assets/Estoque/contagem_Diaria_GERENCIA.pdf"},
    {"nome": "Contagem Diaria Vendedor","arquivo": "../../../assets/Estoque/contagem_Diaria_Vendedores.pdf"},
    {"nome": "Importar XML Nota","arquivo": "../../../assets/Estoque/Importa_XML_NOTA.pdf"},
    {"nome": "Manual Baixa Produtos","arquivo": "../../../assets/Estoque/Manual_BAIXA_PRODUTO.pdf"},
    {"nome": "Manual Procedimentos Ajuste Estoque","arquivo": "../../../assets/Estoque/Manual_Procedimentos_Ajuste_estoque.pdf"},
    {"nome": "Manual Troca de Mercadorias","arquivo": "../../../assets/Estoque/Manual_Troca_Mercadorias.pdf"},
    {"nome": "Transferençai de Material","arquivo": "../../../assets/Estoque/Transferencia_Material.pdf"},
    {"nome": "Manual NF Devolucao (criar pedido, faturar e transmitir Sefaz)","arquivo": "../../../assets/PortalNFe/Manual NF Devolucao (criar pedido, faturar e transmitir Sefaz) (PortalNFE).pdf"},
    {"nome": "Manual NF Vendas, remessa (criar pedido, faturar e transmitir Sefaz)","arquivo": "../../../assets/PortalNFe/Manual NF Vendas, remessa (criar pedido, faturar e transmitir Sefaz) (PortalNFE).pdf"},
  ]
}
