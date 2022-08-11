import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthenticationApiUrls } from '../apiUrls/authentication-api-urls';
import { MenuModel } from '../models/menu-models';
import {
  CurrentUserModel,
  UserLoginModel,
  UserModel,
} from '../models/user-models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private authenticationApiUrls: AuthenticationApiUrls,
    private router: Router,
  ) {}
  public Login(user: UserLoginModel) {
    return this.http.post<CurrentUserModel>(
      this.authenticationApiUrls.loginUrl,
      user
    )
  }
  public logout() {
    localStorage.setItem("IsLoggedIn", "false");
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/content/login']);
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return authToken !== null ? true : false;
  }
  public GetToken() {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  async GetUserById() {
    const id = Number(localStorage.getItem('user'));
    const jwt = localStorage.getItem('token') ?? '';
    return this.http.get<UserModel>(this.authenticationApiUrls.GetUserById, {
      headers: { jwt },
      params: { id },
    });
  }
  async GetAllMenuByUSerId() {
    const idUser = Number(localStorage.getItem('user'));
    const jwt = localStorage.getItem('token') ?? '';
    return this.http.get<MenuModel[]>(
      this.authenticationApiUrls.GetAllMenuByUserId,
      { headers: { jwt }, params: { idUser } }
    );
  }
}
