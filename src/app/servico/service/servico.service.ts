import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { servico } from "src/app/entity/servico";

@Injectable()
export class ServicoService {
  constructor(private http: HttpClient) {}

  protected urlServiceV1 = "http://localhost:3000";

  cadastrarServico(servico: servico) {
    return this.http.post<servico>(this.urlServiceV1, servico);
  }

  obterServicos() : Observable<servico[]> {
    return this.http.
    get<servico[]>(this.urlServiceV1 + "/produtos");       
  }
}
