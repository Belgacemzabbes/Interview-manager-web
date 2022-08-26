import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class ReportingApiUrls{
    public GeneratePrinscriptionReportUrl = environment.apiUrl + "/api/ReportingPreinscription/GeneratePrinscriptionReport";
    public GenerateInscriptionReportUrl = environment.apiUrl + "/api/ReportingInscription/GenerateInscriptionReport";
}