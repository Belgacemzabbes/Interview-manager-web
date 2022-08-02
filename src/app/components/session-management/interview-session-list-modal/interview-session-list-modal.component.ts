import { AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InterviewDetailModel } from 'src/app/shared/models/interview-models';
import { InterviewService } from 'src/app/shared/services/interview.service';

@Component({
  selector: 'app-interview-session-list-modal',
  templateUrl: './interview-session-list-modal.component.html',
  styleUrls: ['./interview-session-list-modal.component.css'],
})
export class InterviewSessionListModalComponent implements OnInit{
  public interviewList: InterviewDetailModel[] = [];
  constructor(
    public activeModal: NgbActiveModal,
    private interviewService: InterviewService
  ) {}
  ngOnInit() {
 
  }

}
