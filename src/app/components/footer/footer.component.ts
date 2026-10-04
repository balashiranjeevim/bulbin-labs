import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulbLogoComponent } from '../shared/bulb-logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, BulbLogoComponent],
  template: `
    <footer class="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-850 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div class="grid lg:grid-cols-5 gap-12">

          <!-- Brand column -->
          <div class="lg:col-span-2 flex flex-col gap-5">
            <a href="#" class="flex items-center gap-3 w-fit group">
              <app-bulb-logo [size]="36" cssClass="transition-transform duration-300 group-hover:scale-105" />
              <span class="text-sm font-extrabold tracking-widest text-slate-950 dark:text-white uppercase">
                Bulbin Labs
              </span>
            </a>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              Building technology that solves real problems — one product at a time.
            </p>

            <!-- Social links -->
            <div class="flex items-center gap-3 pt-2">
              <!-- LinkedIn -->
              <a
                href="https://linkedin.com/company/bulbinlabs"
                aria-label="LinkedIn"
                class="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <!-- GitHub -->
              <a
                href="https://github.com/bulbinlabs"
                aria-label="GitHub"
                class="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <!-- Instagram -->
              <a
                href="https://instagram.com/bulbinlabs"
                aria-label="Instagram"
                class="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Links columns -->
          <div *ngFor="let col of linkCols" class="flex flex-col gap-4">
            <h4 class="text-xs font-bold tracking-widest text-slate-950 dark:text-white uppercase">{{ col.heading }}</h4>
            <nav class="flex flex-col gap-3">
              <a
                *ngFor="let link of col.links"
                [href]="link.href"
                class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors duration-150"
              >
                {{ link.label }}
              </a>
            </nav>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="mt-14 pt-8 border-t border-slate-100 dark:border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-xs text-slate-500 dark:text-slate-400">© 2026 Bulbin Labs. All rights reserved.</p>
          <div class="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <span>Made with</span>
            <span class="material-symbols-outlined text-[16px] text-yellow-500">lightbulb</span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  linkCols = [
    {
      heading: 'Company',
      links: [
        { label: 'Products', href: '#products' },
        { label: 'Solutions', href: '#philosophy' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
  ];
}
