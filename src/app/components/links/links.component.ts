import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import linksAvatim from '../../../assets/Jsons/linksAvatim.json'
import linksDistribuicao from '../../../assets/Jsons/linksDistribuicao.json'

interface Links{
  titulo: string;
  urlLink: string;
}

interface LinksDist{
  tituloDist: string;
  urlLinkDist: string;
}

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  public links: Links[] = linksAvatim;
  public linksFiltrados: Links[] = linksAvatim;

  public linksDist: LinksDist[] = linksDistribuicao;
  public linksDistFiltrados: LinksDist[] = linksDistribuicao;

  constructor(public _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
