import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contratar-servico',
  templateUrl: 'contratar-servico.component.html'
})
export class ContratarServicoComponent implements OnInit {
  @ViewChild('valorHora') valorHora: any;
  @ViewChild('qtdeHoras') qtdeHoras: any;

  calculaValorTotal(){
    let total = this.valorHora + this.qtdeHoras; 
    return total;
  }
    
  ngOnInit(): void {}
}
