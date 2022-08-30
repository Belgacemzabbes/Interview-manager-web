import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateManagementRoutingModule } from './candidate-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CandidatPreinscritComponent } from './candidat-preinscrit/candidat-preinscrit.component';
import { CandidatPaiementComponent } from './candidat-paiement/candidat-paiement.component';
import { CandidatAttestationComponent } from './candidat-attestation/candidat-attestation.component';
import { CandidatListeComponent } from './candidat-liste/candidat-liste.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidatDetailComponent } from './candidat-detail/candidat-detail.component';
import { CandidatListeEntretienComponent } from './candidat-liste-entretien/candidat-liste-entretien.component';

@NgModule({
  declarations: [CandidatListeEntretienComponent, CandidatPreinscritComponent, CandidatPaiementComponent, CandidatAttestationComponent, CandidatListeComponent, CandidatDetailComponent],
  imports: [
    CommonModule,
    NgbModule,
    CandidateManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
})
export class CandidateManagementModule {}
