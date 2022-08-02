import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ContentRoutes } from './shared/routes/content.routes';
import { FullRoutes } from './shared/routes/full.routes';

const routes: Routes = [
  { path: '', redirectTo: 'content/login', pathMatch: 'full' },
  {
    path: '',
    component: ContentLayoutComponent,
    data: { title: 'Content views' },
    children: ContentRoutes,
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'full views',
    },
    children: FullRoutes,
  },
  { path: '**', redirectTo: 'content/error404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
