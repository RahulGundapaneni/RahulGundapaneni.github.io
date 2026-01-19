import { Component } from '@angular/core';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    EducationSectionComponent,
    ContactSectionComponent,
    SiteFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
