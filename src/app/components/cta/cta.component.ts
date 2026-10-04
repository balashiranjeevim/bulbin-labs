import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulbLogoComponent } from '../shared/bulb-logo.component';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, BulbLogoComponent],
  template: `
    <section id="contact" class="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">

      <!-- Background bulb glow -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div class="w-[600px] h-[600px] rounded-full"
          style="background: radial-gradient(circle, rgba(253,224,71,0.12) 0%, rgba(56,189,248,0.06) 50%, transparent 75%); filter: blur(60px);">
        </div>
      </div>

      <div class="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">

        <!-- Decorative bulb -->
        <div class="flex justify-center mb-10">
          <div class="relative">
            <div class="absolute -inset-6 rounded-full"
              style="background: radial-gradient(circle, rgba(253,224,71,0.2) 0%, transparent 70%); animation: cta-glow 3s ease-in-out infinite;">
            </div>
            <app-bulb-logo [size]="72" cssClass="cta-bulb" />
          </div>
        </div>

        <!-- Headline -->
        <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-950 leading-tight mb-6 text-balance">
          Have an idea worth building?
        </h2>
        <p class="text-xl text-slate-500 mb-12 text-pretty max-w-xl mx-auto leading-relaxed">
          Let's turn it into something useful.
        </p>

        <!-- CTA button -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@bulbinlabs.com"
            class="group inline-flex items-center gap-2 px-8 py-4 bg-slate-950 text-white font-semibold rounded-xl text-base hover:bg-slate-800 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200 hover:-translate-y-0.5"
          >
            Start a Conversation
            <svg class="transition-transform duration-200 group-hover:translate-x-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <!-- Contact details -->
        <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
          <a href="mailto:hello@bulbinlabs.com" class="flex items-center gap-2 hover:text-slate-700 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            hello&#64;bulbinlabs.com
          </a>
          <span class="hidden sm:block text-slate-300">·</span>
          <span class="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            bulbinlabs.com
          </span>
        </div>
      </div>

      <style>
        @keyframes cta-glow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .cta-bulb {
          filter: drop-shadow(0 0 16px rgba(253,224,71,0.5)) drop-shadow(0 0 32px rgba(56,189,248,0.2));
        }
      </style>
    </section>
  `,
})
export class CtaComponent {}
