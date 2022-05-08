import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '../shared/nav/nav.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { LinksComponent } from './components/links/links.component';
import { ManuaisPDVComponent } from './components/manuais/manuais-pdv/manuais-pdv.component';
import { ManuaisFranquiasComponent } from './components/manuais/manuais-franquias/manuais-franquias.component';
import { ManuaisCadastrosComponent } from './components/manuais/manuais-cadastros/manuais-cadastros.component';
import { VideosPortalNfeComponent } from './components/videos/videos-portal-nfe/videos-portal-nfe.component';
import { VideosGerenciaComponent } from './components/videos/videos-gerencia/videos-gerencia.component';
import { VideosDiadiaComponent } from './components/videos/videos-diadia/videos-diadia.component';
import { ManuaisFinanceiroComponent } from './components/manuais/manuais-financeiro/manuais-financeiro.component';
import { VideosPDVComponent } from './components/videos/videos-pdv/videos-pdv.component';
import { VideosPortalFranquiasComponent } from './components/videos/videos-portal-franquias/videos-portal-franquias.component';
import { VideosAppRetaguardaComponent } from './components/videos/videos-app-retaguarda/videos-app-retaguarda.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LinksComponent,
    ManuaisPDVComponent,
    ManuaisFranquiasComponent,
    ManuaisCadastrosComponent,
    VideosPortalNfeComponent,
    VideosGerenciaComponent,
    VideosDiadiaComponent,
    ManuaisFinanceiroComponent,
    VideosPDVComponent,
    VideosPortalFranquiasComponent,
    VideosAppRetaguardaComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
