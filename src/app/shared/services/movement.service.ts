import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovementApiUrls } from '../apiUrls/movement-api-urls';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private movementApiUrls: MovementApiUrls
  ) {}

  async GetMovementByEntretienIdAndEtatId(idEntretien: number, idEtat: number) {
    const jwt = this.authService.GetToken();
    return this.http.get(
      this.movementApiUrls.GetMovementByEntretienIdAndEtatIdUrl,
      { headers: jwt, params: { idEntretien, idEtat } }
    );
  }
}
