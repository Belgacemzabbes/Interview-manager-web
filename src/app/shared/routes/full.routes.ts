import { Routes } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';

export const FullRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import("../../components/home/home.module").then((m) => m.HomeModule)
            ,
           canActivate: [AuthGuard],
    },
    {
        path: 'user-management',
        loadChildren: () =>
            import("../../components/user-management/user-management.module").then((m) => m.UserManagementModule)
            ,
           canActivate: [AuthGuard],
    },
    {
        path: 'session-management',
        loadChildren: () =>
            import("../../components/session-management/session-management.module").then((m) => m.SessionManagementModule)
            ,
           canActivate: [AuthGuard],
    },
    {
        path: 'interview-management',
        loadChildren: () =>
            import("../../components/interview-management/interview-management.module").then((m) => m.InterviewManagementModule)
            ,
           canActivate: [AuthGuard],
    },
    {
        path: 'candidate-management',
        loadChildren: () =>
            import("../../components/candidate-management/candidate-management.module").then((m) => m.CandidateManagementModule)
            ,
           canActivate: [AuthGuard],
    }
];
