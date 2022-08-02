export class SessionModel {
    iD_SESSION: number;
    liB_SESSION: string;
    datE_DEBUT: string;
    datE_FIN: string;
    datE_CREATION: Date;
    iD_ETABLISSEMENT: number;
    iD_USER: number;
    esT_ANNULE: number;
    constructor(){
        this.datE_CREATION = new Date();
    }
}
export class SessionSearchModel {
    session: string;
    dateDebut: Date;
    dateFin: Date;
    estAnnule: number
}