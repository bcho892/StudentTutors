import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProcesscardComponent } from './components/processcard/processcard.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BookComponent } from './pages/book/book.component';
import { ArrowbuttonComponent } from './components/arrowbutton/arrowbutton.component';
import { ContactformComponent } from './components/contactform/contactform.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FacebookModule } from 'ngx-facebook';
import { ReactiveFormsModule } from '@angular/forms';
import { TutorsComponent } from './pages/tutors/tutors.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourcecardComponent } from './components/resourcecard/resourcecard.component';
import { TutorcardComponent } from './components/tutorcard/tutorcard.component';
import { SubjectbadgeComponent } from './components/subjectbadge/subjectbadge.component';
import { PagesService } from './service/pages.service';
import { SubjecticonComponent } from './components/small/subjecticon/subjecticon.component';
import { BookformComponent } from './components/bookform/bookform.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './pages/termsandconditions/termsandconditions.component';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProcesscardComponent,
    FooterComponent,
    ContactComponent,
    BookComponent,
    ArrowbuttonComponent,
    ContactformComponent,
    TutorsComponent,
    ResourcesComponent,
    ResourcecardComponent,
    TutorcardComponent,
    SubjectbadgeComponent,
    SubjecticonComponent,
    BookformComponent,
    PrivacypolicyComponent,
    TermsandconditionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatStepperModule,
    FacebookModule.forRoot()
  ],
  providers: [
    PagesService,
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
