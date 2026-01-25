import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Skill } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
})
export class SkillsSectionComponent implements OnInit {
  languages: Skill[] = [];
  frameworks: Skill[] = [];
  cloudTools: Skill[] = [];
  databases: Skill[] = [];

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.languages = this.portfolioData.getSkillsByCategory('language');
    this.frameworks = this.portfolioData.getSkillsByCategory('framework');
    this.cloudTools = [
      ...this.portfolioData.getSkillsByCategory('cloud'),
      ...this.portfolioData.getSkillsByCategory('tool'),
    ];
    this.databases = this.portfolioData.getSkillsByCategory('database');
  }

  scrollToProjects(): void {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
