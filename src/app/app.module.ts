import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register.component';
import { MenuComponent } from './components/menu.component';
import { UserService } from './services/user.service';
import { MovieService } from './services/movie.service';
import { LoginComponent } from './components/login.component';
import { MovieGroupComponent } from './components/movie-group.component';
import { RsHttpInterceptor } from './services/interceptor/http.interceptor';
import { MainPageComponent } from './views/main-page.view';
import { OneMovieComponent } from './views/one-movie.view';
import { RatingPipe } from './pipe/rating.pipe';
import { InfoPipe } from './pipe/info.pipe';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { StarsRatingPipe } from './pipe/stars-rating.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent, RegisterComponent, LoginComponent, MenuComponent, MainPageComponent,
    RatingPipe, SafeHtmlPipe, OneMovieComponent, InfoPipe, StarsRatingPipe, MovieGroupComponent,
  ],
  providers: [UserService, MovieService, { provide: HTTP_INTERCEPTORS, useClass: RsHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
