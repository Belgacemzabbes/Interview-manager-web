import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CandidatApiUrls } from '../apiUrls/candidat-api-urls';
import {
  CandidateModel,
  CandidateSearchModel,
} from '../models/candidat-models';
import { InterviewDetailModel } from '../models/interview-models';
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
  public GetCandidateBySearchCriteria(searchCriteria: CandidateSearchModel) {
    const jwt = this.authService.GetToken();
    return this.http.post<InterviewDetailModel[]>(
      this.candidatApiUrls.GetCandidateBySearchCriteria,
      searchCriteria,
      {
        headers: jwt,
      }
    );
  }
  public GetCandidateByStateId(etatId: number) {
    const jwt = this.authService.GetToken();
    return this.http.get<CandidateModel[]>(
      this.candidatApiUrls.GetCandidateByStateId,
      {
        headers: jwt,
        params: { etatId },
      }
    );
  }
  public GetDetailCandidatById(id: number) {
    const jwt = this.authService.GetToken();
    return this.http.get<CandidateModel>(
      this.candidatApiUrls.GetDetailCandidatById,
      {
        headers: jwt,
        params: { id },
      }
    );
  }
}
