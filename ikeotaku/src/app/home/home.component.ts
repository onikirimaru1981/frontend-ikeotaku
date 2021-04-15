import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logado: boolean;

  constructor() {
    this.logado = false;
  }

  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (token !== null) {
      this.logado = true;
    } else {
      this.logado = false;
    }
  }

}
