import { Routes } from '@angular/router';

export const FullRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import("../../components/home/home.module").then((m) => m.HomeModule)
    },
    {
        path: 'user-management',
        loadChildren: () =>
            import("../../components/user-management/user-management.module").then((m) => m.UserManagementModule)
    },
    {
        path: 'session-management',
        loadChildren: () =>
            import("../../components/session-management/session-management.module").then((m) => m.SessionManagementModule)
    },
    {
        path: 'interview-management',
        loadChildren: () =>
            import("../../components/interview-management/interview-management.module").then((m) => m.InterviewManagementModule)
    },
    {
        path: 'candidate-management',
        loadChildren: () =>
            import("../../components/candidate-management/candidate-management.module").then((m) => m.CandidateManagementModule)
    }
];
