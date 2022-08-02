import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CandidatApiUrls } from '../apiUrls/candidat-api-urls';
import { CandidateModel } from '../models/candidat-models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CandidatService {
  constructor(
    private http: HttpClient,
    private candidatApiUrls: CandidatApiUrls,
    private authService: AuthService
  ) {}
  public GetAllCandidat() {
    const jwt = this.authService.GetToken();
    return this.http.get<CandidateModel[]>(
      this.candidatApiUrls.GetAllCandidat,
      {
        headers: jwt,
      }
    );
  }
  public GetDetailCandidatById(id: number) {
    const jwt = this.authService.GetToken();
    const data = this.http.get<CandidateModel>(
      this.candidatApiUrls.GetDetailCandidatById,
      {
        headers: jwt,
        params: { id },
      }
    );
    return data.toPromise();
  }
}
