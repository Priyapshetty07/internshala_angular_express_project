import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainContainerComponent } from './component/main-container/main-container.component';
import { InternshipsComponent } from './component/internships/internships.component';
//import { OnlineTrainingsComponent } from './component/online-trainings/online-trainings.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrivacyComponent } from './component/privacy/privacy.component';
import { TermsComponent } from './component/terms/terms.component';
import { ContactComponent } from './component/contact/contact.component';
import { ServicesComponent } from './component/services/services.component';
import { HomeComponent } from './component/home/home.component';
import { HireInternsOfYourCompanyComponent } from './component/hire-interns-of-your-company/hire-interns-of-your-company.component';
// import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import {AccordionModule} from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchResultsComponent } from './search-results/search-results.component';
// import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    InternshipsComponent,
    // OnlineTrainingsComponent,
    JobsComponent,
    LoginComponent,
    RegisterComponent,
    //RegisterEmployerComponent,
    //RegisterStudentComponent,
    PrivacyComponent,
    TermsComponent,
    ContactComponent,
    ServicesComponent,
    HomeComponent,
    HireInternsOfYourCompanyComponent,
    AboutUsComponent,
    SearchResultsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AccordionModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
