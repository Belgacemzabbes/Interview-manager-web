import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateManagementRoutingModule { }
