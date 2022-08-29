export class CandidateModel {
    iD_CANDIDAT: number;
    identitE_CANDIDAT: string;
    nationalitE_CANDIDAT: string;
    datE_NAISSANCE_CANDIDAT: string;
    lieU_NAISSANCE_CANDIDAT: string;
    adressE_CANDIDAT: string;
    urL_CANDIDAT: string;
    iD_ETAT: number;
}
export class CandidateSearchModel {
    identiteCandidat: string;
    idEtat: number | null;
    dateNaissance: string | null;
}