import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { AddingUserComponent } from './adding-user/adding-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AddingUserComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    NgSelectModule,
  ]
})
export class UserManagementModule { }
