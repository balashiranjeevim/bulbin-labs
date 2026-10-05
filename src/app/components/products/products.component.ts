import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ModalService, ProductDetail } from '../../services/modal.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="products" class="py-24 lg:py-32 bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      <!-- Background subtle illumination -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-20 dark:opacity-10"
        style="background: radial-gradient(ellipse, rgba(56,189,248,0.2) 0%, transparent 70%); filter: blur(80px);">
      </div>

      <div class="relative max-w-7xl mx-auto px-6 lg:px-8">

        <!-- Section header with scroll reveal -->
        <div class="max-w-2xl mb-16" appReveal direction="up" [delay]="100">
          <p class="text-xs font-bold tracking-widest text-[#38BDF8] uppercase mb-4 flex items-center gap-2">
            <span class="w-2 h-0.5 bg-[#38BDF8]"></span>
            <span>What we're building</span>
          </p>
          <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white leading-tight mb-4">
            Turning ambitious ideas<br />into useful products.
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Each product starts with a real problem. We build, validate, and refine until it actually works.
          </p>
        </div>

        <!-- Product cards grid with staggered scroll reveal -->
        <div class="grid md:grid-cols-2 gap-6">
          <div
            *ngFor="let product of products; let i = index"
            appReveal
            direction="up"
            [delay]="150 + (i * 120)"
            (click)="modalService.openProduct(product)"
            class="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-9 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl dark:hover:shadow-sky-500/10 hover:border-[#38BDF8]/60 dark:hover:border-[#38BDF8]/60 overflow-hidden"
          >
            <!-- Top hover shine sweep -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
              style="background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(56,189,248,0.08), transparent 60%);"
            ></div>

            <!-- Top row: icon + status -->
            <div class="flex items-start justify-between mb-6 relative z-10">
              <div
                class="w-13 h-13 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-sm"
                [style.background]="product.accent + '20'"
                [style.color]="product.accent"
              >
                <span class="material-symbols-outlined text-[28px]">
                  {{ product.materialIcon }}
                </span>
              </div>

              <!-- Status badge -->
              <span
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-colors"
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
              class="text-xs font-bold tracking-widest uppercase mb-3 relative z-10"
              [style.color]="product.accent"
            >
              {{ product.category }}
            </p>

            <!-- Product name + description -->
            <h3 class="text-2xl font-bold text-slate-950 dark:text-white mb-3 group-hover:text-[#38BDF8] transition-colors relative z-10">
              {{ product.name }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 relative z-10 line-clamp-3">
              {{ product.tagline }}
            </p>

            <!-- Footer: interactive hint & arrow -->
            <div class="flex items-center justify-between relative z-10 pt-4 border-t border-slate-100 dark:border-slate-800">
              <span class="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors flex items-center gap-1.5">
                <span>View architecture & roadmap</span>
              </span>

              <div class="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center group-hover:border-[#38BDF8] group-hover:bg-[#38BDF8]/10 group-hover:text-[#38BDF8] transition-all duration-300">
                <span class="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </div>

            <!-- Hover accent bar bottom -->
            <div
              class="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style="background: linear-gradient(90deg, #FDE047, #38BDF8);"
            ></div>
          </div>
        </div>

        <!-- Bottom note -->
        <div class="mt-14 text-center" appReveal direction="fade" [delay]="400">
          <p class="text-sm text-slate-500 dark:text-slate-400">
            More products in the pipeline.
            <button
              (click)="modalService.openContact()"
              class="text-slate-900 dark:text-slate-100 font-semibold hover:text-[#38BDF8] dark:hover:text-[#38BDF8] underline underline-offset-4 transition-colors ml-1 cursor-pointer"
            >
              Suggest a problem worth solving →
            </button>
          </p>
        </div>
      </div>
    </section>
  `,
})
export class ProductsComponent {
  readonly modalService = inject(ModalService);

  products: ProductDetail[] = [
    {
      name: 'FlowMind',
      tagline: 'An AI-powered workflow automation platform that understands your business processes and automates repetitive tasks — without complex integrations or code.',
      category: 'AI Automation',
      status: 'Building',
      materialIcon: 'bolt',
      accent: '#FDE047',
      problem: 'Teams waste 15+ hours weekly re-entering data between tools, manually generating status summaries, and managing multi-step handoffs.',
      solution: 'FlowMind uses LLM agent loops to parse incoming requests, map schemas on the fly, and execute deterministic actions with human-in-the-loop oversight.',
      techHighlights: [
        'Deterministic Agent Execution Engine',
        'Real-time WebSocket Task Streams',
        'Zero-schema Data Extraction',
        'Fine-grained RBAC & Audit Trails'
      ],
      metrics: [
        { label: 'Time Saved', value: '70%' },
        { label: 'Setup Time', value: '< 5 min' },
      ],
    },
    {
      name: 'Lens Analytics',
      tagline: 'A clean, intuitive analytics dashboard that turns raw business data into clear visual insights. Built for decision-makers, not data scientists.',
      category: 'Data Intelligence',
      status: 'Building',
      materialIcon: 'insights',
      accent: '#38BDF8',
      problem: 'Traditional BI platforms are bloated, slow to load, require dedicated data engineers, and drown executives in useless vanity metrics.',
      solution: 'Lens connects to Postgres, BigQuery, or CSVs and automatically generates executive briefings, trend forecasts, and anomaly alerts in plain English.',
      techHighlights: [
        'Natural Language to SQL Engine',
        'Sub-100ms In-Memory Aggregations',
        'Automated Anomaly Detection',
        'Exportable Executive Decks'
      ],
      metrics: [
        { label: 'Query Speed', value: '12x Faster' },
        { label: 'Data Literacy', value: '100% Team' },
      ],
    },
    {
      name: 'FormForge',
      tagline: 'Smart form builder with conditional logic, AI-powered field suggestions, and automated data routing. From simple surveys to complex intake flows.',
      category: 'Productivity Tools',
      status: 'Coming Soon',
      materialIcon: 'dynamic_form',
      accent: '#818CF8',
      problem: 'Forms break when business requirements change. Clunky logic trees and rigid integrations force teams to rebuild flows from scratch.',
      solution: 'FormForge offers a canvas-based dynamic intake system that adapts to respondent answers and triggers instant webhooks and downstream automations.',
      techHighlights: [
        'Visual Flow Node Builder',
        'Encrypted End-to-End Vault',
        'Adaptive Multi-step Branching',
        'Native Webhook & Webhook Signatures'
      ],
      metrics: [
        { label: 'Completion Rate', value: '+42%' },
        { label: 'Build Time', value: '3 Minutes' },
      ],
    },
    {
      name: 'DocuPilot',
      tagline: 'AI-assisted document processing that reads, extracts, and organizes information from any document type — invoices, contracts, reports, and more.',
      category: 'AI · Documents',
      status: 'Coming Soon',
      materialIcon: 'description',
      accent: '#34D399',
      problem: 'Companies spend millions manually reviewing unstructured PDFs, scanned invoices, and legal agreements with high error rates.',
      solution: 'DocuPilot leverages multi-modal vision models to achieve 99.4% field extraction accuracy with side-by-side verification and schema export.',
      techHighlights: [
        'Multi-modal Vision OCR Pipeline',
        'Hallucination-free Confidence Scoring',
        'Direct ERP & Accounting Sync',
        'Automated PII Redaction'
      ],
      metrics: [
        { label: 'Accuracy', value: '99.4%' },
        { label: 'Processing Time', value: '< 2s / Page' },
      ],
    },
  ];
}
