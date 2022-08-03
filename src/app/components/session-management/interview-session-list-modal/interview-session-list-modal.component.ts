import { AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InterviewDetailModel } from 'src/app/shared/models/interview-models';
import { InterviewService } from 'src/app/shared/services/interview.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';
import { NgxToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-interview-session-list-modal',
  templateUrl: './interview-session-list-modal.component.html',
  styleUrls: ['./interview-session-list-modal.component.css'],
})
export class InterviewSessionListModalComponent implements OnInit{
  public interviewList: InterviewDetailModel[] = [];
  constructor(
    public activeModal: NgbActiveModal,
    private interviewService: InterviewService,
    private sweetAlert: SweetAlertService,
    private toastrService: NgxToastrService
  ) {}
  ngOnInit() {
 
  }
  public onCancelEntretien(entretien: InterviewDetailModel) {
    this.sweetAlert
      .showChoiceMessage('Voulez-vous vraiment annuler cet entretien?')
      .then((response: boolean) => {
        if (response) {
          this.interviewService
            .AnnulerEntretien(entretien.iD_ENTRETIEN)
            .subscribe((data) => {
              const index = this.interviewList.indexOf(entretien, 0);
              if (index > -1) {
                this.interviewList.splice(index, 1);
                this.toastrService.displaySuccessMessage(
                  'Annulée avec succés!'
                );
              }
            });
        }
      });
  }

}
