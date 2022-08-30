import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserApiUrls {
  public addUserUrl = environment.apiUrl + '/api/Register/AddUser';
  public GetAllUserRolesUrl = environment.apiUrl + "/api/User/GetAllUserRoles"
  public GetAllFormateurs = environment.apiUrl + "/api/User/GetAllFormateurs"
}
