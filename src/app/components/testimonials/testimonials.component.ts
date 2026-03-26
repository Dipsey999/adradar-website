import { Component, ElementRef, Input, ViewChild } from '@angular/core';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  logo: string;
}

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  template: `
    <div class="relative group flex-shrink-0 w-[300px] sm:w-[340px] lg:w-[380px] h-full">
      <!-- Outer glow ring on hover -->
      <div class="absolute -inset-[1px] rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#ff8f6b]/30 via-[#e8a96d]/20 to-[#ffb88c]/30 blur-[2px] animate-[glow-pulse_2s_ease-in-out_infinite] pointer-events-none"></div>

      <!-- Card -->
      <div
        #cardRef
        (mousemove)="handleMouseMove($event)"
        (mouseleave)="handleMouseLeave()"
        class="relative h-full rounded-2xl border border-[#e8a96d]/30 bg-gradient-to-br from-white/90 via-white/70 to-[#fef3ec]/40 backdrop-blur-2xl overflow-hidden transition-all duration-700 ease-out shadow-[0_2px_20px_-6px_rgba(232,135,58,0.06)] group-hover:shadow-[0_12px_50px_-8px_rgba(232,135,58,0.2)] group-hover:border-[#e8a96d]/50 group-hover:-translate-y-1.5 group-hover:scale-[1.02]"
      >
        <!-- Mouse-tracking radial glow -->
        <div
          #glowRef
          class="absolute inset-0 pointer-events-none transition-[background] duration-300 ease-out z-[1]"
        ></div>

        <!-- Shimmer sweep on hover -->
        <div class="absolute inset-0 pointer-events-none z-[2] overflow-hidden rounded-2xl">
          <div
            class="absolute top-0 -left-full w-[60%] h-full opacity-0 group-hover:animate-[shimmer-sweep_1s_ease-in-out_forwards] rotate-[15deg] scale-y-150"
            style="background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), rgba(255,200,160,0.1), transparent)"
          ></div>
        </div>

        <!-- Static inner glow overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#fff8f4]/30 via-transparent to-[#ffe8d6]/15 pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>

        <!-- Hover warm overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#fff4ed]/50 via-[#fffaf7]/30 to-[#ffe8d6]/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div class="relative z-[3] p-7 flex flex-col h-full min-h-[320px]">
          <!-- Top: Avatar -->
          <div class="mb-5">
            <div class="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[#f0ddd0] to-[#e8cbb8] ring-2 ring-white/80 shadow-sm transition-all duration-500 group-hover:ring-[#e8a96d]/40 group-hover:shadow-[0_0_16px_-2px_rgba(232,135,58,0.25)]">
              <img
                [src]="testimonial.avatar"
                [alt]="testimonial.name"
                class="w-full h-full object-cover"
                (error)="onImageError($event)"
              />
            </div>
          </div>

          <!-- Quote mark -->
          <div class="text-[42px] leading-none font-serif text-[#1a1a2e]/80 -mt-1 mb-2 select-none transition-colors duration-500 group-hover:text-[#e8573a]/70">
            &ldquo;
          </div>

          <!-- Quote text -->
          <p class="text-[14px] leading-[1.65] text-[#4b5563] flex-1 mb-6 transition-colors duration-500 group-hover:text-[#374151]">
            {{ testimonial.quote }}
          </p>

          <!-- Bottom: Author + Company logo -->
          <div class="flex items-end justify-between mt-auto pt-4 border-t border-[#f0e6dd]/60 transition-colors duration-500 group-hover:border-[#e8a96d]/30">
            <div>
              <p class="font-semibold text-[15px] text-[#111827]">
                {{ testimonial.name }}
              </p>
              <p class="text-[12px] text-[#6b7280] font-medium mt-0.5">
                {{ testimonial.role }}
              </p>
            </div>
            <div class="h-7 w-auto opacity-50 transition-opacity duration-500 group-hover:opacity-75">
              <img
                [src]="testimonial.logo"
                alt="Company logo"
                class="h-full w-auto object-contain"
                (error)="onImageError($event)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`:host { display: flex; align-self: stretch; }`],
})
export class TestimonialCardComponent {
  @ViewChild('cardRef', { static: true }) cardRef!: ElementRef<HTMLDivElement>;
  @ViewChild('glowRef', { static: true }) glowRef!: ElementRef<HTMLDivElement>;

  @Input() testimonial!: Testimonial;

  handleMouseMove(e: MouseEvent): void {
    const card = this.cardRef.nativeElement;
    const glow = this.glowRef.nativeElement;
    if (!card || !glow) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(255,120,60,0.15), rgba(255,180,120,0.06) 40%, transparent 70%)`;
  }

  handleMouseLeave(): void {
    const glow = this.glowRef.nativeElement;
    if (!glow) return;
    glow.style.background = 'transparent';
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
  }
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TestimonialCardComponent],
  template: `
    <section class="relative py-20 lg:py-28 bg-section-bg overflow-hidden">
      <!-- Section header -->
      <div class="max-w-[1480px] mx-auto px-6 mb-14 lg:mb-16">
        <!-- Badge -->
        <div class="text-left md:text-center mb-4">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#ff4829]">
            Early Access Feedback
          </span>
        </div>

        <!-- Heading -->
        <h2 class="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-left md:text-center leading-[1.1] tracking-[-0.025em] text-[#111827] mb-5">
          Built for how performance
          <br />
          marketers actually work.
        </h2>

        <!-- Subheading -->
        <p class="text-left md:text-center text-[#6b7280] text-[17px] max-w-none md:max-w-[620px] mx-0 md:mx-auto leading-[1.65]">
          Teams using AdRadar see results from day one. Here&apos;s what early
          users are saying.
        </p>
      </div>

      <!-- Carousel area with orange glow -->
      <div class="relative">
        <!-- Orange blurry glow layers -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="w-[80%] h-[90%] bg-gradient-to-r from-[#ff8f6b]/0 via-[#ff6b3d]/15 to-[#ff8f6b]/0 blur-[100px] rounded-full"></div>
        </div>
        <div class="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[70%] bg-gradient-to-t from-[#e8873a]/12 via-[#ff6b3d]/8 to-transparent blur-[80px] pointer-events-none"></div>
        <div class="absolute top-[-10%] left-1/4 w-[30%] h-[50%] bg-radial-[closest-side] from-[#ffb088]/10 to-transparent blur-[60px] pointer-events-none"></div>

        <!-- Scrolling cards container -->
        <div class="relative py-4">
          <!-- Left fade -->
          <div class="absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-section-bg via-section-bg/80 to-transparent z-10 pointer-events-none"></div>
          <!-- Right fade -->
          <div class="absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-section-bg via-section-bg/80 to-transparent z-10 pointer-events-none"></div>

          <!-- Infinite scroll track -->
          <div class="flex gap-6 items-stretch animate-scroll-left">
            <!-- First set -->
            @for (t of testimonials; track 'a-' + $index) {
              <app-testimonial-card [testimonial]="t" />
            }
            <!-- Duplicate set for seamless loop -->
            @for (t of testimonials; track 'b-' + $index) {
              <app-testimonial-card [testimonial]="t" />
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`:host { display: block; }`],
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote:
        'We were reaching companies with under 100 employees across 60% of our impressions \u2014 way outside our ICP. The Company Blocking Agent cleaned it up automatically. Wasted CPM dropped by a third within two weeks.',
      name: 'Mano R',
      role: 'Digital Marketer at Viewlift',
      avatar: '/testimonials/avatar-1.svg',
      logo: '/testimonials/logo-sprinklr.svg',
    },
    {
      quote:
        'The same 40 accounts were eating up the majority of our impressions while hundreds of target companies never saw a single ad. Capping per company spread reach across our full TAL and cut frequency waste overnight.',
      name: 'Sukanya Bhan',
      role: 'Finance Marketer at Netcore',
      avatar: '/testimonials/avatar-2.svg',
      logo: '/testimonials/logo-everstage.svg',
    },
    {
      quote:
        'We were paying to reach individual contributors when our ICP is director-level and above. The Title Blocking Agent flagged and removed the noise automatically. MQL quality jumped 35% in the following month.',
      name: 'Jocob C F',
      role: 'Marketing Operations Specialist at Cisco',
      avatar: '/testimonials/avatar-3.svg',
      logo: '/testimonials/logo-wns.svg',
    },
    {
      quote:
        'We had no visibility into whether we were overbidding or leaving reach on the table. AdRadar\u2019s bidding agent tightened our CPCs without sacrificing delivery. We recovered about 20% of monthly spend and redeployed it into better-performing campaigns.',
      name: 'Arpana K',
      role: 'Sr. HubSpot Strategist at Inode',
      avatar: '/testimonials/avatar-4.svg',
      logo: '/testimonials/logo-sprinto.svg',
    },
    {
      quote:
        'We were running ads flat across all seven days including weekends when our buyers are never on LinkedIn. Scheduling campaigns to weekday business hours improved engagement rate by 28% and stopped burning budget on dead air.',
      name: 'Rashmica R',
      role: 'Manager - Revenue Marketing at Vue',
      avatar: '/testimonials/avatar-5.svg',
      logo: '/testimonials/logo-crisil.svg',
    },
    {
      quote:
        'Our top creative was running until it fell off a cliff. By then we\u2019d already lost two weeks of efficient performance. The Ad Rotation Agent flags fatigue before CTR drops and recommends the switch. We haven\u2019t been caught off guard since.',
      name: 'Ben Philip',
      role: 'Marketing Associate at Inode',
      avatar: '/testimonials/avatar-6.svg',
      logo: '/testimonials/logo-darwinbox.svg',
    },
  ];
}
