import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ikeotaku';
  logado: boolean;
  mySubscription: any;

  constructor(
    private router: Router


  ) {
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
  salirPerfil(): void {

    sessionStorage.clear();
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }




}
