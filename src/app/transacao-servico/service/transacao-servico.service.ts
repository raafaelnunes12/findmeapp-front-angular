import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { transacaoservico } from "src/app/entity/transacaoservico";

@Injectable({
  providedIn: "root",
})
export class TransacaoServicoService {
  constructor(private http: HttpClient) {}

  url = "http://localhost:8080/transacao_servico";

  urlContratados =
    "http://localhost:8080/transacao_servico/servicos_contratados";

  urlPrestados = "http://localhost:8080/transacao_servico/servicos_prestados";

  contratar(transacaoservico: transacaoservico) {
    return this.http.post<transacaoservico>(this.url, transacaoservico);
  }

  listarTransacoesContratadas() {
    return this.http.get<transacaoservico[]>(this.urlContratados);
  }

  listarTransacoesPrestadas() {
    return this.http.get<transacaoservico[]>(this.urlPrestados);
  }
}