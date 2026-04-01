import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Logo {
  name: string;
  style: string;
  prefix?: string;
}

@Component({
  selector: 'app-logo-bar',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="bg-section-bg py-12">
      <div class="max-w-[1480px] mx-auto px-6">
        <p class="text-center text-[#4b5563] text-[16px] leading-[1.65] mb-10">
          Join leading brands transforming their LinkedIn campaigns.
        </p>
        <div
          class="flex items-center justify-center flex-wrap gap-x-14 gap-y-6"
        >
          <div
            *ngFor="let logo of logos"
            [class]="logo.style + ' opacity-75 hover:opacity-100 transition-opacity'"
          >
            {{ logo.prefix }}{{ logo.name }}
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`:host { display: block; }`],
})
export class LogoBarComponent {
  logos: Logo[] = [
    {
      name: 'CRISIL',
      style: 'font-bold text-2xl text-red-600 tracking-wider',
    },
    {
      name: 'sprinklr',
      style: 'font-semibold text-xl text-gray-800',
      prefix: '\u2726 ',
    },
    {
      name: 'WNS',
      style: 'font-bold text-2xl text-gray-900 tracking-wider',
    },
    {
      name: 'darwinbox',
      style: 'font-semibold text-xl text-gray-800',
    },
    {
      name: 'everstage',
      style: 'font-semibold text-xl text-gray-700',
    },
    {
      name: 'SPRINTO',
      style: 'font-bold text-lg text-gray-800 tracking-widest',
    },
  ];
}
