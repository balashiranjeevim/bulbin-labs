import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulbLogoComponent } from '../shared/bulb-logo.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, BulbLogoComponent, ScrollRevealDirective],
  template: `
    <section
      id="contact"
      class="py-24 lg:py-32 bg-[#F8FAFC] dark:bg-slate-950 relative overflow-hidden transition-colors duration-300"
    >
      <!-- Background breathing radial light -->
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          class="w-[680px] h-[680px] rounded-full opacity-60 dark:opacity-40 animate-pulse-slow"
          style="background: radial-gradient(circle, rgba(253,224,71,0.22) 0%, rgba(56,189,248,0.12) 50%, transparent 75%); filter: blur(70px);"
        ></div>
      </div>

      <div class="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <!-- Decorative bulb logo with pulsing radiant aura -->
        <div class="flex justify-center mb-10" appReveal direction="zoom" [delay]="100">
          <div class="relative group cursor-pointer" (click)="modalService.openContact()">
            <div
              class="absolute -inset-8 rounded-full pointer-events-none"
              style="background: radial-gradient(circle, rgba(253,224,71,0.3) 0%, transparent 70%); animation: cta-glow 3s ease-in-out infinite;"
            ></div>
            <app-bulb-logo
              [size]="92"
              cssClass="cta-bulb transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
          </div>
        </div>

        <!-- Headline & subhead with scroll reveal -->
        <h2
          appReveal
          direction="up"
          [delay]="200"
          class="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-950 dark:text-white leading-tight mb-6 text-balance"
        >
          Have an idea worth building?
        </h2>
        <p
          appReveal
          direction="up"
          [delay]="300"
          class="text-xl text-slate-600 dark:text-slate-400 mb-12 text-pretty max-w-xl mx-auto leading-relaxed"
        >
          Let's turn it into something useful.
        </p>

        <!-- CTA action buttons -->
        <div
          appReveal
          direction="up"
          [delay]="400"
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            (click)="modalService.openContact()"
            type="button"
            class="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-slate-950 hover:bg-slate-850 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-bold rounded-2xl text-base transition-all duration-200 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>Start a Conversation</span>
            <span
              class="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1"
            >
              arrow_forward
            </span>
          </button>

          <button
            (click)="copyEmail()"
            type="button"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 text-sm font-semibold transition-all hover:shadow-sm active:scale-95 cursor-pointer"
          >
            <span class="material-symbols-outlined text-[18px]">
              {{ copied() ? 'done' : 'content_copy' }}
            </span>
            <span>{{ copied() ? 'Email copied!' : 'contact@bulbin.in' }}</span>
          </button>
        </div>

        <!-- Contact details -->
        <div
          appReveal
          direction="fade"
          [delay]="500"
          class="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400"
        >
          <a
            href="mailto:contact@bulbinlabs.com"
            class="flex items-center gap-2 hover:text-[#38BDF8] dark:hover:text-[#38BDF8] transition-colors"
          >
            <span class="material-symbols-outlined text-[18px]">mail</span>
            <span>contact&#64;bulbin.in</span>
          </a>
          <span class="hidden sm:block text-slate-300 dark:text-slate-700">·</span>
          <a
            href="https://wa.me/919952599329"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
          >
            <span class="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp (+91 99525 99329)</span>
          </a>
          <span class="hidden sm:block text-slate-300 dark:text-slate-700">·</span>
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[18px]">public</span>
            <span>bulbin.in</span>
          </span>
        </div>
      </div>

      <style>
        @keyframes cta-glow {
          0%,
          100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.65;
            transform: scale(1.05);
          }
        }
        .cta-bulb {
          filter: drop-shadow(0 0 18px rgba(253, 224, 71, 0.55))
            drop-shadow(0 0 36px rgba(56, 189, 248, 0.3));
        }
      </style>
    </section>
  `,
})
export class CtaComponent {
  readonly modalService = inject(ModalService);
  copied = signal(false);

  copyEmail() {
    navigator.clipboard?.writeText('hello@bulbinlabs.com');
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2500);
  }
}
