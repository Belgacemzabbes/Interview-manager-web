import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportingApiUrls } from '../apiUrls/reporting-api-urls';
import { ReportTypeEnum } from '../Enumerators/Enums';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ReportingService {
  constructor(
    private reportingApiUrls: ReportingApiUrls,
    private authService: AuthService,
    private http: HttpClient
  ) {}
  public GeneratePrinscriptionReport(
    idEntretien: number,
    reportType: ReportTypeEnum
  ) {
    const jwt = this.authService.GetToken();
    return this.http.get(this.reportingApiUrls.GeneratePrinscriptionReportUrl, {
      headers: jwt,
      params: { idEntretien, reportType }, observe: "response", responseType: "blob"
    });
  }
  public GenerateInscriptionReport(
    idEntretien: number,
    reportType: ReportTypeEnum
  ) {
    const jwt = this.authService.GetToken();
    return this.http.get(this.reportingApiUrls.GenerateInscriptionReportUrl, {
      headers: jwt,
      params: { idEntretien, reportType }, observe: "response", responseType: "blob"
    });
  }
}
