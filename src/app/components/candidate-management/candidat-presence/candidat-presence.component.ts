import { Component, OnInit } from '@angular/core';
import { CandidateModel } from 'src/app/shared/models/candidat-models';
import { StateModel } from 'src/app/shared/models/state-models';
import { CandidatService } from 'src/app/shared/services/candidat.service';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-candidat-presence',
  templateUrl: './candidat-presence.component.html',
  styleUrls: ['./candidat-presence.component.css'],
})
export class CandidatPresenceComponent implements OnInit {
  public candidatList: CandidateModel[] = [];
  public stateList: StateModel[] = [];
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
