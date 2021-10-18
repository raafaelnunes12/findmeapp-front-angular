import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { servico } from "src/app/entity/servico";
import { ServicoService } from "../service/servico.service";

@Component({
  selector: "app-servico",
  templateUrl: "cadastro-servico.component.html",
})
export class ServicoComponent implements OnInit {
  servico: servico = new servico();

  constructor(private router: Router, private service: ServicoService) {}

  ngOnInit(): void {}

  cadastrarServico() {
    this.service.cadastrarServico(this.servico).subscribe((data) => {
      alert("Servico cadastrado ocm sucesso");
    });
  }
}
