export class SessionModel {
    iD_SESSION: number;
    liB_SESSION: string;
    datE_SESSION: string;
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
    dateSession: Date;
    estAnnule: number
}