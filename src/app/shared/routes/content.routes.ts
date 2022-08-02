import { Routes } from '@angular/router';

export const ContentRoutes: Routes = [
  {
    path: 'content',
    loadChildren: () =>
      import("../../pages/content/content.module").then((m) => m.ContentModule),
  },
];
