import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable()
export class StateApiUrls{
 public GetAllState = environment.apiUrl + "/api/State/GetAllState"
}