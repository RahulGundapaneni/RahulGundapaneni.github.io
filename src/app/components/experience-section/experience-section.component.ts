import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

@Component({
    selector: 'app-experience-section',
    imports: [CommonModule],
    templateUrl: './experience-section.component.html',
    styleUrl: './experience-section.component.scss'
})
export class ExperienceSectionComponent {
  experiences: ExperienceItem[] = [
    {
      role: 'Software Development Engineer',
      company: 'Citizens Financial Group',
      location: 'Dallas, Texas',
      period: 'Jan 2023 - Present',
      highlights: [
        'Engineered a credit card origination platform with Java Spring Boot microservices, cutting processing time by 75%.',
        'Integrated Accertify, Experian, ThreatMetrix, and TSYS APIs to automate fraud and issuance workflows, raising approval accuracy by 20%.',
        'Delivered secure Angular and Node.js customer experiences with Okta OAuth2, improving engagement by 40%.',
        'Migrated legacy systems to AWS (Lambda, S3, RDS, Docker, Kubernetes), reducing hosting costs by 85%.',
        'Built a fraud detection dashboard that reduced fraudulent applications by 25% and improved retention by 30%.',
        'Automated compliance workflows using SEFAS to maintain 100% regulatory adherence.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'University of Texas at Arlington',
      location: 'Arlington, Texas',
      period: 'Dec 2021 - Dec 2022',
      highlights: [
        'Developed core modules for the CEMS Portal using Java, Angular, and SQL, serving 10,000+ students.',
        'Automated 150+ monthly compliance reports via SSMS, sustaining 98% safety compliance.',
        'Optimized 50+ SQL procedures and tables, boosting data retrieval speed by 40%.',
        'Co-developed a student check-in application for 5,000+ daily users, reducing errors by 50%.',
        'Led SQL Server training sessions, improving team competency by 70%.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Morgan Stanley',
      location: 'Bangalore, India',
      period: 'Apr 2020 - Aug 2021',
      highlights: [
        'Led development of a web-based risk management application using Angular and Spring Boot, improving production efficiency by 20%.',
        'Architected a real-time risk visualization platform for 50+ analysts with instant trading exposure insights.',
        'Implemented automation pipelines that reduced issue resolution time by 30% and repeat incidents by 40%.',
        'Developed monitoring workflows and executed performance test plans to enhance reliability under high load.'
      ]
    }
  ];
}
