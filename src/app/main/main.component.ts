import { Component, OnInit } from '@angular/core';
import { servico } from "src/app/entity/servico";
import { ServicoService } from '../servico/service/servico.service';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html' 
})
export class MainComponent implements OnInit {
  constructor(private servicoService: ServicoService) { }

  public servicos?: servico[];

  ngOnInit() {
    this.servicoService.obterServicos()
    .subscribe(
      servico => {
        this.servicos = servico;        
      },
      error => console.log(error)
    );
  }
}
