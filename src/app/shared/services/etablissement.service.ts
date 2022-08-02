import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EtablissementApiUrls } from '../apiUrls/etablissement-api-urls';
import { EstablishmentModel } from '../models/establishment-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EtablissementService {
  constructor(
    private etablissementApiUrls: EtablissementApiUrls,
    private authService: AuthService,
    private http: HttpClient
  ) {}
  public GetAllEtablissement() {
    const jwt = this.authService.GetToken();
    return this.http.get<EstablishmentModel[]>(
      this.etablissementApiUrls.GetAllEtablissement,
      { headers: jwt }
    );
  }
}
