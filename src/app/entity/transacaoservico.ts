import { servico } from "./servico";
import { usuario } from "./usuario";

export class transacaoservico {  
  id?: number;  
  Servico?: servico;  
  usuario_contratante?: usuario;  
  usuario_prestador?: usuario;  
  data_servico?: String;  
  qtd_horas?: number;  
  valor_total?: number;  
  utiliza_pontos?: boolean;  
  qtd_pontos?: number;
}