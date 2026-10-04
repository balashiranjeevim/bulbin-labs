import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { PhilosophyComponent } from './components/philosophy/philosophy.component';
import { AboutComponent } from './components/about/about.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ProductsComponent,
    PhilosophyComponent,
    AboutComponent,
    TechnologyComponent,
    CtaComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-products />
      <app-philosophy />
      <app-about />
      <app-technology />
      <app-cta />
    </main>
    <app-footer />
  `,
})
export class App {}
