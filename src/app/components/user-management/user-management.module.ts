import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { AddingUserComponent } from './adding-user/adding-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AddingUserComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    UserManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ]
})
export class UserManagementModule { }
