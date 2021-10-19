import { Component, OnInit } from "@angular/core";
import { usuario } from "src/app/entity/usuario";
import { ServiceService } from "src/app/service/service.service";

@Component({
  selector: "app-meus-dados",
  templateUrl: "meus-dados.component.html",
})
export class MeusDadosComponent implements OnInit {
  usuario: usuario = new usuario();

  constructor(private service: ServiceService) {}
  ngOnInit(): void {
    this.getUsuarioById();
  }
  getUsuarioById() {
    let id = localStorage.getItem("id");
    this.service.getMeusDadosPorId(+id).subscribe((data) => {
      this.usuario = data;
      console.log(this.usuario);
    });
  }
}
