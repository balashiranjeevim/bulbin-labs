import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechCategory {
  name: string;
  description: string;
  materialIcon: string;
  accent: string;
  items: string[];
}

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="technology" class="py-24 lg:py-32 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <!-- Header -->
        <div class="max-w-2xl mb-16">
          <p class="text-xs font-bold tracking-widest text-[#FDE047] uppercase mb-4">Technology</p>
          <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white leading-tight mb-4">
            Built with modern technology.
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We use carefully chosen, proven technologies — not trends. Each layer of our stack is selected for reliability, scalability, and developer experience.
          </p>
        </div>

        <!-- Categories grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            *ngFor="let cat of categories"
            class="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-7 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-slate-950/40 transition-all duration-200 cursor-default"
          >
            <!-- Icon + name -->
            <div class="flex items-center gap-3.5 mb-4">
              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                [style.background]="cat.accent + '20'"
                [style.color]="cat.accent"
              >
                <span class="material-symbols-outlined text-[24px]">
                  {{ cat.materialIcon }}
                </span>
              </div>
              <h3 class="text-base font-bold text-slate-950 dark:text-white">{{ cat.name }}</h3>
            </div>

            <!-- Description -->
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{{ cat.description }}</p>

            <!-- Chips -->
            <div class="flex flex-wrap gap-2">
              <span
                *ngFor="let item of cat.items"
                class="px-2.5 py-1 rounded-lg text-xs font-medium border bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>

        <!-- Bottom note -->
        <div class="mt-14 flex items-center gap-4">
          <div class="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
          <p class="text-xs text-slate-400 dark:text-slate-500 font-medium text-center px-4">
            Technology choices evolve with each product's needs
          </p>
          <div class="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
        </div>
      </div>
    </section>
  `,
})
export class TechnologyComponent {
  categories: TechCategory[] = [
    {
      name: 'Artificial Intelligence',
      description: 'We integrate AI where it adds genuine value — not as a buzzword, but as a functional layer.',
      materialIcon: 'psychology',
      accent: '#FDE047',
      items: ['LLMs', 'ML Pipelines', 'Embeddings', 'RAG', 'Agents'],
    },
    {
      name: 'Software Engineering',
      description: 'Clean architectures, modern frameworks, and practices that keep codebases maintainable at scale.',
      materialIcon: 'terminal',
      accent: '#38BDF8',
      items: ['Angular', 'TypeScript', 'Node.js', 'Python', 'REST APIs'],
    },
    {
      name: 'Automation',
      description: 'We automate repetitive workflows so humans can focus on what actually needs human judgment.',
      materialIcon: 'precision_manufacturing',
      accent: '#818CF8',
      items: ['Workflow Engines', 'Event-driven', 'Webhooks', 'Schedulers'],
    },
    {
      name: 'Cloud Technology',
      description: 'Scalable, reliable infrastructure that grows with the product — from day one to day one million.',
      materialIcon: 'cloud',
      accent: '#38BDF8',
      items: ['AWS', 'GCP', 'Serverless', 'Containers', 'CDN'],
    },
    {
      name: 'Data',
      description: 'Turning raw data into meaningful insight — with clean pipelines and clear visualizations.',
      materialIcon: 'database',
      accent: '#34D399',
      items: ['PostgreSQL', 'BigQuery', 'Analytics', 'Pipelines', 'Dashboards'],
    },
    {
      name: 'Product Design',
      description: 'Design is not decoration. It is how the product thinks, feels, and communicates to the user.',
      materialIcon: 'palette',
      accent: '#FDE047',
      items: ['Figma', 'UX Research', 'Design Systems', 'Prototyping'],
    },
  ];
}
