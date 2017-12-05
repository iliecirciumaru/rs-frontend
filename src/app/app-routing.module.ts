import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RegisterComponent } from './components/register.component';
import { LoginComponent } from './components/login.component';
import { MainPageComponent } from './views/main-page.view';
import { UserService } from './services/user.service';

const routes: Routes = [
  { 
    path: '', 
    canActivate: [UserService],
    component: MainPageComponent,
    children: [
      // { path: 'commission', component: CommissionComponent, canActivate: [CommissionGuard] },
      // { path: 'assets/:id', component: AssetComponent },
      // { path: 'assets', component: AllAssetsComponent },
      // { path: 'profile', component: ProfileComponent },
      // { path: 'assets/:id/history', component: AssetHistoryComponent },
    ]
  },
  // { path: '/m', component: MainPageComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }