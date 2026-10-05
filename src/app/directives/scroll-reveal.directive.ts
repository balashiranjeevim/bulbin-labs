import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  @Input() delay: number = 0;
  @Input() duration: number = 700;
  @Input() direction: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom' = 'up';
  @Input() threshold: number = 0.15;

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const nativeEl = this.el.nativeElement as HTMLElement;
    this.renderer.addClass(nativeEl, 'reveal-base');
    this.renderer.addClass(nativeEl, `reveal-${this.direction}`);

    if (this.delay > 0) {
      this.renderer.setStyle(nativeEl, 'transition-delay', `${this.delay}ms`);
    }
    this.renderer.setStyle(nativeEl, 'transition-duration', `${this.duration}ms`);

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.renderer.addClass(nativeEl, 'reveal-visible');
              this.observer?.unobserve(nativeEl);
            }
          });
        },
        {
          threshold: this.threshold,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      this.observer.observe(nativeEl);
    } else {
      this.renderer.addClass(nativeEl, 'reveal-visible');
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
