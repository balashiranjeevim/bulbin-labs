import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulbLogoComponent } from '../shared/bulb-logo.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Principle {
  title: string;
  description: string;
  materialIcon: string;
  accent: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, BulbLogoComponent, ScrollRevealDirective],
  template: `
    <section id="about" class="py-24 lg:py-32 bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">

          <!-- Left — Visual with Bulb Logo & Counter-Rotating Orbital Rings -->
          <div
            appReveal
            direction="right"
            [delay]="150"
            class="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div class="relative">
              <!-- Outer orbit ring (counter-clockwise) with satellite node -->
              <div
                class="absolute -inset-16 rounded-full border border-yellow-300/30 dark:border-yellow-400/20 border-dashed animate-orbit-ccw pointer-events-none"
              >
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FDE047] shadow-md shadow-yellow-400/50"></div>
              </div>

              <!-- Inner orbit ring (clockwise) with satellite node -->
              <div
                class="absolute -inset-8 rounded-full border border-sky-400/30 dark:border-sky-400/20 border-dashed animate-orbit-cw pointer-events-none"
              >
                <div class="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#38BDF8] shadow-md shadow-sky-400/50"></div>
              </div>

              <!-- Central card with hover elevation -->
              <div
                class="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-10 lg:p-12 shadow-xl dark:shadow-slate-950/70 flex flex-col items-center gap-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <app-bulb-logo [size]="145" cssClass="about-bulb transition-transform duration-300 hover:scale-105" />

                <!-- Stats row with interactive micro-lift -->
                <div class="grid grid-cols-2 gap-4 w-full pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div
                    *ngFor="let stat of stats"
                    class="text-center p-2 rounded-xl transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    <div class="text-xl lg:text-2xl font-black text-slate-950 dark:text-white mb-0.5 tracking-tight">
                      {{ stat.value }}
                    </div>
                    <div class="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {{ stat.label }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right — Content with scroll reveal -->
          <div
            appReveal
            direction="left"
            [delay]="200"
            class="order-1 lg:order-2 flex flex-col gap-8"
          >
            <div>
              <p class="text-xs font-bold tracking-widest text-[#38BDF8] uppercase mb-4 flex items-center gap-2">
                <span class="w-2 h-0.5 bg-[#38BDF8]"></span>
                <span>About Bulbin Labs</span>
              </p>
              <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white leading-tight mb-6">
                Building with purpose.
              </h2>
              <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Bulbin Labs is a technology company focused on creating useful products that combine software, artificial intelligence, automation, and thoughtful design.
              </p>
              <p class="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                We believe that great technology should feel simple to use, even when it's complex under the hood. Every product we build starts with a real problem and ends with a solution people actually want to use.
              </p>
            </div>

            <!-- Principles grid with micro-hover -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div
                *ngFor="let principle of principles; let j = index"
                class="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-3 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default"
              >
                <div
                  class="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3"
                  [style.background]="principle.accent + '20'"
                  [style.color]="principle.accent"
                >
                  <span class="material-symbols-outlined text-[22px]">
                    {{ principle.materialIcon }}
                  </span>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#38BDF8] transition-colors">
                    {{ principle.title }}
                  </h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {{ principle.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <style>
      .about-bulb {
        filter: drop-shadow(0 4px 20px rgba(253,224,71,0.35));
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
      materialIcon: 'center_focus_strong',
      title: 'Product-first development',
      description: 'Every decision starts with the product experience, not the technology.',
      accent: '#FDE047',
    },
    {
      materialIcon: 'public',
      title: 'Real-world problems',
      description: 'We solve actual pain points — not hypothetical ones from pitch decks.',
      accent: '#38BDF8',
    },
    {
      materialIcon: 'auto_awesome',
      title: 'Radical simplicity',
      description: 'Complexity hidden, clarity exposed. Simplicity is the hardest thing to achieve.',
      accent: '#818CF8',
    },
    {
      materialIcon: 'explore',
      title: 'Long-term thinking',
      description: 'We build infrastructure that can carry years of growth, not just the MVP.',
      accent: '#34D399',
    },
  ];
}
