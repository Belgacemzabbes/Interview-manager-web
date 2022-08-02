import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateModel } from 'src/app/shared/models/candidat-models';
import {
  FormationDetailModel,
  FormationModel,
} from 'src/app/shared/models/fomrmation-models';
import { InterviewAddModel } from 'src/app/shared/models/interview-models';
import { SessionModel } from 'src/app/shared/models/session-models';
import { CandidatService } from 'src/app/shared/services/candidat.service';
import { FormationService } from 'src/app/shared/services/formation.service';
import { InterviewService } from 'src/app/shared/services/interview.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { NgxToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-adding-interview',
  templateUrl: './adding-interview.component.html',
  styleUrls: ['./adding-interview.component.css'],
})
export class AddingInterviewComponent implements OnInit {
  public sessionDetail: SessionModel;
  public formationList: FormationDetailModel[] = [];
  public candidatList: CandidateModel[] = [];
  public formationDetail: FormationDetailModel;
  public candidatDetail: CandidateModel = new CandidateModel();
  public interview: InterviewAddModel = new InterviewAddModel();
  public candidatId: any;
  public formationId: any;
  private id: any;
  constructor(
    private sessionService: SessionService,
    private router: ActivatedRoute,
    private formationService: FormationService,
    private candidatService: CandidatService,
    private interviewService: InterviewService,
    private toastrService: NgxToastrService
  ) {
    this.sessionDetail = new SessionModel();
    this.formationDetail = new FormationDetailModel();
  }

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.getSessionById(this.id);
    this.getAllCandidat();
  }

  private async getSessionById(id: number) {
    this.sessionService.GetSessionById(id).subscribe((data) => {
      this.sessionDetail = data;
      this.getAllFormationByIdEtab(this.sessionDetail.iD_ETABLISSEMENT);
    });
  }
  private async getAllFormationByIdEtab(id: number) {
    this.formationService.GetAllFormationByIdEtab(id).subscribe((data) => {
      this.formationList = data;
    });
  }
  private async getAllCandidat() {
    this.candidatService.GetAllCandidat().subscribe((data) => {
      this.candidatList = data;
    });
  }
  public onChangeFormation() {
    this.formationDetail =
      this.formationList.find((f) => f.iD_FORMATION == this.formationId) ??
      new FormationDetailModel();
  }
  public onChangeCandidat(candidat: CandidateModel) {
    this.candidatDetail =
      this.candidatList.find((c) => c.iD_CANDIDAT == this.candidatId) ??
      new CandidateModel();
  }
  public async addInterview() {
    this.interview.iD_SESSION = this.sessionDetail.iD_SESSION;
    this.interview.iD_CANDIDAT = this.candidatDetail.iD_CANDIDAT;
    this.interview.iD_FORMATION = this.formationDetail.iD_FORMATION;
    this.interview.iD_ETABLISSEMENT = this.sessionDetail.iD_ETABLISSEMENT;
    this.interview.heurE_ENTRETIEN.toString();
    this.interviewService.AddInterview(this.interview).then((data) => {
      this.toastrService.displaySuccessMessage('Ajouté avec succés');
    });
  }
}
