import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingSessionComponent } from './adding-session/adding-session.component';
import { SessionListComponent } from './session-list/session-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'adding-session',
        component: AddingSessionComponent,
        data: {
          title: 'New session'
        }
      },
      {
        path: 'session-list',
        component: SessionListComponent,
        data: {
          title: 'Sessions list'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionManagementRoutingModule { }
