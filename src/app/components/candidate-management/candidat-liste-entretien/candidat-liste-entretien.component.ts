import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  EtatDetailENum,
  EtatEntretienENum,
  PageSizeEnumList,
} from 'src/app/shared/Enumerators/Enums';
import { CandidateModel, CandidatListeEntretienSearchCriterea } from 'src/app/shared/models/candidat-models';
import { InterviewDetailModel } from 'src/app/shared/models/interview-models';
import { StateModel } from 'src/app/shared/models/state-models';
import { CandidatService } from 'src/app/shared/services/candidat.service';
import { InterviewService } from 'src/app/shared/services/interview.service';
import { PaginationConfig } from 'src/app/shared/services/pagination-config.service';
import { StateService } from 'src/app/shared/services/state.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';
import { NgxToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-candidat-liste-entretien',
  templateUrl: './candidat-liste-entretien.component.html',
  styleUrls: ['./candidat-liste-entretien.component.css'],
})
export class CandidatListeEntretienComponent implements OnInit {
  public candidatList: CandidateModel[] = [];
  public stateList: StateModel[] = [];
  public interviewDetail: InterviewDetailModel = new InterviewDetailModel();
  public interviewList: InterviewDetailModel[] = [];
  public interviewListFiltered: InterviewDetailModel[] = [];
  public etatId: number = 0;
  public identiteCandidat: string = '';
  public searchCriterea: CandidatListeEntretienSearchCriterea = new CandidatListeEntretienSearchCriterea();
  public isHidden = true;
  public searchTerm = new FormControl('');
  public paginationConfig = new PaginationConfig();
  public pageSizeList = PageSizeEnumList;
  public etatDetail = EtatDetailENum
  constructor(
    private candidatService: CandidatService,
    private stateService: StateService,
    private interviewService: InterviewService,
    private toastrService: NgxToastrService,
    private sweetAlert: SweetAlertService
  ) {}

  ngOnInit(): void {
    this.getAllState();
  }
  private async getCandidateByStateId() {
    this.candidatService
      .GetCandidateByStateId(this.etatId)
      .subscribe((data) => {
        this.candidatList = data;
      });
  }
  private async getAllState() {
    this.stateService
      .GetAllState()
      .subscribe(
        (data) => (
          (this.stateList = data),
          (this.searchCriterea.idEtat = data.find(
            (s) => s.liB_ETAT === EtatEntretienENum.EnCours
          ).iD_ETAT),
          this.getInterviewByCandidatListeEntretienSearchCriterea()
        )
      );
  }
  public getInterviewByCandidatListeEntretienSearchCriterea() {
    this.interviewService
      .GetInterviewByCandidatListeEntretienSearchCriterea(this.searchCriterea)
      .subscribe((data) => {
        this.interviewList = data;
        this.interviewListFiltered = data;
      });
  }
  public onCancel() {
    this.searchCriterea = new CandidatListeEntretienSearchCriterea();
    this.getInterviewByCandidatListeEntretienSearchCriterea()
    this.isHidden = true;
  }
  public onConfirmPresence(interview: InterviewDetailModel) {
    interview.liB_ETAT = EtatEntretienENum.Preinscrit;
    this.sweetAlert
      .showChoiceMessage(
        'Cette action va confirmer la présence! Voulez-vous continuer?'
      )
      .then((response: boolean) => {
        if (response) {
          this.interviewService
            .ChangeStateInterview(interview)
            .subscribe((data) => {
              const index = this.interviewListFiltered.indexOf(interview, 0);
              if (index > -1) {
                this.interviewListFiltered.splice(index, 1);
              }
              this.toastrService.displaySuccessMessage('Confirmé avec succés!');
              this.isHidden = true;
              this.getCandidateByStateId();
            });
        }
      });
  }
  public onRefusePresence(interview: InterviewDetailModel) {
    interview.liB_ETAT = EtatEntretienENum.Refuse;
    this.sweetAlert
      .showChoiceMessage(
        'Cette action va refuser la présence! Voulez-vous continuer?'
      )
      .then((response: boolean) => {
        if (response) {
          this.interviewService
            .ChangeStateInterview(interview)
            .subscribe((data) => {
              const index = this.interviewListFiltered.indexOf(interview, 0);
              if (index > -1) {
                this.interviewListFiltered.splice(index, 1);
              }
              this.toastrService.displaySuccessMessage('Refusé avec succés!');
              this.isHidden = true;
              this.getCandidateByStateId();
              this.onCancel();
            });
        }
      });
  }
}
