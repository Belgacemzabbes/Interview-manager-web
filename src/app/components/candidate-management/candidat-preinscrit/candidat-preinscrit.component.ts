import { Component, OnInit } from '@angular/core';
import { EtatEntretienENum, ReportTypeEnum } from 'src/app/shared/Enumerators/Enums';
import { CandidateModel } from 'src/app/shared/models/candidat-models';
import { InterviewDetailModel } from 'src/app/shared/models/interview-models';
import { StateModel } from 'src/app/shared/models/state-models';
import { CandidatService } from 'src/app/shared/services/candidat.service';
import { InterviewService } from 'src/app/shared/services/interview.service';
import { ReportingService } from 'src/app/shared/services/reporting.service';
import { StateService } from 'src/app/shared/services/state.service';
import { NgxToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-candidat-preinscrit',
  templateUrl: './candidat-preinscrit.component.html',
  styleUrls: ['./candidat-preinscrit.component.scss'],
})
export class CandidatPreinscritComponent implements OnInit {
  public candidatList: CandidateModel[] = [];
  public stateList: StateModel[] = [];
  public interviewDetail: InterviewDetailModel = new InterviewDetailModel();
  public etatId: number;
  public candidatId: number;
  public isHidden = true;
  public reportTypeEnum = ReportTypeEnum;
  constructor(
    private candidatService: CandidatService,
    private stateService: StateService,
    private interviewService: InterviewService,
    private toastrService: NgxToastrService,
    private reportingSevice: ReportingService
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
          (this.etatId = data.find(
            (s) => s.liB_ETAT === EtatEntretienENum.Presence
          ).iD_ETAT),
          this.getCandidateByStateId()
        )
      );
  }
  public async onChangeCandidate() {
    this.interviewService
      .GetInterviewByCandidatIdAndEtatId(this.candidatId, this.etatId)
      .subscribe(
        (data) => ((this.interviewDetail = data), (this.isHidden = false))
      );
  }
  public onCancel() {
    this.candidatId = 0;
    this.interviewDetail = new InterviewDetailModel();
    this.isHidden = true;
  }
  public onConfirmPresence() {
    this.interviewDetail.liB_ETAT = EtatEntretienENum.Preinscrit;

    this.interviewService
      .ChangeStateInterview(this.interviewDetail)
      .subscribe((data) => {
        this.toastrService.displaySuccessMessage('Confirmé avec succés!');
        this.isHidden = true;
        this.getCandidateByStateId();
        this.onCancel();
      });
  }
  public onRefusePresence() {
    this.interviewDetail.liB_ETAT = EtatEntretienENum.Refuse;
    this.interviewService
      .ChangeStateInterview(this.interviewDetail)
      .subscribe((data) => {
        this.toastrService.displaySuccessMessage('Refusé avec succés!');
        this.isHidden = true;
        this.getCandidateByStateId();
        this.onCancel();
      });
  }
  public async onPrint(reportType: ReportTypeEnum) {
     this.reportingSevice.GeneratePrinscriptionReport(this.interviewDetail.iD_ENTRETIEN, reportType).subscribe(
      (response) => {
        let fileName = response.headers.get("content-disposition")?.split(";")[1].split("=")[1];
        let blob: Blob = response.body as Blob;
        let a = document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        a.click();
      }
    );
  }
}
