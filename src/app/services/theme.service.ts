import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isDark = signal<boolean>(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initTheme();
    }
  }

  private initTheme(): void {
    try {
      const stored = localStorage.getItem('bulbin-theme');
      if (stored === 'dark') {
        this.setDark(true);
      } else if (stored === 'light') {
        this.setDark(false);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.setDark(prefersDark);
      }
    } catch {
      this.setDark(false);
    }
  }

  toggle(): void {
    this.setDark(!this.isDark());
  }

  private setDark(dark: boolean): void {
    this.isDark.set(dark);
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      if (dark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('bulbin-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('bulbin-theme', 'light');
      }
    } catch {}
  }
}
