import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser, CommonModule } from '@angular/common'; // Added CommonModule
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Added FormsModule

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule], // Added Modules
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit, OnDestroy {
  
  // Form Model
  fullName: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';
  privacy: boolean = false;
  
  submitted: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.classList.add('contact-page');
    }
  }

  onSubmit() {
    // In a real app, you would send data to a server here.
    // For now, we just flip the flag to show the data on the left card.
    console.log('Form Submitted!', {
      name: this.fullName,
      email: this.email,
      phone: this.phone,
      message: this.message
    });
    this.submitted = true;
  }

  resetForm() {
    this.submitted = false;
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.message = '';
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.classList.remove('contact-page');
    }
  }
}
