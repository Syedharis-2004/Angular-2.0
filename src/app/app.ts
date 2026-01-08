import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Navbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  isTransparentPage = false;

  constructor(public router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.checkTransparency(); // Initial check
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkTransparency();
      // Small delay just in case, though direct check should work
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 50);
    });
  }

  checkTransparency() {
    const url = this.router.url;
    this.isTransparentPage = url.startsWith('/portfolio') || 
                             url.startsWith('/our-services') ||
                             url.startsWith('/about') ||
                             url.startsWith('/contact') ||
                             url.includes('our-services') ||
                             url.includes('portfolio');
  }

  get isHome(): boolean {
    return this.router.url === '/' || this.router.url.startsWith('/home');
  }
}
