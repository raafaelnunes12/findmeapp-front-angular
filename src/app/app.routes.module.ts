import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { DetalheServicoComponent } from "./servico/detalhe-servico/detalhe-servico.component";
import { SobreComponent } from "./sobre/sobre.component";
import { CadastroComponent } from "./usuario/cadastro/cadastro.component";
import { EditarAnuncioComponent } from "./servico/meus-anuncios/editar-anuncio/editar-anuncio.component";
import { MeusAnunciosComponent } from "./servico/meus-anuncios/meus-anuncios.component";
import { MeusDadosComponent } from "./usuario/meus-dados/meus-dados.component";
import { MinhasTransacoesComponent } from "./transacao-servico/minhas-transacoes/minhas-transacoes.component";
import { ServicoComponent } from "./servico/cadastro/cadastro-servico.component";
import { ContratarComponent } from "./transacao-servico/contratar/contratar.component";

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "sobre", component: SobreComponent },
  { path: "cadastroUsuario", component: CadastroComponent },
  { path: "principal", component: MainComponent },
  { path: "meusDados", component: MeusDadosComponent },
  { path: "meusAnuncios", component: MeusAnunciosComponent },
  { path: "editarAnuncio", component: EditarAnuncioComponent },
  { path: "minhasTransacoes", component: MinhasTransacoesComponent },
  { path: "detalheServico", component: DetalheServicoComponent },
  { path: "contratarServico", component: ContratarComponent },
  { path: "cadastroServico", component: ServicoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
