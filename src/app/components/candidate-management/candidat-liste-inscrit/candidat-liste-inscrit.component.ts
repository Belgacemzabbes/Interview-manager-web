import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  EtatDetailENum,
  EtatEntretienENum,
  PageSizeEnumList,
  ReportTypeEnum,
} from 'src/app/shared/Enumerators/Enums';
import { CandidateModel, CandidatListeEntretienSearchCriterea } from 'src/app/shared/models/candidat-models';
import { InterviewDetailModel } from 'src/app/shared/models/interview-models';
import { StateModel } from 'src/app/shared/models/state-models';
import { UserModel } from 'src/app/shared/models/user-models';
import { CandidatService } from 'src/app/shared/services/candidat.service';
import { InterviewService } from 'src/app/shared/services/interview.service';
import { PaginationConfig } from 'src/app/shared/services/pagination-config.service';
import { StateService } from 'src/app/shared/services/state.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';
import { NgxToastrService } from 'src/app/shared/services/toastr.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-candidat-liste-inscrit',
  templateUrl: './candidat-liste-inscrit.component.html',
  styleUrls: ['./candidat-liste-inscrit.component.scss'],
})
export class CandidatListeInscritComponent implements OnInit {
  public candidatList: CandidateModel[] = [];
  public stateList: StateModel[] = [];
  public interviewDetail: InterviewDetailModel = new InterviewDetailModel();
  public searchCriterea: CandidatListeEntretienSearchCriterea = new CandidatListeEntretienSearchCriterea();
  public interviewList: InterviewDetailModel[] = [];
  public interviewListFiltered: InterviewDetailModel[] = [];
  public etatId: number = 0;
  public candidatId: number = 0;
  public identiteCandidat: string = '';
  public isHidden = true;
  public reportTypeEnum = ReportTypeEnum;
  public searchTerm = new FormControl('');
  public paginationConfig = new PaginationConfig();
  public pageSizeList = PageSizeEnumList;
  public etatDetail = EtatDetailENum;
  public formateurList: UserModel[] = [];
  constructor(
    private candidatService: CandidatService,
    private stateService: StateService,
    private interviewService: InterviewService,
    private toastrService: NgxToastrService,
    private sweetAlert: SweetAlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getAllState();
    this.GetAllFormateur();
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
          (this.searchCriterea.idEtat = this.stateList.find(
            (s) => s.liB_ETAT === EtatEntretienENum.Inscrit
          ).iD_ETAT),
          this.getInterviewByCandidatListeEntretienSearchCriterea()
        )
      );
  }
  async GetAllFormateur() {
    (await this.userService.GetAllFormateurs()).subscribe((data) => {
      this.formateurList = data;
      this.formateurList.map(f => f.nomComplet = f.noM_USER + ' ' + f.prenoM_USER);
    });
  }
  public getInterviewByCandidatListeEntretienSearchCriterea() {
    this.interviewService
      .GetInterviewByCandidatListeEntretienSearchCriterea(this.searchCriterea)
      .subscribe((data) => {
        this.interviewList = data;
        this.interviewListFiltered = data;
      });
  }
  public async onChangeCandidate() {
    this.interviewService
      .GetInterviewByCandidatIdAndEtatId(this.candidatId, this.etatId)
      .subscribe(
        (data) => ((this.interviewDetail = data), (this.isHidden = false))
      );
  }
  public onCancel() {
    this.identiteCandidat = '';
    this.interviewDetail = new InterviewDetailModel();
    this.isHidden = true;
  }
  public onConfirmPresence(interview: InterviewDetailModel) {
    interview.liB_ETAT = EtatEntretienENum.Inscrit;
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
              this.onCancel();
            });
        }
      });
  }
  public onRefusePresence(interview) {
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
