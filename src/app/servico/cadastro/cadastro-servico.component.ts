import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { servico } from "src/app/entity/servico";
import { ServiceService } from "src/app/service/service.service";

@Component({
  selector: "app-servico",
  templateUrl: "cadastro-servico.component.html",
})
export class ServicoComponent implements OnInit {
  servico: servico = new servico();

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {}

  cadastrarServico() {
    this.service.cadastrarServico(this.servico).subscribe((data) => {
      alert("Servico cadastrado ocm sucesso");
    });
  }
}
