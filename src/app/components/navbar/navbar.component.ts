import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulbLogoComponent } from '../shared/bulb-logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BulbLogoComponent],
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.scrolled]="isScrolled()"
      [class.bg-white/90]="isScrolled()"
      [class.bg-white/70]="!isScrolled()"
      style="backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid #E2E8F0;"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a href="#" class="flex items-center gap-2.5 group" aria-label="Bulbin Labs">
            <app-bulb-logo [size]="32" class="transition-transform duration-300 group-hover:scale-105" />
            <span class="text-sm font-bold tracking-widest text-slate-950 uppercase">Bulbin Labs</span>
          </a>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-8">
            <a
              *ngFor="let link of navLinks"
              [href]="link.href"
              class="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors duration-200"
            >
              {{ link.label }}
            </a>
          </div>

          <!-- CTA -->
          <div class="hidden md:flex items-center">
            <a
              href="#contact"
              class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-950 bg-[#FDE047] hover:bg-amber-300 rounded-lg transition-all duration-200 hover:shadow-sm"
            >
              Let's Build
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <!-- Mobile menu button -->
          <button
            (click)="toggleMobileMenu()"
            class="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span class="block w-5 h-0.5 bg-slate-950 transition-all duration-300" [class.rotate-45]="mobileOpen()" [class.translate-y-2]="mobileOpen()"></span>
            <span class="block w-5 h-0.5 bg-slate-950 transition-all duration-300" [class.opacity-0]="mobileOpen()"></span>
            <span class="block w-5 h-0.5 bg-slate-950 transition-all duration-300" [class.-rotate-45]="mobileOpen()" [class.-translate-y-2]="mobileOpen()"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        class="md:hidden overflow-hidden transition-all duration-300"
        [style.maxHeight]="mobileOpen() ? '300px' : '0'"
      >
        <div class="bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          <a
            *ngFor="let link of navLinks"
            [href]="link.href"
            (click)="closeMobileMenu()"
            class="text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors py-2 border-b border-slate-50"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            (click)="closeMobileMenu()"
            class="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-[#FDE047] rounded-lg text-center justify-center mt-2"
          >
            Let's Build →
          </a>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileOpen = signal(false);

  navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#philosophy' },
    { label: 'About', href: '#about' },
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
