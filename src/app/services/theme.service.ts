import { Injectable, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  theme = signal<Theme>('dark');

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.initTheme();
  }

  private initTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Check localStorage first
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme | null;
    
    if (savedTheme) {
      this.theme.set(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.theme.set(prefersDark ? 'dark' : 'light');
    }

    this.applyTheme(this.theme());
  }

  toggleTheme(): void {
    const newTheme = this.theme() === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.applyTheme(theme);
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, theme);
    }
  }

  private applyTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    document.documentElement.setAttribute('data-theme', theme);
  }
}
