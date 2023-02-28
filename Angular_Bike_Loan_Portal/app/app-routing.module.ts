import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomerpageComponent } from './components/customerpage/customerpage.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { AppliedloansComponent } from './components/appliedloans/appliedloans.component';
import { ApplyloanComponent } from './components/applyloan/applyloan.component';
import { ApplyloancompletedComponent } from './components/applyloancompleted/applyloancompleted.component';
import { LoanstatusComponent } from './components/loanstatus/loanstatus.component';
import { LoanstatuspageComponent } from './components/loanstatuspage/loanstatuspage.component';
import { LoandetailsComponent } from './components/loandetails/loandetails.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditloanComponent } from './components/editloan/editloan.component';
import { Applyloan2Component } from './components/applyloan2/applyloan2.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: '', component: DashboardComponent },
{ path: 'navbar', component: NavbarComponent },
{ path: 'forbidden', component: ForbiddenComponent},
{ path: 'customerpage/:id', component: CustomerpageComponent },
{path:'adminpage/:id',component:AdminpageComponent },
{ path: 'profile/:id', component: ProfileComponent },
{path:'loanstatus',component:LoanstatusComponent},
{ path: 'applyloan/:id', component: ApplyloanComponent },

{path:'appliedloans',component:AppliedloansComponent},
{path:'applyloancompleted/:id',component:ApplyloancompletedComponent},

{path:'loanstatuspage/:id',component:LoanstatuspageComponent },
{path:'loandetails',component:LoandetailsComponent},
{path:'editloan/:id',component:EditloanComponent},
{ path: 'applyloan2/:id', component: Applyloan2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
