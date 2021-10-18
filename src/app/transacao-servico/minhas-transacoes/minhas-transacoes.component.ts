import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { transacaoservico } from "src/app/entity/transacaoservico";
import { ServiceService } from "src/app/service/service.service";

@Component({
  selector: "app-minhas-transacoes",
  template: "minhas-transacoes.component.html",
  styles: [],
})
export class MinhasTransacoesComponent implements OnInit {
  transacaoservico!: transacaoservico[];

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {}

  listarServicosContratados() {
    this.service.listarTransacoesContratadas().subscribe((data) => {
      this.transacaoservico = data;
    });
  }

  listarServicosPrestados() {
    this.service.listarTransacoesPrestadas().subscribe((data) => {
      this.transacaoservico = data;
    });
  }
}

/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-transacoes',
  template: `
    <p>
      minhas-transacoes works!
    </p>
  `,
  styles: [
  ]
})
export class MinhasTransacoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
