import { Component, OnInit, Renderer2, Inject, PLATFORM_ID, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common'; // Added CommonModule for *ngFor
import { Products } from '../products/products';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  scope: string[];
  highlights: string[]; // Changed to string array for list items
  images: string[];
  currentSlide: number;
}

@Component({
  selector: 'app-portfolio',
  standalone: true, // Ensuring it's standalone if using imports
  imports: [Products, CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css'],
})
export class Portfolio implements OnInit {

  projects: Project[] = [
    {
      id: 1,
      title: 'E-BLE',
      subtitle: 'Community Management Multi-Sided Platform',
      scope: ['Web App', 'Mobile Apps', 'Javascript', 'React', 'Real-time data updates and retrieval', 'Extensive RBAC'],
      highlights: [
        '10+ modules',
        '1 Desktop Portal and 2 Mobile Apps',
        'Successful pilot project conducted with 3,200+ work orders processed end-to-end'
      ],
      images: [
        'assets/images/e-commerce.png',
        'assets/images/mobile.png',
        'assets/images/charts (2).png'
      ],
      currentSlide: 0
    },
    {
      id: 2,
      title: 'E-BLE',
      subtitle: 'Community Management Multi-Sided Platform',
      scope: ['Web App', 'Mobile Apps', 'Javascript', 'React', 'Real-time data updates and retrieval', 'Extensive RBAC'],
      highlights: [
        '10+ modules',
        '1 Desktop Portal and 2 Mobile Apps',
        'Successful pilot project conducted with 3,200+ work orders processed end-to-end'
      ],
      images: [
         'assets/images/charts (2).png',
         'assets/images/mobile.png',
         'assets/images/e-commerce.png'
      ],
      currentSlide: 0
    },
    {
      id: 3,
      title: 'E-BLE',
      subtitle: 'Community Management Multi-Sided Platform',
      scope: ['Mobile App', 'Backend APIs', 'Cloud Deployment'],
      highlights: [
        'Built for performance, security, and long-term scalability.',
        'Seamless integration with existing infrastructure.',
        'User-centric design focus.'
      ],
      images: [
         'assets/images/mobile.png',
         'assets/images/e-commerce.png',
         'assets/images/charts (2).png'
      ],
      currentSlide: 0
    }
  ];

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(document.body, 'portfolio-page');
    }
  }

  nextSlide(project: Project) {
    project.currentSlide = (project.currentSlide + 1) % project.images.length;
  }

  prevSlide(project: Project) {
    project.currentSlide = (project.currentSlide - 1 + project.images.length) % project.images.length;
  }

  goToSlide(project: Project, index: number) {
    project.currentSlide = index;
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(document.body, 'portfolio-page');
    }
  }
}
