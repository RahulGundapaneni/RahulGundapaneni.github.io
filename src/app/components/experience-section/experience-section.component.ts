import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
})
export class ExperienceSectionComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit() {
    this.experiences = this.portfolioService.getExperiences();
  }
}
