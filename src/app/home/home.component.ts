import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../container/container';
import { Servicesportfolio } from '../servicesportfolio/servicesportfolio';
import { Capabilities } from '../capabilities/capabilities';
import { Chooseus } from '../chooseus/chooseus';
import { Projects } from '../projects/projects';
import { Testimonials } from '../testimonials/testimonials';
import { Products } from '../products/products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    Container,
    Servicesportfolio,
    Capabilities,
    Chooseus,
    Projects,
    Testimonials,
    Products
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnInit() {
    document.body.classList.add('home-page');
  }

  ngOnDestroy() {
    document.body.classList.remove('home-page');
  }
}
