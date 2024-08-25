import {Routes} from '@angular/router';
import {AuthGuard} from "./core/authGuard";
import {HomeComponent} from "./front-office/pages/home/home.component";
import {DashboardComponent} from "./back-office/pages/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
