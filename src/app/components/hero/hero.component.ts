import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulbLogoComponent } from '../shared/bulb-logo.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, BulbLogoComponent],
  template: `
    <section class="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      <!-- Subtle background texture -->
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <!-- Yellow glow blob top-right -->
        <div class="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full"
          style="background: radial-gradient(circle, rgba(253,224,71,0.15) 0%, transparent 70%); filter: blur(40px);">
        </div>
        <!-- Sky blue glow blob bottom-left -->
        <div class="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full"
          style="background: radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 70%); filter: blur(40px);">
        </div>
        <!-- Subtle grid -->
        <div class="absolute inset-0 opacity-[0.025]"
          style="background-image: linear-gradient(#020617 1px, transparent 1px), linear-gradient(90deg, #020617 1px, transparent 1px); background-size: 60px 60px;">
        </div>
      </div>

      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div class="grid lg:grid-cols-2 gap-16 items-center">

          <!-- Left content -->
          <div class="flex flex-col gap-8">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm"
              [class.animate-fade-up]="visible()">
              <span class="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
              <span class="text-xs font-medium text-slate-600 tracking-wide">Product-first technology company</span>
            </div>

            <!-- Headline -->
            <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-950 leading-[1.05] tracking-tight text-balance"
              [class.opacity-0]="!visible()"
              style="transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;"
              [style.transform]="visible() ? 'translateY(0)' : 'translateY(24px)'">
              We build technology that solves
              <span class="relative inline-block">
                <span class="relative z-10">real problems.</span>
                <span class="absolute bottom-1 left-0 right-0 h-3 -z-0 rounded-sm"
                  style="background: linear-gradient(90deg, rgba(253,224,71,0.4), rgba(56,189,248,0.2));">
                </span>
              </span>
            </h1>

            <!-- Sub-headline -->
            <p class="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg text-pretty"
              [class.opacity-0]="!visible()"
              style="transition: opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s;"
              [style.transform]="visible() ? 'translateY(0)' : 'translateY(24px)'">
              Bulbin Labs creates intelligent software, AI-powered products, and automation systems designed around real-world needs.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-4"
              [class.opacity-0]="!visible()"
              style="transition: opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s;"
              [style.transform]="visible() ? 'translateY(0)' : 'translateY(24px)'">
              <a
                href="#products"
                class="group inline-flex items-center gap-2 px-6 py-3 bg-slate-950 text-white font-semibold rounded-xl text-sm hover:bg-slate-800 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200"
              >
                Explore Products
                <svg class="transition-transform duration-200 group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#contact"
                class="group inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-800 font-semibold rounded-xl text-sm hover:border-slate-300 hover:shadow-sm transition-all duration-200"
              >
                Let's Build Together
                <svg class="transition-transform duration-200 group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            <!-- Trust signal -->
            <div class="flex items-center gap-3 pt-2"
              [class.opacity-0]="!visible()"
              style="transition: opacity 0.7s ease 0.55s;">
              <div class="flex -space-x-1.5">
                <div *ngFor="let color of avatarColors"
                  class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  [style.background]="color">
                </div>
              </div>
              <p class="text-sm text-slate-500">Ideas becoming products, one build at a time.</p>
            </div>
          </div>

          <!-- Right — Hero bulb visual -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative"
              [class.opacity-0]="!visible()"
              style="transition: opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s;"
              [style.transform]="visible() ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.95)'">

              <!-- Outer glow rings -->
              <div class="absolute inset-0 -m-16 rounded-full"
                style="background: radial-gradient(circle, rgba(253,224,71,0.2) 0%, rgba(56,189,248,0.08) 50%, transparent 75%); animation: pulse-glow 4s ease-in-out infinite;">
              </div>
              <div class="absolute inset-0 -m-8 rounded-full border border-yellow-200/40"
                style="animation: spin-slow 20s linear infinite;">
              </div>

              <!-- Floating concept cards -->
              <div class="absolute -top-6 -left-8 bg-white rounded-xl border border-slate-200 shadow-sm px-3 py-2 flex items-center gap-2"
                style="animation: float1 5s ease-in-out infinite;">
                <span class="text-base">💡</span>
                <span class="text-xs font-semibold text-slate-700">Idea</span>
              </div>
              <div class="absolute -top-4 -right-10 bg-white rounded-xl border border-slate-200 shadow-sm px-3 py-2 flex items-center gap-2"
                style="animation: float2 6s ease-in-out infinite;">
                <span class="text-base">🤖</span>
                <span class="text-xs font-semibold text-slate-700">Intelligence</span>
              </div>
              <div class="absolute -bottom-4 -left-10 bg-white rounded-xl border border-slate-200 shadow-sm px-3 py-2 flex items-center gap-2"
                style="animation: float3 5.5s ease-in-out infinite;">
                <span class="text-base">⚙️</span>
                <span class="text-xs font-semibold text-slate-700">Technology</span>
              </div>
              <div class="absolute -bottom-6 -right-8 bg-white rounded-xl border border-slate-200 shadow-sm px-3 py-2 flex items-center gap-2"
                style="animation: float4 6.5s ease-in-out infinite;">
                <span class="text-base">🚀</span>
                <span class="text-xs font-semibold text-slate-700">Product</span>
              </div>

              <!-- Central bulb -->
              <div class="relative z-10 p-12 rounded-3xl bg-gradient-to-br from-yellow-50/80 to-sky-50/60 border border-slate-100"
                style="box-shadow: 0 0 0 1px rgba(253,224,71,0.2), 0 20px 60px rgba(253,224,71,0.1), 0 0 0 20px rgba(253,224,71,0.04);">
                <app-bulb-logo [size]="180" cssClass="hero-bulb" />
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400"
          [class.opacity-0]="!visible()"
          style="transition: opacity 1s ease 1s;">
          <span class="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div class="w-5 h-8 border border-slate-300 rounded-full flex justify-center pt-1.5">
            <div class="w-1 h-2 bg-slate-400 rounded-full" style="animation: scroll-dot 2s ease-in-out infinite;"></div>
          </div>
        </div>
      </div>
    </section>

    <style>
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.05); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes float1 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-4px, -8px); }
      }
      @keyframes float2 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(6px, -6px); }
      }
      @keyframes float3 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-6px, 6px); }
      }
      @keyframes float4 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(4px, 8px); }
      }
      @keyframes scroll-dot {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(12px); opacity: 0; }
      }
      .hero-bulb {
        filter: drop-shadow(0 0 20px rgba(253,224,71,0.5)) drop-shadow(0 0 40px rgba(56,189,248,0.2));
        animation: bulb-glow 3s ease-in-out infinite;
      }
      @keyframes bulb-glow {
        0%, 100% { filter: drop-shadow(0 0 16px rgba(253,224,71,0.4)) drop-shadow(0 0 32px rgba(56,189,248,0.15)); }
        50% { filter: drop-shadow(0 0 28px rgba(253,224,71,0.65)) drop-shadow(0 0 48px rgba(56,189,248,0.25)); }
      }
    </style>
  `,
})
export class HeroComponent implements OnInit {
  visible = signal(false);

  avatarColors = ['#FDE047', '#38BDF8', '#818CF8', '#34D399'];

  ngOnInit() {
    setTimeout(() => this.visible.set(true), 100);
  }
}
