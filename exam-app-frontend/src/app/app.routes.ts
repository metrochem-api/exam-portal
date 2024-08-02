import { UserFormComponent } from './users/user-form/user-form.component';
import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AuthGuard } from './guard/auth.guard';


export const routes: Routes = [
  {path:"", component:UsersComponent},

  {
    path:"users",
    component:UsersComponent
  },
  {
    path:"users/add",
    component:UserFormComponent
  },
  {
    path:"users/:id",
    component:UserFormComponent
  },

  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },

];
