import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterviewApiUrls } from '../apiUrls/interview-api-urls';
import { AddReponseEnum } from '../Enumerators/Enums';
import {
  InterviewAddModel,
  InterviewDetailModel,
  InterviewSearchModel,
} from '../models/interview-models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private interviewApiUrls: InterviewApiUrls
  ) {}
  public AddInterview(interview: InterviewAddModel) {
    const jwt = this.authService.GetToken();
    return this.http.post<AddReponseEnum>(this.interviewApiUrls.AddInterview, interview, {
      headers: jwt,
    });
  }
  public EditInterview(interview: InterviewDetailModel) {
    const jwt = this.authService.GetToken();
    return this.http.post(this.interviewApiUrls.EditInterview, interview, {
      headers: jwt,
    });
  }
  public GetAllInterviewBySearchCriteria(
    interviewSearch: InterviewSearchModel
  ) {
    const jwt = this.authService.GetToken();
    return this.http.post<InterviewDetailModel[]>(
      this.interviewApiUrls.GetAllInterviewBySearchCriteria,
      interviewSearch,
      { headers: jwt }
    );
  }
  public GetInterviewById(id: number) {
    const jwt = this.authService.GetToken();
    return this.http.get<InterviewDetailModel>(
      this.interviewApiUrls.GetInterviewById,
      { headers: jwt, params: { id } }
    );
  }
  public GetAllInterviewBySesssionId(idSession: number) {
    const jwt = this.authService.GetToken();
    return this.http.get<InterviewDetailModel[]>(
      this.interviewApiUrls.GetAllInterviewBySessionId,
      { headers: jwt, params: { idSession } }
    );
  }
  public GetInterviewByCandidatIdAndEtatId(idCandidat: number, idEtat: number) {
    const jwt = this.authService.GetToken();
    return this.http.get<InterviewDetailModel>(
      this.interviewApiUrls.GetInterviewByCandidatIdAndEtatId,
      { headers: jwt, params: { idCandidat,  idEtat} }
    );
  }
  public GetAllInterviewByCandidatIdAndEtatId(identiteCandidat: string, idEtat: number) {
    const jwt = this.authService.GetToken();
    return this.http.get<InterviewDetailModel[]>(
      this.interviewApiUrls.GetAllInterviewByCandidatIdAndEtatIdUrl,
      { headers: jwt, params: { identiteCandidat,  idEtat} }
    );
  }
  public AnnulerEntretien(idEntretien: number) {
    const jwt = this.authService.GetToken();
    return this.http.get<any>(this.interviewApiUrls.AnnulerEntretien, {
      headers: jwt,
      params: { idEntretien },
    });
  }
  public ChangeStateInterview(interviewDetail: InterviewDetailModel) {
    const jwt = this.authService.GetToken();
    return this.http.post<any>(this.interviewApiUrls.ChangeStateInterview,interviewDetail, {
      headers: jwt,
    });
  }
}
