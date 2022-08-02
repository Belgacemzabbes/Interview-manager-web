import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class SessionApiUrls {
  public GetAllSession = environment.apiUrl + '/api/Session/GetAllSession';
  public AddSession = environment.apiUrl + '/api/SessionAdding/AddSession';
  public GetSessionById = environment.apiUrl + '/api/Session/GetSessionById';
  public AnnulerSession = environment.apiUrl + '/api/Session/AnnulerSession';
}
