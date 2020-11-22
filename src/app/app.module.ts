import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AppComponent} from './app.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {HttpInterceptorService} from './services/HttpInterceptorService';

const routes: Routes = [
  {path: 'signup' , component : SignUpComponent} ,
  {path: 'login', component : LoginComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent, HeaderComponent, FooterComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
