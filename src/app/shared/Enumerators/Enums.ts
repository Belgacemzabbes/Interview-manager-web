export enum AddReponseEnum {
  Exist = 1,
  NotExist = 2,
}
export enum PageSizeEnum {
  Page10 = '10',
  Page20 = '20',
  Page50 = '50',
  Page75 = '75',
  Page100 = '100',
}
export enum EtatEntretienENum {
  EnCours = 'En cours',
  Preinscrit = 'Préinscrit',
  Inscrit = 'Inscrit',
  Absent = 'Absent',
  Refuse = 'Refusé',
}
export enum EtatDetailENum {
  Presence = 1,
  Preinscrit = 2,
  Paiement = 3,
  Attestation = 4,
}
export const PageSizeEnumList: {
  key: string;
  value: string;
}[] = Object.entries(PageSizeEnum).map(([key, value]) => ({ key, value }));

export enum ReportTypeEnum {
  PDF = 'pdf',
  WORD = 'word',
}
