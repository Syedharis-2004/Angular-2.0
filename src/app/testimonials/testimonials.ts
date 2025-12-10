import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css'],
})
export class Testimonials implements AfterViewInit {

  @ViewChild('sliderWrapper') sliderWrapper!: ElementRef<HTMLDivElement>;
  currentIndex = 0;

  testimonials = [
    { text: "Libero suscipit unde. Labore cumque accusamus voluptates corporis dignissimos.", img: "assets/user1.jpg", name: "Jorge Monahan", role: "Customer Representative" },
    { text: "Labore cumque accusamus voluptates corporis dignissimos.", img: "assets/user2.jpg", name: "Adam Lee", role: "Client Manager" },
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "assets/user3.jpg", name: "Sarah Khan", role: "Marketing Head" },
    { text: "Excellent service & professional communication!", img: "assets/user4.jpg", name: "James Smith", role: "HR Manager" }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get dots() {
    return new Array(this.testimonials.length).fill(0);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.centerSlide(this.currentIndex);
    }
  }

  goTo(i: number) {
    this.currentIndex = i;
    if (isPlatformBrowser(this.platformId)) {
      this.centerSlide(i);
    }
  }

  centerSlide(index: number) {
    const wrapper = this.sliderWrapper.nativeElement;
    if (!wrapper || !('scrollTo' in wrapper)) return;

    const slide = wrapper.children[index] as HTMLElement;
    const wrapperWidth = wrapper.offsetWidth;
    const slideWidth = slide.offsetWidth;
    const scrollPos = slide.offsetLeft - (wrapperWidth / 2) + (slideWidth / 2);

    wrapper.scrollTo({
      left: scrollPos,
      behavior: 'smooth'
    });
  }
}
