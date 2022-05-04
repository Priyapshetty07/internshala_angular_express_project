import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './component/contact/contact.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { HireInternsOfYourCompanyComponent } from './component/hire-interns-of-your-company/hire-interns-of-your-company.component';
import { HomeComponent } from './component/home/home.component';
import { InternshipsComponent } from './component/internships/internships.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { LoginComponent } from './component/login/login.component';
// import { OnlineTrainingsComponent } from './component/online-trainings/online-trainings.component';
import { PrivacyComponent } from './component/privacy/privacy.component';
//import { RegisterEmployerComponent } from './component/register-employer/register-employer.component';
//import { RegisterStudentComponent } from './component/register-student/register-student.component';
import { RegisterComponent } from './component/register/register.component';
import { ServicesComponent } from './component/services/services.component';
import { TermsComponent } from './component/terms/terms.component';

const routes: Routes = [
  {path:'internships',component:InternshipsComponent},
  // {path:'online-trainings',component:OnlineTrainingsComponent},
  {path:'jobs',component:JobsComponent},
  // {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  //{path:'register-student',component:RegisterStudentComponent},
  // {path:'register-employer',component:RegisterEmployerComponent},
  {path:'terms',component:TermsComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'hire-interns-of-you-company',component:HireInternsOfYourCompanyComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
