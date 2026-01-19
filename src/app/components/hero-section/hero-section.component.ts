import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-section',
    imports: [CommonModule],
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  metrics = [
    { value: '75%', label: 'Faster credit card onboarding' },
    { value: '85%', label: 'Cloud cost reduction' },
    { value: '20%', label: 'Approval accuracy uplift' },
    { value: '6+', label: 'Years building fintech platforms' }
  ];

  focusAreas = [
    'Microservices architecture and modernization',
    'Fraud detection and compliance automation',
    'Cloud-native delivery on AWS',
    'Customer-facing Angular experiences'
  ];
}
