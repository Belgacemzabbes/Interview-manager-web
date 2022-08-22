import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class ReportingApiUrls{
    public GeneratePrinscriptionReportUrl = environment.apiUrl + "/api/Preinscription/GeneratePrinscriptionReport";
}