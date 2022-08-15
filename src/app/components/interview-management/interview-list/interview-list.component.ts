import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageSizeEnumList } from 'src/app/shared/Enumerators/Enums';
import {
  InterviewDetailModel,
  InterviewSearchModel,
} from 'src/app/shared/models/interview-models';
import { SelectListIntStringModel } from 'src/app/shared/models/static-data-models';
import { InterviewService } from 'src/app/shared/services/interview.service';
import { PaginationConfig } from 'src/app/shared/services/pagination-config.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';
import { NgxToastrService } from 'src/app/shared/services/toastr.service';
import { environment } from 'src/environments/environment';
import { DetailInterviewComponent } from '../detail-interview/detail-interview.component';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css'],
})
export class InterviewListComponent implements OnInit {
  public interviewSearch: InterviewSearchModel = new InterviewSearchModel();
  public interviewList: InterviewDetailModel[] = [];
  public interviewListFiltered: InterviewDetailModel[] = [];
  public searchTerm = new FormControl('');
  public paginationConfig = new PaginationConfig();
  public pageSizeList = PageSizeEnumList;
  public dateShortDisplayFormat = environment.dateShortDisplayFormat;
  public dateDiff: any;
  public isHidden: boolean = false;
  public ouiNonList: SelectListIntStringModel[] = [
    { value: 1, text: 'Oui' },
    { value: 0, text: 'Non' },
  ];
  constructor(
    private interviewService: InterviewService,
    public datePipe: DatePipe,
    public sweetAlert: SweetAlertService,
    private modalService: NgbModal,
    private toastrService: NgxToastrService
  ) {
    this.searchTerm.valueChanges.subscribe((text) => {
      this.onFilterRows(text);
    });
  }

  ngOnInit(): void {
    this.getAllInterviewBySearchCriteria();
  }
  public async getAllInterviewBySearchCriteria() {
    // if (!!this.interviewSearch.dateFin && !!this.interviewSearch.dateDebut) {
    //   this.dateDiff =
    //     Number(
    //       this.datePipe.transform(this.interviewSearch.dateFin, 'yyyyMMdd')
    //     ) -
    //     Number(
    //       this.datePipe.transform(this.interviewSearch.dateDebut, 'yyyyMMdd')
    //     );
    // }
    // if (this.dateDiff < 0) {
    //   this.sweetAlert.showErrorMessage(
    //     'La date fin doit être supèrieur à la date début!'
    //   );
    // } else {
      this.interviewService
        .GetAllInterviewBySearchCriteria(this.interviewSearch)
        .subscribe((data) => {
          this.interviewList = data;
          this.interviewListFiltered = data;
          if(this.interviewSearch.estAnnule === 1){
            this.isHidden = true
          } else {
            this.isHidden = false
          }
        });
    // }
  }
  public onCancelEntretien(entretien: InterviewDetailModel) {
    this.sweetAlert
      .showChoiceMessage('Voulez-vous vraiment annuler cet entretien?')
      .then((response: boolean) => {
        if (response) {
          this.interviewService
            .AnnulerEntretien(entretien.iD_ENTRETIEN)
            .subscribe((data) => {
              const index = this.interviewListFiltered.indexOf(entretien, 0);
              if (index > -1) {
                this.interviewListFiltered.splice(index, 1);
                this.toastrService.displaySuccessMessage(
                  'Annulée avec succés!'
                );
              }
            });
        }
      });
  }
  public onCancelSearch() {
    this.interviewSearch = new InterviewSearchModel();
    this.getAllInterviewBySearchCriteria();
  }
  private onFilterRows(filterValue: string) {
    try {
      if (filterValue.length === 0) {
        this.interviewListFiltered = this.interviewList;
      } else {
        this.interviewListFiltered = this.interviewList.filter((interview) => {
          const term = filterValue.toLowerCase();
          return (
            interview.liB_SESSION.toLowerCase().includes(term) ||
            interview.liB_FORMATION.toLowerCase().includes(term) ||
            interview.identitE_CANDIDAT.toLowerCase().includes(term)
          );
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
  public openModalDetailInterview(interviewDetail: InterviewDetailModel) {
    const modalRef = this.modalService.open(DetailInterviewComponent, {
      size: 'lg',
      backdrop: 'static',
    });
    modalRef.componentInstance.interviewDetail = interviewDetail;
    modalRef.result.then();
  }
}
