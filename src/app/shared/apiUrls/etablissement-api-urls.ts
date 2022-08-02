import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class EtablissementApiUrls {
    public GetAllEtablissement = environment.apiUrl + "/api/Establishment/GetAllEstablishment"
}
