import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import test from 'node:test';
import { Testimonial } from './testimonial/testimonial';
import { Projects } from './projects/projects';
import { Products } from './products/products';
import { Container } from './container/container';
import { Servicesportfolio } from './servicesportfolio/servicesportfolio';
import { Capabilities } from './capabilities/capabilities';
import { Chooseus } from './chooseus/chooseus';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Navbar,Testimonial,Projects,Products,Container,Servicesportfolio,Capabilities,Chooseus,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}

