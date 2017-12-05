import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register.component';
import { MenuComponent } from './components/menu.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login.component';
import { RsHttpInterceptor } from './services/interceptor/http.interceptor';
import { MainPageComponent } from './views/main-page.view';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent, RegisterComponent, LoginComponent, MenuComponent, MainPageComponent
  ],
  providers: [UserService, { provide: HTTP_INTERCEPTORS, useClass: RsHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
