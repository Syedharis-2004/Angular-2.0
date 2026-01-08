import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { HomeComponent } from './home/home.component';
import { Portfolio } from './portfolio/portfolio';
import { OurServices } from './ourservices/ourservices';
import { AboutUs } from './aboutus/aboutus';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUs },
  { path: 'contact', component: Contact },
  { path: 'portfolio', component: Portfolio },
  { path: 'our-services', component: OurServices }
];