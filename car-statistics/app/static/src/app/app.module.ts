import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PlotlyModule } from 'angular-plotly.js'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LogoutComponent } from './logout/logout.component';
import { ConfirmResetComponent } from './confirm-reset/confirm-reset.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';
import {AuthGuardService} from './auth.guard';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NotfoundComponent,
    HomeComponent,
    ConfirmEmailComponent,
    LoginComponent,
    LogoutComponent,
    ResetPasswordComponent,
    ConfirmResetComponent,
    NavbarComponent,
      FileUploadsComponent,
    TableComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
      ReactiveFormsModule,
      PlotlyModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }