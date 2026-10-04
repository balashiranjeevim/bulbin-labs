import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  description: string;
  category: string;
  status: 'Live' | 'Building' | 'Coming Soon';
  materialIcon: string;
  accent: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="products" class="py-24 lg:py-32 bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <!-- Section header -->
        <div class="max-w-2xl mb-16">
          <p class="text-xs font-bold tracking-widest text-[#38BDF8] uppercase mb-4">What we're building</p>
          <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white leading-tight mb-4">
            Turning ambitious ideas<br />into useful products.
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Each product starts with a real problem. We build, validate, and refine until it actually works.
          </p>
        </div>

        <!-- Product cards grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <div
            *ngFor="let product of products"
            class="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-sky-500/5 hover:border-[#38BDF8]/60 dark:hover:border-[#38BDF8]/60"
          >
            <!-- Top row: icon + status -->
            <div class="flex items-start justify-between mb-6">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                [style.background]="product.accent + '20'"
                [style.color]="product.accent"
              >
                <span class="material-symbols-outlined text-[26px]">
                  {{ product.materialIcon }}
                </span>
              </div>

              <!-- Status badge -->
              <span
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                [ngClass]="{
                  'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800': product.status === 'Live',
                  'bg-yellow-50 dark:bg-yellow-950/60 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800': product.status === 'Building',
                  'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700': product.status === 'Coming Soon'
                }"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full"
                  [ngClass]="{
                    'bg-emerald-500': product.status === 'Live',
                    'bg-yellow-500 animate-pulse': product.status === 'Building',
                    'bg-slate-400': product.status === 'Coming Soon'
                  }"
                ></span>
                {{ product.status }}
              </span>
            </div>

            <!-- Category tag -->
            <p
              class="text-xs font-bold tracking-widest uppercase mb-3"
              [style.color]="product.accent"
            >
              {{ product.category }}
            </p>

            <!-- Product name + description -->
            <h3 class="text-xl font-bold text-slate-950 dark:text-white mb-3 group-hover:text-[#38BDF8] transition-colors">
              {{ product.name }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
              {{ product.description }}
            </p>

            <!-- Footer: arrow interaction -->
            <div class="flex items-center justify-between">
              <div class="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent"></div>
              <div class="ml-4 w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center group-hover:border-[#38BDF8] group-hover:bg-[#38BDF8]/10 group-hover:text-[#38BDF8] transition-all duration-300">
                <span class="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </div>

            <!-- Hover accent bar -->
            <div
              class="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style="background: linear-gradient(90deg, #FDE047, #38BDF8);"
            ></div>
          </div>
        </div>

        <!-- Bottom note -->
        <div class="mt-12 text-center">
          <p class="text-sm text-slate-500 dark:text-slate-400">
            More products in the pipeline.
            <a href="#contact" class="text-slate-800 dark:text-slate-200 font-medium hover:text-[#38BDF8] dark:hover:text-[#38BDF8] underline underline-offset-4 transition-colors">
              Stay in touch →
            </a>
          </p>
        </div>
      </div>
    </section>
  `,
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'FlowMind',
      description: 'An AI-powered workflow automation platform that understands your business processes and automates repetitive tasks — without complex integrations or code.',
      category: 'AI Automation',
      status: 'Building',
      materialIcon: 'bolt',
      accent: '#FDE047',
    },
    {
      name: 'Lens Analytics',
      description: 'A clean, intuitive analytics dashboard that turns raw business data into clear visual insights. Built for decision-makers, not data scientists.',
      category: 'Data Intelligence',
      status: 'Building',
      materialIcon: 'insights',
      accent: '#38BDF8',
    },
    {
      name: 'FormForge',
      description: 'Smart form builder with conditional logic, AI-powered field suggestions, and automated data routing. From simple surveys to complex intake flows.',
      category: 'Productivity Tools',
      status: 'Coming Soon',
      materialIcon: 'dynamic_form',
      accent: '#818CF8',
    },
    {
      name: 'DocuPilot',
      description: 'AI-assisted document processing that reads, extracts, and organizes information from any document type — invoices, contracts, reports, and more.',
      category: 'AI · Documents',
      status: 'Coming Soon',
      materialIcon: 'description',
      accent: '#34D399',
    },
  ];
}
