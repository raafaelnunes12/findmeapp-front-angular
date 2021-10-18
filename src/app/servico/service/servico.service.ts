import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { servico } from "src/app/entity/servico";

@Injectable()
export class ServicoService {
  constructor(private http: HttpClient) {}

  protected url = "http://localhost:8080/servicos";

  cadastrarServico(servico: servico) {
    return this.http.post<servico>(this.url, servico);
  }

  obterServicos() : Observable<servico[]> {
    return this.http.
    get<servico[]>(this.url);       
  }
}
