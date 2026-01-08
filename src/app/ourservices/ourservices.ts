import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../projects/projects';
import { Products } from '../products/products';
import { Testimonials } from '../testimonials/testimonials';
interface Service {
  id: string;
  title: string;
  icon: string;
  description?: string;
  details: string[];
}

@Component({
  selector: 'app-ourservices',
  standalone: true,
  imports: [CommonModule,Projects,Products,Testimonials],
  templateUrl: './ourservices.html',
  styleUrl: './ourservices.css'
})
export class OurServices {
  services: Service[] = [
    {
      id: 'tech-advisory',
      title: 'Technology Advisory',
      icon: 'bi bi-globe', // Using bootstrap icons as placeholders
      details: [
        'Latest technologies for industry',
        'Efficient & optimized development',
        'Model acceleration & Solution Architecture',
        'Technology stack & toolset selection',
        'Cloud strategy & migration (AWS, Azure, GCP)',
        'Change management and transition planning'
      ]
    },
    {
      id: 'staff-augmentation',
      title: 'Staff Augmentation',
      icon: 'bi bi-people',
      details: ['Skilled resource provision', 'Team scaling', 'Expertise on demand']
    },
    {
      id: 'product-engineering',
      title: 'Product & Application Engineering',
      icon: 'bi bi-laptop',
      details: ['Full cycle development', 'MVP to Enterprise', 'Modern tech stacks']
    },
    {
      id: 'platform-integration',
      title: 'Platform & Integration Engineering',
      icon: 'bi bi-puzzle',
      details: ['API Integration', 'Microservices', 'Legacy modernization']
    },
    {
      id: 'existing-systems',
      title: 'Existing Systems Maintenance, upgrades & Oversight',
      icon: 'bi bi-tools',
      details: ['System audits', 'Performance optimization', 'Security updates']
    },
    {
      id: 'ux-design',
      title: 'User Experience & Design',
      icon: 'bi bi-palette',
      details: ['User research', 'UI/UX Design', 'Prototyping']
    },
    {
      id: 'qa-security',
      title: 'Quality Assurance & Security',
      icon: 'bi bi-shield-check',
      details: ['Automated testing', 'Security audits', 'Compliance']
    },
    {
      id: 'data-ai',
      title: 'Data, AI & MLOps',
      icon: 'bi bi-graph-up',
      details: ['Data analytics', 'Machine Learning models', 'AI integration']
    },
    {
      id: 'product-delivery',
      title: 'Product Delivery & PMO',
      icon: 'bi bi-kanban',
      details: ['Agile project management', 'Delivery optimization', 'Risk management']
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

  selectedService: Service = this.services[0];

  selectService(service: Service) {
    this.selectedService = service;
  }
}
