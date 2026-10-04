import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulbLogoComponent } from '../shared/bulb-logo.component';

interface Principle {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, BulbLogoComponent],
  template: `
    <section id="about" class="py-24 lg:py-32 bg-[#F8FAFC]">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">

          <!-- Left — Visual -->
          <div class="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <!-- Background decorative element -->
            <div class="relative">
              <!-- Outer ring -->
              <div class="absolute -inset-8 rounded-3xl border border-slate-200/60 border-dashed"></div>
              <div class="absolute -inset-16 rounded-full border border-yellow-200/30 border-dashed"
                style="animation: spin-slow 30s linear infinite reverse;"></div>

              <!-- Central card -->
              <div class="relative bg-white rounded-3xl border border-slate-200 p-12 shadow-sm flex flex-col items-center gap-6">
                <app-bulb-logo [size]="120" cssClass="about-bulb" />

                <!-- Stats row -->
                <div class="grid grid-cols-2 gap-4 w-full pt-4 border-t border-slate-100">
                  <div *ngFor="let stat of stats" class="text-center">
                    <div class="text-2xl font-black text-slate-950 mb-0.5">{{ stat.value }}</div>
                    <div class="text-xs text-slate-500 font-medium">{{ stat.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right — Content -->
          <div class="order-1 lg:order-2 flex flex-col gap-8">
            <div>
              <p class="text-xs font-bold tracking-widest text-[#38BDF8] uppercase mb-4">About Bulbin Labs</p>
              <h2 class="text-4xl lg:text-5xl font-bold text-slate-950 leading-tight mb-6">
                Building with purpose.
              </h2>
              <p class="text-lg text-slate-600 leading-relaxed mb-4">
                Bulbin Labs is a technology company focused on creating useful products that combine software, artificial intelligence, automation, and thoughtful design.
              </p>
              <p class="text-base text-slate-500 leading-relaxed">
                We believe that great technology should feel simple to use, even when it's complex under the hood. Every product we build starts with a real problem and ends with a solution people actually want to use.
              </p>
            </div>

            <!-- Principles grid -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div
                *ngFor="let principle of principles"
                class="bg-white rounded-xl border border-slate-200 p-5 flex flex-col gap-3 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
              >
                <div class="text-xl">{{ principle.icon }}</div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900 mb-1">{{ principle.title }}</h4>
                  <p class="text-xs text-slate-500 leading-relaxed">{{ principle.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <style>
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .about-bulb {
        filter: drop-shadow(0 4px 16px rgba(253,224,71,0.3));
      }
    </style>
  `,
})
export class AboutComponent {
  stats = [
    { value: 'Product-first', label: 'Development approach' },
    { value: 'AI-native', label: 'Technology foundation' },
    { value: '100%', label: 'Problem-driven' },
    { value: 'Long-term', label: 'Thinking horizon' },
  ];

  principles: Principle[] = [
    {
      icon: '🎯',
      title: 'Product-first development',
      description: 'Every decision starts with the product experience, not the technology.',
    },
    {
      icon: '🌍',
      title: 'Real-world problems',
      description: 'We solve actual pain points — not hypothetical ones from pitch decks.',
    },
    {
      icon: '✦',
      title: 'Radical simplicity',
      description: 'Complexity hidden, clarity exposed. Simplicity is the hardest thing to achieve.',
    },
    {
      icon: '🔭',
      title: 'Long-term thinking',
      description: 'We build infrastructure that can carry years of growth, not just the MVP.',
    },
  ];
}
