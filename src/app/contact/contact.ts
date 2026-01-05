import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit, OnDestroy {
  ngOnInit() {
    document.body.classList.add('contact-page');
  }

  ngOnDestroy() {
    document.body.classList.remove('contact-page');
  }
}
