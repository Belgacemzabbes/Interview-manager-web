import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InterviewDetailModel } from 'src/app/shared/models/interview-models';
import { InterviewService } from 'src/app/shared/services/interview.service';

@Component({
  selector: 'app-detail-interview',
  templateUrl: './detail-interview.component.html',
  styleUrls: ['./detail-interview.component.css'],
})
export class DetailInterviewComponent implements OnInit {
  public interviewDetail: InterviewDetailModel;
  public interviewDetailOld: InterviewDetailModel = new InterviewDetailModel();
  private id: any;
  public canEdit: boolean = false;
  constructor(
    private interviewService: InterviewService,
    private router: ActivatedRoute
  ) {
    this.interviewDetail = new InterviewDetailModel();
  }

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.getInterviewById();
  }

  private async getInterviewById() {
    this.interviewService.GetInterviewById(this.id).subscribe((data) => {
      this.interviewDetail = data;
    });
  }
  public onEdit() {
    this.interviewDetailOld.adressE_CANDIDAT = this.interviewDetail.adressE_CANDIDAT;
    this.interviewDetailOld.annee = this.interviewDetail.annee;
    this.interviewDetailOld.classe = this.interviewDetail.classe;
    this.interviewDetailOld.datE_ENTREE = this.interviewDetail.datE_ENTREE;
    this.interviewDetailOld.datE_ENTRETIEN = this.interviewDetail.datE_ENTRETIEN;
    this.interviewDetailOld.datE_LIMITE = this.interviewDetail.datE_LIMITE;
    this.interviewDetailOld.datE_NAISSANCE_CANDIDAT = this.interviewDetail.datE_NAISSANCE_CANDIDAT;
    this.interviewDetailOld.datE_SESSION = this.interviewDetail.datE_SESSION;
    this.interviewDetailOld.directeur = this.interviewDetail.directeur;
    this.interviewDetailOld.esT_ANNULE = this.interviewDetail.esT_ANNULE;
    this.interviewDetailOld.heurE_ENTRETIEN = this.interviewDetail.heurE_ENTRETIEN;
    this.interviewDetailOld.iD_CANDIDAT = this.interviewDetail.iD_CANDIDAT;
    this.interviewDetailOld.iD_ENTRETIEN = this.interviewDetail.iD_ENTRETIEN;
    this.interviewDetailOld.iD_ETABLISSEMENT = this.interviewDetail.iD_ETABLISSEMENT;
    this.interviewDetailOld.iD_FORMATION_CANDIDAT = this.interviewDetail.iD_FORMATION_CANDIDAT;
    this.interviewDetailOld.montant = this.interviewDetail.montant;
    this.interviewDetailOld.nationalitE_CANDIDAT = this.interviewDetail.nationalitE_CANDIDAT;
    this.interviewDetailOld.urL_CANDIDAT = this.interviewDetail.urL_CANDIDAT;
    this.interviewDetailOld.ville = this.interviewDetail.ville;
    this.interviewDetailOld.liB_SESSION = this.interviewDetail.liB_SESSION;
    this.interviewDetailOld.liB_ETABLISSEMENT = this.interviewDetail.liB_ETABLISSEMENT;
    this.interviewDetailOld.lieU_NAISSANCE_CANDIDAT = this.interviewDetail.lieU_NAISSANCE_CANDIDAT;
    this.interviewDetailOld.liB_FORMATION = this.interviewDetail.liB_FORMATION;
    this.interviewDetailOld.liB_ETAT = this.interviewDetail.liB_ETAT;
    this.interviewDetailOld.identitE_CANDIDAT = this.interviewDetail.identitE_CANDIDAT;
    this.interviewDetailOld.iD_MOUVEMENT = this.interviewDetail.iD_MOUVEMENT;
    this.interviewDetailOld.iD_SESSION = this.interviewDetail.iD_SESSION;
    this.interviewDetailOld.iD_ETAT = this.interviewDetail.iD_ETAT;
    this.canEdit = true;
  }
  public onSaveEdit() {
    this.interviewService
      .EditInterview(this.interviewDetail)
      .subscribe((data) => {
        this.canEdit = false;
      });
  }
  public onCancelEdit() {
     this.interviewDetail.adressE_CANDIDAT = this.interviewDetailOld.adressE_CANDIDAT;
    this.interviewDetail.annee = this.interviewDetailOld.annee;
    this.interviewDetail.classe = this.interviewDetailOld.classe;
    this.interviewDetail.datE_ENTREE = this.interviewDetailOld.datE_ENTREE;
    this.interviewDetail.datE_ENTRETIEN = this.interviewDetailOld.datE_ENTRETIEN;
    this.interviewDetail.datE_LIMITE = this.interviewDetailOld.datE_LIMITE;
    this.interviewDetail.datE_NAISSANCE_CANDIDAT = this.interviewDetailOld.datE_NAISSANCE_CANDIDAT;
    this.interviewDetail.datE_SESSION = this.interviewDetailOld.datE_SESSION;
    this.interviewDetail.directeur = this.interviewDetailOld.directeur;
    this.interviewDetail.esT_ANNULE = this.interviewDetailOld.esT_ANNULE;
    this.interviewDetail.heurE_ENTRETIEN = this.interviewDetailOld.heurE_ENTRETIEN;
    this.interviewDetail.iD_CANDIDAT = this.interviewDetailOld.iD_CANDIDAT;
    this.interviewDetail.iD_ENTRETIEN = this.interviewDetailOld.iD_ENTRETIEN;
    this.interviewDetail.iD_ETABLISSEMENT = this.interviewDetailOld.iD_ETABLISSEMENT;
    this.interviewDetail.iD_FORMATION_CANDIDAT = this.interviewDetailOld.iD_FORMATION_CANDIDAT;
    this.interviewDetail.montant = this.interviewDetailOld.montant;
    this.interviewDetail.nationalitE_CANDIDAT = this.interviewDetailOld.nationalitE_CANDIDAT;
    this.interviewDetail.urL_CANDIDAT = this.interviewDetailOld.urL_CANDIDAT;
    this.interviewDetail.ville = this.interviewDetailOld.ville;
    this.interviewDetail.liB_SESSION = this.interviewDetailOld.liB_SESSION;
    this.interviewDetail.liB_ETABLISSEMENT = this.interviewDetailOld.liB_ETABLISSEMENT;
    this.interviewDetail.lieU_NAISSANCE_CANDIDAT = this.interviewDetailOld.lieU_NAISSANCE_CANDIDAT;
    this.interviewDetail.liB_FORMATION = this.interviewDetailOld.liB_FORMATION;
    this.interviewDetail.liB_ETAT = this.interviewDetailOld.liB_ETAT;
    this.interviewDetail.identitE_CANDIDAT = this.interviewDetailOld.identitE_CANDIDAT;
    this.interviewDetail.iD_MOUVEMENT = this.interviewDetailOld.iD_MOUVEMENT;
    this.interviewDetail.iD_SESSION = this.interviewDetailOld.iD_SESSION;
    this.interviewDetail.iD_ETAT = this.interviewDetailOld.iD_ETAT;
    this.canEdit = false;
  }
}
