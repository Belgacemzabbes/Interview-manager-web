export class FormationModel {
    iD_FORMATION: number;
    liB_FORMATION: string;
    iD_ETABLISSEMENT_SOURCE: number;
    iD_ETABLISSEMENT
    datE_ENTREE: string;
    datE_LIMITE: string;
    ville: string;
    class: string;
    directeur: string;
    montant: number;
    annee: number;
    iD_FORMATION_SOURCE: number;
    niveaU_ADMISSION: string;
}

export class FormationDetailModel {
    iD_FORMATION: number;
    liB_FORMATION: string;
    iD_ETABLISSEMENT_SOURCE: number;
    iD_ETABLISSEMENT: number;
    liB_ETABLISSEMENT: string;
    datE_ENTREE: string;
    datE_LIMITE: string;
    ville: string;
    classe: string;
    directeur: string;
    montant: number;
    annee: number;
    iD_FORMATION_SOURCE: number;
    niveaU_ADMISSION: string;
}