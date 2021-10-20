import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contratar',
  templateUrl: 'contratar.component.html'
})
export class ContratarComponent {
  @ViewChild('valorHora') valorHora: any;
  @ViewChild('qtdeHoras') qtdeHoras: any;

  constructor() { }  

  ok(){
    alert("Serviço contratado!")
  }
}
