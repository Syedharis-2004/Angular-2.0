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
  constructor(public router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Small delay to ensure URL is updated
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 50);
    });
  }

  get isHome(): boolean {
    // Precise check for home route
    return this.router.url === '/' || this.router.url.startsWith('/home');
  }
}
