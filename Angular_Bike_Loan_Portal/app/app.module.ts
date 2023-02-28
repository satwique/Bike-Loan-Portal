import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomerpageComponent } from './components/customerpage/customerpage.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './services/user.service';
import { AppliedloansComponent } from './components/appliedloans/appliedloans.component';
import { ApplyloanComponent } from './components/applyloan/applyloan.component';
import { ApplyloancompletedComponent } from './components/applyloancompleted/applyloancompleted.component';
import { LoanstatusComponent } from './components/loanstatus/loanstatus.component';
import { LoanstatuspageComponent } from './components/loanstatuspage/loanstatuspage.component';
import { LoandetailsComponent } from './components/loandetails/loandetails.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditloanComponent } from './components/editloan/editloan.component';
import { NgToastModule } from 'ng-angular-popup';
import { Applyloan2Component } from './components/applyloan2/applyloan2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CustomerpageComponent,
    AdminpageComponent,
    ForbiddenComponent,
    AppliedloansComponent,
    ApplyloanComponent,
    ApplyloancompletedComponent,
    LoanstatusComponent,
    LoanstatuspageComponent,
    LoandetailsComponent,
    ProfileComponent,
    EditloanComponent,
    Applyloan2Component
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgToastModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({showForeground:true}),
    MatCardModule,MatDividerModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
