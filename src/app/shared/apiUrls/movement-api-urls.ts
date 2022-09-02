import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class MovementApiUrls{
    public GetMovementByEntretienIdAndEtatIdUrl = environment.apiUrl + "/api/Movement/GetMovementByEntretienIdAndEtatId"
}