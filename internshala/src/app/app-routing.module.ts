import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './component/contact/contact.component';

import { HireInternsOfYourCompanyComponent } from './component/hire-interns-of-your-company/hire-interns-of-your-company.component';
import { HomeComponent } from './component/home/home.component';
import { InternshipsComponent } from './component/internships/internships.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { LoginComponent } from './component/login/login.component';
import { PrivacyComponent } from './component/privacy/privacy.component';
import { RegisterComponent } from './component/register/register.component';
import { ServicesComponent } from './component/services/services.component';
import { TermsComponent } from './component/terms/terms.component';
import { ViewInternshipsComponent } from './component/view-internships/view-internships.component';
import { ViewJobComponent } from './component/view-job/view-job.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  {path:'internships',component:InternshipsComponent},
  
  {path:'jobs',component:JobsComponent},
   {path:'login',component:LoginComponent},
  //  {path:'login',component:RegisterComponent},
  {path:'register',component:RegisterComponent},
 
  {path:'terms',component:TermsComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
 
  {path:'hire-interns-of-you-company',component:HireInternsOfYourCompanyComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'home',component:HomeComponent},
  {path:"search/jobs",component:SearchResultsComponent},
  {path:'search/intern',component:SearchResultsComponent},
  {path:"view-job",component:ViewJobComponent},
  {path:"view-internships",component:ViewInternshipsComponent},
  {path:'',component:HomeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
