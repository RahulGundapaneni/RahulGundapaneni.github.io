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
  isSubmitting = false;
  toastVisible = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';
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

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    if (this.isSubmitting) {
      return;
    }
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.showToast('Please fill out all fields.', 'error');
      return;
    }

    this.isSubmitting = true;
    try {
      const response = await fetch('https://formspree.io/f/xrepwbrp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Form submit failed');
      }

      this.formData = { name: '', email: '', message: '' };
      this.showToast('Thanks! Your message has been sent.', 'success');
    } catch (error) {
      this.showToast('Something went wrong. Please try again.', 'error');
    } finally {
      this.isSubmitting = false;
    }
  }

  private showToast(message: string, type: 'success' | 'error'): void {
    this.toastMessage = message;
    this.toastType = type;
    this.toastVisible = true;
    window.setTimeout(() => {
      this.toastVisible = false;
    }, 4000);
  }
}
