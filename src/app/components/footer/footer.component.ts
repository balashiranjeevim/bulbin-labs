import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BulbLogoComponent } from '../shared/bulb-logo.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, BulbLogoComponent],
  template: `
    <footer
      class="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 relative"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div class="grid lg:grid-cols-5 gap-12">
          <!-- Brand column -->
          <div class="lg:col-span-2 flex flex-col gap-5">
            <a href="#" class="flex items-center gap-3 w-fit group">
              <app-bulb-logo
                [size]="36"
                cssClass="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <span
                class="text-sm font-extrabold tracking-widest text-slate-950 dark:text-white uppercase"
              >
                Bulbin Labs
              </span>
            </a>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              Building technology that solves real problems — one product at a time.
            </p>

            <!-- Newsletter / Product dispatch signup -->
            <div class="mt-1">
              <label class="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-2">
                Product Dispatch
              </label>
              <form (submit)="subscribe($event)" class="flex gap-2 max-w-sm">
                <input
                  type="email"
                  required
                  [(ngModel)]="newsletterEmail"
                  name="email"
                  placeholder="Enter your email"
                  class="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                />
                <button
                  type="submit"
                  class="px-4 py-2 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-xs rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shrink-0 cursor-pointer"
                >
                  {{ subscribed() ? 'Subscribed ✓' : 'Subscribe' }}
                </button>
              </form>
            </div>

            <!-- Social links -->
            <div class="flex items-center gap-3 pt-3">
              <!-- LinkedIn -->
              <a
                href="https://linkedin.com/company/bulbin-labs"
                aria-label="LinkedIn"
                class="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 hover:-translate-y-1 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <!-- GitHub -->
              <a
                href="https://github.com/bulbinlabs"
                aria-label="GitHub"
                class="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 hover:-translate-y-1 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
              <!-- Instagram -->
              <a
                href="https://instagram.com/bulbinlabs"
                aria-label="Instagram"
                class="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 hover:-translate-y-1 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <!-- WhatsApp -->
              <a
                href="https://wa.me/919952599329"
                aria-label="WhatsApp"
                class="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:-translate-y-1 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.585 1.961.914 3.791.914 3.179 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.77-5.767-5.77zm3.438 8.199c-.143.402-.716.739-1.002.775-.285.036-.632.148-2.074-.455-1.742-.729-2.875-2.508-2.961-2.623-.087-.116-.708-.941-.708-1.794 0-.853.448-1.273.607-1.446.16-.173.348-.217.464-.217.116 0 .232.001.333.006.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.098.821zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.987-1.307A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Links column: Company -->
          <div class="flex flex-col gap-4">
            <h4 class="text-xs font-bold tracking-widest text-slate-950 dark:text-white uppercase">
              Products
            </h4>
            <nav class="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
              <a
                href="#products"
                class="hover:text-slate-950 dark:hover:text-white transition-colors"
                >FlowMind (AI Automation)</a
              >
              <a
                href="#products"
                class="hover:text-slate-950 dark:hover:text-white transition-colors"
                >Lens Analytics</a
              >
              <a
                href="#products"
                class="hover:text-slate-950 dark:hover:text-white transition-colors"
                >FormForge</a
              >
              <a
                href="#products"
                class="hover:text-slate-950 dark:hover:text-white transition-colors"
                >DocuPilot</a
              >
            </nav>
          </div>

          <!-- Links column: Solutions -->
          <div class="flex flex-col gap-4">
            <h4 class="text-xs font-bold tracking-widest text-slate-950 dark:text-white uppercase">
              Company
            </h4>
            <nav class="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
              <a href="#about" class="hover:text-slate-950 dark:hover:text-white transition-colors"
                >About Bulbin Labs</a
              >
              <a
                href="#philosophy"
                class="hover:text-slate-950 dark:hover:text-white transition-colors"
                >Our Philosophy</a
              >
              <a
                href="#technology"
                class="hover:text-slate-950 dark:hover:text-white transition-colors"
                >Technology Stack</a
              >
              <button
                (click)="modalService.openContact()"
                class="text-left hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
              >
                Contact Founders
              </button>
            </nav>
          </div>

          <!-- Live status + Back to top -->
          <div class="flex flex-col gap-4">
            <h4 class="text-xs font-bold tracking-widest text-slate-950 dark:text-white uppercase">
              Status
            </h4>
            <div
              class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <div class="flex items-center gap-2 mb-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="text-xs font-bold text-slate-900 dark:text-white"
                  >All Systems Live</span
                >
              </div>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">
                Products operating normally across all regions.
              </p>
            </div>

            <!-- Back to top button -->
            <button
              (click)="scrollToTop()"
              class="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer mt-2 group"
            >
              <span
                class="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:-translate-y-0.5 transition-transform"
              >
                <span class="material-symbols-outlined text-[16px]">arrow_upward</span>
              </span>
              <span>Back to top</span>
            </button>
          </div>
        </div>

        <!-- Bottom bar -->
        <div
          class="mt-14 pt-8 border-t border-slate-100 dark:border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p class="text-xs text-slate-500 dark:text-slate-400">
            © 2026 Bulbin Labs. All rights reserved.
          </p>
          <div class="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <span>Made with</span>
            <span class="material-symbols-outlined text-[16px] text-yellow-500 animate-pulse"
              >lightbulb</span
            >
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly modalService = inject(ModalService);

  newsletterEmail = '';
  subscribed = signal(false);

  subscribe(e: Event) {
    e.preventDefault();
    if (!this.newsletterEmail) return;
    this.subscribed.set(true);
    setTimeout(() => {
      this.newsletterEmail = '';
      this.subscribed.set(false);
    }, 3500);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
