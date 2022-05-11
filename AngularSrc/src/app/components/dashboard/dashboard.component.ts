import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
  console.log((krapula: any) => {
    console.log(krapula)
  })
}


}