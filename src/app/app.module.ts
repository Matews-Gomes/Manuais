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
import { VideosComponent } from './components/videos/videos.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { LinksComponent } from './components/links/links.component';
import { ManuaisPDVComponent } from './components/manuais/manuais-pdv/manuais-pdv.component';
import { ManuaisFranquiasComponent } from './components/manuais/manuais-franquias/manuais-franquias.component';
import { ManuaisCadastrosComponent } from './components/manuais/manuais-cadastros/manuais-cadastros.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VideosComponent,
    FooterComponent,
    LinksComponent,
    ManuaisPDVComponent,
    ManuaisFranquiasComponent,
    ManuaisCadastrosComponent,
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
