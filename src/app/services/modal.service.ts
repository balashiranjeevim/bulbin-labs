import { Injectable, signal } from '@angular/core';

export interface ProductDetail {
  name: string;
  tagline: string;
  category: string;
  status: 'Live' | 'Building' | 'Coming Soon';
  materialIcon: string;
  accent: string;
  problem: string;
  solution: string;
  techHighlights: string[];
  metrics: { label: string; value: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  // Product details modal
  readonly selectedProduct = signal<ProductDetail | null>(null);

  // Contact conversation modal
  readonly isContactModalOpen = signal<boolean>(false);

  openProduct(product: ProductDetail): void {
    this.selectedProduct.set(product);
  }

  closeProduct(): void {
    this.selectedProduct.set(null);
  }

  openContact(): void {
    this.isContactModalOpen.set(true);
  }

  closeContact(): void {
    this.isContactModalOpen.set(false);
  }
}
