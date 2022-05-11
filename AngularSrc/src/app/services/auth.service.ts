import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthModule } from 'angular2-jwt';


@Injectable()

//  providedIn: 'root'

export class AuthService {
  authToken: any;
  user: any;
  krapula: any;

  constructor(
    private http: HttpClient
    ) { }

    registerUser(user) {
      let Headers = new HttpHeaders();
      Headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/users/register', user, {headers: Headers});
    }

    registerKrapula(krapula) {
      let Headers = new HttpHeaders();
      Headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/hangover', krapula, {headers: Headers});
    }

    authenticateUser(user) {
      let Headers = new HttpHeaders();
      Headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/users/authenticate', user, {headers: Headers});
    }

    getProfile() {
      const headers = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authToken
      });
      this.loadToken();
      return this.http.get("http://localhost:3000/users/profile", {
          headers: headers
        });
    }

    getKrapula() {
      const headers = new HttpHeaders({
        "Content-Type": "application/json",
      });
      return this.http.get("http://localhost:3000/hangover", {
          headers: headers
        });
    }

    storeUserData(token, user){
      localStorage.setItem('id_token', token);
      localStorage.setItem('user', user);
      this.authToken = token;
      this.user = user;
    }

    loadToken(){
      const token = localStorage.getItem('id_token');
      this.authToken = token;
    }

    loggedIn(){
      return tokenNotExpired('id_token');
    }

    logout(){
      this.authToken = null;
      this.user = null;
      localStorage.clear();
    }
}

