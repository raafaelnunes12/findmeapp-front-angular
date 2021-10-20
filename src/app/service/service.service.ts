import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { usuario } from "src/app/entity/usuario";
import { servico } from "src/app/entity/servico";
import { transacaoservico } from "src/app/entity/transacaoservico";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  url = "http://localhost:8080";

  // Service para o Usuario:

  urlUsuario = this.url + "/usuario";

  cadastrarUsuario(usuario: usuario) {
    return this.http.post<usuario>(this.urlUsuario, usuario);
  }

  getMeusDadosPorId(id: number) {
    return this.http.get<usuario>(this.urlUsuario + "/" + id);
  }

  atualizarUsuario(usuario: usuario) {
    return this.http.put<usuario>(this.urlUsuario + "/" + usuario.id, usuario);
  }

  deletarUsuario(usuario: usuario) {
    return this.http.delete<usuario>(this.urlUsuario + "/" + usuario.id);
  }

  // Service para o Servico:

  urlServico = this.url + "/servico";

  cadastrarServico(servico: servico) {
    return this.http.post<servico>(this.urlServico, servico);
  }

  obterServicos(): Observable<servico[]> {
    return this.http.get<servico[]>(this.urlServico);
  }

  obterServicosPorCategoria(nome: String): Observable<servico[]> {
    
    if (nome == null) {
        const urlServicoCategoria=  this.urlServico + "/categoria/ " + nome; 
        return this.http.get<servico[]>(urlServicoCategoria);
    } else {
        return this.obterServicos();
    }
    
  }

  // Service para o Transacao Servico:

  urlTransacaoServico = this.url + "/transacao_servico";
  urlContratados = this.urlTransacaoServico + "/servicos_contratados";
  urlPrestados = this.urlTransacaoServico + "/servicos_prestados";

  contratar(transacaoservico: transacaoservico) {
    return this.http.post<transacaoservico>(
      this.urlTransacaoServico,
      transacaoservico
    );
  }

  listarTransacoesContratadas() {
    return this.http.get<transacaoservico[]>(this.urlContratados);
  }

  listarTransacoesPrestadas() {
    return this.http.get<transacaoservico[]>(this.urlPrestados);
  }
}
