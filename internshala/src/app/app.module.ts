import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainContainerComponent } from './component/main-container/main-container.component';
import { InternshipsComponent } from './component/internships/internships.component';
import { OnlineTrainingsComponent } from './component/online-trainings/online-trainings.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterEmployerComponent } from './component/register-employer/register-employer.component';
import { RegisterStudentComponent } from './component/register-student/register-student.component';
import { PrivacyComponent } from './component/privacy/privacy.component';
import { TermsComponent } from './component/terms/terms.component';
import { ContactComponent } from './component/contact/contact.component';
import { ServicesComponent } from './component/services/services.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    InternshipsComponent,
    OnlineTrainingsComponent,
    JobsComponent,
    LoginComponent,
    RegisterComponent,
    RegisterEmployerComponent,
    RegisterStudentComponent,
    PrivacyComponent,
    TermsComponent,
    ContactComponent,
    ServicesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
