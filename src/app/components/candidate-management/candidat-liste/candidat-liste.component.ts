import { Component, OnInit } from '@angular/core';
import { EtatEntretienENum } from 'src/app/shared/Enumerators/Enums';
import { CandidateModel } from 'src/app/shared/models/candidat-models';
import { StateModel } from 'src/app/shared/models/state-models';
import { CandidatService } from 'src/app/shared/services/candidat.service';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-candidat-liste',
  templateUrl: './candidat-liste.component.html',
  styleUrls: ['./candidat-liste.component.scss'],
})
export class CandidatListeComponent implements OnInit {
  public candidatList: CandidateModel[] = [];
  public stateList: StateModel[] = [];
  constructor(
    private stateService: StateService,
    private candidatService: CandidatService
  ) {}

  ngOnInit(): void {
    this.getAllCandidate();
    this.getAllState();
  }
  private async getAllCandidate() {
    this.candidatService.GetAllCandidat().subscribe((data) => {
      this.candidatList = data;
    });
  }
  private async getAllState() {
    this.stateService
      .GetAllState()
      .subscribe((data) => (this.stateList = data));
  }
}
