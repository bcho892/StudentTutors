import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BookComponent } from './pages/book/book.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component'
import { ResourcesComponent } from './pages/resources/resources.component';
import { TutorsComponent } from './pages/tutors/tutors.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Book', component: BookComponent },
  { path: 'Tutors', component: TutorsComponent },
  { path: 'Resources', component: ResourcesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
