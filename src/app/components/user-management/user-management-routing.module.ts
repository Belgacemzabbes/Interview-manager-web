import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingUserComponent } from './adding-user/adding-user.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'adding-user',
        component: AddingUserComponent,
        data: {
          title: 'New User'
        }
      },
      {
        path: 'users-list',
        component: UsersListComponent,
        data: {
          title: 'Users list'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
