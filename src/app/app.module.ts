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
import { ServicoComponent } from './servico/servico.component';
import { MeusDadosComponent } from './usuario/meus-dados/meus-dados.component';
import { MeusAnunciosComponent } from './usuario/meus-anuncios/meus-anuncios.component';
import { MinhasTransacoesComponent } from './usuario/minhas-transacoes/minhas-transacoes.component';
import { DetalheServicoComponent } from './servico/detalhe-servico/detalhe-servico.component';
import { ContratarServicoComponent } from './servico/contratar-servico/contratar-servico.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { CepServiceService } from './usuario/cadastro/cep-service.service';

@NgModule({
  declarations: [    
    AppComponent,
    MenuComponent,
    SobreComponent,
    LoginComponent,
    MainComponent,
    ServicoComponent,
    MeusDadosComponent,
    MeusAnunciosComponent,
    MinhasTransacoesComponent,
    DetalheServicoComponent,
    ContratarServicoComponent, 
    CadastroComponent
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
    {provide: APP_BASE_HREF, useValue: '/'}, CepServiceService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
