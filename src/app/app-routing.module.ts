import { ManuaisCadastrosComponent } from './components/manuais/manuais-cadastros/manuais-cadastros.component';
import { ManuaisFranquiasComponent } from './components/manuais/manuais-franquias/manuais-franquias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksComponent } from './components/links/links.component';
import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [
  {path: 'manuais/cadastros', component: ManuaisCadastrosComponent},
  {path: 'manuais/franquias', component: ManuaisFranquiasComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'links', component: LinksComponent},
  {path: '', redirectTo: 'manuais/cadastros', pathMatch: 'full'},
  {path: '**', redirectTo: 'manuais/cadastros', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
