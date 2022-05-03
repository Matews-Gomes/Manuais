import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '../shared/nav/nav.component';
import { VideosComponent } from './components/videos/videos.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ManuaisComponent } from './components/manuais/manuais.component';
import { LinksComponent } from './components/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VideosComponent,
    ManuaisComponent,
    FooterComponent,
    LinksComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
