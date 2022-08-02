import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthenticationApiUrls {
    public loginUrl = environment.apiUrl + "/api/Authentication/Login"
    public GetUserById = environment.apiUrl + "/api/Authentication/GetUserById"
    public GetAllMenuByUserId = environment.apiUrl + "/api/Authentication/GetAllMenuByUserId"
}
