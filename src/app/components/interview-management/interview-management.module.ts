import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewManagementRoutingModule } from './interview-management-routing.module';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { AddingInterviewComponent } from './adding-interview/adding-interview.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailInterviewComponent } from './detail-interview/detail-interview.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
  declarations: [
    InterviewListComponent,
    AddingInterviewComponent,
    DetailInterviewComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    InterviewManagementRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
  ]
})
export class InterviewManagementModule { }
