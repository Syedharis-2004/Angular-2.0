import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
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
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.classList.add('home-page');
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.classList.remove('home-page');
    }
  }
}
