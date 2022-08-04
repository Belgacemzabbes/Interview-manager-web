import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormationCandidatModel } from '../models/formation-candidat-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FormationCandidatService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}
}
