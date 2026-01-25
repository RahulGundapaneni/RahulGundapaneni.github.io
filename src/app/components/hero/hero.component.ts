import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PersonalInfo, SocialLink } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  personalInfo!: PersonalInfo;
  socialLinks: SocialLink[] = [];

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.personalInfo = this.portfolioData.getPersonalInfo();
    this.socialLinks = this.portfolioData.getSocialLinks();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
