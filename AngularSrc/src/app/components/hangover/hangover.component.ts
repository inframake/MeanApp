import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-hangover',
  templateUrl: './hangover.component.html',
  styleUrls: ['./hangover.component.css']
})
export class HangoverComponent implements OnInit {
  olo1!: String;
  olo2!: String;
  olo3!: String;
  olo4!: String;
  olo5!: String;
  olo6!: String;
  registerKrapula: any;


  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }

  onKrapulaSubmit() {
    const krapula = {
      olo1: this.olo1,
      olo2: this.olo2,
      olo3: this.olo3,
      olo4: this.olo4,
      olo5: this.olo5,
      olo6: this.olo6
    }

  
  this.registerKrapula(krapula) 
    if(krapula['success']){
      this.flashMessage.show('Tiedot tallennettu', {cssClass: 'alert-danger', timeout: 3000});
    }else
    this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/hangover'])
  
  }
  }

