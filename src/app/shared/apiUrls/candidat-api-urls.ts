import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class CandidatApiUrls{
    public GetAllCandidat = environment.apiUrl + "/api/Candidate/GetAllCandidate";
    public GetDetailCandidatById = environment.apiUrl + "/api/Candidate/GetDetailCandidatById";
}