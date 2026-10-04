import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Stage {
  number: string;
  title: string;
  description: string;
  materialIcon: string;
  accent: string;
}

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section
      id="philosophy"
      class="py-24 lg:py-32 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Section header with scroll reveal -->
        <div class="max-w-2xl mb-20" appReveal direction="up" [delay]="100">
          <p
            class="text-xs font-bold tracking-widest text-[#FDE047] uppercase mb-4 flex items-center gap-2"
          >
            <span class="w-2 h-0.5 bg-[#FDE047]"></span>
            <span>How we work</span>
          </p>
          <h2
            class="text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white leading-tight mb-6"
          >
            Ideas are only the beginning.
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We follow a disciplined process — from discovery to scale — ensuring that every product
            we build earns its place in the real world.
          </p>
        </div>

        <!-- Process stages with animated traveling beam -->
        <div class="relative">
          <!-- Connector line with continuous beam-sweep animation -->
          <div
            class="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 overflow-hidden"
            style="margin-left: 64px; margin-right: 64px;"
          >
            <div
              class="w-1/3 h-full bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent animate-beam"
            ></div>
          </div>

          <div class="grid lg:grid-cols-4 gap-8 lg:gap-6">
            <div
              *ngFor="let stage of stages; let i = index"
              appReveal
              direction="up"
              [delay]="150 + i * 130"
              class="relative flex flex-col gap-5 group cursor-default"
            >
              <!-- Icon & Number badge with hover lift & glow -->
              <div class="flex items-center gap-3">
                <div
                  class="relative z-10 w-20 h-20 rounded-2xl flex flex-col items-center justify-center border shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-lg bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                  [style.border-color]="stage.accent + '60'"
                >
                  <span
                    class="material-symbols-outlined text-[24px] mb-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    [style.color]="stage.accent"
                  >
                    {{ stage.materialIcon }}
                  </span>
                  <span class="text-xs font-black tracking-wider" [style.color]="stage.accent">
                    {{ stage.number }}
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="flex flex-col gap-2 lg:pt-2">
                <h3
                  class="text-lg font-bold text-slate-950 dark:text-white group-hover:text-[#38BDF8] transition-colors"
                >
                  {{ stage.title }}
                </h3>
                <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {{ stage.description }}
                </p>
              </div>

              <!-- Mobile connector arrow -->
              <div
                *ngIf="i < stages.length - 1"
                class="lg:hidden flex items-center justify-start pl-8 text-slate-300 dark:text-slate-700 animate-pulse"
              >
                <span class="material-symbols-outlined text-[24px]">arrow_downward</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quote card with scroll reveal & micro-interaction -->
        <div
          appReveal
          direction="zoom"
          [delay]="300"
          class="mt-20 bg-[#F8FAFC] dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 px-8 py-10 lg:px-16 lg:py-14 text-center shadow-sm relative overflow-hidden group hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
        >
          <!-- Subtle glow on hover -->
          <div
            class="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-yellow-300/10 dark:bg-yellow-400/5 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"
          ></div>

          <div
            class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-yellow-100/60 dark:bg-yellow-950/40 text-yellow-600 dark:text-yellow-400 mb-6 group-hover:rotate-6 transition-transform"
          >
            <span class="material-symbols-outlined text-[#FDE047] text-[20px]">lightbulb</span>
          </div>
          <blockquote
            class="text-2xl lg:text-3xl font-semibold text-slate-900 dark:text-slate-100 leading-snug text-balance max-w-3xl mx-auto mb-6"
          >
            "We build technology with purpose. We build to solve real things, for real people, in
            the real world."
          </blockquote>
          <div class="flex items-center justify-center gap-3">
            <div
              class="w-8 h-0.5"
              style="background: linear-gradient(90deg, #FDE047, #38BDF8);"
            ></div>
            <span
              class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest"
            >
              The Bulbin Labs Approach
            </span>
            <div
              class="w-8 h-0.5"
              style="background: linear-gradient(90deg, #38BDF8, #FDE047);"
            ></div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class PhilosophyComponent {
  stages: Stage[] = [
    {
      number: '01',
      title: 'Discover',
      description:
        'We start with the problem, not the solution. Understanding real pain points, user behavior, and market gaps before writing a single line.',
      materialIcon: 'travel_explore',
      accent: '#FDE047',
    },
    {
      number: '02',
      title: 'Build',
      description:
        'We move fast with modern technology stacks — AI, cloud, automation — building clean, scalable foundations that can grow with the product.',
      materialIcon: 'terminal',
      accent: '#38BDF8',
    },
    {
      number: '03',
      title: 'Validate',
      description:
        'Real users. Real feedback. We test, iterate, and refine until the product earns genuine traction and solves what it set out to solve.',
      materialIcon: 'verified',
      accent: '#38BDF8',
    },
    {
      number: '04',
      title: 'Scale',
      description:
        'Once proven, we grow — adding features, expanding reach, and building the infrastructure needed to serve thousands of users reliably.',
      materialIcon: 'trending_up',
      accent: '#38BDF8',
    },
  ];
}
