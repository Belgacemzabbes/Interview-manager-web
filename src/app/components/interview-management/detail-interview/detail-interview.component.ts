import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InterviewDetailModel } from 'src/app/shared/models/interview-models';
import { InterviewService } from 'src/app/shared/services/interview.service';

@Component({
  selector: 'app-detail-interview',
  templateUrl: './detail-interview.component.html',
  styleUrls: ['./detail-interview.component.css'],
})
export class DetailInterviewComponent implements OnInit {
  public interviewDetail: InterviewDetailModel;
  public interviewDetailOld: InterviewDetailModel = new InterviewDetailModel();
  private id: any;
  public canEdit: boolean = false;
  constructor(
    private interviewService: InterviewService,
    private router: ActivatedRoute
  ) {
    this.interviewDetail = new InterviewDetailModel();
  }

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.getInterviewById();
  }

  private async getInterviewById() {
    this.interviewService.GetInterviewById(this.id).subscribe((data) => {
      this.interviewDetail = data;
    });
  }
  public onEdit() {
    this.interviewDetailOld = this.interviewDetail;
    this.canEdit = true;
  }
  public onSaveEdit() {
    this.interviewService
      .EditInterview(this.interviewDetail)
      .subscribe((data) => {
        this.canEdit = false;
      });
  }
  public onCancelEdit() {
    this.interviewDetail = this.interviewDetailOld;
    this.canEdit = false;
  }
}
