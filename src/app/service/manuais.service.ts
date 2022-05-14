import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manuais } from '../models/manuais.model';
import { LinksAvt } from '../models/linksAvt.model';
import { LinksDist } from '../models/linksDist.model';

@Injectable({
  providedIn: 'root'
})
export class ManuaisService {

  constructor(private _httpClient: HttpClient) { }

  private urlPdv = "https://apirestmanuais.herokuapp.com/manuaisPdv"
  private urlCad = "https://apirestmanuais.herokuapp.com/manuaisCadastros"
  private urlFin = "https://apirestmanuais.herokuapp.com/manuaisFinanceiro"
  private urlFran = "https://apirestmanuais.herokuapp.com/manuaisFranquias"
  private urlLinkAva = "https://apirestmanuais.herokuapp.com/linksAvatim"
  private urlLinkDist = 'https://apirestmanuais.herokuapp.com/linksDistribuicao'

  getManuaisPdv(): Observable<Manuais[]>{
    return this._httpClient.get<Manuais[]>(this.urlPdv);
  }

  getManuaisCad(): Observable<Manuais[]>{
    return this._httpClient.get<Manuais[]>(this.urlCad);
  }

  getManuaisFin(): Observable<Manuais[]>{
    return this._httpClient.get<Manuais[]>(this.urlFin);
  }

  getManuaisFran(): Observable<Manuais[]>{
    return this._httpClient.get<Manuais[]>(this.urlFran);
  }

  getLinksAva(): Observable<LinksAvt[]>{
    return this._httpClient.get<LinksAvt[]>(this.urlLinkAva);
  }

  getLinksDist(): Observable<LinksDist[]>{
    return this._httpClient.get<LinksDist[]>(this.urlLinkDist);
  }
}
