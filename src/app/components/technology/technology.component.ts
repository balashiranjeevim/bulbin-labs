import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechCategory {
  name: string;
  description: string;
  icon: string;
  accent: string;
  bg: string;
  items: string[];
}

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="technology" class="py-24 lg:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <!-- Header -->
        <div class="max-w-2xl mb-16">
          <p class="text-xs font-bold tracking-widest text-[#FDE047] uppercase mb-4">Technology</p>
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-950 leading-tight mb-4">
            Built with modern technology.
          </h2>
          <p class="text-lg text-slate-500 leading-relaxed">
            We use carefully chosen, proven technologies — not trends. Each layer of our stack is selected for reliability, scalability, and developer experience.
          </p>
        </div>

        <!-- Categories grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            *ngFor="let cat of categories"
            class="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-sm transition-all duration-200 cursor-default"
          >
            <!-- Icon + name -->
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                [style.background]="cat.bg">
                {{ cat.icon }}
              </div>
              <h3 class="text-base font-bold text-slate-900">{{ cat.name }}</h3>
            </div>

            <!-- Description -->
            <p class="text-sm text-slate-500 leading-relaxed mb-5">{{ cat.description }}</p>

            <!-- Chips -->
            <div class="flex flex-wrap gap-2">
              <span
                *ngFor="let item of cat.items"
                class="px-2.5 py-1 rounded-md text-xs font-medium border"
                [style.background]="cat.bg"
                [style.border-color]="cat.accent + '30'"
                [style.color]="cat.accent === '#FDE047' ? '#854D0E' : cat.accent"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>

        <!-- Bottom note -->
        <div class="mt-12 flex items-center gap-4">
          <div class="h-px flex-1 bg-slate-100"></div>
          <p class="text-xs text-slate-400 font-medium text-center px-4">Technology choices evolve with each product's needs</p>
          <div class="h-px flex-1 bg-slate-100"></div>
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
      icon: '🧠',
      accent: '#FDE047',
      bg: '#FEFCE8',
      items: ['LLMs', 'ML Pipelines', 'Embeddings', 'RAG', 'Agents'],
    },
    {
      name: 'Software Engineering',
      description: 'Clean architectures, modern frameworks, and practices that keep codebases maintainable at scale.',
      icon: '💻',
      accent: '#38BDF8',
      bg: '#F0F9FF',
      items: ['Angular', 'TypeScript', 'Node.js', 'Python', 'REST APIs'],
    },
    {
      name: 'Automation',
      description: 'We automate repetitive workflows so humans can focus on what actually needs human judgment.',
      icon: '⚙️',
      accent: '#818CF8',
      bg: '#EEF2FF',
      items: ['Workflow Engines', 'Event-driven', 'Webhooks', 'Schedulers'],
    },
    {
      name: 'Cloud Technology',
      description: 'Scalable, reliable infrastructure that grows with the product — from day one to day one million.',
      icon: '☁️',
      accent: '#38BDF8',
      bg: '#F0F9FF',
      items: ['AWS', 'GCP', 'Serverless', 'Containers', 'CDN'],
    },
    {
      name: 'Data',
      description: 'Turning raw data into meaningful insight — with clean pipelines and clear visualizations.',
      icon: '📊',
      accent: '#34D399',
      bg: '#ECFDF5',
      items: ['PostgreSQL', 'BigQuery', 'Analytics', 'Pipelines', 'Dashboards'],
    },
    {
      name: 'Product Design',
      description: "Design is not decoration. It\u2019s how the product thinks, feels, and communicates to the user.",
      icon: '🎨',
      accent: '#FDE047',
      bg: '#FEFCE8',
      items: ['Figma', 'UX Research', 'Design Systems', 'Prototyping'],
    },
  ];
}
