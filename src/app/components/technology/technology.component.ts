import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface TechCategory {
  id: string;
  name: string;
  group: 'ai' | 'engineering' | 'data' | 'design';
  description: string;
  materialIcon: string;
  accent: string;
  items: string[];
}

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section
      id="technology"
      class="py-24 lg:py-32 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Header with scroll reveal -->
        <div class="max-w-2xl mb-12" appReveal direction="up" [delay]="100">
          <p
            class="text-xs font-bold tracking-widest text-[#FDE047] uppercase mb-4 flex items-center gap-2"
          >
            <span class="w-2 h-0.5 bg-[#FDE047]"></span>
            <span>Technology Stack</span>
          </p>
          <h2
            class="text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white leading-tight mb-4"
          >
            Built with modern technology.
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We use carefully chosen, proven technologies — not trends. Each layer of our stack is
            selected for reliability, scalability, and developer experience.
          </p>
        </div>

        <!-- Interactive Category Filter Tabs -->
        <div class="flex flex-wrap gap-2 mb-12" appReveal direction="fade" [delay]="200">
          <button
            *ngFor="let filter of filters"
            (click)="activeFilter.set(filter.id)"
            class="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer"
            [ngClass]="{
              'bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-md shadow-slate-950/10 dark:shadow-white/10 scale-105':
                activeFilter() === filter.id,
              'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800':
                activeFilter() !== filter.id,
            }"
          >
            {{ filter.label }}
          </button>
        </div>

        <!-- Categories grid with staggered scroll reveal -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            *ngFor="let cat of filteredCategories(); let i = index"
            appReveal
            direction="up"
            [delay]="100 + i * 90"
            class="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-7 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl dark:hover:shadow-slate-950/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default relative overflow-hidden"
          >
            <!-- Icon + name -->
            <div class="flex items-center gap-3.5 mb-4">
              <div
                class="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
                [style.background]="cat.accent + '20'"
                [style.color]="cat.accent"
              >
                <span class="material-symbols-outlined text-[26px]">
                  {{ cat.materialIcon }}
                </span>
              </div>
              <h3
                class="text-base font-bold text-slate-950 dark:text-white group-hover:text-[#38BDF8] transition-colors"
              >
                {{ cat.name }}
              </h3>
            </div>

            <!-- Description -->
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {{ cat.description }}
            </p>

            <!-- Interactive Chips with micro-hover -->
            <div class="flex flex-wrap gap-2">
              <span
                *ngFor="let item of cat.items"
                class="px-2.5 py-1 rounded-lg text-xs font-medium border bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 transition-all duration-200 hover:scale-105 hover:border-[#38BDF8] dark:hover:border-[#38BDF8] cursor-default"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>

        <!-- Bottom note -->
        <div class="mt-14 flex items-center gap-4" appReveal direction="fade" [delay]="350">
          <div class="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
          <p class="text-xs text-slate-400 dark:text-slate-500 font-medium text-center px-4">
            Technology choices evolve with each product's real-world needs
          </p>
          <div class="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
        </div>
      </div>
    </section>
  `,
})
export class TechnologyComponent {
  activeFilter = signal<string>('all');

  filters = [
    { id: 'all', label: 'All Technologies' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'engineering', label: 'Engineering & Cloud' },
    { id: 'data', label: 'Automation & Data' },
    { id: 'design', label: 'Product Design' },
  ];

  categories: TechCategory[] = [
    {
      id: 'ai',
      group: 'ai',
      name: 'Artificial Intelligence',
      description:
        'We integrate AI where it adds genuine value — not as a buzzword, but as a functional, deterministic layer.',
      materialIcon: 'psychology',
      accent: '#FDE047',
      items: [
        'LLM Orchestration',
        'ML Pipelines',
        'Vector Embeddings',
        'RAG Architecture',
        'Autonomous Agents',
      ],
    },
    {
      id: 'eng',
      group: 'engineering',
      name: 'Software Engineering',
      description:
        'Clean architectures, modern frameworks, and practices that keep codebases maintainable at scale.',
      materialIcon: 'terminal',
      accent: '#38BDF8',
      items: ['Angular', 'TypeScript', 'Node.js', 'Python', 'REST & GraphQL', 'Vitest'],
    },
    {
      id: 'auto',
      group: 'data',
      name: 'Automation',
      description:
        'We automate repetitive workflows so humans can focus on what actually needs human judgment.',
      materialIcon: 'precision_manufacturing',
      accent: '#818CF8',
      items: [
        'Workflow Engines',
        'Event-driven Queues',
        'Webhooks',
        'Job Schedulers',
        'Worker Pools',
      ],
    },
    {
      id: 'cloud',
      group: 'engineering',
      name: 'Cloud Technology',
      description:
        'Scalable, reliable infrastructure that grows with the product — from day one to day one million.',
      materialIcon: 'cloud',
      accent: '#38BDF8',
      items: ['AWS', 'GCP', 'Serverless', 'OCI Containers', 'Edge CDN', 'Zero-trust IAM'],
    },
    {
      id: 'data',
      group: 'data',
      name: 'Data & Analytics',
      description:
        'Turning raw data into meaningful insight — with clean pipelines and clear visual dashboards.',
      materialIcon: 'database',
      accent: '#34D399',
      items: ['PostgreSQL', 'BigQuery', 'Redis Cache', 'ClickHouse', 'Stream Processing'],
    },
    {
      id: 'design',
      group: 'design',
      name: 'Product Design',
      description:
        'Design is not decoration. It is how the product thinks, feels, and communicates to the user.',
      materialIcon: 'palette',
      accent: '#FDE047',
      items: [
        'Design Systems',
        'Micro-interactions',
        'User Journey Mapping',
        'Figma',
        'Interactive Prototypes',
      ],
    },
  ];

  filteredCategories() {
    const f = this.activeFilter();
    if (f === 'all') return this.categories;
    return this.categories.filter((c) => c.group === f);
  }
}
