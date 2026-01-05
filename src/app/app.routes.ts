import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: Contact }
];