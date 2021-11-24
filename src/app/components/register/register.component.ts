import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MongodbService } from 'src/app/services/mongodb/mongodb.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //Formulario de registro
  registerForm = this.fb.group({
    fullName: [''],
    email: [''],
    password: [''],
    userType: [''],
    socialUrl: ['']
  });

  constructor(private fb:FormBuilder, private _mongodb:MongodbService) { }

  ngOnInit(): void {
  }

  //Método para registrar nuevo usuario
  async registerNewUser(){
    let response:any = await this._mongodb.registerUser(this.registerForm.value);
    if(response.done){
      alert(response.message);
      this.registerForm.reset();
    }
    else{
      alert(response.message);
    }
  }
}
