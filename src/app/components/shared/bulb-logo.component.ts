import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bulb-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img
      src="BULBIN LOGO.svg"
      alt="Bulbin Labs Logo"
      [style.height.px]="size"
      [style.width]="'auto'"
      class="object-contain inline-block select-none"
      [class]="cssClass"
      loading="eager"
      draggable="false"
    />
  `,
})
export class BulbLogoComponent {
  @Input() size: number = 40;
  @Input() cssClass: string = '';
}
