import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  template: `
    <section class="relative py-12 lg:py-20 overflow-hidden">
      <!-- Full-bleed ambient background — clipped within section -->
      <div class="absolute inset-0 pointer-events-none">
        <img
          src="/images/cta-bg-2.png"
          alt=""
          class="object-cover scale-125 absolute inset-0 w-full h-full"
          aria-hidden="true"
        />
      </div>

      <div class="relative max-w-[1200px] mx-auto px-6">
        <!-- Card — overflow-clip, absolute avatar group -->
        <div class="relative rounded-[28px] lg:rounded-[32px] bg-white overflow-clip shadow-[0_0_24px_4px_rgba(0,0,0,0.12)] pt-12 lg:pt-16 pb-[160px] lg:pb-[200px] px-8 md:px-12 lg:px-16">
          <!-- Text content — centered -->
          <div class="relative z-10 text-left md:text-center max-w-[700px] mx-auto">
            <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-3">
              Your LinkedIn spend deserves
              <br />
              better than{{ ' ' }}
              <span
                class="italic font-bold bg-clip-text text-transparent"
                [style.backgroundImage]="'linear-gradient(58deg, #FF4829 22.76%, #F1CD98 96.62%)'"
              >
                gut feel.
              </span>
            </h2>

            <p class="text-[15px] md:text-[17px] text-[#4b5563] max-w-none md:max-w-[520px] mx-0 md:mx-auto mb-6 leading-[1.65]">
              Connect your LinkedIn Ads account in 2 minutes. Your first Copilot
              briefing is ready instantly. No credit card required.
            </p>

            <!-- CTA Button -->
            <a
              href="#pricing"
              class="inline-flex items-center gap-3.5 bg-[#ff6500] hover:bg-[#e85a00] text-white rounded-full pl-9 pr-1 py-1 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(255,101,0,0.4)] hover:scale-[1.03]"
            >
              <span class="text-[15px] lg:text-[17px] font-medium">
                Start free trial
              </span>
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="#111"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>

          <!-- Avatar group — absolutely positioned, ignores card flow -->
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] max-w-[1310px]">
            <img
              src="/images/cta-avatar.svg"
              alt="AI Copilot agents ready to help"
              width="1310"
              height="310"
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaSectionComponent {}
