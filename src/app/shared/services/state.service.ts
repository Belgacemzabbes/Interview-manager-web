import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateApiUrls } from '../apiUrls/state-api-urls';
import { StateModel } from '../models/state-models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private stateApiUrls: StateApiUrls
  ) {}
  public GetAllState() {
    const jwt = this.authService.GetToken();
    return this.http.get<StateModel[]>(this.stateApiUrls.GetAllState, {
      headers: jwt,
    });
  }
}
