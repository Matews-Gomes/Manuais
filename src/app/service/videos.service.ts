import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videos } from '../models/videos.model';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private _httpClient: HttpClient) { }

  private urlVidDia = "https://apirestmanuais.herokuapp.com/videosDiadia"
  private urlVidPdv = "https://apirestmanuais.herokuapp.com/videosPdv"
  private uriVidGer = "https://apirestmanuais.herokuapp.com/videosGerencia"
  private urlAppRet = "https://apirestmanuais.herokuapp.com/videosAppRetaguarda"
  private urlPortFran = "https://apirestmanuais.herokuapp.com/videosPortalFranquias"
  private urlPortNfe = 'https://apirestmanuais.herokuapp.com/videosPortalNfe'

  getVideosDia(): Observable<Videos[]>{
    return this._httpClient.get<Videos[]>(this.urlVidDia);
  }

  getVideosPdv(): Observable<Videos[]>{
    return this._httpClient.get<Videos[]>(this.urlVidPdv);
  }

  getVideosGer(): Observable<Videos[]>{
    return this._httpClient.get<Videos[]>(this.uriVidGer);
  }

  getVideosAppRet(): Observable<Videos[]>{
    return this._httpClient.get<Videos[]>(this.urlAppRet);
  }

  getVideosPortFran(): Observable<Videos[]>{
    return this._httpClient.get<Videos[]>(this.urlPortFran);
  }

  getVideosPortNfe(): Observable<Videos[]>{
    return this._httpClient.get<Videos[]>(this.urlPortNfe);
  }
}
