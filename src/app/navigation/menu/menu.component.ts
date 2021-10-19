import { Component } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "menu.component.html",
})
export class MenuComponent {
  constructor() {}

  onInit() {
    this.gravaUsuarioLogado();
  }

  gravaUsuarioLogado() {
    localStorage.setItem("id", "7");
  }
}
