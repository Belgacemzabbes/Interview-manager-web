import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatDetailComponent } from './candidat-detail/candidat-detail.component';
import { CandidatListeEntretienComponent } from './candidat-liste-entretien/candidat-liste-entretien.component';
import { CandidatListeInscritComponent } from './candidat-liste-inscrit/candidat-liste-inscrit.component';
import { CandidatListePreinscritComponent } from './candidat-liste-preinscrit/candidat-liste-preinscrit.component';
import { CandidatListeComponent } from './candidat-liste/candidat-liste.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'candidat-liste-entretien',
        component: CandidatListeEntretienComponent,
        data:{
          title:'candidat-liste-entretien'
        }
      },
      {
        path:'candidate-liste-preinscrit',
        component: CandidatListePreinscritComponent,
        data:{
          title:'candidate-liste-preinscrit'
        }
      },
      {
        path:'candidate-liste-inscrit',
        component: CandidatListeInscritComponent,
        data:{
          title:'candidate-liste-inscrit'
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
