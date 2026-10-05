import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulbLogoComponent } from '../shared/bulb-logo.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, BulbLogoComponent, ScrollRevealDirective],
  template: `
    <section
      class="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950 pt-16 transition-colors duration-300"
    >
      <!-- Background lighting & ambient particles -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <!-- Yellow glow top-right -->
        <div
          class="absolute -top-40 right-0 w-[640px] h-[640px] rounded-full opacity-60 dark:opacity-40 animate-pulse-slow"
          style="background: radial-gradient(circle, rgba(253,224,71,0.28) 0%, transparent 70%); filter: blur(50px);"
        ></div>
        <!-- Sky blue glow bottom-left -->
        <div
          class="absolute bottom-0 -left-40 w-[540px] h-[540px] rounded-full opacity-60 dark:opacity-30 animate-pulse-slow"
          style="background: radial-gradient(circle, rgba(56,189,248,0.22) 0%, transparent 70%); filter: blur(50px); animation-delay: 2s;"
        ></div>

        <!-- Ambient Floating Particles -->
        <div
          *ngFor="let p of ambientParticles"
          class="absolute rounded-full pointer-events-none animate-particle-float"
          [style.left.%]="p.x"
          [style.top.%]="p.y"
          [style.width.px]="p.size"
          [style.height.px]="p.size"
          [style.background]="p.color"
          [style.animation-delay]="p.delay + 's'"
          [style.animation-duration]="p.duration + 's'"
          style="filter: blur(1px); opacity: 0.7;"
        ></div>

        <!-- Subtle geometric grid -->
        <div
          class="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
          style="background-image: linear-gradient(#020617 1px, transparent 1px), linear-gradient(90deg, #020617 1px, transparent 1px); background-size: 60px 60px;"
        ></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left content -->
          <div class="flex flex-col gap-8">
            <!-- Badge -->
            <div
              appReveal
              direction="down"
              [delay]="100"
              class="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm hover:border-[#38BDF8] transition-colors"
            >
              <span class="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
              <span class="text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide">
                Product-first technology company
              </span>
            </div>

            <!-- Headline -->
            <h1
              appReveal
              direction="up"
              [delay]="200"
              class="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-950 dark:text-white leading-[1.05] tracking-tight text-balance"
            >
              We build technology that solves
              <span class="relative inline-block whitespace-nowrap">
                <span class="relative z-10">real problems.</span>
                <span
                  class="absolute bottom-1 left-0 right-0 h-3 -z-0 rounded-sm"
                  style="background: linear-gradient(90deg, rgba(253,224,71,0.5), rgba(56,189,248,0.3));"
                >
                </span>
              </span>
            </h1>

            <!-- Sub-headline -->
            <p
              appReveal
              direction="up"
              [delay]="300"
              class="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg text-pretty"
            >
              Bulbin Labs creates intelligent software, AI-powered products, and automation systems
              designed around real-world needs.
            </p>

            <!-- CTA Buttons -->
            <div appReveal direction="up" [delay]="400" class="flex flex-wrap gap-4">
              <a
                href="#products"
                class="group inline-flex items-center gap-2 px-6 py-3.5 bg-slate-950 hover:bg-slate-850 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-semibold rounded-xl text-sm transition-all duration-200 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-white/10 active:scale-95"
              >
                <span>Explore Products</span>
                <span
                  class="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1"
                >
                  arrow_forward
                </span>
              </a>
              <button
                (click)="modalService.openContact()"
                type="button"
                class="group inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold rounded-xl text-sm hover:border-[#38BDF8] dark:hover:border-[#38BDF8] hover:shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>Let's Build Together</span>
                <span
                  class="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1"
                >
                  arrow_forward
                </span>
              </button>
            </div>

            <!-- Trust signal -->
            <div appReveal direction="fade" [delay]="500" class="flex items-center gap-3 pt-2">
              <div class="flex -space-x-1.5">
                <div
                  *ngFor="let color of avatarColors"
                  class="w-7 h-7 rounded-full border-2 border-white dark:border-slate-950 flex items-center justify-center text-white text-xs font-bold transition-transform hover:scale-110"
                  [style.background]="color"
                ></div>
              </div>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                Ideas becoming products, one build at a time.
              </p>
            </div>
          </div>

          <!-- Right — Hero bulb visual with interactive tilt -->
          <div appReveal direction="zoom" [delay]="250" class="flex justify-center lg:justify-end">
            <div
              class="relative perspective-1000"
              (mousemove)="onMouseMove($event)"
              (mouseleave)="onMouseLeave()"
            >
              <!-- Outer glow rings -->
              <div
                class="absolute inset-0 -m-16 rounded-full pointer-events-none"
                style="background: radial-gradient(circle, rgba(253,224,71,0.25) 0%, rgba(56,189,248,0.12) 50%, transparent 75%); animation: pulse-glow 4s ease-in-out infinite;"
              ></div>
              <div
                class="absolute inset-0 -m-8 rounded-full border border-yellow-300/30 dark:border-yellow-400/20"
                style="animation: spin-slow 20s linear infinite;"
              ></div>

              <!-- Floating concept cards with staggered micro-motion -->
              <div
                class="absolute -top-6 -left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 shadow-md px-3.5 py-2 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform"
                style="animation: float1 5s ease-in-out infinite;"
              >
                <span class="material-symbols-outlined text-[#FDE047] text-[20px]">lightbulb</span>
                <span class="text-xs font-semibold text-slate-800 dark:text-slate-200">Idea</span>
              </div>

              <div
                class="absolute -top-4 -right-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 shadow-md px-3.5 py-2 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform"
                style="animation: float2 6s ease-in-out infinite;"
              >
                <span class="material-symbols-outlined text-[#38BDF8] text-[20px]">psychology</span>
                <span class="text-xs font-semibold text-slate-800 dark:text-slate-200"
                  >Intelligence</span
                >
              </div>

              <div
                class="absolute -bottom-4 -left-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 shadow-md px-3.5 py-2 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform"
                style="animation: float3 5.5s ease-in-out infinite;"
              >
                <span class="material-symbols-outlined text-[#818CF8] text-[20px]"
                  >precision_manufacturing</span
                >
                <span class="text-xs font-semibold text-slate-800 dark:text-slate-200"
                  >Technology</span
                >
              </div>

              <div
                class="absolute -bottom-6 -right-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 shadow-md px-3.5 py-2 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform"
                style="animation: float4 6.5s ease-in-out infinite;"
              >
                <span class="material-symbols-outlined text-[#34D399] text-[20px]"
                  >rocket_launch</span
                >
                <span class="text-xs font-semibold text-slate-800 dark:text-slate-200"
                  >Product</span
                >
              </div>

              <!-- Central bulb card container with 3D parallax tilt -->
              <div
                class="relative z-10 p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-yellow-50/90 to-sky-50/70 dark:from-slate-900/95 dark:to-slate-900/80 border border-slate-200/80 dark:border-slate-800/90 backdrop-blur-sm transition-transform duration-200 ease-out"
                [style.transform]="tiltTransform()"
                style="box-shadow: 0 0 0 1px rgba(253,224,71,0.2), 0 20px 60px rgba(253,224,71,0.12), 0 0 0 20px rgba(253,224,71,0.03);"
              >
                <app-bulb-logo [size]="190" cssClass="hero-bulb" />
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div
          class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-500"
        >
          <span class="text-[11px] font-bold tracking-widest uppercase">Scroll</span>
          <div
            class="w-5 h-8 border border-slate-300 dark:border-slate-700 rounded-full flex justify-center pt-1.5"
          >
            <div
              class="w-1 h-2 bg-slate-400 dark:bg-slate-500 rounded-full"
              style="animation: scroll-dot 2s ease-in-out infinite;"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <style>
      .perspective-1000 {
        perspective: 1000px;
      }
      @keyframes pulse-glow {
        0%,
        100% {
          opacity: 0.6;
          transform: scale(1);
        }
        50% {
          opacity: 1;
          transform: scale(1.05);
        }
      }
      @keyframes pulse-slow {
        0%,
        100% {
          opacity: 0.4;
        }
        50% {
          opacity: 0.7;
        }
      }
      @keyframes spin-slow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes float1 {
        0%,
        100% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(-4px, -8px);
        }
      }
      @keyframes float2 {
        0%,
        100% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(6px, -6px);
        }
      }
      @keyframes float3 {
        0%,
        100% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(-6px, 6px);
        }
      }
      @keyframes float4 {
        0%,
        100% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(4px, 8px);
        }
      }
      @keyframes scroll-dot {
        0% {
          transform: translateY(0);
          opacity: 1;
        }
        100% {
          transform: translateY(12px);
          opacity: 0;
        }
      }
      @keyframes particle-drift {
        0% {
          transform: translateY(0px) translateX(0px);
          opacity: 0.2;
        }
        50% {
          opacity: 0.8;
          transform: translateY(-24px) translateX(12px);
        }
        100% {
          transform: translateY(0px) translateX(0px);
          opacity: 0.2;
        }
      }
      .animate-particle-float {
        animation: particle-drift infinite ease-in-out;
      }
      .hero-bulb {
        filter: drop-shadow(0 0 20px rgba(253, 224, 71, 0.5))
          drop-shadow(0 0 40px rgba(56, 189, 248, 0.25));
        animation: bulb-glow 3s ease-in-out infinite;
      }
      @keyframes bulb-glow {
        0%,
        100% {
          filter: drop-shadow(0 0 16px rgba(253, 224, 71, 0.4))
            drop-shadow(0 0 32px rgba(56, 189, 248, 0.2));
        }
        50% {
          filter: drop-shadow(0 0 28px rgba(253, 224, 71, 0.7))
            drop-shadow(0 0 48px rgba(56, 189, 248, 0.3));
        }
      }
    </style>
  `,
})
export class HeroComponent {
  readonly modalService = inject(ModalService);

  avatarColors = ['#FDE047', '#38BDF8', '#818CF8', '#34D399'];
  tiltTransform = signal('rotateX(0deg) rotateY(0deg)');

  ambientParticles = [
    { x: 15, y: 25, size: 4, color: '#FDE047', delay: 0, duration: 6 },
    { x: 82, y: 18, size: 5, color: '#38BDF8', delay: 1, duration: 7 },
    { x: 70, y: 75, size: 3, color: '#FDE047', delay: 2, duration: 5.5 },
    { x: 25, y: 80, size: 4, color: '#38BDF8', delay: 0.5, duration: 8 },
    { x: 90, y: 55, size: 3, color: '#FDE047', delay: 1.5, duration: 6.5 },
    { x: 45, y: 20, size: 3, color: '#818CF8', delay: 3, duration: 7.2 },
  ];

  onMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateY = (x / (rect.width / 2)) * 7;
    const rotateX = -(y / (rect.height / 2)) * 7;
    this.tiltTransform.set(`rotateX(${rotateX.toFixed(1)}deg) rotateY(${rotateY.toFixed(1)}deg)`);
  }

  onMouseLeave() {
    this.tiltTransform.set('rotateX(0deg) rotateY(0deg)');
  }
}
