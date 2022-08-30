import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserApiUrls } from '../apiUrls/user-api-urls';
import { UserModel, UserRoleModel } from '../models/user-models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private userApiUrls: UserApiUrls
  ) {}
  public async addUser(user: UserModel) {
    const jwt = this.authService.GetToken();
    return this.http.post<any>(this.userApiUrls.addUserUrl, user, {
      headers: jwt,
    });
  }
   async GetAllUserRoles() {
    const jwt = this.authService.GetToken();
    return this.http.get<UserRoleModel[]>(this.userApiUrls.GetAllUserRolesUrl, {
      headers: jwt,
    });
  }
  async GetAllFormateurs() {
    const jwt = this.authService.GetToken();
    return this.http.get<UserModel[]>(this.userApiUrls.GetAllFormateurs, {
      headers: jwt,
    });
  }
}
