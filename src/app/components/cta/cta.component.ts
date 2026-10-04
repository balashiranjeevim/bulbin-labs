import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulbLogoComponent } from '../shared/bulb-logo.component';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, BulbLogoComponent],
  template: `
    <section id="contact" class="py-24 lg:py-32 bg-[#F8FAFC] dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">

      <!-- Background bulb glow -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div class="w-[600px] h-[600px] rounded-full opacity-60 dark:opacity-40"
          style="background: radial-gradient(circle, rgba(253,224,71,0.2) 0%, rgba(56,189,248,0.1) 50%, transparent 75%); filter: blur(60px);">
        </div>
      </div>

      <div class="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">

        <!-- Decorative bulb logo -->
        <div class="flex justify-center mb-10">
          <div class="relative">
            <div class="absolute -inset-6 rounded-full"
              style="background: radial-gradient(circle, rgba(253,224,71,0.25) 0%, transparent 70%); animation: cta-glow 3s ease-in-out infinite;">
            </div>
            <app-bulb-logo [size]="88" cssClass="cta-bulb" />
          </div>
        </div>

        <!-- Headline -->
        <h2 class="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-950 dark:text-white leading-tight mb-6 text-balance">
          Have an idea worth building?
        </h2>
        <p class="text-xl text-slate-600 dark:text-slate-400 mb-12 text-pretty max-w-xl mx-auto leading-relaxed">
          Let's turn it into something useful.
        </p>

        <!-- CTA button -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@bulbinlabs.com"
            class="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-slate-950 hover:bg-slate-850 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-semibold rounded-2xl text-base transition-all duration-200 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-white/10 hover:-translate-y-0.5 active:scale-95"
          >
            <span>Start a Conversation</span>
            <span class="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>

        <!-- Contact details with Material Symbols -->
        <div class="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
          <a
            href="mailto:hello@bulbinlabs.com"
            class="flex items-center gap-2 hover:text-[#38BDF8] dark:hover:text-[#38BDF8] transition-colors"
          >
            <span class="material-symbols-outlined text-[18px]">mail</span>
            <span>hello&#64;bulbinlabs.com</span>
          </a>
          <span class="hidden sm:block text-slate-300 dark:text-slate-700">·</span>
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[18px]">public</span>
            <span>bulbinlabs.com</span>
          </span>
        </div>
      </div>

      <style>
        @keyframes cta-glow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .cta-bulb {
          filter: drop-shadow(0 0 16px rgba(253,224,71,0.5)) drop-shadow(0 0 32px rgba(56,189,248,0.25));
        }
      </style>
    </section>
  `,
})
export class CtaComponent {}
