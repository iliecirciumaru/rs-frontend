import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent, RegisterComponent, LoginComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
