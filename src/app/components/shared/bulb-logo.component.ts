import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bulb-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      [class]="cssClass"
    >
      <!-- Outer glow ring -->
      <circle cx="24" cy="20" r="18" fill="url(#glowGrad)" opacity="0.12" />

      <!-- Bulb glass body -->
      <path
        d="M24 4C16.268 4 10 10.268 10 18c0 5.012 2.594 9.415 6.5 11.996V34a1 1 0 001 1h13a1 1 0 001-1v-4.004C35.406 27.415 38 23.012 38 18c0-7.732-6.268-14-14-14z"
        fill="url(#bulbGrad)"
      />

      <!-- Inner highlight -->
      <ellipse cx="20" cy="14" rx="4" ry="6" fill="white" opacity="0.35" />

      <!-- Filament -->
      <path
        d="M19 30 Q21 27 24 29 Q27 31 29 30"
        stroke="#92400E"
        stroke-width="1.2"
        stroke-linecap="round"
        fill="none"
        opacity="0.6"
      />

      <!-- Base/socket segments -->
      <rect x="17" y="35" width="14" height="3" rx="1.5" fill="#94A3B8" />
      <rect x="18.5" y="38.5" width="11" height="2.5" rx="1.25" fill="#CBD5E1" />
      <rect x="19.5" y="41.5" width="9" height="2.5" rx="1.25" fill="#94A3B8" />

      <!-- Light rays — sky blue -->
      <g opacity="0.7">
        <!-- Top ray -->
        <line x1="24" y1="1" x2="24" y2="4" stroke="#38BDF8" stroke-width="1.8" stroke-linecap="round" />
        <!-- Top-right ray -->
        <line x1="33.5" y1="4.5" x2="31.4" y2="6.6" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round" />
        <!-- Right ray -->
        <line x1="40" y1="13" x2="37.2" y2="14.1" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round" />
        <!-- Top-left ray -->
        <line x1="14.5" y1="4.5" x2="16.6" y2="6.6" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round" />
        <!-- Left ray -->
        <line x1="8" y1="13" x2="10.8" y2="14.1" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round" />
      </g>

      <!-- Gradients -->
      <defs>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#38BDF8" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="bulbGrad" x1="24" y1="4" x2="24" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="60%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#FACC15" />
        </linearGradient>
      </defs>
    </svg>
  `,
})
export class BulbLogoComponent {
  @Input() size: number = 48;
  @Input() cssClass: string = '';
}
