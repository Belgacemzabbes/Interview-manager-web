import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateManagementRoutingModule } from './candidate-management-routing.module';
import { CandidatPresenceComponent } from './candidat-presence/candidat-presence.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [CandidatPresenceComponent],
  imports: [
    CommonModule,
    CandidateManagementRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
})
export class CandidateManagementModule {}
