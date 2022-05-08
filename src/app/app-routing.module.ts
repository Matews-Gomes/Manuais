import { ManuaisCadastrosComponent } from './components/manuais/manuais-cadastros/manuais-cadastros.component';
import { ManuaisFranquiasComponent } from './components/manuais/manuais-franquias/manuais-franquias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksComponent } from './components/links/links.component';
import { VideosPortalNfeComponent } from './components/videos/videos-portal-nfe/videos-portal-nfe.component';
import { VideosGerenciaComponent } from './components/videos/videos-gerencia/videos-gerencia.component';
import { VideosDiadiaComponent } from './components/videos/videos-diadia/videos-diadia.component';
import { ManuaisFinanceiroComponent } from './components/manuais/manuais-financeiro/manuais-financeiro.component';
import { VideosPDVComponent } from './components/videos/videos-pdv/videos-pdv.component';
import { VideosPortalFranquiasComponent } from './components/videos/videos-portal-franquias/videos-portal-franquias.component';
import { VideosAppRetaguardaComponent } from './components/videos/videos-app-retaguarda/videos-app-retaguarda.component';

const routes: Routes = [
  {path: 'manuais/cadastros', component: ManuaisCadastrosComponent},
  {path: 'manuais/franquias', component: ManuaisFranquiasComponent},
  {path: 'manuais/financeiro', component: ManuaisFinanceiroComponent},
  {path: 'videos/portalnfe', component: VideosPortalNfeComponent},
  {path: 'videos/portalfranquias', component: VideosPortalFranquiasComponent},
  {path: 'videos/appretaguarda', component: VideosAppRetaguardaComponent},
  {path: 'videos/gerencia', component: VideosGerenciaComponent},
  {path: 'videos/pdv', component: VideosPDVComponent},
  {path: 'videos/utilitarios', component: VideosDiadiaComponent},
  {path: 'links', component: LinksComponent},
  {path: '', redirectTo: 'manuais/cadastros', pathMatch: 'full'},
  {path: '**', redirectTo: 'manuais/cadastros', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
