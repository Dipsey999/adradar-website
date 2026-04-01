import { Component, ChangeDetectorRef, ElementRef, AfterViewInit, OnDestroy, OnInit, ViewChild, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { CtaSectionComponent } from '../../../components/cta-section/cta-section.component';

interface ComparisonRow {
  capability: string;
  without: string;
  withRotation: string;
}

interface RelatedAgent {
  name: string;
  image: string;
  avatarBg: string;
  description: string;
  accentColor: string;
  route: string;
}

@Component({
  selector: 'app-ad-rotation',
  standalone: true,
  imports: [RouterLink, NgClass, CtaSectionComponent],
  template: `
    <!-- ═══════════════════════════════════════════
         SECTION 1: HERO
         ═══════════════════════════════════════════ -->
    <section class="relative pt-12 lg:pt-20 pb-16 lg:pb-20 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef6f3] via-[#fef9f7] to-white pointer-events-none -z-10"></div>
      <!-- Large ambient glows -->
      <div class="absolute top-[-15%] right-[-10%] w-[60%] h-[70%] bg-radial-[closest-side] from-[#6b5ea0]/12 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[0%] left-[-15%] w-[50%] h-[60%] bg-radial-[closest-side] from-[#c8b4e0]/20 to-transparent blur-[80px] pointer-events-none -z-10"></div>
      <div class="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-radial-[closest-side] from-[#1a1a2e]/5 to-transparent blur-[120px] pointer-events-none -z-10"></div>
      <!-- Subtle dot pattern overlay -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" style="background-image: radial-gradient(circle, #1a1a2e 1px, transparent 1px); background-size: 32px 32px;"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <!-- Left: Text content -->
          <div class="flex-1 text-left">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2.5 bg-[#f7f3f8]/80 backdrop-blur-sm border border-[#c8b4e0]/40 rounded-full px-4 py-1.5 mb-6 shadow-[0_2px_12px_-4px_rgba(107,94,160,0.1)]">
              <div class="w-6 h-6 rounded-full overflow-hidden bg-[#d9e1fb] ring-2 ring-white/60">
                <img src="/agents/Ad Rotation Agent.png" alt="" class="w-full h-full object-cover" />
              </div>
              <span class="text-[11px] font-bold tracking-[0.08em] text-[#1a1a2e] uppercase">
                Ad Rotation Agent
              </span>
            </div>

            <!-- Heading -->
            <h1 class="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em] text-[#111827] mb-6">
              Running same ads until CTR drops is the most expensive way to find
              <span class="hero-gradient-text">creative fatigue.</span>
            </h1>

            <!-- Subheading -->
            <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-[540px] mb-8">
              Detect fatigue signals before performance falls, automatically flag to rotate creatives so every account on your list sees fresh, high-performing messages with right frequency.
            </p>

            <!-- CTAs -->
            <div class="flex items-center gap-4 flex-wrap">
              <a
                href="#"
                class="group inline-flex items-center gap-3 bg-[#e8573a] hover:bg-[#d14a30] text-white rounded-full pl-6 pr-1.5 py-1.5 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(232,87,58,0.4)] hover:scale-[1.02]"
              >
                <span class="text-[15px] font-medium">Start free trial</span>
                <div class="w-9 h-9 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-15deg]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3l4 4-4 4" stroke="#e8573a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </a>
              <a
                href="#"
                class="h-12 px-8 flex items-center justify-center border border-[#c8b4e0] rounded-full text-[15px] font-medium text-[#1a1a2e] hover:bg-[#f7f3f8]/50 hover:border-[#6b5ea0]/50 transition-all duration-300"
              >
                Talk to Sales
              </a>
            </div>

            <!-- Trust indicators -->
            <div class="flex items-center gap-4 text-[13px] text-[#4b5563] mt-6">
              <span class="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 7l2 2 4-4" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7" cy="7" r="6" stroke="#e8573a" stroke-width="1" opacity="0.3"/></svg>
                No credit card required
              </span>
              <span class="text-[#d1d5db]">&bull;</span>
              <span class="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v6l3 2" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7" cy="7" r="6" stroke="#e8573a" stroke-width="1" opacity="0.3"/></svg>
                Setup in under 2 minutes
              </span>
            </div>
          </div>

          <!-- Right: Agent constellation -->
          <div class="hidden lg:block w-[460px] shrink-0">
            <div class="agent-constellation relative w-[420px] h-[420px] mx-auto">

              <!-- Outer ambient glow -->
              <div class="absolute -inset-10 bg-radial-[closest-side] from-[#c8b4e0]/20 to-transparent blur-[40px] pointer-events-none"></div>

              <!-- Orbit rings -->
              <div class="absolute inset-[46px] rounded-full border border-dashed border-[#c8b4e0]/20"></div>
              <div class="absolute inset-[90px] rounded-full border border-[#c8b4e0]/8"></div>

              <!-- Subtle rotating ring -->
              <div class="absolute inset-[44px] rounded-full border border-[#6b5ea0]/5 orbit-ring"></div>

              <!-- Connecting lines -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 420">
                <line x1="210" y1="210" x2="210" y2="46" stroke="url(#line-grad-rot)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="128" stroke="url(#line-grad-rot)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="292" stroke="url(#line-grad-rot)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="210" y2="374" stroke="url(#line-grad-rot)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="292" stroke="url(#line-grad-rot)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="128" stroke="url(#line-grad-rot)" stroke-width="1" opacity="0.15"/>
                <defs>
                  <linearGradient id="line-grad-rot" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#c8b4e0" stop-opacity="0.6"/>
                    <stop offset="100%" stop-color="#c8b4e0" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>

              <!-- CENTER: Ad Rotation Agent -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div class="absolute inset-[-32px] rounded-full bg-[#c8b4e0]/6 animate-[pulse-ring_3s_ease-in-out_infinite]"></div>
                <div class="absolute inset-[-22px] rounded-full bg-[#c8b4e0]/10 animate-[pulse-ring_3s_ease-in-out_infinite_0.5s]"></div>
                <div class="absolute inset-[-12px] rounded-full bg-gradient-to-br from-[#c8b4e0]/20 to-[#6b5ea0]/12"></div>
                <div class="relative w-[110px] h-[110px] rounded-full bg-gradient-to-br from-[#d9e1fb] to-[#c8b4e0] p-[3px] shadow-[0_8px_40px_-4px_rgba(107,94,160,0.35)]">
                  <div class="w-full h-full rounded-full bg-gradient-to-br from-[#f7f3f8] to-[#d9e1fb] overflow-hidden">
                    <img src="/agents/Ad Rotation Agent.png" alt="Ad Rotation Agent" class="w-full h-full object-cover" />
                  </div>
                </div>
                <div class="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1a1a2e] text-white text-[10px] font-bold tracking-[0.05em] uppercase px-3 py-1 rounded-full shadow-[0_4px_12px_-2px_rgba(26,26,46,0.3)]">
                  Ad Rotation
                </div>
              </div>

              <!-- ORBITING AGENTS -->
              <!-- Top: Company Blocking -->
              <div class="absolute top-[16px] left-1/2 -translate-x-1/2 z-10 orbit-agent" style="animation-delay: 0s">
                <div class="w-[60px] h-[60px] rounded-full p-[2px] bg-gradient-to-br from-[#b8dff0]/60 to-[#9dcce7]/40 shadow-[0_4px_16px_-4px_rgba(157,204,231,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#e3f3fa] overflow-hidden">
                    <img src="/agents/Company Blocking Agent.png" alt="Company Blocking" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Top-right: Title Blocking -->
              <div class="absolute top-[98px] right-[38px] z-10 orbit-agent" style="animation-delay: 0.4s">
                <div class="w-[56px] h-[56px] rounded-full p-[2px] bg-gradient-to-br from-[#ee95a0]/50 to-[#f4e0e9]/40 shadow-[0_4px_16px_-4px_rgba(238,149,160,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#fbf2f5] overflow-hidden">
                    <img src="/agents/Title Blocking Agent.png" alt="Title Blocking" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Bottom-right: Bidding Optimization -->
              <div class="absolute bottom-[98px] right-[38px] z-10 orbit-agent" style="animation-delay: 0.8s">
                <div class="w-[54px] h-[54px] rounded-full p-[2px] bg-gradient-to-br from-[#acdfa4]/50 to-[#82c97a]/30 shadow-[0_4px_16px_-4px_rgba(130,201,122,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#edf8eb] overflow-hidden">
                    <img src="/agents/Bidding Optimization Agent.png" alt="Bidding Optimization" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Bottom: Campaign Scheduling -->
              <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-10 orbit-agent" style="animation-delay: 1.2s">
                <div class="w-[58px] h-[58px] rounded-full p-[2px] bg-gradient-to-br from-[#f0d48a]/50 to-[#fdecc8]/40 shadow-[0_4px_16px_-4px_rgba(240,212,138,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#fffbe3] overflow-hidden">
                    <img src="/agents/Campaign Scheduling Agent.png" alt="Campaign Scheduling" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Bottom-left: Impression Capping -->
              <div class="absolute bottom-[98px] left-[38px] z-10 orbit-agent" style="animation-delay: 1.6s">
                <div class="w-[54px] h-[54px] rounded-full p-[2px] bg-gradient-to-br from-[#a8d1dc]/50 to-[#a8d1dc]/40 shadow-[0_4px_16px_-4px_rgba(168,209,220,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#e5f7fa] overflow-hidden">
                    <img src="/agents/Impression Capping Agent.png" alt="Impression Capping" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Top-left: Analyse Competitors -->
              <div class="absolute top-[98px] left-[38px] z-10 orbit-agent" style="animation-delay: 2s">
                <div class="w-[56px] h-[56px] rounded-full p-[2px] bg-gradient-to-br from-[#acdfa4]/50 to-[#dbeddb]/40 shadow-[0_4px_16px_-4px_rgba(130,201,122,0.25)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#edf3ec] overflow-hidden">
                    <img src="/agents/Analyse competitors LinkedIn Ads.png" alt="Analyse Competitors" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Bottom section fade -->
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 2: PROBLEM STATS
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-white via-[#fef9f7] to-[#fef3ef] pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-10">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">The Problem</span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
            Ad fatigue is silent, gradual, and expensive --
            <br class="hidden md:block" />
            and you only find out <span class="section-gradient-text">when it's too late.</span>
          </h2>
          <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[680px] mx-0 md:mx-auto">
            When CTR drops to trigger a manual review, your creative has been fatigued for weeks. Impressions were served, budget was spent, opportunity to rotate before performance fell is gone. Creative fatigue is avoidable but there's no early warning system.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- Card 1: 2-3 wks -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">2-3 wks</span>
                <div class="w-10 h-10 rounded-xl bg-[#fef6f3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7" stroke="#ff6b35" stroke-width="1.5" fill="none"/>
                    <path d="M10 6v4h3" stroke="#ff6b35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                Lag between creative fatigue onset and team noticing CTR drop
              </p>
              <p class="text-[13px] text-[#4b5563] leading-[1.55]">
                Budget continues spending at full pace throughout the fatigue period.
              </p>
            </div>
          </div>

          <!-- Card 2: 40+ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">40+</span>
                <div class="w-10 h-10 rounded-xl bg-[#fef6f3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L2 18h16L10 2z" stroke="#ff6b35" stroke-width="1.5" fill="none"/>
                    <path d="M10 8v4" stroke="#ff6b35" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="10" cy="14.5" r="0.75" fill="#ff6b35"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                Times an account sees same ad before rotation is triggered manually
              </p>
              <p class="text-[13px] text-[#4b5563] leading-[1.55]">
                Accounts seeing same ads 40+ times actively develop negative brand sentiment.
              </p>
            </div>
          </div>

          <!-- Card 3: 0 -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">0</span>
                <div class="w-10 h-10 rounded-xl bg-[#fef6f3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="11" width="3.5" height="6" rx="1" fill="#ff6b35"/>
                    <rect x="8.25" y="7" width="3.5" height="10" rx="1" fill="#ff6b35" opacity="0.6"/>
                    <rect x="13.5" y="3" width="3.5" height="14" rx="1" fill="#ff6b35" opacity="0.35"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                Native LinkedIn tools to predict creative fatigue before performance falls
              </p>
              <p class="text-[13px] text-[#4b5563] leading-[1.55]">
                LinkedIn Campaign Manager reports what happened, not what is about to happen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 3: LINKEDIN VS ADRADAR COMPARISON
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef3ef] via-[#fef7f4] to-white pointer-events-none -z-10"></div>
      <!-- Ambient glows -->
      <div class="absolute top-[20%] right-[5%] w-[35%] h-[50%] bg-radial-[closest-side] from-[#6b5ea0]/8 to-transparent blur-[80px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[10%] left-[10%] w-[30%] h-[40%] bg-radial-[closest-side] from-[#1a1a2e]/5 to-transparent blur-[80px] pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">

          <!-- LEFT COLUMN (60%): Heading + description + visualization -->
          <div class="lg:w-[58%] flex flex-col">
            <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
              The Gap
            </span>
            <h2 class="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.08] tracking-[-0.025em] text-[#111827] mb-5">
              Waiting for CTR to drop before rotating is like waiting for a puncture before
              <span class="section-gradient-text">checking tyre pressure.</span>
            </h2>
            <p class="text-[16px] text-[#4b5563] leading-[1.7] mb-8 max-w-[540px]">
              LinkedIn Campaign Manager gives you frequency data. It does not tell you when that frequency has crossed the threshold into fatigue. That interpretation, and the decision to rotate, is left entirely to the human reviewing the numbers, usually too late.
            </p>

            <!-- Before / After transformation card -->
            <div class="hidden lg:flex flex-col flex-1 bg-gradient-to-br from-[#fef9f7] to-[#fef6f3]/80 rounded-2xl border border-[#c8b4e0]/25 p-6 mt-2">

              <!-- Before: Single ad fatiguing -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#fef2f2] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[12px] font-bold text-[#111827] uppercase tracking-[0.04em]">Without rotation</span>
                </div>
                <!-- Single ad with declining CTR curve -->
                <div class="relative h-[54px] rounded-lg bg-[#fef2f2]/60 border border-[#fecaca]/40 overflow-hidden px-3">
                  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 300 54" preserveAspectRatio="none">
                    <path d="M 0 12 Q 40 10 80 14 Q 120 18 160 26 Q 200 34 240 42 Q 270 48 300 50" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.6"/>
                    <path d="M 0 12 Q 40 10 80 14 Q 120 18 160 26 Q 200 34 240 42 Q 270 48 300 50 L 300 54 L 0 54 Z" fill="url(#fadeBefore)" opacity="0.15"/>
                    <defs>
                      <linearGradient id="fadeBefore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#ef4444"/>
                        <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="absolute top-1 left-3 text-[9px] font-semibold text-[#ef4444]/60">CTR</div>
                  <div class="absolute bottom-1 right-3 text-[9px] font-semibold text-[#ef4444]/60">Single ad, declining</div>
                </div>
              </div>

              <!-- Divider with arrow -->
              <div class="flex items-center gap-3 my-3">
                <div class="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#c8b4e0]/40"></div>
                <div class="w-7 h-7 rounded-full bg-gradient-to-br from-[#6b5ea0] to-[#1a1a2e] flex items-center justify-center shadow-[0_2px_8px_-2px_rgba(26,26,46,0.3)]">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M4 8l3 3 3-3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#c8b4e0]/40"></div>
              </div>

              <!-- After: Multiple creatives rotated -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#f7f3f8] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="#1a1a2e" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <span class="text-[12px] font-semibold text-[#1a1a2e] uppercase tracking-[0.04em]">With adRadar rotation</span>
                </div>
                <!-- Multiple creatives with sustained CTR -->
                <div class="relative h-[54px] rounded-lg bg-[#f7f3f8]/60 border border-[#e8deee]/60 overflow-hidden px-3">
                  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 300 54" preserveAspectRatio="none">
                    <!-- Creative 1 segment -->
                    <path d="M 0 14 Q 25 12 50 13 Q 75 15 100 18" stroke="#6b5ea0" stroke-width="2" fill="none"/>
                    <!-- Swap marker 1 -->
                    <line x1="100" y1="4" x2="100" y2="50" stroke="#6b5ea0" stroke-width="1" stroke-dasharray="3 3" opacity="0.3"/>
                    <!-- Creative 2 segment -->
                    <path d="M 100 12 Q 125 11 150 13 Q 175 15 200 18" stroke="#8b7fc4" stroke-width="2" fill="none"/>
                    <!-- Swap marker 2 -->
                    <line x1="200" y1="4" x2="200" y2="50" stroke="#6b5ea0" stroke-width="1" stroke-dasharray="3 3" opacity="0.3"/>
                    <!-- Creative 3 segment -->
                    <path d="M 200 12 Q 225 11 250 13 Q 275 15 300 17" stroke="#a899d4" stroke-width="2" fill="none"/>
                    <!-- Fill area under curve -->
                    <path d="M 0 14 Q 25 12 50 13 Q 75 15 100 18 L 100 12 Q 125 11 150 13 Q 175 15 200 18 L 200 12 Q 225 11 250 13 Q 275 15 300 17 L 300 54 L 0 54 Z" fill="url(#fadeAfter)" opacity="0.1"/>
                    <defs>
                      <linearGradient id="fadeAfter" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#6b5ea0"/>
                        <stop offset="100%" stop-color="#6b5ea0" stop-opacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="absolute top-1 left-3 text-[9px] font-semibold text-[#6b5ea0]/60">CTR</div>
                  <div class="absolute bottom-1 right-3 text-[9px] font-semibold text-[#6b5ea0]/60">Rotated before fatigue</div>
                </div>
              </div>

              <!-- Flex spacer to push stats to bottom -->
              <div class="flex-1"></div>

              <!-- Stats row -->
              <div class="grid grid-cols-3 gap-3 pt-4 border-t border-[#c8b4e0]/20">
                <div>
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">2-3 wks</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Earlier detection</p>
                </div>
                <div class="text-center">
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">40%+</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Long creative lifespan</p>
                </div>
                <div class="text-right">
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">&infin;</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Compounding intelligence</p>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN (40%): Stacked comparison cards -->
          <div class="lg:w-[42%] flex flex-col">

            <!-- LinkedIn Card -->
            <div class="bg-white rounded-2xl border border-[#e5e7eb] p-5 lg:p-6 relative">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#f9fafb]/50 rounded-2xl pointer-events-none"></div>
              <div class="relative">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2L3 7v6l7 5 7-5V7l-7-5z" stroke="#9ca3af" stroke-width="1.5" stroke-linejoin="round" />
                        <line x1="4" y1="16" x2="16" y2="4" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-[14px] font-semibold text-[#374151] leading-tight">Reactive rotation, LinkedIn Campaign Manager</h3>
                      <p class="text-[11px] text-[#6b7280] mt-0.5">Reactive only</p>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#ef4444]/70 bg-[#fef2f2] rounded-full px-2.5 py-0.5">Limited</span>
                </div>
                <ul class="space-y-2">
                  @for (item of linkedinLimitations; track item) {
                    <li class="flex items-start gap-2.5">
                      <div class="w-[16px] h-[16px] rounded-full bg-[#fef2f2] flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="7" height="7" viewBox="0 0 10 10" fill="none">
                          <path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                      </div>
                      <span class="text-[13px] text-[#6b7280] leading-[1.5]">{{ item }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>

            <!-- Transformation bridge -->
            <div class="relative flex items-center justify-center py-2.5 z-10">
              <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#e5e7eb] via-[#c8b4e0] to-[#6b5ea0]"></div>
              <div class="relative bg-gradient-to-br from-[#1a1a2e] to-[#6b5ea0] text-white text-[10px] font-bold tracking-[0.06em] uppercase px-4 py-2 rounded-full shadow-[0_4px_20px_-4px_rgba(26,26,46,0.35)] flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M4 9l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Upgrade to
              </div>
            </div>

            <!-- adRadar Card -->
            <div class="group relative rounded-2xl flex-1 transition-all duration-300">
              <div class="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#6b5ea0]/25 via-[#c8b4e0]/15 to-[#6b5ea0]/25 opacity-60 group-hover:opacity-100 blur-[3px] transition-opacity duration-500"></div>
              <div class="relative bg-gradient-to-br from-[#faf8fc] via-[#f3edf8] to-[#ebe4f3] rounded-2xl border-2 border-[#c8b4e0] p-5 lg:p-6 shadow-[0_8px_30px_-8px_rgba(107,94,160,0.15)] group-hover:shadow-[0_16px_50px_-12px_rgba(107,94,160,0.22)] flex flex-col h-full">
                <div class="shimmer-sweep absolute inset-0 pointer-events-none z-10 rounded-2xl"></div>

                <!-- Header -->
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-[#d9e1fb] to-[#c8b4e0] p-[2px] shadow-[0_4px_12px_-2px_rgba(107,94,160,0.3)]">
                      <div class="w-full h-full rounded-full bg-[#d9e1fb] overflow-hidden">
                        <img src="/agents/Ad Rotation Agent.png" alt="" class="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 class="text-[14px] font-bold text-[#1a1a2e] leading-tight">AdRadar Ad Rotation Agent</h3>
                      <p class="text-[11px] text-[#6b5ea0] mt-0.5">Predictive creative intelligence</p>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#3e2460] bg-[#e8deee] rounded-full px-2.5 py-0.5">Full Control</span>
                </div>

                <!-- Advantages list -->
                <ul class="space-y-2.5 mb-5">
                  @for (item of adradarAdvantages; track item) {
                    <li class="flex items-start gap-2.5">
                      <div class="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#6b5ea0] to-[#1a1a2e] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_2px_6px_-1px_rgba(26,26,46,0.25)]">
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <span class="text-[13px] text-[#1a1a2e] leading-[1.5] font-medium">{{ item }}</span>
                    </li>
                  }
                </ul>

                <!-- Spacer -->
                <div class="flex-1"></div>

                <!-- Impact metrics strip -->
                <div class="bg-white/60 backdrop-blur-sm rounded-xl border border-[#c8b4e0]/20 p-3.5 mb-4">
                  <p class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#6b5ea0] mb-2.5">Impact when enabled</p>
                  <div class="grid grid-cols-3 gap-2">
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">2-3w</p>
                      <p class="text-[10px] text-[#4b5563] mt-1 leading-tight">Earlier<br/>detection</p>
                    </div>
                    <div class="text-center border-l border-r border-[#c8b4e0]/20">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">40%+</p>
                      <p class="text-[10px] text-[#4b5563] mt-1 leading-tight">Long creative<br/>lifespan</p>
                    </div>
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">&infin;</p>
                      <p class="text-[10px] text-[#4b5563] mt-1 leading-tight">Compounding<br/>intelligence</p>
                    </div>
                  </div>
                </div>

                <!-- Bottom highlight strip -->
                <div class="flex items-center justify-between pt-3.5 border-t border-[#c8b4e0]/15">
                  <div class="flex items-center gap-2.5">
                    <div class="flex -space-x-1.5">
                      <div class="w-5 h-5 rounded-full bg-[#a8d1dc] ring-2 ring-[#faf8fc] overflow-hidden"><img src="/agents/Impression Capping Agent.png" alt="" class="w-full h-full object-cover"/></div>
                      <div class="w-5 h-5 rounded-full bg-[#acdfa4] ring-2 ring-[#faf8fc] overflow-hidden"><img src="/agents/Analyse competitors LinkedIn Ads.png" alt="" class="w-full h-full object-cover"/></div>
                      <div class="w-5 h-5 rounded-full bg-[#ee95a0] ring-2 ring-[#faf8fc] overflow-hidden"><img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                    </div>
                    <span class="text-[11px] text-[#6b5ea0] font-medium">+6 agents</span>
                  </div>
                  <a href="#" class="text-[11px] font-semibold text-[#1a1a2e] hover:text-[#6b5ea0] transition-colors flex items-center gap-1">
                    Learn more
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 4: HOW IT WORKS (5 Steps)
         Horizontal scroll-driven design
         ═══════════════════════════════════════════ -->
    <section
      #howItWorksRef
      class="relative bg-white"
      style="height: 500vh"
    >
      <div class="sticky top-[70px] h-[calc(100vh-70px)] overflow-hidden">
        <!-- Subtle side accents -->
        <div class="absolute top-[20%] left-[-8%] w-[25%] h-[60%] bg-radial-[closest-side] from-[#c8b4e0]/8 to-transparent blur-[80px] pointer-events-none -z-10"></div>
        <div class="absolute bottom-[20%] right-[-8%] w-[25%] h-[60%] bg-radial-[closest-side] from-[#6b5ea0]/6 to-transparent blur-[80px] pointer-events-none -z-10"></div>

        <div class="h-full flex flex-col justify-center">
          <div class="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16 w-full">

            <!-- Header -->
            <div class="mb-6 lg:mb-8">
              <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a]">
                How It Works
              </span>
              <h2 class="text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mt-1.5 lg:mt-2">
                Monitor. Detect. Recommend.<br class="hidden lg:block" />
                <span class="section-gradient-text">Rotate. Repeat.</span>
              </h2>
            </div>

            <!-- Progress bar -->
            <div class="hidden md:flex items-center gap-3 mb-8 lg:mb-10">
              @for (step of steps; track step.number; let i = $index) {
                <button
                  class="group flex items-center gap-2 cursor-pointer"
                  (click)="scrollToStep(i)"
                >
                  <div
                    class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 text-[12px] font-bold"
                    [ngClass]="isStepActive(i)
                      ? 'bg-gradient-to-br from-[#ff4829] to-[#e8573a] text-white shadow-[0_4px_14px_0_rgba(255,72,41,0.25)]'
                      : 'bg-[#e5e7eb] text-[#6b7280] group-hover:bg-[#d1d5db]'"
                  >
                    {{ step.number }}
                  </div>
                  <span
                    class="text-[12px] font-semibold uppercase tracking-[0.04em] transition-all duration-500 hidden lg:block"
                    [ngClass]="isStepActive(i) ? 'text-[#ff4829]' : 'text-[#6b7280]'"
                  >
                    {{ step.label }}
                  </span>
                </button>
                @if (i < steps.length - 1) {
                  <div class="flex-1 h-[2px] rounded-full overflow-hidden bg-[#e5e7eb]">
                    <div
                      class="h-full bg-gradient-to-r from-[#ff4829] to-[#e8573a] rounded-full transition-all duration-700 ease-out"
                      [style.width]="isStepActive(i) ? '100%' : '0%'"
                    ></div>
                  </div>
                }
              }
            </div>

            <!-- Horizontal scroll container -->
            <div class="relative overflow-hidden">
              <div
                class="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                [style.transform]="'translateX(-' + (activeStep() * 100) + '%)'"
              >
                @for (step of steps; track step.number; let i = $index) {
                  <div class="w-full shrink-0">
                    <div class="flex flex-col md:flex-row gap-6 lg:gap-10 items-stretch">

                      <!-- Left: Text content -->
                      <div class="flex-1 flex flex-col justify-center min-w-0">
                        <!-- Mobile step badge -->
                        <div class="flex items-center gap-3 mb-4 md:hidden">
                          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff4829] to-[#e8573a] text-white flex items-center justify-center text-[12px] font-bold shadow-[0_4px_14px_0_rgba(255,72,41,0.25)]">
                            {{ step.number }}
                          </div>
                          <span class="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#ff4829]">
                            {{ step.label }}
                          </span>
                        </div>

                        <h3 class="text-[22px] md:text-[26px] lg:text-[30px] font-bold text-[#111827] leading-[1.15] tracking-[-0.02em] mb-3 lg:mb-4">
                          {{ step.title }}
                        </h3>
                        <p class="text-[15px] md:text-[16px] text-[#4b5563] leading-[1.65] max-w-[520px]">
                          {{ step.description }}
                        </p>
                        <div class="mt-6 flex items-center gap-2">
                          <span class="text-[13px] font-medium text-[#6b7280]">Step {{ step.number }} of 05</span>
                        </div>
                      </div>

                      <!-- Right: Visualization -->
                      <div class="md:w-[340px] lg:w-[440px] xl:w-[500px] shrink-0">
                        <div class="bg-gradient-to-br from-[#fef6f3] to-[#ffe8df] rounded-2xl lg:rounded-3xl overflow-hidden p-5 lg:p-7 flex flex-col justify-center min-h-[300px] md:min-h-[380px]">

                          @switch (i) {
                            @case (0) {
                              <!-- Step 1 viz: Creative Performance -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6b5ea0] to-[#1a1a2e] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 12l4-4 3 3 5-7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Creative Performance</span>
                                </div>
                                <!-- Creative rows with CTR trends -->
                                <div class="space-y-3">
                                  <div class="flex items-center justify-between bg-[#f7f3f8] rounded-lg px-3 py-2.5">
                                    <div>
                                      <p class="text-[12px] font-semibold text-[#1a1a2e]">Creative A - "Transform your pipeline"</p>
                                      <p class="text-[10px] text-[#4b5563]">Running 18 days</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                      <div class="w-[60px] h-[6px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                        <div class="h-full w-[45%] bg-gradient-to-r from-[#f59e0b] to-[#ef4444] rounded-full"></div>
                                      </div>
                                      <span class="text-[12px] font-bold text-[#ef4444]">0.34%</span>
                                    </div>
                                  </div>
                                  <div class="flex items-center justify-between bg-[#faf8fc] rounded-lg px-3 py-2.5">
                                    <div>
                                      <p class="text-[12px] font-semibold text-[#374151]">Creative B - "See what competitors miss"</p>
                                      <p class="text-[10px] text-[#4b5563]">Running 12 days</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                      <div class="w-[60px] h-[6px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                        <div class="h-full w-[72%] bg-gradient-to-r from-[#6b5ea0] to-[#8b7fc4] rounded-full"></div>
                                      </div>
                                      <span class="text-[12px] font-bold text-[#6b5ea0]">0.58%</span>
                                    </div>
                                  </div>
                                  <div class="flex items-center justify-between bg-[#faf8fc] rounded-lg px-3 py-2.5">
                                    <div>
                                      <p class="text-[12px] font-semibold text-[#374151]">Creative C - "Your ICP, automated"</p>
                                      <p class="text-[10px] text-[#4b5563]">Running 6 days</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                      <div class="w-[60px] h-[6px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                        <div class="h-full w-[88%] bg-gradient-to-r from-[#22c55e] to-[#4ade80] rounded-full"></div>
                                      </div>
                                      <span class="text-[12px] font-bold text-[#22c55e]">0.71%</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="mt-4 flex items-center gap-2 text-[11px] text-[#6b5ea0] font-medium">
                                  <div class="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></div>
                                  Monitoring 12 active creatives
                                </div>
                              </div>
                            }
                            @case (1) {
                              <!-- Step 2 viz: Fatigue Signal Detected -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center justify-between mb-4">
                                  <div class="flex items-center gap-2">
                                    <div class="w-7 h-7 rounded-lg bg-[#fef3c7] flex items-center justify-center">
                                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2L2 14h12L8 2z" stroke="#f59e0b" stroke-width="1.5" fill="none"/><path d="M8 6v4" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="12" r="0.6" fill="#f59e0b"/></svg>
                                    </div>
                                    <span class="text-[13px] font-semibold text-[#111827]">Fatigue Signal Detected</span>
                                  </div>
                                  <span class="text-[10px] text-[#f59e0b] bg-[#fef3c7] px-2 py-0.5 rounded-full font-semibold">Early Warning</span>
                                </div>
                                <!-- Fatigue alert card -->
                                <div class="bg-[#fffbeb] border border-[#fde68a]/60 rounded-lg p-3 mb-3">
                                  <div class="flex items-center justify-between mb-2">
                                    <div class="flex items-center gap-2">
                                      <div class="w-8 h-8 rounded-full bg-[#fef3c7] flex items-center justify-center">
                                        <span class="text-[11px] font-bold text-[#f59e0b]">A</span>
                                      </div>
                                      <div>
                                        <p class="text-[12px] font-semibold text-[#374151]">Creative A</p>
                                        <p class="text-[10px] text-[#f59e0b]">Fatigue onset detected</p>
                                      </div>
                                    </div>
                                    <span class="text-[9px] font-bold tracking-[0.04em] uppercase text-[#f59e0b] bg-[#fef3c7] px-2 py-0.5 rounded-full">Warning</span>
                                  </div>
                                  <div class="space-y-1.5 text-[11px] text-[#4b5563]">
                                    <div class="flex items-center justify-between">
                                      <span>Engagement decay rate</span>
                                      <span class="font-semibold text-[#f59e0b]">-12% / week</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                      <span>Avg frequency per account</span>
                                      <span class="font-semibold text-[#ef4444]">34.2x</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                      <span>Engaged audience shrinking</span>
                                      <span class="font-semibold text-[#f59e0b]">-8% this week</span>
                                    </div>
                                  </div>
                                </div>
                                <p class="text-[10px] text-[#4b5563] flex items-center gap-1">
                                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#6b7280" stroke-width="1.2"/><path d="M8 5v3l2 1" stroke="#6b7280" stroke-width="1.2" stroke-linecap="round"/></svg>
                                  Detected 2 weeks before CTR would visibly drop
                                </p>
                              </div>
                            }
                            @case (2) {
                              <!-- Step 3 viz: Rotation Recommendation -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6b5ea0] to-[#3e2460] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8h8M8 4v8" stroke="white" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.2" opacity="0.4"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Rotation Recommendation</span>
                                </div>
                                <!-- Recommendation -->
                                <div class="bg-[#f7f3f8] border border-[#e8deee] rounded-lg p-3 mb-3">
                                  <div class="flex items-center gap-2 mb-2">
                                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#6b5ea0" stroke-width="1.5" stroke-linecap="round"/></svg>
                                    <span class="text-[11px] font-bold text-[#6b5ea0] uppercase tracking-[0.04em]">Recommended action</span>
                                  </div>
                                  <p class="text-[12px] text-[#374151] font-medium mb-2">Rotate Creative A out for Enterprise segment</p>
                                  <div class="space-y-1.5">
                                    <div class="flex items-center gap-1.5 text-[10px] text-[#4b5563]">
                                      <div class="w-1 h-1 rounded-full bg-[#ef4444]"></div>
                                      Fatiguing creative: "Transform your pipeline"
                                    </div>
                                    <div class="flex items-center gap-1.5 text-[10px] text-[#4b5563]">
                                      <div class="w-1 h-1 rounded-full bg-[#6b5ea0]"></div>
                                      Most affected: Enterprise accounts (34x avg frequency)
                                    </div>
                                    <div class="flex items-center gap-1.5 text-[10px] text-[#4b5563]">
                                      <div class="w-1 h-1 rounded-full bg-[#22c55e]"></div>
                                      Suggested replacement: Fresh creative from library
                                    </div>
                                  </div>
                                </div>
                                <!-- Confidence -->
                                <div class="flex items-center justify-between text-[11px]">
                                  <span class="text-[#4b5563]">Confidence level</span>
                                  <div class="flex items-center gap-1.5">
                                    <div class="w-[60px] h-[5px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                      <div class="h-full w-[88%] bg-gradient-to-r from-[#6b5ea0] to-[#22c55e] rounded-full"></div>
                                    </div>
                                    <span class="font-semibold text-[#6b5ea0]">High</span>
                                  </div>
                                </div>
                              </div>
                            }
                            @case (3) {
                              <!-- Step 4 viz: Creative Intelligence Record -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8deee] to-[#c8b4e0] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M1 5h14M1 11h14" stroke="#3e2460" stroke-width="1.2" stroke-linecap="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Creative Intelligence Record</span>
                                </div>
                                <!-- Timeline entries -->
                                <div class="space-y-2.5">
                                  <div class="flex items-start gap-2 bg-[#f7f3f8] rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#e8deee] flex items-center justify-center shrink-0 mt-0.5">
                                      <span class="text-[8px] font-bold text-[#6b5ea0]">Q4</span>
                                    </div>
                                    <div>
                                      <p class="text-[11px] font-medium text-[#374151]">"ROI calculator" angle, 42 day lifespan</p>
                                      <p class="text-[10px] text-[#4b5563]">Best with Mid-Market segment, peaked at 0.72% CTR</p>
                                    </div>
                                  </div>
                                  <div class="flex items-start gap-2 bg-[#f7f3f8] rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#e8deee] flex items-center justify-center shrink-0 mt-0.5">
                                      <span class="text-[8px] font-bold text-[#6b5ea0]">Q3</span>
                                    </div>
                                    <div>
                                      <p class="text-[11px] font-medium text-[#374151]">"Competitor gap" angle, 38 day lifespan</p>
                                      <p class="text-[10px] text-[#4b5563]">Strong with Enterprise, fatigued faster with SMB</p>
                                    </div>
                                  </div>
                                  <div class="flex items-start gap-2 bg-[#faf8fc] rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#e8deee] flex items-center justify-center shrink-0 mt-0.5">
                                      <span class="text-[8px] font-bold text-[#6b5ea0]">Q2</span>
                                    </div>
                                    <div>
                                      <p class="text-[11px] font-medium text-[#374151]">"Case study" angle, 55 day lifespan</p>
                                      <p class="text-[10px] text-[#4b5563]">Longest lived creative type across all segments</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="mt-3 pt-3 border-t border-[#e8deee] flex items-center justify-between">
                                  <span class="text-[10px] text-[#4b5563]">4 quarters of creative data</span>
                                  <span class="text-[10px] text-[#6b5ea0] font-medium">Intelligence compounding</span>
                                </div>
                              </div>
                            }
                            @case (4) {
                              <!-- Step 5 viz: Human-in-the-loop -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6b5ea0] to-[#1a1a2e] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8.5l3 3 5-6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Human-in-the-loop</span>
                                </div>
                                <!-- Action log -->
                                <div class="space-y-2 mb-4">
                                  <div class="flex items-start gap-2 bg-[#f7f3f8] rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#e8deee] flex items-center justify-center shrink-0 mt-0.5">
                                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#6b5ea0" stroke-width="1.3" stroke-linecap="round"/></svg>
                                    </div>
                                    <div>
                                      <p class="text-[11px] font-medium text-[#374151]">Rotated Creative A out for Enterprise</p>
                                      <p class="text-[10px] text-[#4b5563]">5 min ago, Approved by you</p>
                                    </div>
                                  </div>
                                  <div class="flex items-start gap-2 bg-[#f7f3f8] rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#e8deee] flex items-center justify-center shrink-0 mt-0.5">
                                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#6b5ea0" stroke-width="1.3" stroke-linecap="round"/></svg>
                                    </div>
                                    <div>
                                      <p class="text-[11px] font-medium text-[#374151]">Creative D activated as replacement</p>
                                      <p class="text-[10px] text-[#4b5563]">5 min ago, Pattern-matched from Q3 learnings</p>
                                    </div>
                                  </div>
                                  <div class="flex items-start gap-2 bg-[#fffbeb] border border-[#fde68a]/40 rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#fef3c7] flex items-center justify-center shrink-0 mt-0.5">
                                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="8.5" r="0.5" fill="#f59e0b"/><path d="M6 3v4" stroke="#f59e0b" stroke-width="1.3" stroke-linecap="round"/></svg>
                                    </div>
                                    <div>
                                      <p class="text-[11px] font-medium text-[#374151]">Creative B approaching fatigue for SMB</p>
                                      <p class="text-[10px] text-[#4b5563]">Awaiting your review</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="flex gap-2">
                                  <button class="flex-1 h-8 bg-gradient-to-r from-[#6b5ea0] to-[#1a1a2e] text-white text-[11px] font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-[0_2px_8px_-2px_rgba(26,26,46,0.3)]">
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="white" stroke-width="1.3" stroke-linecap="round"/></svg>
                                    Approve
                                  </button>
                                  <button class="flex-1 h-8 bg-white border border-[#e5e7eb] text-[#374151] text-[11px] font-semibold rounded-lg">
                                    Review
                                  </button>
                                </div>
                              </div>
                            }
                          }

                        </div>
                      </div>

                    </div>
                  </div>
                }
              </div>
            </div>

            <!-- Mobile dots -->
            <div class="flex md:hidden items-center justify-center gap-2 mt-6">
              @for (step of steps; track step.number; let i = $index) {
                <button
                  class="transition-all duration-300 rounded-full cursor-pointer"
                  [ngClass]="activeStep() === i ? 'w-6 h-2 bg-[#ff4829]' : 'w-2 h-2 bg-[#d1d5db]'"
                  (click)="scrollToStep(i)"
                ></button>
              }
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 5: COMPARISON TABLE
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef3ef] via-[#fef9f7] to-[#fef3ef] pointer-events-none -z-10"></div>
      <div class="absolute top-[30%] left-[50%] -translate-x-1/2 w-[50%] h-[50%] bg-radial-[closest-side] from-[#6b5ea0]/5 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-12">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
            The Difference
          </span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827]">
            What changes when fatigue is <span class="section-gradient-text">detected early.</span>
          </h2>
        </div>

        <!-- Desktop: Enhanced table -->
        <div class="hidden md:block">
          <div class="bg-white rounded-2xl border border-[#c8b4e0]/30 overflow-hidden shadow-[0_4px_24px_-4px_rgba(107,94,160,0.1)]">

            <!-- Table Header -->
            <div class="grid grid-cols-[1fr_1fr_1.15fr]">
              <!-- Capability header -->
              <div class="bg-[#faf8fc] p-5 border-b border-[#e5e7eb]/60">
                <span class="text-[13px] font-semibold text-[#4b5563] uppercase tracking-[0.04em]">Capability</span>
              </div>
              <!-- Without rotation header -->
              <div class="bg-[#faf8fc] p-5 border-b border-[#e5e7eb]/60 border-l border-l-[#e5e7eb]/40">
                <div class="flex items-center gap-2">
                  <div class="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[13px] font-bold text-[#111827] uppercase tracking-[0.04em]">Without rotation</span>
                </div>
              </div>
              <!-- With adRadar header -->
              <div class="bg-gradient-to-r from-[#1a1a2e] to-[#1e1e36] p-5 border-b border-[#1a1a2e]">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-[#d9e1fb] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0">
                    <img src="/agents/Ad Rotation Agent.png" alt="Ad Rotation Agent" class="w-full h-full object-cover rounded-full" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[13px] font-semibold text-white leading-tight">With adRadar Rotation</span>
                    <span class="text-[10px] text-white/50 leading-tight">Ad Rotation Agent</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Table Rows -->
            @for (row of comparisonRows; track row.capability; let i = $index; let even = $even) {
              <div
                class="group grid grid-cols-[1fr_1fr_1.15fr] border-t border-[#e5e7eb]/40 transition-colors duration-200 hover:bg-[#faf8fc]/60"
              >
                <!-- Capability -->
                <div class="p-5 flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-[#faf8fc] flex items-center justify-center shrink-0">
                    @switch (i) {
                      @case (0) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="#6b5ea0" stroke-width="1.5"/><path d="M8 5v3h3" stroke="#6b5ea0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                      @case (1) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M10 5l3 3-3 3" stroke="#6b5ea0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                      @case (2) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="3" stroke="#6b5ea0" stroke-width="1.5"/><path d="M4 13c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#6b5ea0" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (3) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="8" width="3" height="6" rx="0.5" fill="#6b5ea0"/><rect x="6.5" y="5" width="3" height="9" rx="0.5" fill="#6b5ea0" opacity="0.7"/><rect x="11" y="2" width="3" height="12" rx="0.5" fill="#6b5ea0" opacity="0.4"/></svg>
                      }
                      @case (4) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12l4-8 4 8" stroke="#6b5ea0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 9h5" stroke="#6b5ea0" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (5) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="2" stroke="#6b5ea0" stroke-width="1.5"/><path d="M6 8h4" stroke="#6b5ea0" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                    }
                  </div>
                  <span class="text-[14px] font-semibold text-[#111827]">{{ row.capability }}</span>
                </div>

                <!-- Without rotation value -->
                <div class="p-5 flex items-center gap-2.5 border-l border-[#e5e7eb]/40">
                  <div class="w-[18px] h-[18px] rounded-full bg-[#fef2f2] flex items-center justify-center shrink-0">
                    <svg width="7" height="7" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[14px] text-[#6b7280]">{{ row.without }}</span>
                </div>

                <!-- With adRadar value -->
                <div class="p-5 flex items-center gap-2.5 bg-[#faf8fc]/70 group-hover:bg-[#f3edf8]/60 transition-colors border-l-2 border-l-[#6b5ea0]/20">
                  <div class="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#6b5ea0] to-[#1a1a2e] flex items-center justify-center shrink-0 shadow-[0_1px_4px_-1px_rgba(26,26,46,0.3)]">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <span class="text-[14px] text-[#1a1a2e] font-semibold">{{ row.withRotation }}</span>
                </div>
              </div>
            }

          </div>
        </div>

        <!-- Mobile: Stacked cards -->
        <div class="md:hidden space-y-3">
          <!-- Mobile branded header card -->
          <div class="flex items-center gap-3 bg-gradient-to-r from-[#1a1a2e] to-[#1e1e36] rounded-xl px-4 py-3">
            <div class="w-8 h-8 rounded-full bg-[#d9e1fb] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0">
              <img src="/agents/Ad Rotation Agent.png" alt="" class="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <span class="text-[13px] font-semibold text-white block leading-tight">AdRadar Ad Rotation Agent</span>
              <span class="text-[10px] text-white/50 block leading-tight">See the difference the agent makes</span>
            </div>
          </div>

          @for (row of comparisonRows; track row.capability; let i = $index) {
            <div class="bg-white rounded-xl border border-[#e5e7eb]/60 overflow-hidden shadow-[0_1px_4px_-1px_rgba(0,0,0,0.04)]">
              <div class="p-4 border-b border-[#e5e7eb]/40">
                <p class="text-[14px] font-semibold text-[#111827]">{{ row.capability }}</p>
              </div>
              <div class="grid grid-cols-2">
                <div class="p-4">
                  <div class="flex items-center gap-1.5 mb-2">
                    <div class="w-[14px] h-[14px] rounded-full bg-[#fef2f2] flex items-center justify-center">
                      <svg width="6" height="6" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/></svg>
                    </div>
                    <p class="text-[10px] font-bold uppercase tracking-[0.06em] text-[#111827]">Without</p>
                  </div>
                  <p class="text-[13px] text-[#6b7280]">{{ row.without }}</p>
                </div>
                <div class="p-4 bg-[#faf8fc]/70 border-l-2 border-l-[#6b5ea0]/20">
                  <div class="flex items-center gap-1.5 mb-2">
                    <div class="w-[14px] h-[14px] rounded-full bg-gradient-to-br from-[#6b5ea0] to-[#1a1a2e] flex items-center justify-center">
                      <svg width="6" height="6" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
                    </div>
                    <p class="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#6b5ea0]">With adRadar</p>
                  </div>
                  <p class="text-[13px] text-[#1a1a2e] font-semibold">{{ row.withRotation }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 6: RESULTS
         ═══════════════════════════════════════════ -->
    <section class="relative py-16 lg:py-22 overflow-hidden">
      <!-- Light background -->
      <div class="absolute inset-0 bg-[#fef6f3] pointer-events-none -z-10"></div>
      <!-- Ambient glows -->
      <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-radial-[closest-side] from-[#6b5ea0]/8 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-radial-[closest-side] from-[#c8b4e0]/6 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] bg-radial-[closest-side] from-[#e8deee]/4 to-transparent blur-[120px] pointer-events-none -z-10"></div>
      <!-- Dot pattern overlay -->
      <div class="absolute inset-0 opacity-[0.04] pointer-events-none -z-10" style="background-image: radial-gradient(circle, #6b5ea0 1px, transparent 1px); background-size: 28px 28px;"></div>

      <div class="max-w-[1200px] mx-auto px-6">

        <!-- Top: Badge + Heading row -->
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
          <div class="max-w-[600px]">
            <div class="flex items-center gap-2.5 mb-4">
              <div class="w-8 h-8 rounded-full bg-[#d9e1fb] p-[2px] overflow-hidden">
                <img src="/agents/Ad Rotation Agent.png" alt="" class="w-full h-full object-cover rounded-full" />
              </div>
              <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#6b5ea0]">
                Proven Results
              </span>
            </div>
            <h2 class="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.08] tracking-[-0.025em] text-[#111827]">
              What teams see when creative rotation is<br class="hidden lg:block" />
              <span class="section-gradient-text">proactive.</span>
            </h2>
          </div>
          <p class="text-[15px] text-[#4b5563] leading-[1.65] max-w-[340px] lg:text-right">
            Measured across teams who activated the Ad Rotation Agent on existing campaigns, no additional spend required.
          </p>
        </div>

        <!-- Results cards -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- Card 1: 2-3 wks Earlier Detection -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-6 lg:p-7 h-full group-hover:shadow-[0_8px_30px_-6px_rgba(107,94,160,0.12)] transition-shadow duration-500">

              <!-- Before -> After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">Weeks late</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#6b5ea0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#6b5ea0] bg-[#6b5ea0]/15 px-2.5 py-1 rounded-full">Weeks early</span>
              </div>

              <!-- Timeline visualization -->
              <div class="relative w-full h-[140px] mx-auto mb-6 flex items-center justify-center">
                <div class="relative w-full">
                  <!-- Timeline bar -->
                  <div class="h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden relative">
                    <div class="absolute left-0 h-full w-[30%] bg-gradient-to-r from-[#ef4444] to-[#f87171] rounded-full"></div>
                    <div class="absolute right-0 h-full w-[70%] bg-gradient-to-r from-[#8b7fc4] to-[#6b5ea0] rounded-full"></div>
                  </div>
                  <!-- Markers -->
                  <div class="absolute top-[-28px] left-[28%] text-center">
                    <div class="w-4 h-4 rounded-full bg-[#ef4444] mx-auto mb-1 border-2 border-white shadow-sm"></div>
                    <span class="text-[9px] text-[#ef4444] font-medium whitespace-nowrap">Manual detection</span>
                  </div>
                  <div class="absolute top-[-28px] left-[2%] text-center">
                    <div class="w-4 h-4 rounded-full bg-[#6b5ea0] mx-auto mb-1 border-2 border-white shadow-sm"></div>
                    <span class="text-[9px] text-[#6b5ea0] font-medium whitespace-nowrap">adRadar detection</span>
                  </div>
                  <!-- Labels below -->
                  <div class="flex justify-between mt-3">
                    <span class="text-[10px] text-[#6b5ea0] font-medium">Fatigue onset</span>
                    <span class="text-[10px] text-[#ef4444]">CTR visible drop</span>
                  </div>
                </div>
              </div>

              <h3 class="text-[18px] font-bold text-[#111827] mb-1.5 text-center">2-3 wks earlier detection</h3>
              <p class="text-[13px] text-[#4b5563] text-center leading-[1.5]">
                Fatigue signals surfaced before CTR drop, not after it's already visible in reporting
              </p>
            </div>
          </div>

          <!-- Card 2: 40%+ Longer Creative Lifespan -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-6 lg:p-7 h-full group-hover:shadow-[0_8px_30px_-6px_rgba(107,94,160,0.12)] transition-shadow duration-500">

              <!-- Before -> After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">Run to exhaustion</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#6b5ea0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#6b5ea0] bg-[#6b5ea0]/15 px-2.5 py-1 rounded-full">Optimally rotated</span>
              </div>

              <!-- Bar chart visualization -->
              <div class="flex items-end gap-3 justify-center h-[140px] mb-6 px-2">
                <!-- Before bar -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[50px] relative overflow-hidden bg-[#fee2e2] border border-[#fca5a5]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#ef4444] to-[#fca5a5]"></div>
                  </div>
                  <span class="text-[10px] text-[#4b5563] font-medium">Before</span>
                </div>
                <!-- After bars -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[120px] relative overflow-hidden bg-[#6b5ea0] border border-[#8b7fc4]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#6b5ea0] via-[#8b7fc4] to-[#8b7fc4]"></div>
                  </div>
                  <span class="text-[10px] text-[#6b5ea0] font-semibold">After</span>
                </div>
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[100px] relative overflow-hidden bg-[#8b7fc4] border border-[#6b5ea0]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#6b5ea0] via-[#8b7fc4] to-[#8b7fc4]"></div>
                  </div>
                  <span class="text-[10px] text-[#6b5ea0] font-medium">+New</span>
                </div>
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[85px] relative overflow-hidden bg-[#f5a896] border border-[#8b7fc4]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#8b7fc4] via-[#c8b4e0] to-[#c8b4e0]"></div>
                  </div>
                  <span class="text-[10px] text-[#6b5ea0] font-medium">+New</span>
                </div>
              </div>

              <!-- Big number -->
              <div class="text-center">
                <p class="text-[48px] font-bold text-[#111827] tracking-[-0.04em] leading-none mb-1.5">40%+</p>
                <h3 class="text-[18px] font-bold text-[#111827] mb-1.5">Long creative lifespan</h3>
                <p class="text-[13px] text-[#4b5563] leading-[1.5]">
                  Creatives rotated at right times improve performance than those run to exhaustion
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Compounding Intelligence -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-6 lg:p-7 h-full group-hover:shadow-[0_8px_30px_-6px_rgba(107,94,160,0.12)] transition-shadow duration-500">

              <!-- Before -> After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">Start from zero</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#6b5ea0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#6b5ea0] bg-[#6b5ea0]/15 px-2.5 py-1 rounded-full">Compounding</span>
              </div>

              <!-- Flow visualization -->
              <div class="relative mb-6 px-1">
                <!-- Compounding layers -->
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-[#e8deee] flex items-center justify-center shrink-0">
                      <span class="text-[8px] font-bold text-[#6b5ea0]">Q1</span>
                    </div>
                    <div class="flex-1 h-[10px] bg-[#f3f4f6] rounded-full overflow-hidden">
                      <div class="h-full w-[25%] bg-gradient-to-r from-[#c8b4e0] to-[#6b5ea0] rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-[#e8deee] flex items-center justify-center shrink-0">
                      <span class="text-[8px] font-bold text-[#6b5ea0]">Q2</span>
                    </div>
                    <div class="flex-1 h-[10px] bg-[#f3f4f6] rounded-full overflow-hidden">
                      <div class="h-full w-[45%] bg-gradient-to-r from-[#c8b4e0] to-[#6b5ea0] rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-[#e8deee] flex items-center justify-center shrink-0">
                      <span class="text-[8px] font-bold text-[#6b5ea0]">Q3</span>
                    </div>
                    <div class="flex-1 h-[10px] bg-[#f3f4f6] rounded-full overflow-hidden">
                      <div class="h-full w-[65%] bg-gradient-to-r from-[#c8b4e0] to-[#6b5ea0] rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-[#d9e1fb] flex items-center justify-center shrink-0">
                      <span class="text-[8px] font-bold text-[#3e2460]">Q4</span>
                    </div>
                    <div class="flex-1 h-[10px] bg-[#f3f4f6] rounded-full overflow-hidden">
                      <div class="h-full w-[85%] bg-gradient-to-r from-[#8b7fc4] to-[#6b5ea0] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <!-- Arrow showing growth -->
                <div class="flex items-center gap-2 mt-4 bg-[#6b5ea0]/10 border border-[#6b5ea0]/20 rounded-lg px-3 py-2.5">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 12l4-8 4 8" stroke="#6b5ea0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span class="text-[11px] text-[#6b5ea0] font-medium">Each quarter builds on past learnings</span>
                </div>
              </div>

              <div class="text-center">
                <p class="text-[48px] font-bold text-[#111827] tracking-[-0.04em] leading-none mb-1.5">&infin;</p>
                <h3 class="text-[18px] font-bold text-[#111827] mb-1.5">Compounding intelligence</h3>
                <p class="text-[13px] text-[#4b5563] leading-[1.5]">
                  Creative learnings carry forward across every campaign, never starting from zero again
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom trust line -->
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 7: RELATED AGENTS
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef9f7] via-[#fef8f6] to-white pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[50%] bg-radial-[closest-side] from-[#c8b4e0]/8 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-10">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
            Connected Intelligence
          </span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
            Creative rotation is one layer.
            <br class="hidden md:block" />
            Six agents <span class="section-gradient-text">work together.</span>
          </h2>
          <p class="text-[15px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[720px] mx-0 md:mx-auto">
            The Ad Rotation Agent shares creative intelligence with every other agent in the AdRadar suite --
            so fatigue signals inform impression distribution, scheduling,
            and competitive response simultaneously.
          </p>
        </div>

        <!-- Agent Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          @for (agent of relatedAgents; track agent.name; let i = $index) {
            <a
              [routerLink]="agent.route"
              class="connected-agent-card group relative rounded-2xl transition-all duration-500 hover:-translate-y-1.5"
              [style.animationDelay]="(i * 0.12) + 's'"
            >
              <!-- Outer glow on hover -->
              <div class="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[3px]"
                [style.background]="'linear-gradient(135deg, ' + agent.accentColor + '35, transparent, ' + agent.accentColor + '35)'">
              </div>

              <!-- Card body -->
              <div class="relative rounded-2xl border-2 p-5 h-full flex flex-col transition-all duration-500 group-hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.12)] overflow-hidden"
                [style.backgroundColor]="agent.avatarBg + '25'"
                [style.borderColor]="agent.accentColor + '25'"
              >
                <!-- Shimmer sweep -->
                <div class="shimmer-sweep absolute inset-0 pointer-events-none z-10 rounded-2xl"></div>

                <!-- Top: Avatar + pulse ring -->
                <div class="flex items-center justify-between mb-4">
                  <div class="relative">
                    <!-- Pulse ring animation -->
                    <div class="absolute -inset-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      [style.background]="'radial-gradient(circle, ' + agent.accentColor + '20, transparent 70%)'"
                      style="animation: agent-pulse 2.5s ease-in-out infinite;">
                    </div>
                    <div
                      class="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/80 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-110"
                      [style.backgroundColor]="agent.avatarBg"
                    >
                      <img [src]="agent.image" [alt]="agent.name" class="w-full h-full object-cover" />
                    </div>
                  </div>

                  <!-- Status indicator -->
                  <div class="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
                    <div class="w-1.5 h-1.5 rounded-full animate-pulse"
                      [style.backgroundColor]="agent.accentColor">
                    </div>
                    <span class="text-[10px] font-semibold uppercase tracking-[0.04em]"
                      [style.color]="agent.accentColor">
                      Ready
                    </span>
                  </div>
                </div>

                <!-- Name -->
                <h3 class="text-[15px] font-bold text-[#111827] mb-1.5 leading-tight group-hover:text-[#111827] transition-colors duration-300">
                  {{ agent.name }}
                </h3>

                <!-- Description -->
                <p class="text-[13px] text-[#4b5563] leading-[1.55] mb-4 flex-1">
                  {{ agent.description }}
                </p>

                <!-- Bottom: Connection line + arrow -->
                <div class="flex items-center justify-between pt-3 border-t transition-colors duration-300"
                  [style.borderColor]="agent.accentColor + '20'">
                  <!-- Connection to Ad Rotation badge -->
                  <div class="flex items-center gap-1.5">
                    <div class="w-4 h-4 rounded-full bg-[#d9e1fb] overflow-hidden shrink-0">
                      <img src="/agents/Ad Rotation Agent.png" alt="" class="w-full h-full object-cover" />
                    </div>
                    <div class="w-5 h-[1.5px] rounded-full"
                      [style.background]="'linear-gradient(90deg, #c8b4e0, ' + agent.accentColor + ')'">
                    </div>
                    <div class="w-4 h-4 rounded-full overflow-hidden shrink-0"
                      [style.backgroundColor]="agent.avatarBg">
                      <img [src]="agent.image" alt="" class="w-full h-full object-cover" />
                    </div>
                    <span class="text-[10px] text-[#6b7280] font-medium ml-0.5">Synced</span>
                  </div>

                  <!-- Arrow -->
                  <div
                    class="w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0"
                    [style.backgroundColor]="agent.accentColor + '20'"
                  >
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M5 3l4 4-4 4" [attr.stroke]="agent.accentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          }
        </div>
      </div>
    </section>

    <app-cta-section
      headingStart="Stop running creatives until they"
      headingGradient="burn out."
      description="Connect your LinkedIn Ads account in 2 minutes. The Ad Rotation Agent starts monitoring immediately. No credit card required."
    />
  `,
  styles: [`
    :host { display: block; }

    /* Hero gradient text */
    .hero-gradient-text {
      background: linear-gradient(135deg, #e8573a, #ff6b35);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Section gradient text */
    .section-gradient-text {
      background: linear-gradient(135deg, #e8573a, #ff6b35);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* CTA gradient text */
    .cta-gradient-text {
      background: linear-gradient(58deg, #c8b4e0 0%, #f7f3f8 50%, #ffffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Orbiting agents float */
    .orbit-agent {
      animation: agent-float 4s ease-in-out infinite;
    }

    @keyframes agent-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    /* Orbit ring slow rotation */
    .orbit-ring {
      animation: orbit-rotate 30s linear infinite;
    }
    @keyframes orbit-rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    /* Pulse glow ring */
    @keyframes pulse-ring {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.15); opacity: 0.2; }
    }

    /* Glow pulse */
    @keyframes glow-pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 1; }
    }

    /* Stat card hover lift */
    .stat-card {
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease;
    }
    .stat-card:hover {
      transform: translateY(-6px);
    }
    .stat-card:hover .shimmer-sweep::after {
      animation: shimmer-sweep 1s ease-in-out forwards;
    }

    /* Shimmer sweep effect */
    .shimmer-sweep {
      overflow: hidden;
      border-radius: inherit;
    }
    .shimmer-sweep::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.08),
        rgba(200, 180, 224, 0.06),
        transparent
      );
      transform: rotate(15deg) scaleY(1.5) translateX(-100%);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .stat-card:hover .shimmer-sweep::after,
    .agent-card:hover .shimmer-sweep::after {
      animation: shimmer-sweep 1s ease-in-out forwards;
    }

    @keyframes shimmer-sweep {
      0% {
        transform: rotate(15deg) scaleY(1.5) translateX(-100%);
        opacity: 1;
      }
      100% {
        transform: rotate(15deg) scaleY(1.5) translateX(50%);
        opacity: 0;
      }
    }

    /* Donut chart fill animation */
    .donut-fill {
      stroke-dashoffset: 271.4;
      animation: donut-draw 1.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
    }
    @keyframes donut-draw {
      to { stroke-dashoffset: 54.3; }
    }

    /* Agent card hover */
    .agent-card {
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .agent-card:hover {
      transform: translateY(-3px);
    }

    /* Result stat */
    .result-stat {
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    /* Agent pulse ring */
    @keyframes agent-pulse {
      0%, 100% { transform: scale(1); opacity: 0; }
      50% { transform: scale(1.6); opacity: 0.6; }
    }

    /* Connected agent card */
    .connected-agent-card {
      animation: agent-card-appear 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
    }
    @keyframes agent-card-appear {
      from {
        opacity: 0;
        transform: translateY(16px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `],
})
export class AdRotationComponent implements OnInit, OnDestroy {
  @ViewChild('howItWorksRef', { static: true }) howItWorksRef!: ElementRef<HTMLElement>;
  private cdr = inject(ChangeDetectorRef);

  activeStep = signal(0);
  private scrollHandler = () => this.onScroll();

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.onScroll();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  private onScroll(): void {
    const el = this.howItWorksRef?.nativeElement;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const sectionHeight = el.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollableDistance = sectionHeight - viewportHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

    // Distribute 5 steps evenly across scroll, with last step holding longer
    const newStep = Math.min(4, Math.floor(progress * 5));
    if (newStep !== this.activeStep()) {
      this.activeStep.set(newStep);
      this.cdr.detectChanges();
    }
  }

  scrollToStep(index: number): void {
    const el = this.howItWorksRef?.nativeElement;
    if (!el) return;
    const sectionTop = el.offsetTop;
    const sectionHeight = el.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = sectionHeight - viewportHeight;
    const targetScroll = sectionTop + (index / this.steps.length) * scrollableDistance;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }

  isStepActive(index: number): boolean {
    return index <= this.activeStep();
  }

  isStepCurrent(index: number): boolean {
    return index === this.activeStep();
  }

  isStepLast(index: number): boolean {
    return index === this.steps.length - 1;
  }

  linkedinLimitations = [
    'Fatigue detected after CTR has already dropped',
    'Frequency data shown, interpretation left to the user',
    'No segment-level fatigue differentiation',
    'No creative pattern history or rotation intelligence',
    'Rotation timing is guesswork based on lagging metrics',
    'Creative learning resets with every new campaign',
  ];

  adradarAdvantages = [
    'Fatigue signals detected before CTR declines',
    'Engagement decay patterns interpreted automatically',
    'Segment-level fatigue tracked per audience group',
    'Creative pattern history compounds over time',
    'Rotation recommended at the optimal moment, not after',
    'Creative intelligence carries forward across campaigns',
  ];

  steps = [
    {
      number: '01',
      label: 'Monitor',
      title: 'Agent monitors engagement patterns across all active creatives',
      description:
        'From the moment a campaign is linked, the agent tracks impression frequency, CTR trends, engagement decay curves, and frequency-per-account patterns for each creative variant. Not just at the campaign level, at the creative and segment level.',
    },
    {
      number: '02',
      label: 'Detect',
      title: 'Fatigue signals are detected before CTR drops',
      description:
        'The agent identifies early indicators of fatigue, declining engagement rate at stable impression frequency, increasing frequency with flat CTR, shrinking engaged audience percentage, before these patterns compound into a visible performance drop.',
    },
    {
      number: '03',
      label: 'Recommend',
      title: 'Rotation recommendations are surfaced with context',
      description:
        'When a creative approaches fatigue, the agent surfaces a rotation recommendation, which creative is showing decay signals, which audience segments are most affected, the estimated remaining efficient lifespan, and suggested rotation timing.',
    },
    {
      number: '04',
      label: 'Learn',
      title: 'Creative pattern history is preserved across campaigns',
      description:
        'What worked last quarter doesn\'t disappear when a campaign ends. The agent builds a creative intelligence record, which hooks converted for which ICP segments, which formats had longer fatigue curves, which CTAs drove the strongest engagement at each funnel stage.',
    },
    {
      number: '05',
      label: 'Control',
      title: 'You approve the rotation. Always.',
      description:
        'The agent recommends. You decide. Every rotation suggestion is explained, logged, and actionable, but no creative is changed without your approval. Human-in-the-loop by design, with full context behind every recommendation.',
    },
  ];

  comparisonRows: ComparisonRow[] = [
    {
      capability: 'Fatigue detection timing',
      without: 'After CTR has already dropped',
      withRotation: 'Before CTR declines, early signal',
    },
    {
      capability: 'Rotation trigger',
      without: 'Manual, reactive to lagging metrics',
      withRotation: 'Agent recommendation at optimal moment',
    },
    {
      capability: 'Segment-level tracking',
      without: 'Campaign-level averages only',
      withRotation: 'Per-creative, per-segment fatigue curves',
    },
    {
      capability: 'Creative learning',
      without: 'Resets with every campaign',
      withRotation: 'Compounds across campaigns over time',
    },
    {
      capability: 'Rotation recommendation quality',
      without: 'Gut feel or general timing rules',
      withRotation: 'Pattern-informed, history-backed angles',
    },
    {
      capability: 'Brand perception protection',
      without: 'Reactive, damage already done',
      withRotation: 'Proactive, rotated before over-exposure',
    },
  ];

  relatedAgents: RelatedAgent[] = [
    {
      name: 'Impression Capping Agent',
      image: '/agents/Impression Capping Agent.png',
      avatarBg: '#a8d1dc',
      description:
        'When accounts near their impression cap, the Rotation Agent prioritises fresh creative for those accounts, ensuring the final impressions in a cap cycle are delivered with new messaging, not fatigued creative.',
      accentColor: '#3a97ab',
      route: '/agents/impression-capping',
    },
    {
      name: 'Competitor Ads Copilot',
      image: '/agents/Analyse competitors LinkedIn Ads.png',
      avatarBg: '#acdfa4',
      description:
        'When a competitor launches new creative, the Rotation Agent surfaces this as a signal to evaluate whether your current creative cycle needs to accelerate, not just whether your own metrics indicate fatigue.',
      accentColor: '#4a9a42',
      route: '/agents/analyse-competitors',
    },
    {
      name: 'Campaign Scheduling Agent',
      image: '/agents/Campaign Scheduling Agent.png',
      avatarBg: '#fbf5df',
      description:
        'Fatigue tracking is measured against active delivery windows, so rotation recommendations reflect impressions served during scheduled hours, not elapsed calendar time.',
      accentColor: '#c5a030',
      route: '/agents/campaign-scheduling',
    },
    {
      name: 'Strategy Copilot',
      image: '/agents/Bidding Optimization Agent.png',
      avatarBg: '#acdfa4',
      description:
        'Creative pattern data feeds into the Strategy Copilot\'s funnel recommendations, so campaign structure decisions are informed by what formats and messaging angles are actually working at each stage.',
      accentColor: '#4a9a42',
      route: '/agents/bidding-optimization',
    },
    {
      name: 'Company Blocking Agent',
      image: '/agents/Company Blocking Agent.png',
      avatarBg: '#b8dff0',
      description:
        'With off-ICP companies blocked, creative engagement data is cleaner, fatigue signals are based on relevant audience behavior, not noise from wrong accounts.',
      accentColor: '#4a9cc5',
      route: '/agents/company-blocking',
    },
    {
      name: 'Title Blocking Agent',
      image: '/agents/Title Blocking Agent.png',
      avatarBg: '#ee95a0',
      description:
        'With off-persona titles removed, creative performance reflects your actual buying committee\'s response, not diluted by irrelevant viewers.',
      accentColor: '#d4606f',
      route: '/agents/title-blocking',
    },
  ];
}
