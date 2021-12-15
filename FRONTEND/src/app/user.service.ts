import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApiLogin: string = "/api/login";
  urlApiAuth: string = "/api/auth/";

  constructor(private http: HttpClient) { }

  // On obtient un JWT
  public postLogin(login: string, password: string) : Observable<User>{
    let data: string = "login=" + login + "&password=" + password;
    let httpOptions = {
      headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"})
    };
    return this.http.post<User>(this.urlApiLogin, data, httpOptions);
  }

  public getLogin(login: string) : Observable<User> {
    let data: string = "login=" + login;
    return this.http.get<User>(this.urlApiAuth + login);
  }
}
