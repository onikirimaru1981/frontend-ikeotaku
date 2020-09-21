import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtakuService } from '../services/otaku.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formUser: FormGroup;

  constructor(
    private router: Router,
    private otakuService: OtakuService
  ) {
    this.formUser = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });

  }

  ngOnInit(): void {
  }

  async userLogin(): Promise<any> {
    try {
      const userData = this.formUser.value;
      // console.log('LoginUserComponent -> ngOnInit -> userData', userData);
      const dataUserLogin = await this.otakuService.userLogin(userData);
      console.log(
        'LoginUserComponent -> ngOnInit -> jsonUserLogin',
        dataUserLogin
      );

      sessionStorage.setItem(
        'user_email',
        JSON.stringify(dataUserLogin.user_name)
      );
      sessionStorage.setItem('token', JSON.stringify(dataUserLogin.token));
      sessionStorage.setItem('email', JSON.stringify(dataUserLogin.email));
      sessionStorage.setItem('password', JSON.stringify(dataUserLogin.password));
      this.router.navigate([`home/${dataUserLogin.email}`]);
    } catch (error) {
      console.log(error);
    }
  }

}


