import { Component, OnInit } from '@angular/core';
import { CandidateModel } from 'src/app/shared/models/candidat-models';
import { InterviewDetailModel } from 'src/app/shared/models/interview-models';
import { StateModel } from 'src/app/shared/models/state-models';
import { CandidatService } from 'src/app/shared/services/candidat.service';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-candidat-preinscrit',
  templateUrl: './candidat-preinscrit.component.html',
  styleUrls: ['./candidat-preinscrit.component.scss']
})
export class CandidatPreinscritComponent implements OnInit {
  public candidatList: CandidateModel[] = [];
  public stateList: StateModel[] = [];
  public interviewDetail: InterviewDetailModel = new InterviewDetailModel();
  constructor(
    private candidatService: CandidatService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.getAllCandidat();
    this.getAllState();
  }
  private async getAllCandidat() {
    this.candidatService.GetAllCandidat().subscribe((data) => {
      this.candidatList = data;
    });
  }
  private async getAllState() {
    this.stateService
      .GetAllState()
      .subscribe((data) => (this.stateList = data));
  }
  public onCancel() {}
}

