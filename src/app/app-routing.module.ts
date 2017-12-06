import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RegisterComponent } from './components/register.component';
import { LoginComponent } from './components/login.component';
import { MainPageComponent } from './views/main-page.view';
import { UserService } from './services/user.service';
import { OneMovieComponent } from './views/one-movie.view';

const routes: Routes = [
  { 
    path: '', 
    canActivate: [UserService],
    children: [
      // { path: 'commission', component: CommissionComponent, canActivate: [CommissionGuard] },
      { path: 'movies/:id', component: OneMovieComponent },
      { path: '', component: MainPageComponent },
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