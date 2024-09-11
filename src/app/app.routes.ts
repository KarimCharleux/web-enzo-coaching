import {Routes} from '@angular/router';
import {AuthGuard} from "./shared/authGuard";
import {MainComponent} from "./front-office/pages/main/main.component";
import {DashboardComponent} from "./back-office/pages/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
