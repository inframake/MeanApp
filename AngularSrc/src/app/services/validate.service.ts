import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
        return false;
    } else {
      return true;
    }
}

validateEmail(email: string) {
  const isValidEmail = email.includes("@")
  return isValidEmail;
  //const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //return re.test(email);
}
    
  }


