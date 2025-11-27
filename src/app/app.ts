import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import test from 'node:test';
import { Projects } from './projects/projects';
import { Products } from './products/products';
import { Container } from './container/container';
import { Servicesportfolio } from './servicesportfolio/servicesportfolio';
import { Capabilities } from './capabilities/capabilities';
import { Chooseus } from './chooseus/chooseus';
import { Testimonials } from './testimonials/testimonials';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,
     Navbar,
     Projects,
     Products,
     Container,
     Servicesportfolio,
     Capabilities,
     Chooseus,
     Testimonials,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}

