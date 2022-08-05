import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateManagementRoutingModule } from './candidate-management-routing.module';
import { CandidatPresenceComponent } from './candidat-presence/candidat-presence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CandidatPreinscritComponent } from './candidat-preinscrit/candidat-preinscrit.component';
import { CandidatPaiementComponent } from './candidat-paiement/candidat-paiement.component';
import { CandidatAttestationComponent } from './candidat-attestation/candidat-attestation.component';
import { CandidatListeComponent } from './candidat-liste/candidat-liste.component';

@NgModule({
  declarations: [CandidatPresenceComponent, CandidatPreinscritComponent, CandidatPaiementComponent, CandidatAttestationComponent, CandidatListeComponent],
  imports: [
    CommonModule,
    CandidateManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
})
export class CandidateManagementModule {}
