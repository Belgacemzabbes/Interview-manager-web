import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateManagementRoutingModule } from './candidate-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CandidatListePreinscritComponent } from './candidat-liste-preinscrit/candidat-liste-preinscrit.component';
import { CandidatListeComponent } from './candidat-liste/candidat-liste.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidatDetailComponent } from './candidat-detail/candidat-detail.component';
import { CandidatListeEntretienComponent } from './candidat-liste-entretien/candidat-liste-entretien.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CandidatListeInscritComponent } from './candidat-liste-inscrit/candidat-liste-inscrit.component';

@NgModule({
  declarations: [CandidatListeEntretienComponent, CandidatListePreinscritComponent, CandidatListeInscritComponent, CandidatListeComponent, CandidatDetailComponent],
  imports: [
    CommonModule,
    NgbModule,
    CandidateManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CurrencyMaskModule,
  ],
})
export class CandidateManagementModule {}
