import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent implements OnInit, OnDestroy {
  @Input({ required: true }) navLinks: NavLink[] = [];
  activeSection: string = 'home';
  private observer: IntersectionObserver | null = null;

  ngOnInit() {
    setTimeout(() => this.setupIntersectionObserver(), 100);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-80px 0px -80px 0px',
    };

    this.observer = new IntersectionObserver((entries) => {
      // Find the section with the highest intersection ratio
      let maxRatio = 0;
      let activeId = 'home';

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeId = entry.target.id || 'home';
        }
      });

      if (maxRatio > 0) {
        this.activeSection = activeId;
      }
    }, options);

    // Observe only main section elements (home, skills, experience, projects, contact)
    const sectionIds = ['home', 'skills', 'experience', 'projects', 'contact'];
    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section && this.observer) {
        this.observer.observe(section);
      }
    });
  }

  isActive(href: string): boolean {
    const sectionId = href.replace('#', '');
    return this.activeSection === sectionId;
  }
}
