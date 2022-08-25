import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatAttestationComponent } from './candidat-attestation/candidat-attestation.component';
import { CandidatDetailComponent } from './candidat-detail/candidat-detail.component';
import { CandidatListeComponent } from './candidat-liste/candidat-liste.component';
import { CandidatPaiementComponent } from './candidat-paiement/candidat-paiement.component';
import { CandidatPreinscritComponent } from './candidat-preinscrit/candidat-preinscrit.component';
import { CandidatPresenceComponent } from './candidat-presence/candidat-presence.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'candidate-presence',
        component: CandidatPresenceComponent,
        data:{
          title:'candidate-presence'
        }
      },
      {
        path:'candidate-preinscrit',
        component: CandidatPreinscritComponent,
        data:{
          title:'candidate-preinscrit'
        }
      },
      {
        path:'candidate-paiement',
        component: CandidatPaiementComponent,
        data:{
          title:'candidate-paiement'
        }
      },
      {
        path:'candidate-attestation',
        component: CandidatAttestationComponent,
        data:{
          title:'candidate-attestation'
        }
      },
      {
        path:'candidate-list',
        component: CandidatListeComponent,
        data:{
          title:'candidate-list'
        }
      },
      {
        path:'candidate-detail/:etatDetail/:idEntretien',
        component: CandidatDetailComponent,
        data:{
          title:'candidate-detail'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateManagementRoutingModule { }
