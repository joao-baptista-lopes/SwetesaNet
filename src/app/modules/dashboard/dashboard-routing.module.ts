import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NftComponent } from './pages/nft/nft.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { PrestadorPerfilComponent } from './pages/podcast/components/prestador-perfil/prestador-perfil.component';
import { NoticiasComponent } from './pages/podcast/components/noticias/noticias.component';
import { NoticaEspecificaComponent } from './pages/podcast/components/notica-especifica/notica-especifica.component';
import { CadastroPrestadorComponent } from './pages/podcast/components/cadastro-prestador/cadastro-prestador.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'nfts', pathMatch: 'full' },
      { path: 'nfts', component: NftComponent },
      { path: 'podcast', component: PodcastComponent },
      { path: 'podcast/:slug', component: PrestadorPerfilComponent },
      // { path: 'podcast', component: PodcastComponent },
      // { path: 'dashboard/podcast/perfil/:id', component: PrestadorPerfilComponent },
      { path: 'noticias', component: NoticiasComponent },
      // { path: 'noticias/noticia', component: NoticaEspecificaComponent },
      { path: 'noticias/:slug', component: NoticaEspecificaComponent },
      {path:'cadastro', component: CadastroPrestadorComponent},
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
