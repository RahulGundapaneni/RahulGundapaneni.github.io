import { Component, Input, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

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
  private sectionRatios = new Map<string, number>();
  isMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      return;
    }
    this.activeSection = this.getSectionFromHash() ?? this.activeSection;
    setTimeout(() => this.setupIntersectionObserver(), 100);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  onNavClick(href: string) {
    const sectionId = href.replace('#', '');
    this.activeSection = sectionId || 'home';
    this.closeMenu();
  }

  private getSectionFromHash(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }
    const hash = window.location.hash || '';
    const sectionId = hash.replace('#', '');
    return sectionId || null;
  }

  private setupIntersectionObserver() {
    const options = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-80px 0px -80px 0px',
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id || 'home';
        this.sectionRatios.set(id, entry.intersectionRatio);
      });

      let maxRatio = 0;
      let activeId = this.activeSection;
      this.sectionRatios.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          activeId = id;
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
      this.sectionRatios.set(sectionId, 0);
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
