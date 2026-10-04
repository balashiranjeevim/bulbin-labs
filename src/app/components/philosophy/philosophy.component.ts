import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stage {
  number: string;
  title: string;
  description: string;
  accent: string;
  bg: string;
}

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="philosophy" class="py-24 lg:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <!-- Section header -->
        <div class="max-w-2xl mb-20">
          <p class="text-xs font-bold tracking-widest text-[#FDE047] uppercase mb-4">How we work</p>
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-950 leading-tight mb-6">
            Ideas are only the beginning.
          </h2>
          <p class="text-lg text-slate-500 leading-relaxed">
            We follow a disciplined process — from discovery to scale — ensuring that every product we build earns its place in the real world.
          </p>
        </div>

        <!-- Process stages -->
        <div class="relative">
          <!-- Connector line (desktop) -->
          <div class="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style="background: linear-gradient(90deg, #FDE047 0%, #38BDF8 100%); margin-left: 64px; margin-right: 64px;">
          </div>

          <div class="grid lg:grid-cols-4 gap-8 lg:gap-6">
            <div
              *ngFor="let stage of stages; let i = index"
              class="relative flex flex-col gap-5"
            >
              <!-- Number circle -->
              <div class="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black border-2 shadow-sm"
                [style.background]="stage.bg"
                [style.border-color]="stage.accent + '40'"
                [style.color]="stage.accent">
                {{ stage.number }}
              </div>

              <!-- Content -->
              <div class="flex flex-col gap-2 lg:pt-4">
                <h3 class="text-lg font-bold text-slate-950">{{ stage.title }}</h3>
                <p class="text-sm text-slate-500 leading-relaxed">{{ stage.description }}</p>
              </div>

              <!-- Connector arrow (mobile) -->
              <div *ngIf="i < stages.length - 1" class="lg:hidden flex items-center justify-start pl-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="rotate-90 text-slate-300">
                  <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Quote / tagline -->
        <div class="mt-20 bg-[#F8FAFC] rounded-2xl border border-slate-200 px-8 py-10 lg:px-16 lg:py-12 text-center">
          <blockquote class="text-2xl lg:text-3xl font-semibold text-slate-800 leading-snug text-balance max-w-3xl mx-auto mb-6">
            "We don't build software for the sake of building. We build to solve real things, for real people, in the real world."
          </blockquote>
          <div class="flex items-center justify-center gap-3">
            <div class="w-8 h-0.5" style="background: linear-gradient(90deg, #FDE047, #38BDF8);"></div>
            <span class="text-sm font-semibold text-slate-500 tracking-wide">The Bulbin Labs Approach</span>
            <div class="w-8 h-0.5" style="background: linear-gradient(90deg, #38BDF8, #FDE047);"></div>
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
      description: 'We start with the problem, not the solution. Understanding real pain points, user behavior, and market gaps before writing a single line.',
      accent: '#FDE047',
      bg: '#FEFCE8',
    },
    {
      number: '02',
      title: 'Build',
      description: 'We move fast with modern technology stacks — AI, cloud, automation — building clean, scalable foundations that can grow with the product.',
      accent: '#38BDF8',
      bg: '#F0F9FF',
    },
    {
      number: '03',
      title: 'Validate',
      description: 'Real users. Real feedback. We test, iterate, and refine until the product earns genuine traction and solves what it set out to solve.',
      accent: '#38BDF8',
      bg: '#F0F9FF',
    },
    {
      number: '04',
      title: 'Scale',
      description: 'Once proven, we grow — adding features, expanding reach, and building the infrastructure needed to serve thousands of users reliably.',
      accent: '#38BDF8',
      bg: '#F0F9FF',
    },
  ];
}
