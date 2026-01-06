import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit, OnDestroy {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.classList.add('contact-page');
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.classList.remove('contact-page');
    }
  }
}
