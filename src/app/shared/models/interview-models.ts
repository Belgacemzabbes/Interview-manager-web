import { FormationModel } from "./formation-models";

export class InterviewAddModel {
  iD_CANDIDAT: number;
  iD_FORMATION: number;
  iD_SESSION: number;
  iD_ETABLISSEMENT: number;
  heurE_ENTRETIEN: string;
  datE_ENTRETIEN: string;
  esT_ANNULE: number;
  formation: FormationModel;
  constructor(){
    this.formation = new FormationModel()
  }
}
export class InterviewDetailModel {
  iD_ENTRETIEN: number;
  iD_ETABLISSEMENT: number;
  liB_ETABLISSEMENT: string;
  iD_ETAT: number;
  liB_ETAT: string;
  iD_FORMATION_CANDIDAT: number;
  iD_MOUVEMENT: number;
  iD_SESSION: number;
  liB_SESSION: string;
  datE_SESSION: string;
  datE_ENTRETIEN: string;
  heurE_ENTRETIEN: string;
  esT_ANNULE: boolean;
  iD_CANDIDAT: number;
  identitE_CANDIDAT: string;
  nationalitE_CANDIDAT: string;
  datE_NAISSANCE_CANDIDAT: string;
  lieU_NAISSANCE_CANDIDAT: string;
  adressE_CANDIDAT: string;
  urL_CANDIDAT: string;
  liB_FORMATION: string;
  datE_ENTREE: string;
  datE_LIMITE: string;
  ville: string;
  classe: string;
  directeur: string;
  montant: number;
  annee: number;
  niveaU_ADMISSION: string;
  iD_USER: number;
  noM_USER: string;
  prenoM_USER: string;
  formateur: string;
  commentaire: string;
}
export class InterviewSearchModel {
  session: string;
  dateSession: Date;
  estAnnule: number;
}
