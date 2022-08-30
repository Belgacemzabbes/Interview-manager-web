import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddReponseEnum } from 'src/app/shared/Enumerators/Enums';
import { EstablishmentModel } from 'src/app/shared/models/establishment-model';
import { SessionModel } from 'src/app/shared/models/session-models';
import { UserModel } from 'src/app/shared/models/user-models';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EtablissementService } from 'src/app/shared/services/etablissement.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';
import { NgxToastrService } from 'src/app/shared/services/toastr.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-adding-session',
  templateUrl: './adding-session.component.html',
  styleUrls: ['./adding-session.component.css'],
})
export class AddingSessionComponent implements OnInit {
  public etablissementList: EstablishmentModel[] = [];
  public sessionDetail: SessionModel;
  public currentUser: UserModel;
  public formateurList: UserModel[] = [];
  public isNotValid: boolean = false;
  public dateDiff: any;
  private dateNow = new Date();
  constructor(
    private etablissementService: EtablissementService,
    private sessionService: SessionService,
    private authService: AuthService,
    private toastrService: NgxToastrService,
    private datePipe: DatePipe,
    private sweetAlert: SweetAlertService,
    private userService: UserService
  ) {
    this.sessionDetail = new SessionModel();
    this.currentUser = new UserModel();
  }

  ngOnInit(): void {
    this.GetAllEtablissement();
    this.getUserById();
    this.GetAllFormateur();
  }
  async GetAllEtablissement() {
    this.etablissementService.GetAllEtablissement().subscribe((data) => {
      this.etablissementList = data;
    });
  }
  async GetAllFormateur() {
    (await this.userService.GetAllFormateurs()).subscribe((data) => {
      this.formateurList = data;
      this.formateurList.map(f => f.nomComplet = f.noM_USER + ' ' + f.prenoM_USER);
      console.log(this.formateurList);
      
    });
  }
  private addDays(days: number) {
    const dateTransfomed = new Date();
    return this.datePipe.transform(
      dateTransfomed.setDate(dateTransfomed.getDate() + days),
      'dd-MM-yyyy'
    );
  }
  async AddSession(formValidation: NgForm) {
    if (formValidation.valid) {
      if (!!this.sessionDetail.datE_SESSION) {
        this.dateDiff =
          Number(
            this.datePipe.transform(this.sessionDetail.datE_SESSION, 'yyyyMMdd')
          ) - Number(this.datePipe.transform(new Date(), 'yyyyMMdd'));
      }
      if (this.dateDiff <= 0) {
        this.sweetAlert.showErrorMessage(
          `La date de la session ne peut pas être avant \n le ${this.addDays(
            1
          )}!`
        );
      } else {
        this.sessionDetail.iD_USER = this.currentUser.iD_USER;
        (await this.sessionService.AddSession(this.sessionDetail)).subscribe(
          (data) => {
            if (data === AddReponseEnum.NotExist) {
              this.toastrService.displaySuccessMessage('Ajouté avec succés');
              this.sessionDetail = new SessionModel();
              this.isNotValid = false;
            } else if (data === AddReponseEnum.Exist) {
              this.sweetAlert.showErrorMessage(
                'Le nom de la session existe déjà!'
              );
            }
          },
          (err: HttpErrorResponse) => {
            console.log(err);
            this.isNotValid = false;
          }
        );
      }
    } else {
      this.isNotValid = true;
    }
  }
  async getUserById() {
    (await this.authService.GetUserById()).subscribe((data) => {
      this.currentUser = data;
    });
  }
  onCancel() {
    this.sessionDetail = new SessionModel();
    this.isNotValid = false;
  }
}
