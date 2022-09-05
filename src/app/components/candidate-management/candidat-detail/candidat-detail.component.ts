import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  EtatDetailENum,
  EtatEntretienENum,
  ReportTypeEnum,
} from 'src/app/shared/Enumerators/Enums';
import { CandidateModel } from 'src/app/shared/models/candidat-models';
import { InterviewDetailModel } from 'src/app/shared/models/interview-models';
import { StateModel } from 'src/app/shared/models/state-models';
import { CandidatService } from 'src/app/shared/services/candidat.service';
import { InterviewService } from 'src/app/shared/services/interview.service';
import { ReportingService } from 'src/app/shared/services/reporting.service';
import { StateService } from 'src/app/shared/services/state.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';
import { NgxToastrService } from 'src/app/shared/services/toastr.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-candidat-detail',
  templateUrl: './candidat-detail.component.html',
  styleUrls: ['./candidat-detail.component.scss'],
})
export class CandidatDetailComponent implements OnInit {
  public candidatList: CandidateModel[] = [];
  public stateList: StateModel[] = [];
  public interviewDetail: InterviewDetailModel = new InterviewDetailModel();
  public etatId: number = 0;
  public candidatId: number = 0;
  public identiteCandidat: string = '';
  public isHidden = true;
  public reportTypeEnum = ReportTypeEnum;
  public etatDetail: number;
  private idEntretien: number;
  private etatEntretienENum = EtatEntretienENum;
  constructor(
    private candidatService: CandidatService,
    private stateService: StateService,
    private interviewService: InterviewService,
    private toastrService: NgxToastrService,
    private sweetAlert: SweetAlertService,
    private activtedRouter: ActivatedRoute,
    private reportingSevice: ReportingService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.idEntretien = Number(
      this.activtedRouter.snapshot.paramMap.get('idEntretien')
    );
    this.etatDetail = Number(
      this.activtedRouter.snapshot.paramMap.get('etatDetail')
    );
    this.getInterviewById();
    // this.getAllState();
  }
  public changeState() {
    switch (this.interviewDetail.liB_ETAT) {
      case EtatEntretienENum.EnCours: {
        this.onConfirmPresence('Préinscrit');
        break;
      }
      case EtatEntretienENum.Preinscrit: {
        this.onConfirmPresence('Inscrit');
        break;
      }
    }
  }
  private async getAllState() {
    this.stateService.GetAllState().subscribe((data) => {
      this.stateList = data;
      this.etatId = data.find(
        (s) => s.liB_ETAT === EtatEntretienENum.Preinscrit
      ).iD_ETAT;
    });
  }
  public async getInterviewById() {
    this.interviewService
      .GetInterviewById(this.idEntretien)
      .subscribe((data) => {
        this.interviewDetail = data;
        this.interviewDetail.formateur =
          this.interviewDetail.noM_USER +
          ' ' +
          this.interviewDetail.prenoM_USER;
        this.isHidden = false;
      });
  }
  public onCancel() {
    this.identiteCandidat = '';
    this.interviewDetail = new InterviewDetailModel();
    this.isHidden = true;
  }
  public onConfirmPresence(etatEntretien: string) {
    this.interviewDetail.liB_ETAT = etatEntretien;
    this.sweetAlert
      .showChoiceMessage(
        'Cette action va confirmer la présence! Voulez-vous continuer?'
      )
      .then((response: boolean) => {
        if (response) {
          this.interviewService
            .ChangeStateInterview(this.interviewDetail)
            .subscribe((data) => {
              this.toastrService.displaySuccessMessage('Confirmé avec succés!');
              this.isHidden = true;
              this.onPrint(this.reportTypeEnum.PDF);
              this.onCancel();
              // this.sweetAlert
              // .showChoiceMessage(
              //   'Voulez-vous imprimer l\'attetation?'
              // ).then((response)=>{
              //   if(response){

              //   }
              // })
            });
        }
      });
  }
  public onRefusePresence() {
    this.interviewDetail.liB_ETAT = EtatEntretienENum.Refuse;
    this.sweetAlert
      .showChoiceMessage(
        'Cette action va refuser la présence! Voulez-vous continuer?'
      )
      .then((response: boolean) => {
        if (response) {
          this.interviewService
            .ChangeStateInterview(this.interviewDetail)
            .subscribe((data) => {
              this.toastrService.displaySuccessMessage('Refusé avec succés!');
              this.isHidden = true;
              this.onCancel();
            });
        }
      });
  }
  public async onPrint(reportType: ReportTypeEnum) {
    switch (this.interviewDetail.liB_ETAT) {
      case EtatEntretienENum.Preinscrit: {
        
        this.reportingSevice
          .GeneratePrinscriptionReport(
            this.interviewDetail.iD_ENTRETIEN,
            reportType
          )
          .subscribe((response) => {;
            // console.log(filePath)
            // window.open(filePath, "_blank")
            let fileName = response.headers
              .get('content-disposition')
              ?.split(';')[1]
              .split('=')[1];
              console.log(fileName, 'hghghgh');
              let filePath = environment.PathFiles + fileName
            // let blob = response.body;
            //  let a = document.createElement('a');
            // a.download = fileName;
            // a.href = filePath;
            // a.click();
            // let filePath = URL.createObjectURL(blob);
            // console.log(filePath)
             window.open(filePath, "_blank")
           
          });
        break;
      }
      case EtatEntretienENum.Inscrit: {
        this.reportingSevice
          .GenerateInscriptionReport(
            this.interviewDetail.iD_ENTRETIEN,
            reportType
          )
          .subscribe((data) => {
            // let filePath = environment.PathFiles + data.toString();
            // console.log(filePath);
            // let fileName = response.headers
            //   .get('content-disposition')
            //   ?.split(';')[1]
            //   .split('=')[1];
            // let blob: Blob = response.body as Blob;
            // let a = document.createElement('a');
            // a.download = fileName;
            // a.href = window.URL.createObjectURL(blob);
            // a.click();
          });
        break;
      }
    }
  }
}
