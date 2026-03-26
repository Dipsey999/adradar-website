import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="relative pt-20 pb-0 overflow-x-clip">
      <!-- Gradient background -->
      <div
        class="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white via-white to-[#fff0e6] pointer-events-none -z-20"
      ></div>

      <div class="relative max-w-[1480px] mx-auto px-6 text-left md:text-center z-10">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2.5 bg-primary/10 rounded-full px-4 py-1.5 mb-8"
        >
          <span class="w-2 h-2 rounded-full bg-primary"></span>
          <span
            class="text-[11px] font-bold tracking-[0.08em] text-primary uppercase"
          >
            LinkedIn Ads AI Agents
          </span>
          <span class="w-2 h-2 rounded-full bg-primary"></span>
          <span
            class="text-[11px] font-bold tracking-[0.08em] text-primary uppercase"
          >
            Now in Beta
          </span>
          <span class="w-2 h-2 rounded-full bg-primary"></span>
        </div>

        <!-- Heading -->
        <h1
          class="text-[48px] md:text-[64px] lg:text-[76px] font-bold leading-[1.05] tracking-[-0.02em] text-[#1A1A1A] mb-6"
        >
          Never fly blind. AdRadar sees
          <br />
          everything.
        </h1>

        <!-- Subheading -->
        <p
          class="max-w-[640px] mx-auto text-[17px] text-[#6b7280] leading-[1.65] mb-10"
        >
          AdRadar is the AI Copilot for B2B teams running LinkedIn Ads.
          Specialized agents watch your campaigns 24/7 — flagging waste,
          predicting fatigue, and telling you exactly what to do next.
        </p>

        <!-- CTAs -->
        <div class="flex items-center justify-start md:justify-center gap-4 mb-6">
          <a
            href="#pricing"
            class="group flex items-center gap-3 bg-primary hover:bg-primary-dark text-white rounded-full pl-6 pr-1.5 py-1.5 transition-colors"
          >
            <span class="text-[15px] font-medium ml-2">Start free trial</span>
            <div
              class="w-9 h-9 bg-white rounded-full flex items-center justify-center"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 3l4 4-4 4"
                  stroke="var(--color-primary)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </a>
          <a
            href="#how-it-works"
            class="h-12 px-8 flex items-center justify-center border border-gray-200 rounded-full text-[15px] font-medium text-foreground hover:bg-gray-50 transition-colors"
          >
            See how it works
          </a>
        </div>

        <!-- Trust text -->
        <div
          class="flex items-center justify-start md:justify-center flex-wrap gap-2 text-[13px] font-medium text-gray-500 mb-14"
        >
          <span>No credit card required</span>
          <span class="text-gray-300 font-bold px-1">&bull;</span>
          <span>Setup in under 2 minutes</span>
        </div>

        <!-- Trusted by -->
        <div class="flex items-center justify-start md:justify-center gap-3 mb-10">
          <div class="w-8 h-[1px] bg-primary/40"></div>
          <p class="text-[13px] text-gray-500 font-medium">
            Trusted by
            <span class="font-semibold text-gray-900">50+</span> Growth and
            Revenue Teams
          </p>
          <div class="w-8 h-[1px] bg-primary/40"></div>
        </div>

        <!-- Dashboard Preview -->
        <div class="relative max-w-[1100px] mx-auto pb-0">
          <!-- Full-width warm orange glow -->
          <div
            class="absolute -inset-x-[30%] top-[5%] bottom-[-15%] pointer-events-none -z-10"
          >
            <!-- Left glow -->
            <div
              class="absolute top-0 left-0 w-[55%] h-full bg-gradient-to-br from-[#f09030]/70 via-[#f5a855]/50 to-transparent blur-[60px] rounded-full"
            ></div>
            <!-- Right glow -->
            <div
              class="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-[#f09030]/70 via-[#f5a855]/50 to-transparent blur-[60px] rounded-full"
            ></div>
            <!-- Bottom glow connecting left and right -->
            <div
              class="absolute bottom-0 left-[10%] right-[10%] h-[50%] bg-[#f09030]/50 blur-[80px] rounded-full"
            ></div>
          </div>

          <!-- Dashboard - single glass frame -->
          <div
            class="relative overflow-hidden rounded-[20px] md:rounded-[28px] border border-white/50 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.08)]"
          >
            <img
              src="/images/Dashboard.png"
              alt="AdRadar Dashboard Preview"
              width="2200"
              height="1400"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Bottom fade to section-bg -->
      <div class="h-32 bg-gradient-to-b from-transparent to-section-bg"></div>
    </section>
  `,
  styles: [`:host { display: block; }`],
})
export class HeroComponent { }
