import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulbLogoComponent } from '../shared/bulb-logo.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BulbLogoComponent],
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b"
      [class.bg-white/90]="isScrolled() && !themeService.isDark()"
      [class.bg-white/70]="!isScrolled() && !themeService.isDark()"
      [class.border-slate-200]="!themeService.isDark()"
      [class.bg-slate-950/90]="isScrolled() && themeService.isDark()"
      [class.bg-slate-950/70]="!isScrolled() && themeService.isDark()"
      [class.border-slate-800]="themeService.isDark()"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a href="#" class="flex items-center gap-3 group" aria-label="Bulbin Labs Home">
            <app-bulb-logo [size]="34" cssClass="transition-transform duration-300 group-hover:scale-105" />
            <span class="text-sm font-extrabold tracking-widest text-slate-950 dark:text-white uppercase">
              Bulbin Labs
            </span>
          </a>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-8">
            <a
              *ngFor="let link of navLinks"
              [href]="link.href"
              class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors duration-200"
            >
              {{ link.label }}
            </a>
          </div>

          <!-- Actions: Theme toggle + CTA -->
          <div class="hidden md:flex items-center gap-3">
            <!-- Dark mode toggle -->
            <button
              (click)="themeService.toggle()"
              type="button"
              [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
              class="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 flex items-center justify-center transition-all duration-200"
            >
              <span class="material-symbols-outlined text-[20px]">
                {{ themeService.isDark() ? 'light_mode' : 'dark_mode' }}
              </span>
            </button>

            <!-- CTA -->
            <a
              href="#contact"
              class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-950 bg-[#FDE047] hover:bg-amber-300 rounded-xl transition-all duration-200 hover:shadow-md hover:shadow-yellow-500/10 active:scale-95"
            >
              <span>Let's Build</span>
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          <!-- Mobile controls: Theme toggle + Hamburger -->
          <div class="md:hidden flex items-center gap-2">
            <button
              (click)="themeService.toggle()"
              type="button"
              [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
              class="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 flex items-center justify-center"
            >
              <span class="material-symbols-outlined text-[18px]">
                {{ themeService.isDark() ? 'light_mode' : 'dark_mode' }}
              </span>
            </button>

            <button
              (click)="toggleMobileMenu()"
              class="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle menu"
            >
              <span class="block w-5 h-0.5 bg-slate-950 dark:bg-white transition-all duration-300" [class.rotate-45]="mobileOpen()" [class.translate-y-2]="mobileOpen()"></span>
              <span class="block w-5 h-0.5 bg-slate-950 dark:bg-white transition-all duration-300" [class.opacity-0]="mobileOpen()"></span>
              <span class="block w-5 h-0.5 bg-slate-950 dark:bg-white transition-all duration-300" [class.-rotate-45]="mobileOpen()" [class.-translate-y-2]="mobileOpen()"></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        class="md:hidden overflow-hidden transition-all duration-300"
        [style.maxHeight]="mobileOpen() ? '320px' : '0'"
      >
        <div class="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 px-6 py-4 flex flex-col gap-3">
          <a
            *ngFor="let link of navLinks"
            [href]="link.href"
            (click)="closeMobileMenu()"
            class="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors py-2 border-b border-slate-50 dark:border-slate-900"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            (click)="closeMobileMenu()"
            class="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-[#FDE047] rounded-xl text-center mt-2"
          >
            <span>Let's Build</span>
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);
  isScrolled = signal(false);
  mobileOpen = signal(false);

  navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#philosophy' },
    { label: 'About', href: '#about' },
    { label: 'Technology', href: '#technology' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.mobileOpen.update((v) => !v);
  }

  closeMobileMenu() {
    this.mobileOpen.set(false);
  }
}
