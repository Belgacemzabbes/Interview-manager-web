import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Error404Component,
    Error500Component,
  ],
  imports: [
    CommonModule, 
    ContentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule],
})
export class ContentModule {}
