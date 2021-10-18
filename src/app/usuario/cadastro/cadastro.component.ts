import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { usuario } from "src/app/entity/usuario";
import { UsuarioService } from "../service/usuario.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "cadastro.component.html",
})
export class CadastroComponent implements OnInit {
  usuario: usuario = new usuario();

  constructor(private router: Router, private service: UsuarioService) {}

  ngOnInit(): void {}

  cadastrarUsuario() {
    this.service.cadastrarUsuario(this.usuario).subscribe((data) => {
      alert("Usuario cadastrado ocm sucesso");
    });
  }
}
