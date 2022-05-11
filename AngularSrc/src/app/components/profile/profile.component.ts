import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { observable } from 'rxjs';
import { profile } from 'console';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: any;
  krapula!: any;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {     
    this.getUser();

    this.getKrapula();
}

getUser(): void {
    this.authService.getProfile()
        .subscribe((profile: any) => {
            console.log(profile)
            this.user = profile['user'];
        })
}

getKrapula(): void {
  this.krapula.getKrapula()
  console.log((krapula: any) => {
    console.log(krapula)
  })
}


}