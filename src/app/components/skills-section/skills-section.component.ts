import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
  groups: SkillGroup[] = [
    {
      title: 'Languages',
      items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C', 'PHP']
    },
    {
      title: 'Frameworks',
      items: ['Spring Boot', 'Angular', 'React', 'Node.js', 'Microservices', 'Bootstrap']
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS Lambda', 'S3', 'RDS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD']
    },
    {
      title: 'Data & Tools',
      items: ['MySQL', 'MongoDB', 'SQL Server', 'SSMS', 'GitHub', 'Bitbucket', 'Linux']
    }
  ];
}
