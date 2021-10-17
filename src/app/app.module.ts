import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { rootRouterConfig } from './app.routes.module';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MeusDadosComponent } from './usuario/meus-dados/meus-dados.component';
import { MeusAnunciosComponent } from './servico/meus-anuncios/meus-anuncios.component';
import { MinhasTransacoesComponent } from './usuario/minhas-transacoes/minhas-transacoes.component';
import { DetalheServicoComponent } from './servico/detalhe-servico/detalhe-servico.component';
import { ContratarServicoComponent } from './servico/contratar-servico/contratar-servico.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { AlterarCadatroComponent } from './usuario/meus-dados/alterar-cadatro/alterar-cadatro.component';
import { DeletarCadatroComponent } from './usuario/meus-dados/deletar-cadatro/deletar-cadatro.component';
import { AtualizarComponent } from './servico/atualizar/atualizar.component';
import { ListarComponent } from './servico/meus-anuncios/listar/listar.component';
import { DeletarComponent } from './servico/meus-anuncios/deletar/deletar.component';
import { FiltrarPorCategoriaComponent } from './main/filtrar-por-categoria/filtrar-por-categoria.component';
import { TransacaoServicoComponent } from './transacao-servico/transacao-servico.component';
import { ContratarComponent } from './transacao-servico/contratar/contratar.component';
import { ServicosContratatosComponent } from './transacao-servico/minhas-transacoes/servicos-contratatos/servicos-contratatos.component';
import { ServicosPrestadosComponent } from './transacao-servico/minhas-transacoes/servicos-prestados/servicos-prestados.component';

@NgModule({
  declarations: [    
    AppComponent,
    MenuComponent,
    SobreComponent,
    LoginComponent,
    MainComponent,    
    MeusDadosComponent,
    MeusAnunciosComponent,
    MinhasTransacoesComponent,
    DetalheServicoComponent,
    ContratarServicoComponent, 
    CadastroComponent, 
    AlterarCadatroComponent, 
    DeletarCadatroComponent, 
    AtualizarComponent, 
    ListarComponent, 
    DeletarComponent, 
    FiltrarPorCategoriaComponent, 
    TransacaoServicoComponent, 
    ContratarComponent, 
    ServicosContratatosComponent, 
    ServicosPrestadosComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig)],
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
