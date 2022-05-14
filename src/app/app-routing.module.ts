import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LinksComponent } from './components/pages/links/links.component';
import { ManuaisCadastrosComponent } from './components/pages/manuais-cadastros/manuais-cadastros.component';
import { ManuaisFinanceiroComponent } from './components/pages/manuais-financeiro/manuais-financeiro.component';
import { ManuaisFranquiasComponent } from './components/pages/manuais-franquias/manuais-franquias.component';
import { ManuaisPdvComponent } from './components/pages/manuais-pdv/manuais-pdv.component';
import { VideosAppRetaguardaComponent } from './components/videos/videos-app-retaguarda/videos-app-retaguarda.component';
import { VideosDiadiaComponent } from './components/videos/videos-diadia/videos-diadia.component';
import { VideosGerenciaComponent } from './components/videos/videos-gerencia/videos-gerencia.component';
import { VideosPDVComponent } from './components/videos/videos-pdv/videos-pdv.component';
import { VideosPortalFranquiasComponent } from './components/videos/videos-portal-franquias/videos-portal-franquias.component';
import { VideosPortalNfeComponent } from './components/videos/videos-portal-nfe/videos-portal-nfe.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pdv', component: ManuaisPdvComponent},
  {path: 'cadastros', component: ManuaisCadastrosComponent},
  {path: 'financeiro', component: ManuaisFinanceiroComponent},
  {path: 'franquias', component: ManuaisFranquiasComponent},
  {path: 'links', component: LinksComponent},
  {path: 'videos/pdv', component: VideosPDVComponent},
  {path: 'videos/gerencia', component: VideosGerenciaComponent},
  {path: 'videos/utilitarios', component: VideosDiadiaComponent},
  {path: 'videos/appretaguarda', component: VideosAppRetaguardaComponent},
  {path: 'videos/portalfranquias', component: VideosPortalFranquiasComponent},
  {path: 'videos/portalnfe', component: VideosPortalNfeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
