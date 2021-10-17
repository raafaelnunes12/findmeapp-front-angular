import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { CepServiceService } from './cep-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.component.html'
})
export class CadastroComponent {
  
  constructor(private cepService:CepServiceService){}

  consultaCep(valor:string, form:Form){
    this.cepService.buscar(valor).subscribe((dados) => this.popularForm(dados, form));
  }

  popularForm(dados:any, form:Form){
    form.setValue({
      cep: dados.cep,
      logradorouro: dados.logradorouro,
      cidade: dados.cidade,
      uf: dados.uf
    })
  }  
}