import { categoria } from "./categoria";
import { usuario } from "./usuario";

export class servico {
  id?: number;
  titulo?: String;
  descricao?: String;
  categoria?: categoria;
  usuario?: usuario;
  valor?: number;
}
