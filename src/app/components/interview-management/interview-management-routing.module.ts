import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingInterviewComponent } from './adding-interview/adding-interview.component';
import { DetailInterviewComponent } from './detail-interview/detail-interview.component';
import { InterviewListComponent } from './interview-list/interview-list.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: "interview-list",
        component: InterviewListComponent,
        data: {
          title: 'interview list'
        }
      },
      {
        path: "adding-interview/:id",
        component: AddingInterviewComponent,
        data: {
          title: 'new interview'
        }
      },
      {
        path: "detail-interview/:id",
        component: DetailInterviewComponent,
        data: {
          title: 'detail interview'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewManagementRoutingModule { }
