import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '../shared/nav/nav.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { VideosPortalNfeComponent } from './components/videos/videos-portal-nfe/videos-portal-nfe.component';
import { VideosGerenciaComponent } from './components/videos/videos-gerencia/videos-gerencia.component';
import { VideosDiadiaComponent } from './components/videos/videos-diadia/videos-diadia.component';
import { VideosPDVComponent } from './components/videos/videos-pdv/videos-pdv.component';
import { VideosPortalFranquiasComponent } from './components/videos/videos-portal-franquias/videos-portal-franquias.component';
import { VideosAppRetaguardaComponent } from './components/videos/videos-app-retaguarda/videos-app-retaguarda.component';
import { ManuaisPdvComponent } from './components/pages/manuais-pdv/manuais-pdv.component';
import { ManuaisCadastrosComponent } from './components/pages/manuais-cadastros/manuais-cadastros.component';
import { ManuaisFinanceiroComponent } from './components/pages/manuais-financeiro/manuais-financeiro.component';
import { ManuaisFranquiasComponent } from './components/pages/manuais-franquias/manuais-franquias.component';
import { LinksComponent } from './components/pages/links/links.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    VideosPortalNfeComponent,
    VideosGerenciaComponent,
    VideosDiadiaComponent,
    VideosPDVComponent,
    VideosPortalFranquiasComponent,
    VideosAppRetaguardaComponent,
    ManuaisPdvComponent,
    ManuaisCadastrosComponent,
    ManuaisFinanceiroComponent,
    ManuaisFranquiasComponent,
    LinksComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
    }),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
