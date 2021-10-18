import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { servico } from "src/app/entity/servico";

@Injectable({
  providedIn: "root",
})
export class ServicoService {
  constructor(private http: HttpClient) {}

  url = "http://localhost:8080/servico";

  cadastrarServico(servico: servico) {
    return this.http.post<servico>(this.url, servico);
  }
}
