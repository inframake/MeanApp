import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name!: String;
  username!: String;
  email!:String
  password!: String;


  constructor(
    private router: Router,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    if(!this.validateService.validateEmail(user.email as string)){
      this.flashMessage.show('Please use valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data['success']){
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/login']);
      }else
      this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
    });

    
  }
}
