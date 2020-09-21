import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtakuService } from '../services/otaku.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formUser: FormGroup;


  constructor(
    private router: Router,
    private otakuService: OtakuService
  ) {
    this.formUser = new FormGroup({
      nickName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      gender: new FormControl(),
      country: new FormControl(),
      province: new FormControl(),
      birthday: new FormControl()

    });


  }

  ngOnInit(): void { }
  // Preguntar como coger solo la fecha y no la hora de la fecha de nacimiento del imput  birthday
  async addUserBBDD(): Promise<any> {
    try {
      const userData = this.formUser.value;
      console.log('FormsComponent -> addUserToBBDD -> userData', userData);


      const jsonCreateUser = this.otakuService.createUser(userData);
      console.log('User created');

      this.formUser.reset();
    } catch (error) {
      console.log(error);
    }
    // this.router.navigate(['/userLogin']);
  }


}
