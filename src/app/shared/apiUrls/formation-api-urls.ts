import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class FormationApiUrls{
    public GetAllFormationByIdEtab = environment.apiUrl + "/api/Formation/GetAllFormationByIdEtab";
    public GetDetailFormationById = environment.apiUrl + "/api/Formation/GetDetailFormationById";
}