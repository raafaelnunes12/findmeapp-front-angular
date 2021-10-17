import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { ContratarServicoComponent } from "./servico/contratar-servico/contratar-servico.component";
import { DetalheServicoComponent } from "./servico/detalhe-servico/detalhe-servico.component";
import { ServicoComponent } from "./servico/servico.component";
import { SobreComponent } from "./sobre/sobre.component";
import { CadastroComponent } from "./usuario/cadastro/cadastro.component";
import { EditarAnuncioComponent } from "./usuario/meus-anuncios/editar-anuncio/editar-anuncio.component";
import { MeusAnunciosComponent } from "./usuario/meus-anuncios/meus-anuncios.component";
import { MeusDadosComponent } from "./usuario/meus-dados/meus-dados.component";
import { MinhasTransacoesComponent } from "./usuario/minhas-transacoes/minhas-transacoes.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'sobre', component: SobreComponent},
    { path: 'cadastroUsuario', component: CadastroComponent},
    { path: 'principal', component: MainComponent},
    { path: 'servico', component: ServicoComponent},
    { path: 'meusDados', component: MeusDadosComponent},
    { path: 'meusAnuncios', component: MeusAnunciosComponent},
    { path: 'editarAnuncio', component: EditarAnuncioComponent},
    { path: 'minhasTransacoes', component: MinhasTransacoesComponent},
    { path: 'detalheServico', component: DetalheServicoComponent},
    { path: 'contratarServico', component: ContratarServicoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(rootRouterConfig)],
    exports: [RouterModule],
  })
  export class AppRoutesModule {}