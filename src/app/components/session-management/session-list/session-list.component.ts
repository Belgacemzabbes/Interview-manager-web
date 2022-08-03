import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InterviewDetailModel } from 'src/app/shared/models/interview-models';
import {
  SessionModel,
  SessionSearchModel,
} from 'src/app/shared/models/session-models';
import { SelectListIntStringModel } from 'src/app/shared/models/static-data-models';
import { InterviewService } from 'src/app/shared/services/interview.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';
import { NgxToastrService } from 'src/app/shared/services/toastr.service';
import { environment } from 'src/environments/environment';
import { InterviewSessionListModalComponent } from '../interview-session-list-modal/interview-session-list-modal.component';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnInit {
  public sessionSearch: SessionSearchModel;
  public sessionList: SessionModel[] = [];
  public sessionListFiltered: SessionModel[] = [];
  public interviewList: InterviewDetailModel[] = [];
  public searchTerm = new FormControl('');
  public dateShortDisplayFormat: any;
  public dateDiff: any;
  public ouiNonList: SelectListIntStringModel[] = [
    { value: 1, text: 'Oui' },
    { value: 0, text: 'Non' },
  ];
  constructor(
    private sessionService: SessionService,
    private interviewService: InterviewService,
    private sweetAlert: SweetAlertService,
    private datePipe: DatePipe,
    private modalService: NgbModal,
    private toastrService: NgxToastrService
  ) {
    this.sessionSearch = new SessionSearchModel();
    this.searchTerm.valueChanges.subscribe((text) => {
      this.onFilterRows(text);
    });
    this.dateShortDisplayFormat = environment.dateShortDisplayFormat;
  }

  ngOnInit(): void {
    this.GetAllSession();
  }

  public async GetAllSession() {
    // if (!!this.sessionSearch.dateFin && !!this.sessionSearch.dateDebut) {
    //   this.dateDiff =
    //     Number(
    //       this.datePipe.transform(this.sessionSearch.dateFin, 'yyyyMMdd')
    //     ) -
    //     Number(
    //       this.datePipe.transform(this.sessionSearch.dateDebut, 'yyyyMMdd')
    //     );
    // }
    // if (this.dateDiff < 0) {
    //   this.sweetAlert.showErrorMessage(
    //     'La date fin doit être supèrieur à la date début!'
    //   );
    // } else {
      this.sessionService
        .GetAllSession(this.sessionSearch)
        .subscribe((data) => {
          this.sessionList = data;
          this.sessionListFiltered = data;
        });
    // }
  }
  public onCancelSession(session: SessionModel) {
    this.sweetAlert
      .showChoiceMessage(
        'Cette action va annuler tous les entretiens incluent dans cette session! Voulez-vous continuer?'
      )
      .then((response: boolean) => {
        if (response) {
          this.sessionService
            .AnnulerSession(session.iD_SESSION)
            .subscribe((data) => {
              const index = this.sessionListFiltered.indexOf(session, 0);
              if (index > -1) {
                this.sessionListFiltered.splice(index, 1);
                this.toastrService.displaySuccessMessage(
                  'Annulée avec succés!'
                );
              }
            });
        }
      });
  }
  public onCancelSearch() {
    this.sessionSearch = new SessionSearchModel();
    this.GetAllSession();
  }
  
  public openModalListInterviewSession(idSession: number) {
    this.interviewService
    .GetAllInterviewBySesssionId(idSession)
    .subscribe((data) => {
      this.interviewList = data;
      if (this.interviewList.length == 0) {
        this.sweetAlert.showErrorMessage("Il n'y a aucun entretien!");
      } else {
        const modalRef = this.modalService.open(
          InterviewSessionListModalComponent,
          {
            size: 'lg',
            backdrop: 'static',
          }
        );
        modalRef.componentInstance.interviewList = this.interviewList;
        modalRef.result.then();
      }
    });
  }
  private onFilterRows(filterValue: string) {
    try {
      if (filterValue.length === 0) {
        this.sessionListFiltered = this.sessionList;
      } else {
        this.sessionListFiltered = this.sessionList.filter((session) => {
          const term = filterValue.toLowerCase();
          return session.liB_SESSION.toLowerCase().includes(term);
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
