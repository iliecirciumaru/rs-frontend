import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RegisterComponent } from './components/register.component';
import { LoginComponent } from './components/login.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }