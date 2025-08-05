import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { TableComponent } from './shared/table/table.component';
import { authGuard } from './guards/auth.guard';
import { AdminComponent } from './component/admin/admin.component';

const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegistrationComponent},
{path: 'table', component: TableComponent},
{path:'admin', component: AdminComponent,canActivate: [authGuard] },
{path: 'home', loadChildren: () => import('./user/user.module').then(m => m.UserModule),canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
