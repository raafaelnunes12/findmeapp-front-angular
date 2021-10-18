
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { usuario } from "src/app/entity/usuario";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  url = "http://localhost:8080/usuario";

  cadastrarUsuario(usuario: usuario) {
    return this.http.post<usuario>(this.url, usuario);
  }

  getMeusDadosPorId(id: number) {
    return this.http.get<usuario>(this.url + "/" + id);
  }

  atualizarUsuario(usuario: usuario) {
    return this.http.put<usuario>(this.url + "/" + usuario.id, usuario);
  }

  deletarUsuario(usuario: usuario) {
    return this.http.delete<usuario>(this.url + "/" + usuario.id);
  }
}