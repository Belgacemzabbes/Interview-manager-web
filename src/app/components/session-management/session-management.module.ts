import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionManagementRoutingModule } from './session-management-routing.module';
import { AddingSessionComponent } from './adding-session/adding-session.component';
import { SessionListComponent } from './session-list/session-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InterviewSessionListModalComponent } from './interview-session-list-modal/interview-session-list-modal.component';
@NgModule({
  declarations: [
    AddingSessionComponent,
    SessionListComponent,
    InterviewSessionListModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    SessionManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    RouterModule,
  ],
  entryComponents:[
    InterviewSessionListModalComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SessionManagementModule { }
