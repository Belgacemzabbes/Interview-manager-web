import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormationCandidatApiUrls } from '../apiUrls/formation-candidat-api-urls';
import { FormationCandidatModel } from '../models/formation-candidat-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FormationCandidatService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private formationCandidatApiUrls: FormationCandidatApiUrls
  ) {}

  public AddSession(formCand: FormationCandidatModel){
    const jwt = this.authService.GetToken();
    const data = this.http.post<any>(this.formationCandidatApiUrls.AddFormationCandidat, formCand, { headers: jwt })
    return data.toPromise();
  }
}
