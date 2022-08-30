import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionApiUrls } from '../apiUrls/session-api-urls';
import { AddReponseEnum } from '../Enumerators/Enums';
import { SessionModel, SessionSearchModel } from '../models/session-models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(
    private sessionApiUrls: SessionApiUrls,
    private authService: AuthService,
    private http: HttpClient
  ) {}
  public GetAllSession(sessionSearch: SessionSearchModel) {
    const jwt = this.authService.GetToken();
    return this.http.post<SessionModel[]>(
      this.sessionApiUrls.GetAllSession,
      sessionSearch,
      { headers: jwt }
    );
  }
  public async AddSession(session: SessionModel) {
    const jwt = this.authService.GetToken();
    return this.http.post<AddReponseEnum>(
      this.sessionApiUrls.AddSession,
      session,
      { headers: jwt }
    );
  }
  public GetSessionById(id: number) {
    const jwt = this.authService.GetToken();
    return this.http.get<SessionModel>(this.sessionApiUrls.GetSessionById, {
      headers: jwt,
      params: { id },
    });
  }

  public AnnulerSession(idSession: number) {
    const jwt = this.authService.GetToken();
    return this.http.get<any>(this.sessionApiUrls.AnnulerSession, {
      headers: jwt,
      params: { idSession },
    });
  }
}
