import { Component, OnInit } from '@angular/core';
import { EtatEntretienENum } from 'src/app/shared/Enumerators/Enums';
import { CandidateModel } from 'src/app/shared/models/candidat-models';
import { InterviewDetailModel } from 'src/app/shared/models/interview-models';
import { StateModel } from 'src/app/shared/models/state-models';
import { CandidatService } from 'src/app/shared/services/candidat.service';
import { InterviewService } from 'src/app/shared/services/interview.service';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-candidat-presence',
  templateUrl: './candidat-presence.component.html',
  styleUrls: ['./candidat-presence.component.css'],
})
export class CandidatPresenceComponent implements OnInit {
  public candidatList: CandidateModel[] = [];
  public stateList: StateModel[] = [];
  public interviewDetail: InterviewDetailModel = new InterviewDetailModel();
  public etatId: number;
  public candidatId: number;
  public isHidden = true;

  constructor(
    private candidatService: CandidatService,
    private stateService: StateService,
    private interviewService: InterviewService
  ) {}

  ngOnInit(): void {
    this.getAllState();
    
  }
  private async getCandidateByStateId() {
    this.candidatService.GetCandidateByStateId(this.etatId).subscribe((data) => {
      this.candidatList = data;
    });
  }
  private async getAllState() {
    this.stateService
      .GetAllState()
      .subscribe(
        (data) => (
          (this.stateList = data),
          (this.etatId = data.find(
            (s) => (s.liB_ETAT = EtatEntretienENum.EnCours)
          ).iD_ETAT),
        this.getCandidateByStateId()
        )
      );
  }
  public async onChangeCandidate() {
    this.interviewService
      .GetInterviewByCandidatId(
        this.candidatId,
        this.etatId
      )
      .subscribe((data) => (this.interviewDetail = data,
        this.isHidden = false));
  }
  public onCancel() {
    this.candidatId = 0;
    this.interviewDetail = new InterviewDetailModel();
    this.isHidden = true
  }
  public onConfirmPresence(){
    this.interviewDetail.liB_ETAT = EtatEntretienENum.Presence
   
    this.interviewService.ChangeStateInterview(this.interviewDetail).subscribe(data=>{})
  }
  public onRefusePresence(){
    this.interviewDetail.liB_ETAT = EtatEntretienENum.Refuse
    this.interviewService.ChangeStateInterview(this.interviewDetail).subscribe(data=>{})
  }
}
