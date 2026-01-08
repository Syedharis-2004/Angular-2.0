import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../projects/projects';
import { Products } from '../products/products';
import { Testimonials } from '../testimonials/testimonials';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule,Products,Testimonials],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class AboutUs {
  workProcess = [
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Discovery',
      description: 'Strategic planning and roadmap development to align technology with business objectives.'
    },
    {
        icon: 'fa-solid fa-file-signature', // Proposal icon
        title: 'Proposal',
        description: 'Strategic planning and roadmap development to align technology with business objectives.'
    },
    {
        icon: 'fa-solid fa-rocket',
        title: 'Build & Iterate',
        description: 'Strategic planning and roadmap development to align technology with business objectives.'
    },
    {
        icon: 'fa-solid fa-lightbulb', // Launch icon? Maybe specific one
        title: 'Launch & Optimize',
        description: 'Strategic planning and roadmap development to align technology with business objectives.'
    },
    {
        icon: 'fa-solid fa-headset', // Support icon
        title: 'Support',
        description: 'Strategic planning and roadmap development to align technology with business objectives.'
    },
    {
        icon: 'fa-solid fa-gear', // Support icon varying
        title: 'Support',
        description: 'Strategic planning and roadmap development to align technology with business objectives.'
    }
  ];

  // Technologies Data
  technologies = [
    { icon: 'fa-brands fa-aws', name: 'Expert Team' },
    { icon: 'fa-brands fa-microsoft', name: 'Expert Team' },
    { icon: 'fa-brands fa-react', name: 'Expert Team' },
    { icon: 'fa-brands fa-angular', name: 'Expert Team' },
    { icon: 'fa-brands fa-node-js', name: 'Expert Team' },
    { icon: 'fa-brands fa-python', name: 'Expert Team' },
    { icon: 'fa-brands fa-docker', name: 'Expert Team' },
    { icon: 'fa-solid fa-database', name: 'Expert Team' },
  ];

  // Tech Feature Cards
  techCards = [
    {
      icon: 'fa-solid fa-globe',
      title: 'Web Technologies',
      description: 'Modern frameworks and libraries for scalable web applications'
    },
    {
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'Mobile Development',
      description: 'Cross-platform solutions for iOS and Android'
    },
    {
      icon: 'fa-solid fa-brain',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by cutting-edge AI'
    }
  ];
}
