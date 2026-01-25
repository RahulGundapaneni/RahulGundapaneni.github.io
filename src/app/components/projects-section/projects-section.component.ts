import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent implements OnInit {
  projects: Project[] = [];

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.projects = this.portfolioData.getFeaturedProjects();
  }

  openGitHub(url?: string): void {
    if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  }
}
