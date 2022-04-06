import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternshipsComponent } from './component/internships/internships.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { LoginComponent } from './component/login/login.component';
import { OnlineTrainingsComponent } from './component/online-trainings/online-trainings.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path:'internships',component:InternshipsComponent},
  {path:'online-trainings',component:OnlineTrainingsComponent},
  {path:'jobs',component:JobsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
