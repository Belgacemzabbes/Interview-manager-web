import { Injectable, QueryList } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationConfig {
  page: number;
  pageSize: number;
  maxSize: number;
  searchTerm: string;
  sortColumn: string;

  constructor() {
    this.page = 1;
    this.pageSize = 10;
    this.maxSize = 5;
    this.searchTerm = "";
    this.sortColumn = "";
  }
}

interface State {
  searchTerm: string;
  sortColumn: string;
}

@Injectable({
  providedIn: 'root'
})
export class TableConfigService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();

  private _state: State = {
    searchTerm: '',
    sortColumn: ''
  };
  constructor() { }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  get searchTerm() { return this._state.searchTerm; }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: string) { this._set({ sortColumn }); }
}