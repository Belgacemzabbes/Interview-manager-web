import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class InterviewApiUrls {
  public AddInterview =
    environment.apiUrl + '/api/InterviewAdding/AddInterview';
  public GetAllInterviewBySearchCriteria =
    environment.apiUrl + '/api/Interview/GetAllInterviewBySearchCriteria';
  public GetInterviewById =
    environment.apiUrl + '/api/Interview/GetInterviewById';
  public GetAllInterviewBySessionId =
    environment.apiUrl + '/api/Interview/GetAllInterviewBySessionId';
  public GetInterviewByCandidatIdAndEtatId =
    environment.apiUrl + '/api/Interview/GetInterviewByCandidatIdAndEtatId';
  public EditInterview =
    environment.apiUrl + '/api/InterviewAdding/EditInterview';
  public AnnulerEntretien =
    environment.apiUrl + '/api/Interview/AnnulerEntretien';
  public ChangeStateInterview =
    environment.apiUrl + '/api/Interview/ChangeStateInterview';
}
