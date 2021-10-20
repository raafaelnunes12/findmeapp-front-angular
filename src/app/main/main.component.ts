import { Component, OnInit } from "@angular/core";
import { servico } from "src/app/entity/servico";
import { ServiceService } from "../service/service.service";
import {FormControl} from '@angular/forms';


@Component({
  selector: "app-main",
  templateUrl: "main.component.html",
})
export class MainComponent implements OnInit {

  constructor(private service: ServiceService) {}

  public servicos?: servico[];

  ngOnInit() {
    this.service.obterServicos().subscribe(
      (servico) => {
        this.servicos = servico;
      },
      (error) => console.log(error)
    );
  }
}
