import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProjectItem {
  name: string;
  description: string;
  outcomes: string[];
  stack: string[];
  link?: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  projects: ProjectItem[] = [
    {
      name: 'Hotel Booking Service',
      description: 'Java Spring Boot backend for hotel availability search, inventory management, and reservation workflows with a modular domain layer.',
      outcomes: [
        'REST APIs for availability, catalog search, and booking flows.',
        'Validation and conflict detection for overlapping reservations.',
        'DTO-driven responses prepared for integrations.'
      ],
      stack: ['Java 17', 'Spring Boot', 'JPA', 'H2', 'JUnit'],
      link: 'https://github.com/RahulGundapaneni/HotelBookingSystem'
    },
    {
      name: 'Hotel Booking UI',
      description: 'Angular front-end shell for browsing inventory and orchestrating bookings with a configurable API base URL.',
      outcomes: [
        'Environment-configurable backend endpoint configuration.',
        'Angular CLI 18 scaffolding with build and test workflows.',
        'Ready to integrate booking, search, and user flows.'
      ],
      stack: ['Angular', 'TypeScript', 'SCSS'],
      link: 'https://github.com/RahulGundapaneni/HotelBookingUI'
    },
    {
      name: 'Rate Limiter Prototype',
      description: 'Spring Boot service demonstrating a fixed-window rate limiter with usage headers and status endpoints.',
      outcomes: [
        'HTTP 429 responses with `X-RateLimit-*` headers.',
        'Status endpoint returns remaining permits without consuming quotas.',
        'Unit tests cover core limiter behavior.'
      ],
      stack: ['Java', 'Spring Boot', 'Maven', 'JUnit'],
      link: 'https://github.com/RahulGundapaneni/RateLimitter'
    },
    {
      name: 'Angular Child Micro Frontend',
      description: 'Angular 17 remote packaged with Webpack Module Federation for runtime embedding into a React host.',
      outcomes: [
        'Lifecycle helpers to mount, update, and unmount the remote.',
        'Exposed module for host-side consumption.',
        'Local dev server for rapid iteration.'
      ],
      stack: ['Angular 17', 'Webpack', 'Module Federation'],
      link: 'https://github.com/RahulGundapaneni/angular-child'
    },
    {
      name: 'Driver Fatigue Detection',
      description: 'Computer vision pipeline that tracks eye state with a CNN to trigger alerts when drivers show signs of drowsiness.',
      outcomes: [
        'Real-time detection script with alarm trigger.',
        'Training pipeline and Colab notebook for experimentation.',
        'Pretrained weights for immediate demos.'
      ],
      stack: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      link: 'https://github.com/RahulGundapaneni/Driver-Fatigue-Detection'
    }
  ];
}
