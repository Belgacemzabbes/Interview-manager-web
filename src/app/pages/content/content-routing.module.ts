import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'login' } },
      {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'register' },
      },
      {
        path: 'error404',
        component: Error404Component,
        data: { title: 'Error404' },
      },
      {
        path: 'error500',
        component: Error500Component,
        data: { title: 'Error500' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
