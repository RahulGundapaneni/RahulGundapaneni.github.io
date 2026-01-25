import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PersonalInfo } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent implements OnInit {
  personalInfo!: PersonalInfo;
  formData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.personalInfo = this.portfolioData.getPersonalInfo();
  }

  openEmailClient(): void {
    const subject = encodeURIComponent('Let\'s Connect');
    const body = encodeURIComponent(
      `Hi ${this.personalInfo.name.split(' ')[0]},\n\n`
    );
    window.location.href = `mailto:${this.personalInfo.email}?subject=${subject}&body=${body}`;
  }

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      const subject = encodeURIComponent('Portfolio Contact: ' + this.formData.name);
      const body = encodeURIComponent(
        `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
      );
      window.location.href = `mailto:${this.personalInfo.email}?subject=${subject}&body=${body}`;
    }
  }
}
