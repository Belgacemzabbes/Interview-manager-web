import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormationApiUrls } from '../apiUrls/formation-api-urls';
import {
  FormationDetailModel,
  FormationModel,
} from '../models/formation-models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  constructor(
    private http: HttpClient,
    private formationApiUrls: FormationApiUrls,
    private authService: AuthService
  ) {}

  public GetAllFormationByIdEtab(idEtab: number) {
    const jwt = this.authService.GetToken();
    return this.http.get<FormationDetailModel[]>(
      this.formationApiUrls.GetAllFormationByIdEtab,
      {
        headers: jwt,
        params: { idEtab },
      }
    );
  }
  // public GetDetailFormationById(id: number) {
  //   const jwt = this.authService.GetToken();
  //   const data = this.http.get<FormationDetailModel>(this.formationApiUrls.GetDetailFormationById, {
  //     headers: jwt, params: {id}
  //   });
  //   return data.toPromise();
  // }
}
