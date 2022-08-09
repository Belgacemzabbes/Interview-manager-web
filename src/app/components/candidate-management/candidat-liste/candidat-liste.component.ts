import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  EtatEntretienENum,
  PageSizeEnumList,
} from 'src/app/shared/Enumerators/Enums';
import {
  CandidateModel,
  CandidateSearchModel,
} from 'src/app/shared/models/candidat-models';
import { InterviewDetailModel } from 'src/app/shared/models/interview-models';
import { StateModel } from 'src/app/shared/models/state-models';
import { CandidatService } from 'src/app/shared/services/candidat.service';
import { PaginationConfig } from 'src/app/shared/services/pagination-config.service';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-candidat-liste',
  templateUrl: './candidat-liste.component.html',
  styleUrls: ['./candidat-liste.component.scss'],
})
export class CandidatListeComponent implements OnInit {
  public candidatList: CandidateModel[] = [];
  public stateList: StateModel[] = [];
  public searchCriteria: CandidateSearchModel = new CandidateSearchModel();
  public candidatDetailList: InterviewDetailModel[] = [];
  public candidatDetailListFiltered: InterviewDetailModel[] = [];
  public searchTerm = new FormControl('');
  public paginationConfig = new PaginationConfig();
  public pageSizeList = PageSizeEnumList;
  constructor(
    private stateService: StateService,
    private candidatService: CandidatService
  ) {
    this.searchTerm.valueChanges.subscribe((text) => {
      this.onFilterRows(text);
    });
  }
  ngOnInit(): void {
    this.getAllCandidate();
    this.getAllState();
    this.getCandidateBySearchCriteria();
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
  public async getCandidateBySearchCriteria() {
    this.candidatService
      .GetCandidateBySearchCriteria(this.searchCriteria)
      .subscribe((data) => {
        this.candidatDetailListFiltered = data;
        this.candidatDetailList = data;
      });
  }
  public onCancelSearch() {
    this.searchCriteria = new CandidateSearchModel();
  }
  private onFilterRows(filterValue: string) {
    try {
      if (filterValue.length === 0) {
        this.candidatDetailListFiltered = this.candidatDetailList;
      } else {
        this.candidatDetailListFiltered = this.candidatDetailList.filter(
          (candidat) => {
            const term = filterValue.toLowerCase();
            return (
              candidat.liB_SESSION.toLowerCase().includes(term) ||
              candidat.liB_FORMATION.toLowerCase().includes(term) ||
              candidat.identitE_CANDIDAT.toLowerCase().includes(term) ||
              candidat.liB_ETAT.toLowerCase().includes(term)
            );
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  }
}
