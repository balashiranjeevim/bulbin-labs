import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Product Detail Modal -->
    <div
      *ngIf="modalService.selectedProduct() as product"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <!-- Backdrop -->
      <div
        class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        (click)="modalService.closeProduct()"
      ></div>

      <!-- Modal Card -->
      <div
        class="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 animate-gentle-pop max-h-[90vh] flex flex-col"
      >
        <!-- Header banner -->
        <div class="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between relative overflow-hidden">
          <!-- Background accent halo -->
          <div
            class="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none opacity-20 dark:opacity-30 blur-2xl"
            [style.background]="product.accent"
          ></div>

          <div class="flex items-center gap-4 relative z-10">
            <div
              class="w-14 h-14 rounded-2xl flex items-center justify-center text-white"
              [style.background]="product.accent"
            >
              <span class="material-symbols-outlined text-[30px] text-slate-950">
                {{ product.materialIcon }}
              </span>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span
                  class="text-xs font-bold tracking-widest uppercase"
                  [style.color]="product.accent"
                >
                  {{ product.category }}
                </span>
                <span class="text-slate-300 dark:text-slate-700">·</span>
                <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {{ product.status }}
                </span>
              </div>
              <h3 class="text-2xl font-extrabold text-slate-950 dark:text-white">
                {{ product.name }}
              </h3>
            </div>
          </div>

          <!-- Close button -->
          <button
            (click)="modalService.closeProduct()"
            class="relative z-10 w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-slate-500 hover:text-slate-950 dark:hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Scrollable Body -->
        <div class="p-6 sm:p-8 overflow-y-auto space-y-6">
          <!-- Tagline -->
          <p class="text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            {{ product.tagline }}
          </p>

          <!-- Problem vs Solution grid -->
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
              <div class="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                <span class="material-symbols-outlined text-[18px]">warning</span>
                <span>The Problem</span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {{ product.problem }}
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-sky-50/60 dark:bg-sky-950/20 border border-sky-200/60 dark:border-sky-900/40">
              <div class="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-bold text-xs uppercase tracking-wider mb-2">
                <span class="material-symbols-outlined text-[18px]">check_circle</span>
                <span>The Solution</span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {{ product.solution }}
              </p>
            </div>
          </div>

          <!-- Key Technical Highlights -->
          <div>
            <h4 class="text-xs font-bold tracking-widest text-slate-950 dark:text-white uppercase mb-3">
              Technical Highlights
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div
                *ngFor="let item of product.techHighlights"
                class="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                <span class="material-symbols-outlined text-[16px] text-[#38BDF8]">check</span>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Waitlist / Early Access Action -->
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 class="text-sm font-bold text-slate-950 dark:text-white mb-0.5">Want early access to {{ product.name }}?</h5>
              <p class="text-xs text-slate-500 dark:text-slate-400">Join our pilot cohort for preview builds and roadmap influence.</p>
            </div>
            <button
              (click)="requestAccess(product.name)"
              class="w-full sm:w-auto px-5 py-2.5 bg-[#FDE047] hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-sm active:scale-95 whitespace-nowrap"
            >
              {{ accessRequested() ? '✓ Added to Priority List' : 'Request Early Access →' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Inquiry Modal -->
    <div
      *ngIf="modalService.isContactModalOpen()"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        (click)="modalService.closeContact()"
      ></div>

      <div
        class="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 z-10 animate-gentle-pop"
      >
        <div class="flex items-center justify-between mb-6">
          <div>
            <span class="text-xs font-bold tracking-widest text-[#38BDF8] uppercase">Let's Build</span>
            <h3 class="text-2xl font-extrabold text-slate-950 dark:text-white mt-1">Start a Conversation</h3>
          </div>
          <button
            (click)="modalService.closeContact()"
            class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-slate-950 dark:hover:text-white flex items-center justify-center transition-colors"
          >
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <form (submit)="submitInquiry($event)" class="space-y-4">
          <div *ngIf="submitted()" class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center">
            <span class="material-symbols-outlined text-[32px] text-emerald-600 dark:text-emerald-400 mb-1">check_circle</span>
            <h4 class="text-sm font-bold text-emerald-900 dark:text-emerald-200">Message received!</h4>
            <p class="text-xs text-emerald-700 dark:text-emerald-400 mt-1">We'll review your project and get back to you within 24 hours.</p>
          </div>

          <div *ngIf="!submitted()" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Your Name</label>
              <input
                type="text"
                required
                [(ngModel)]="formName"
                name="name"
                placeholder="Ada Lovelace"
                class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Work Email</label>
              <input
                type="email"
                required
                [(ngModel)]="formEmail"
                name="email"
                placeholder="ada@company.com"
                class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">What are you looking to build?</label>
              <textarea
                rows="3"
                required
                [(ngModel)]="formMessage"
                name="message"
                placeholder="Briefly describe your idea, workflow, or business problem..."
                class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-3.5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-sm rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Send Message</span>
              <span class="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    @keyframes gentle-pop {
      from {
        opacity: 0;
        transform: scale(0.95) translateY(10px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
    .animate-gentle-pop {
      animation: gentle-pop 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `],
})
export class ProductModalComponent {
  readonly modalService = inject(ModalService);

  accessRequested = signal(false);
  submitted = signal(false);

  formName = '';
  formEmail = '';
  formMessage = '';

  @HostListener('document:keydown.escape')
  onEscape() {
    this.modalService.closeProduct();
    this.modalService.closeContact();
  }

  requestAccess(_productName: string) {
    this.accessRequested.set(true);
    setTimeout(() => this.accessRequested.set(false), 4000);
  }

  submitInquiry(e: Event) {
    e.preventDefault();
    if (!this.formName || !this.formEmail) return;
    this.submitted.set(true);
    setTimeout(() => {
      this.submitted.set(false);
      this.modalService.closeContact();
      this.formName = '';
      this.formEmail = '';
      this.formMessage = '';
    }, 2000);
  }
}
