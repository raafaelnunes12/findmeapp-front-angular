import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { usuario } from "src/app/entity/usuario";
import { ServiceService } from "src/app/service/service.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "cadastro.component.html",
})
export class CadastroComponent implements OnInit {
  usuario: usuario = new usuario();

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {}

  cadastrarUsuario() {
    this.service.cadastrarUsuario(this.usuario).subscribe((data) => {
      alert("Usuario cadastrado ocm sucesso");
    });
  }
}
