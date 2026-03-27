import { Component, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, ViewChild, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

interface ComparisonRow {
  capability: string;
  without: string;
  withOptimization: string;
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
  selector: 'app-bidding-optimization',
  standalone: true,
  imports: [RouterLink, NgClass],
  template: `
    <!-- ═══════════════════════════════════════════
         SECTION 1: HERO
         ═══════════════════════════════════════════ -->
    <section class="relative pt-12 lg:pt-20 pb-16 lg:pb-20 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#edf8eb] via-[#f5fbf4] to-white pointer-events-none -z-10"></div>
      <!-- Large ambient glows -->
      <div class="absolute top-[-15%] right-[-10%] w-[60%] h-[70%] bg-radial-[closest-side] from-[#4a9a42]/15 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[0%] left-[-15%] w-[50%] h-[60%] bg-radial-[closest-side] from-[#acdfa4]/20 to-transparent blur-[80px] pointer-events-none -z-10"></div>
      <div class="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-radial-[closest-side] from-[#1a4a18]/5 to-transparent blur-[120px] pointer-events-none -z-10"></div>
      <!-- Subtle dot pattern overlay -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" style="background-image: radial-gradient(circle, #1a4a18 1px, transparent 1px); background-size: 32px 32px;"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <!-- Left: Text content -->
          <div class="flex-1 text-left">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2.5 bg-[#edf8eb]/80 backdrop-blur-sm border border-[#acdfa4]/40 rounded-full px-4 py-1.5 mb-6 shadow-[0_2px_12px_-4px_rgba(74,154,66,0.1)]">
              <div class="w-6 h-6 rounded-full overflow-hidden bg-[#acdfa4] ring-2 ring-white/60">
                <img src="/agents/Bidding Optimization Agent.png" alt="" class="w-full h-full object-cover" />
              </div>
              <span class="text-[11px] font-bold tracking-[0.08em] text-[#1a4a18] uppercase">
                Bidding Optimization Agent
              </span>
            </div>

            <!-- Heading -->
            <h1 class="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em] text-[#111827] mb-6">
              Overbidding inflates CPM. Underbidding kills reach.
              <span class="hero-gradient-text">Neither should require guesswork.</span>
            </h1>

            <!-- Subheading -->
            <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-[540px] mb-8">
              Continuously adjusts bids across campaigns to maximise delivery efficiency — keeps you competitive in LinkedIn auction without burning budget on overpriced impressions.
            </p>

            <!-- CTAs -->
            <div class="flex items-center gap-4 flex-wrap">
              <a
                href="#"
                class="group inline-flex items-center gap-3 bg-[#1a4a18] hover:bg-[#143a12] text-white rounded-full pl-6 pr-1.5 py-1.5 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(26,74,24,0.4)] hover:scale-[1.02]"
              >
                <span class="text-[15px] font-medium">Start free trial</span>
                <div class="w-9 h-9 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-15deg]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3l4 4-4 4" stroke="#1a4a18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </a>
              <a
                href="#"
                class="h-12 px-8 flex items-center justify-center border border-[#acdfa4] rounded-full text-[15px] font-medium text-[#1a4a18] hover:bg-[#edf8eb]/50 hover:border-[#4a9a42]/50 transition-all duration-300"
              >
                Book a Demo
              </a>
            </div>

            <!-- Trust indicators -->
            <div class="flex items-center gap-4 text-[13px] text-[#6b7280] mt-6">
              <span class="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 7l2 2 4-4" stroke="#4a9a42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7" cy="7" r="6" stroke="#4a9a42" stroke-width="1" opacity="0.3"/></svg>
                No credit card required
              </span>
              <span class="text-[#d1d5db]">&bull;</span>
              <span class="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v6l3 2" stroke="#4a9a42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7" cy="7" r="6" stroke="#4a9a42" stroke-width="1" opacity="0.3"/></svg>
                Setup in under 2 minutes
              </span>
            </div>
          </div>

          <!-- Right: Agent constellation -->
          <div class="hidden lg:block w-[460px] shrink-0">
            <div class="agent-constellation relative w-[420px] h-[420px] mx-auto">

              <!-- Outer ambient glow -->
              <div class="absolute -inset-10 bg-radial-[closest-side] from-[#acdfa4]/20 to-transparent blur-[40px] pointer-events-none"></div>

              <!-- Orbit rings -->
              <div class="absolute inset-[46px] rounded-full border border-dashed border-[#acdfa4]/20"></div>
              <div class="absolute inset-[90px] rounded-full border border-[#acdfa4]/8"></div>

              <!-- Subtle rotating ring -->
              <div class="absolute inset-[44px] rounded-full border border-[#4a9a42]/5 orbit-ring"></div>

              <!-- Connecting lines -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 420">
                <line x1="210" y1="210" x2="210" y2="46" stroke="url(#line-grad-bo)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="128" stroke="url(#line-grad-bo)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="292" stroke="url(#line-grad-bo)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="210" y2="374" stroke="url(#line-grad-bo)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="292" stroke="url(#line-grad-bo)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="128" stroke="url(#line-grad-bo)" stroke-width="1" opacity="0.15"/>
                <defs>
                  <linearGradient id="line-grad-bo" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#acdfa4" stop-opacity="0.6"/>
                    <stop offset="100%" stop-color="#acdfa4" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>

              <!-- ══════ CENTER: Bidding Optimization Agent ══════ -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div class="absolute inset-[-32px] rounded-full bg-[#acdfa4]/6 animate-[pulse-ring_3s_ease-in-out_infinite]"></div>
                <div class="absolute inset-[-22px] rounded-full bg-[#acdfa4]/10 animate-[pulse-ring_3s_ease-in-out_infinite_0.5s]"></div>
                <div class="absolute inset-[-12px] rounded-full bg-gradient-to-br from-[#acdfa4]/20 to-[#4a9a42]/12"></div>
                <div class="relative w-[110px] h-[110px] rounded-full bg-gradient-to-br from-[#c8eec2] to-[#acdfa4] p-[3px] shadow-[0_8px_40px_-4px_rgba(74,154,66,0.35)]">
                  <div class="w-full h-full rounded-full bg-gradient-to-br from-[#edf8eb] to-[#c4e8be] overflow-hidden">
                    <img src="/agents/Bidding Optimization Agent.png" alt="Bidding Optimization Agent" class="w-full h-full object-cover" />
                  </div>
                </div>
                <div class="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1a4a18] text-white text-[10px] font-bold tracking-[0.05em] uppercase px-3 py-1 rounded-full shadow-[0_4px_12px_-2px_rgba(26,74,24,0.3)]">
                  Bidding Optimization
                </div>
              </div>

              <!-- ══════ ORBITING AGENTS ══════ -->
              <!-- Company Blocking Agent - top center -->
              <div class="absolute top-[16px] left-1/2 -translate-x-1/2 z-10 orbit-agent" style="animation-delay: 0s">
                <div class="w-[60px] h-[60px] rounded-full p-[2px] bg-gradient-to-br from-[#b8dff0]/60 to-[#9dcce7]/40 shadow-[0_4px_16px_-4px_rgba(157,204,231,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#e3f3fa] overflow-hidden">
                    <img src="/agents/Company Blocking Agent.png" alt="Company Blocking" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Impression Capping Agent - top right -->
              <div class="absolute top-[98px] right-[38px] z-10 orbit-agent" style="animation-delay: 0.4s">
                <div class="w-[56px] h-[56px] rounded-full p-[2px] bg-gradient-to-br from-[#a8d1dc]/50 to-[#d0eef4]/40 shadow-[0_4px_16px_-4px_rgba(168,209,220,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#e5f7fa] overflow-hidden">
                    <img src="/agents/Impression Capping Agent.png" alt="Impression Capping" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Title Blocking Agent - bottom right -->
              <div class="absolute bottom-[98px] right-[38px] z-10 orbit-agent" style="animation-delay: 0.8s">
                <div class="w-[54px] h-[54px] rounded-full p-[2px] bg-gradient-to-br from-[#ee95a0]/50 to-[#f4e0e9]/40 shadow-[0_4px_16px_-4px_rgba(238,149,160,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#fbf2f5] overflow-hidden">
                    <img src="/agents/Title Blocking Agent.png" alt="Title Blocking" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Campaign Scheduling Agent - bottom center -->
              <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-10 orbit-agent" style="animation-delay: 1.2s">
                <div class="w-[58px] h-[58px] rounded-full p-[2px] bg-gradient-to-br from-[#f0d48a]/50 to-[#fdecc8]/40 shadow-[0_4px_16px_-4px_rgba(240,212,138,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#fffbe3] overflow-hidden">
                    <img src="/agents/Campaign Scheduling Agent.png" alt="Campaign Scheduling" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Ad Rotation Agent - bottom left -->
              <div class="absolute bottom-[98px] left-[38px] z-10 orbit-agent" style="animation-delay: 1.6s">
                <div class="w-[54px] h-[54px] rounded-full p-[2px] bg-gradient-to-br from-[#c8b4e0]/50 to-[#d9e1fb]/40 shadow-[0_4px_16px_-4px_rgba(200,180,224,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#f7f3f8] overflow-hidden">
                    <img src="/agents/Ad Rotation Agent.png" alt="Ad Rotation" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Analyse Competitors Agent - top left -->
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
         SECTION 2: PROBLEM STATS — 3 dark cards with green accents
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-white via-[#f5fbf4] to-[#edf8eb] pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-10">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#4a9a42] mb-4 block">The Problem</span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
            LinkedIn's auction is dynamic. Manual bids are static.
            <br class="hidden md:block" />
            <span class="section-gradient-text">The gap costs you every day.</span>
          </h2>
          <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[680px] mx-0 md:mx-auto">
            Most teams set their LinkedIn bids once — at campaign launch — and leave them. Maybe they revisit during a quarterly review.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- Card 1: 20% -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(26,74,24,0.2)]">
            <div class="absolute inset-0 bg-gradient-to-br from-[#1a4a18] to-[#245f22]"></div>
            <div class="absolute top-[-30%] right-[-20%] w-[60%] h-[80%] bg-radial-[closest-side] from-[#4a9a42]/30 to-transparent blur-[40px] pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6bc462]/40 to-transparent"></div>
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-white">20%</span>
                <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2v16M6 6l4-4 4 4" stroke="#6bc462" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 14h12" stroke="#6bc462" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-white/95 leading-[1.4] mb-2">
                Avg monthly budget recovered when bid strategy is actively optimised vs. static
              </p>
              <p class="text-[13px] text-[#acdfa4] leading-[1.55]">
                Budget not recovered from overbidding is gone — it doesn't carry forward
              </p>
            </div>
          </div>

          <!-- Card 2: 5+ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(26,74,24,0.2)]">
            <div class="absolute inset-0 bg-gradient-to-br from-[#1e5c1c] to-[#1a4a18]"></div>
            <div class="absolute top-[-30%] right-[-20%] w-[60%] h-[80%] bg-radial-[closest-side] from-[#6bc462]/25 to-transparent blur-[40px] pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6bc462]/40 to-transparent"></div>
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-white">5+</span>
                <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="3" width="6" height="6" rx="1" stroke="#6bc462" stroke-width="1.5" fill="none"/>
                    <rect x="11" y="3" width="6" height="6" rx="1" stroke="#6bc462" stroke-width="1.5" fill="none"/>
                    <rect x="3" y="11" width="6" height="6" rx="1" stroke="#6bc462" stroke-width="1.5" fill="none"/>
                    <rect x="11" y="11" width="6" height="6" rx="1" stroke="#6bc462" stroke-width="1.5" fill="none" opacity="0.4"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-white/95 leading-[1.4] mb-2">
                LinkedIn bidding strategies in Campaign Manager have no dynamic guidance on what to optimize
              </p>
              <p class="text-[13px] text-[#acdfa4] leading-[1.55]">
                Target cost, max cost, enhanced CPC, decision quality depends on operator
              </p>
            </div>
          </div>

          <!-- Card 3: 0 -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(26,74,24,0.2)]">
            <div class="absolute inset-0 bg-gradient-to-br from-[#245f22] to-[#1e5c1c]"></div>
            <div class="absolute top-[-30%] right-[-20%] w-[60%] h-[80%] bg-radial-[closest-side] from-[#4a9a42]/25 to-transparent blur-[40px] pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6bc462]/40 to-transparent"></div>
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-white">0</span>
                <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7" stroke="#6bc462" stroke-width="1.5" fill="none"/>
                    <path d="M10 6v4h3" stroke="#6bc462" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <line x1="4" y1="16" x2="16" y2="4" stroke="#6bc462" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-white/95 leading-[1.4] mb-2">
                Native LinkedIn tools to optimise bids dynamically across multiple campaigns simultaneously
              </p>
              <p class="text-[13px] text-[#acdfa4] leading-[1.55]">
                Manual bid review is the only option — where optimisation is always reactive and always late
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 3: LINKEDIN VS ADRADAR COMPARISON
         Asymmetric layout: left heading + right stacked cards
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#edf8eb] via-[#f3f9f2] to-white pointer-events-none -z-10"></div>
      <!-- Ambient glows -->
      <div class="absolute top-[20%] right-[5%] w-[35%] h-[50%] bg-radial-[closest-side] from-[#4a9a42]/8 to-transparent blur-[80px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[10%] left-[10%] w-[30%] h-[40%] bg-radial-[closest-side] from-[#1a4a18]/5 to-transparent blur-[80px] pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">

          <!-- ══ LEFT COLUMN (60%): Heading + description + before/after viz ══ -->
          <div class="lg:w-[58%] flex flex-col">
            <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#4a9a42] mb-4 block">
              The Gap
            </span>
            <h2 class="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.08] tracking-[-0.025em] text-[#111827] mb-5">
              Reviewing bids weekly isn't optimisation.
              <span class="section-gradient-text">It's damage control.</span>
            </h2>
            <p class="text-[16px] text-[#4b5563] leading-[1.7] mb-8 max-w-[540px]">
              Manual bid management on LinkedIn requires the operator to interpret auction signals,
              diagnose whether the issue is bid-level or structural, and make adjustments across multiple campaigns.
            </p>

            <!-- Before / After transformation card -->
            <div class="hidden lg:flex flex-col flex-1 bg-gradient-to-br from-[#f0f9ee] to-[#edf8eb]/80 rounded-2xl border border-[#acdfa4]/25 p-6 mt-2">

              <!-- Before: Bid waste -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#fef2f2] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[12px] font-semibold text-[#6b7280] uppercase tracking-[0.04em]">Static bids — bid waste</span>
                </div>
                <!-- Bar visualization: overbidding on some, underbidding on others -->
                <div class="flex gap-[3px] items-end h-[44px]">
                  <div class="flex-1 bg-[#ef4444]/20 rounded-[3px] h-full"></div>
                  <div class="flex-1 bg-[#ef4444]/18 rounded-[3px] h-[92%]"></div>
                  <div class="flex-1 bg-[#ef4444]/15 rounded-[3px] h-[85%]"></div>
                  <div class="flex-1 bg-[#f59e0b]/20 rounded-[3px] h-[60%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/60 rounded-[3px] h-[25%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/50 rounded-[3px] h-[18%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/45 rounded-[3px] h-[14%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/40 rounded-[3px] h-[10%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/35 rounded-[3px] h-[8%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/30 rounded-[3px] h-[5%]"></div>
                </div>
                <div class="flex items-center justify-between mt-1.5">
                  <span class="text-[10px] text-[#ef4444]/60 font-medium">Overbidding (wasted)</span>
                  <span class="text-[10px] text-[#9ca3af]">Underbidding (no reach)</span>
                </div>
              </div>

              <!-- Divider with arrow -->
              <div class="flex items-center gap-3 my-3">
                <div class="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#acdfa4]/40"></div>
                <div class="w-7 h-7 rounded-full bg-gradient-to-br from-[#4a9a42] to-[#1a4a18] flex items-center justify-center shadow-[0_2px_8px_-2px_rgba(26,74,24,0.3)]">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M4 8l3 3 3-3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#acdfa4]/40"></div>
              </div>

              <!-- After: Optimized bids -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#d6f0d2] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="#1a4a18" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <span class="text-[12px] font-semibold text-[#1a4a18] uppercase tracking-[0.04em]">With AdRadar bid optimization</span>
                </div>
                <!-- Bar visualization: even, optimized distribution -->
                <div class="flex gap-[3px] items-end h-[44px]">
                  <div class="flex-1 bg-gradient-to-t from-[#1a4a18] to-[#4a9a42] rounded-[3px] h-[78%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#1a4a18] to-[#4a9a42] rounded-[3px] h-[74%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#1a4a18]/90 to-[#4a9a42] rounded-[3px] h-[70%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#4a9a42] to-[#6bc462] rounded-[3px] h-[66%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#4a9a42] to-[#6bc462] rounded-[3px] h-[63%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#4a9a42] to-[#6bc462] rounded-[3px] h-[60%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#6bc462] to-[#acdfa4] rounded-[3px] h-[56%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#6bc462] to-[#acdfa4] rounded-[3px] h-[52%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#acdfa4] to-[#d6f0d2] rounded-[3px] h-[48%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#acdfa4] to-[#d6f0d2] rounded-[3px] h-[44%]"></div>
                </div>
                <div class="flex items-center justify-between mt-1.5">
                  <span class="text-[10px] text-[#4a9a42] font-medium">Optimized bids</span>
                  <span class="text-[10px] text-[#4a9a42]">Budget maximised</span>
                </div>
              </div>

              <!-- Flex spacer to push stats to bottom -->
              <div class="flex-1"></div>

              <!-- Stats row -->
              <div class="grid grid-cols-3 gap-3 pt-4 border-t border-[#acdfa4]/20">
                <div>
                  <p class="text-[24px] font-bold text-[#1a4a18] tracking-[-0.03em] leading-none">3x</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Bid efficiency</p>
                </div>
                <div class="text-center">
                  <p class="text-[24px] font-bold text-[#1a4a18] tracking-[-0.03em] leading-none">24/7</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Monitoring</p>
                </div>
                <div class="text-right">
                  <p class="text-[24px] font-bold text-[#1a4a18] tracking-[-0.03em] leading-none">20%</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Budget recovered</p>
                </div>
              </div>
            </div>
          </div>

          <!-- ══ RIGHT COLUMN (40%): Stacked comparison cards ══ -->
          <div class="lg:w-[42%] flex flex-col">

            <!-- LinkedIn Card — subdued, "old way" feel -->
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
                      <h3 class="text-[14px] font-semibold text-[#374151] leading-tight">LinkedIn bid management</h3>
                      <p class="text-[11px] text-[#9ca3af] mt-0.5">Manual, static bids</p>
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
                      <span class="text-[13px] text-[#9ca3af] leading-[1.5]">{{ item }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>

            <!-- Transformation bridge -->
            <div class="relative flex items-center justify-center py-2.5 z-10">
              <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#e5e7eb] via-[#acdfa4] to-[#4a9a42]"></div>
              <div class="relative bg-gradient-to-br from-[#1a4a18] to-[#4a9a42] text-white text-[10px] font-bold tracking-[0.06em] uppercase px-4 py-2 rounded-full shadow-[0_4px_20px_-4px_rgba(26,74,24,0.35)] flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M4 9l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Upgrade to
              </div>
            </div>

            <!-- AdRadar Card — premium, elevated, "new way" feel -->
            <div class="group relative rounded-2xl flex-1 transition-all duration-300">
              <div class="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#4a9a42]/25 via-[#acdfa4]/15 to-[#4a9a42]/25 opacity-60 group-hover:opacity-100 blur-[3px] transition-opacity duration-500"></div>
              <div class="relative bg-gradient-to-br from-[#f0f9ee] via-[#e5f5e2] to-[#daf0d5] rounded-2xl border-2 border-[#acdfa4] p-5 lg:p-6 shadow-[0_8px_30px_-8px_rgba(74,154,66,0.15)] group-hover:shadow-[0_16px_50px_-12px_rgba(74,154,66,0.22)] flex flex-col h-full">
                <div class="shimmer-sweep absolute inset-0 pointer-events-none z-10 rounded-2xl"></div>

                <!-- Header -->
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-[#c8eec2] to-[#acdfa4] p-[2px] shadow-[0_4px_12px_-2px_rgba(74,154,66,0.3)]">
                      <div class="w-full h-full rounded-full bg-[#acdfa4] overflow-hidden">
                        <img src="/agents/Bidding Optimization Agent.png" alt="" class="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 class="text-[14px] font-bold text-[#1a4a18] leading-tight">AdRadar Bid Optimization</h3>
                      <p class="text-[11px] text-[#4a9a42] mt-0.5">Dynamic bid control</p>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#1a4a18] bg-[#d6f0d2] rounded-full px-2.5 py-0.5">Full Control</span>
                </div>

                <!-- Advantages list -->
                <ul class="space-y-2.5 mb-5">
                  @for (item of adradarAdvantages; track item) {
                    <li class="flex items-start gap-2.5">
                      <div class="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#4a9a42] to-[#1a4a18] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_2px_6px_-1px_rgba(26,74,24,0.25)]">
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <span class="text-[13px] text-[#1a4a18] leading-[1.5] font-medium">{{ item }}</span>
                    </li>
                  }
                </ul>

                <!-- Spacer -->
                <div class="flex-1"></div>

                <!-- Impact metrics strip -->
                <div class="bg-white/60 backdrop-blur-sm rounded-xl border border-[#acdfa4]/20 p-3.5 mb-4">
                  <p class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#4a9a42] mb-2.5">Impact when enabled</p>
                  <div class="grid grid-cols-3 gap-2">
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a4a18] tracking-[-0.02em] leading-none">20%</p>
                      <p class="text-[10px] text-[#6b7280] mt-1 leading-tight">Budget<br/>recovered</p>
                    </div>
                    <div class="text-center border-l border-r border-[#acdfa4]/20">
                      <p class="text-[20px] font-bold text-[#1a4a18] tracking-[-0.02em] leading-none">3x</p>
                      <p class="text-[10px] text-[#6b7280] mt-1 leading-tight">Bid<br/>efficiency</p>
                    </div>
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a4a18] tracking-[-0.02em] leading-none">0 hrs</p>
                      <p class="text-[10px] text-[#6b7280] mt-1 leading-tight">Manual<br/>reviews</p>
                    </div>
                  </div>
                </div>

                <!-- Bottom highlight strip -->
                <div class="flex items-center justify-between pt-3.5 border-t border-[#acdfa4]/15">
                  <div class="flex items-center gap-2.5">
                    <div class="flex -space-x-1.5">
                      <div class="w-5 h-5 rounded-full bg-[#b8dff0] ring-2 ring-[#edf8eb] overflow-hidden"><img src="/agents/Company Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                      <div class="w-5 h-5 rounded-full bg-[#a8d1dc] ring-2 ring-[#edf8eb] overflow-hidden"><img src="/agents/Impression Capping Agent.png" alt="" class="w-full h-full object-cover"/></div>
                      <div class="w-5 h-5 rounded-full bg-[#ee95a0] ring-2 ring-[#edf8eb] overflow-hidden"><img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                    </div>
                    <span class="text-[11px] text-[#4a9a42] font-medium">+6 agents</span>
                  </div>
                  <a href="#" class="text-[11px] font-semibold text-[#1a4a18] hover:text-[#4a9a42] transition-colors flex items-center gap-1">
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
         Scroll-driven sticky layout with right-side visualizations
         ═══════════════════════════════════════════ -->
    <section
      #howItWorksRef
      class="relative bg-white"
      style="height: 400vh"
    >
      <!-- Sticky container — offset for 70px navbar -->
      <div class="sticky top-[70px] h-[calc(100vh-70px)] overflow-hidden flex items-center">
        <!-- Subtle side accents -->
        <div class="absolute top-[20%] left-[-8%] w-[25%] h-[60%] bg-radial-[closest-side] from-[#acdfa4]/8 to-transparent blur-[80px] pointer-events-none -z-10"></div>
        <div class="absolute bottom-[20%] right-[-8%] w-[25%] h-[60%] bg-radial-[closest-side] from-[#4a9a42]/6 to-transparent blur-[80px] pointer-events-none -z-10"></div>

        <div class="w-full py-4 lg:py-6">
          <div class="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-20 w-full">
            <div class="flex gap-8 lg:gap-16 items-stretch">
              <!-- Left side: Badge + Heading + Steps timeline -->
              <div class="flex-1 min-w-0">
                <!-- Badge + Heading -->
                <div class="mb-4 lg:mb-8">
                  <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#4a9a42]">
                    How It Works
                  </span>
                  <h2 class="text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mt-1.5 lg:mt-2">
                    Monitor. Detect. Adjust. Repeat.<br class="hidden lg:block" />
                    <span class="section-gradient-text">Without manual intervention.</span>
                  </h2>
                </div>

                <!-- Timeline -->
                <div class="relative">
                  @for (step of steps; track step.number; let i = $index) {
                    <div class="flex gap-4 lg:gap-7">
                      <!-- Timeline column -->
                      <div class="flex flex-col items-center shrink-0 self-stretch">
                        <!-- Number circle -->
                        <div
                          class="w-9 h-9 lg:w-[46px] lg:h-[46px] rounded-full flex items-center justify-center shrink-0 transition-all duration-500"
                          [ngClass]="isStepActive(i)
                            ? 'bg-gradient-to-br from-[#4a9a42] to-[#1a4a18] shadow-[0_4px_14px_0_rgba(74,154,66,0.25)]'
                            : 'bg-[#acdfa4]/50'"
                        >
                          <span
                            class="text-xs lg:text-sm font-bold transition-colors duration-500"
                            [ngClass]="isStepActive(i) ? 'text-white' : 'text-[#1a4a18]/50'"
                          >
                            {{ step.number }}
                          </span>
                        </div>

                        <!-- Vertical line -->
                        @if (!isStepLast(i)) {
                          <div
                            class="w-[2.5px] flex-1 transition-colors duration-500"
                            [ngClass]="isStepActive(i) ? 'bg-[#4a9a42]' : 'bg-[#acdfa4]/30'"
                          ></div>
                        }
                      </div>

                      <!-- Content column -->
                      <div
                        class="flex-1 pt-1.5 lg:pt-2 transition-all duration-500"
                        [ngClass]="isStepLast(i) ? 'pb-0' : 'pb-2 lg:pb-4'"
                      >
                        <!-- Step label -->
                        <span
                          class="inline-block text-[11px] lg:text-[12px] font-semibold tracking-[0.06em] uppercase transition-opacity duration-500 mb-0.5 text-[#4a9a42]"
                          [ngClass]="isStepActive(i) ? 'opacity-100' : 'opacity-40'"
                        >
                          {{ step.label }}
                        </span>

                        <!-- Step title -->
                        <h3
                          class="text-[15px] lg:text-[18px] font-semibold tracking-[-0.01em] leading-snug transition-all duration-500 text-[#111827]"
                          [ngClass]="isStepActive(i) ? 'opacity-100' : 'opacity-40'"
                        >
                          {{ step.title }}
                        </h3>

                        <!-- Step description - animated expand/collapse -->
                        <div
                          class="overflow-hidden transition-all duration-500 ease-in-out"
                          [style.maxHeight]="isStepCurrent(i) ? '160px' : '0px'"
                          [style.opacity]="isStepCurrent(i) ? 1 : 0"
                          [style.marginTop]="isStepCurrent(i) ? '3px' : '0px'"
                        >
                          <p class="text-[13px] lg:text-[15px] text-[#4b5563] leading-[1.6] lg:leading-[1.65]">
                            {{ step.description }}
                          </p>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>

              <!-- Right side: Visual mockups for each step -->
              <div class="hidden md:flex md:w-[320px] lg:w-[420px] xl:w-[500px] shrink-0 items-center justify-center">
                <div class="bg-gradient-to-br from-[#edf8eb] to-[#d6f0d2] rounded-2xl lg:rounded-3xl overflow-hidden relative w-full h-full max-h-[calc(100vh-180px)]">

                  <!-- Step 1: Campaign Performance Dashboard -->
                  <div
                    class="absolute inset-0 p-5 lg:p-7 flex flex-col justify-center transition-all duration-700 ease-in-out"
                    [style.opacity]="activeStep() === 0 ? 1 : 0"
                    [style.transform]="activeStep() === 0 ? 'scale(1) translateY(0)' : activeStep() > 0 ? 'scale(0.95) translateY(-20px)' : 'scale(0.95) translateY(20px)'"
                  >
                    <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                      <div class="flex items-center gap-2 mb-4">
                        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#4a9a42] to-[#1a4a18] flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="8" width="3" height="6" rx="0.5" fill="white"/><rect x="6.5" y="5" width="3" height="9" rx="0.5" fill="white" opacity="0.7"/><rect x="11" y="2" width="3" height="12" rx="0.5" fill="white" opacity="0.4"/></svg>
                        </div>
                        <span class="text-[13px] font-semibold text-[#111827]">Campaign Performance</span>
                      </div>
                      <!-- Performance table -->
                      <div class="space-y-0">
                        <div class="grid grid-cols-4 gap-2 text-[10px] font-semibold text-[#6b7280] uppercase tracking-[0.04em] pb-2 border-b border-[#f3f4f6]">
                          <span>Campaign</span>
                          <span class="text-center">CPM</span>
                          <span class="text-center">Win Rate</span>
                          <span class="text-center">Delivery</span>
                        </div>
                        <div class="grid grid-cols-4 gap-2 py-2.5 border-b border-[#f3f4f6] items-center">
                          <span class="text-[11px] font-medium text-[#374151]">Enterprise ABM</span>
                          <span class="text-[11px] text-center text-[#ef4444] font-semibold">$48.20</span>
                          <span class="text-[11px] text-center text-[#4a9a42] font-semibold">72%</span>
                          <div class="flex justify-center"><div class="w-[40px] h-[5px] bg-[#f3f4f6] rounded-full overflow-hidden"><div class="h-full w-[85%] bg-[#4a9a42] rounded-full"></div></div></div>
                        </div>
                        <div class="grid grid-cols-4 gap-2 py-2.5 border-b border-[#f3f4f6] items-center">
                          <span class="text-[11px] font-medium text-[#374151]">Mid-Market</span>
                          <span class="text-[11px] text-center text-[#f59e0b] font-semibold">$32.50</span>
                          <span class="text-[11px] text-center text-[#f59e0b] font-semibold">45%</span>
                          <div class="flex justify-center"><div class="w-[40px] h-[5px] bg-[#f3f4f6] rounded-full overflow-hidden"><div class="h-full w-[55%] bg-[#f59e0b] rounded-full"></div></div></div>
                        </div>
                        <div class="grid grid-cols-4 gap-2 py-2.5 items-center">
                          <span class="text-[11px] font-medium text-[#374151]">SMB Retarget</span>
                          <span class="text-[11px] text-center text-[#4a9a42] font-semibold">$22.10</span>
                          <span class="text-[11px] text-center text-[#ef4444] font-semibold">28%</span>
                          <div class="flex justify-center"><div class="w-[40px] h-[5px] bg-[#f3f4f6] rounded-full overflow-hidden"><div class="h-full w-[30%] bg-[#ef4444] rounded-full"></div></div></div>
                        </div>
                      </div>
                      <div class="mt-3 flex items-center gap-2 text-[11px] text-[#4a9a42] font-medium">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1v6l4 2" stroke="#4a9a42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="8" r="6.5" stroke="#4a9a42" stroke-width="1.5"/></svg>
                        Monitoring 12 linked campaigns
                      </div>
                    </div>
                  </div>

                  <!-- Step 2: Pattern Detection -->
                  <div
                    class="absolute inset-0 p-5 lg:p-7 flex flex-col justify-center transition-all duration-700 ease-in-out"
                    [style.opacity]="activeStep() === 1 ? 1 : 0"
                    [style.transform]="activeStep() === 1 ? 'scale(1) translateY(0)' : activeStep() > 1 ? 'scale(0.95) translateY(-20px)' : 'scale(0.95) translateY(20px)'"
                  >
                    <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                      <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-2">
                          <div class="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse"></div>
                          <span class="text-[13px] font-semibold text-[#111827]">Pattern Detection</span>
                        </div>
                        <span class="text-[10px] text-[#6b7280] bg-[#f3f4f6] px-2 py-0.5 rounded-full">2 alerts</span>
                      </div>
                      <!-- Overbid alert -->
                      <div class="bg-[#fef2f2]/60 border border-[#fecaca] rounded-lg p-3 mb-3">
                        <div class="flex items-center gap-2 mb-1.5">
                          <div class="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 2l5 8H1l5-8z" stroke="#ef4444" stroke-width="1.2" fill="none"/><path d="M6 5.5v1.5" stroke="#ef4444" stroke-width="1.2" stroke-linecap="round"/><circle cx="6" cy="8.5" r="0.5" fill="#ef4444"/></svg>
                          </div>
                          <span class="text-[11px] font-semibold text-[#ef4444]">Overbid Detected</span>
                        </div>
                        <p class="text-[11px] text-[#374151] font-medium">Enterprise ABM — bid $48.20, clearing price $31.40</p>
                        <p class="text-[10px] text-[#6b7280] mt-1">Paying 54% premium on every impression</p>
                      </div>
                      <!-- Underbid warning -->
                      <div class="bg-[#fffbeb]/60 border border-[#fde68a]/40 rounded-lg p-3 mb-3">
                        <div class="flex items-center gap-2 mb-1.5">
                          <div class="w-5 h-5 rounded-full bg-[#fef3c7] flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4.5" stroke="#f59e0b" stroke-width="1.2" fill="none"/><path d="M6 4v2.5" stroke="#f59e0b" stroke-width="1.2" stroke-linecap="round"/><circle cx="6" cy="8.5" r="0.5" fill="#f59e0b"/></svg>
                          </div>
                          <span class="text-[11px] font-semibold text-[#f59e0b]">Underbid Warning</span>
                        </div>
                        <p class="text-[11px] text-[#374151] font-medium">SMB Retarget — win rate dropped to 28%</p>
                        <p class="text-[10px] text-[#6b7280] mt-1">Bid too low to compete — losing 72% of auctions</p>
                      </div>
                      <!-- Healthy campaign -->
                      <div class="bg-[#f0fdf4] border border-[#bbf7d0]/40 rounded-lg p-3">
                        <div class="flex items-center gap-2">
                          <div class="w-5 h-5 rounded-full bg-[#dcfce7] flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#22c55e" stroke-width="1.3" stroke-linecap="round"/></svg>
                          </div>
                          <div>
                            <span class="text-[11px] font-semibold text-[#22c55e]">Mid-Market</span>
                            <span class="text-[10px] text-[#6b7280] ml-2">Bid competitive — no action needed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Step 3: Recommendation Card -->
                  <div
                    class="absolute inset-0 p-5 lg:p-7 flex flex-col justify-center transition-all duration-700 ease-in-out"
                    [style.opacity]="activeStep() === 2 ? 1 : 0"
                    [style.transform]="activeStep() === 2 ? 'scale(1) translateY(0)' : activeStep() > 2 ? 'scale(0.95) translateY(-20px)' : 'scale(0.95) translateY(20px)'"
                  >
                    <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                      <div class="flex items-center gap-2 mb-4">
                        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#d6f0d2] to-[#acdfa4] flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2l2 4 4 .5-3 3 .5 4.5L8 12l-3.5 2 .5-4.5-3-3L6 6l2-4z" stroke="#1a4a18" stroke-width="1.2" fill="none"/></svg>
                        </div>
                        <span class="text-[13px] font-semibold text-[#111827]">Bid Recommendation</span>
                      </div>
                      <!-- Recommendation -->
                      <div class="bg-[#f0f9ee] border border-[#acdfa4]/30 rounded-lg p-3.5 mb-3">
                        <div class="flex items-center justify-between mb-2">
                          <span class="text-[12px] font-semibold text-[#1a4a18]">Enterprise ABM</span>
                          <span class="text-[9px] font-bold tracking-[0.04em] uppercase text-white bg-[#4a9a42] px-2 py-0.5 rounded-full">Reduce Bid</span>
                        </div>
                        <div class="flex items-center gap-3 mb-2.5">
                          <div class="text-center">
                            <p class="text-[10px] text-[#6b7280] mb-0.5">Current</p>
                            <p class="text-[16px] font-bold text-[#ef4444] line-through">$48.20</p>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8h8M9.5 5.5L12 8l-2.5 2.5" stroke="#4a9a42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                          <div class="text-center">
                            <p class="text-[10px] text-[#6b7280] mb-0.5">Suggested</p>
                            <p class="text-[16px] font-bold text-[#4a9a42]">$34.80</p>
                          </div>
                        </div>
                        <div class="bg-white/80 rounded-lg p-2.5 space-y-1.5">
                          <div class="flex items-center justify-between">
                            <span class="text-[10px] text-[#6b7280]">Expected CPM reduction</span>
                            <span class="text-[10px] font-semibold text-[#4a9a42]">-28%</span>
                          </div>
                          <div class="flex items-center justify-between">
                            <span class="text-[10px] text-[#6b7280]">Estimated win rate</span>
                            <span class="text-[10px] font-semibold text-[#4a9a42]">68% (from 72%)</span>
                          </div>
                          <div class="flex items-center justify-between">
                            <span class="text-[10px] text-[#6b7280]">Monthly savings</span>
                            <span class="text-[10px] font-bold text-[#1a4a18]">$2,140</span>
                          </div>
                        </div>
                      </div>
                      <p class="text-[10px] text-[#6b7280] flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#6b7280" stroke-width="1.2"/><path d="M8 5v3l2 1" stroke="#6b7280" stroke-width="1.2" stroke-linecap="round"/></svg>
                        Based on 14-day auction clearing price analysis
                      </p>
                    </div>
                  </div>

                  <!-- Step 4: Portfolio Efficiency -->
                  <div
                    class="absolute inset-0 p-5 lg:p-7 flex flex-col justify-center transition-all duration-700 ease-in-out"
                    [style.opacity]="activeStep() === 3 ? 1 : 0"
                    [style.transform]="activeStep() === 3 ? 'scale(1) translateY(0)' : activeStep() > 3 ? 'scale(0.95) translateY(-20px)' : 'scale(0.95) translateY(20px)'"
                  >
                    <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                      <div class="flex items-center gap-2 mb-3">
                        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#d6f0d2] to-[#acdfa4] flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M10 5l3 3-3 3" stroke="#1a4a18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <span class="text-[13px] font-semibold text-[#111827]">Portfolio Efficiency</span>
                      </div>
                      <!-- Efficiency bars -->
                      <div class="space-y-2.5">
                        <div>
                          <div class="flex items-center justify-between mb-1">
                            <span class="text-[11px] text-[#374151] font-medium">Enterprise ABM</span>
                            <span class="text-[11px] text-[#4a9a42] font-semibold">92%</span>
                          </div>
                          <div class="h-[6px] bg-[#f3f4f6] rounded-full overflow-hidden">
                            <div class="h-full w-[92%] bg-gradient-to-r from-[#4a9a42] to-[#6bc462] rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <div class="flex items-center justify-between mb-1">
                            <span class="text-[11px] text-[#374151] font-medium">Mid-Market</span>
                            <span class="text-[11px] text-[#4a9a42] font-semibold">87%</span>
                          </div>
                          <div class="h-[6px] bg-[#f3f4f6] rounded-full overflow-hidden">
                            <div class="h-full w-[87%] bg-gradient-to-r from-[#4a9a42] to-[#82c97a] rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <div class="flex items-center justify-between mb-1">
                            <span class="text-[11px] text-[#374151] font-medium">SMB Retarget</span>
                            <span class="text-[11px] text-[#4a9a42] font-semibold">78%</span>
                          </div>
                          <div class="h-[6px] bg-[#f3f4f6] rounded-full overflow-hidden">
                            <div class="h-full w-[78%] bg-gradient-to-r from-[#82c97a] to-[#acdfa4] rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <!-- Reallocation opportunity -->
                      <div class="mt-3 pt-3 border-t border-[#f3f4f6]">
                        <p class="text-[10px] font-semibold text-[#4a9a42] uppercase tracking-[0.04em] mb-2">Reallocation opportunity</p>
                        <div class="bg-[#f0f9ee] rounded-lg p-2.5 space-y-1.5">
                          <div class="flex items-center gap-2">
                            <div class="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center">
                              <span class="text-[8px] font-bold text-[#ef4444]">BA</span>
                            </div>
                            <span class="text-[11px] text-[#374151] flex-1">Brand Awareness</span>
                            <span class="text-[11px] font-semibold text-[#ef4444]">-$1,200</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <div class="w-5 h-5 rounded-full bg-[#d6f0d2] flex items-center justify-center">
                              <span class="text-[8px] font-bold text-[#1a4a18]">SR</span>
                            </div>
                            <span class="text-[11px] text-[#374151] flex-1">SMB Retarget</span>
                            <span class="text-[11px] font-semibold text-[#22c55e]">+$1,200</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Step 5: Approval Queue -->
                  <div
                    class="absolute inset-0 p-5 lg:p-7 flex flex-col justify-center transition-all duration-700 ease-in-out"
                    [style.opacity]="activeStep() === 4 ? 1 : 0"
                    [style.transform]="activeStep() === 4 ? 'scale(1) translateY(0)' : activeStep() > 4 ? 'scale(0.95) translateY(-20px)' : 'scale(0.95) translateY(20px)'"
                  >
                    <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                      <div class="flex items-center gap-2 mb-4">
                        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#4a9a42] to-[#1a4a18] flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8.5l3 3 5-6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <span class="text-[13px] font-semibold text-[#111827]">Human-in-the-loop</span>
                      </div>
                      <!-- Action log -->
                      <div class="space-y-2 mb-4">
                        <div class="flex items-start gap-2 bg-[#f0f9ee] rounded-lg p-2.5">
                          <div class="w-5 h-5 rounded-full bg-[#d6f0d2] flex items-center justify-center shrink-0 mt-0.5">
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#1a4a18" stroke-width="1.3" stroke-linecap="round"/></svg>
                          </div>
                          <div>
                            <p class="text-[11px] font-medium text-[#374151]">Reduced Enterprise ABM bid: $48.20 → $34.80</p>
                            <p class="text-[10px] text-[#6b7280]">3 min ago · Approved by you</p>
                          </div>
                        </div>
                        <div class="flex items-start gap-2 bg-[#f0f9ee] rounded-lg p-2.5">
                          <div class="w-5 h-5 rounded-full bg-[#d6f0d2] flex items-center justify-center shrink-0 mt-0.5">
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#1a4a18" stroke-width="1.3" stroke-linecap="round"/></svg>
                          </div>
                          <div>
                            <p class="text-[11px] font-medium text-[#374151]">Increased SMB Retarget bid: $18.50 → $24.20</p>
                            <p class="text-[10px] text-[#6b7280]">3 min ago · Approved by you</p>
                          </div>
                        </div>
                        <div class="flex items-start gap-2 bg-[#fffbeb] border border-[#fde68a]/40 rounded-lg p-2.5">
                          <div class="w-5 h-5 rounded-full bg-[#fef3c7] flex items-center justify-center shrink-0 mt-0.5">
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="8.5" r="0.5" fill="#f59e0b"/><path d="M6 3v4" stroke="#f59e0b" stroke-width="1.3" stroke-linecap="round"/></svg>
                          </div>
                          <div>
                            <p class="text-[11px] font-medium text-[#374151]">Switch Brand Awareness to Target Cost strategy</p>
                            <p class="text-[10px] text-[#6b7280]">Awaiting your approval</p>
                          </div>
                        </div>
                      </div>
                      <div class="flex gap-2">
                        <button class="flex-1 h-8 bg-gradient-to-r from-[#4a9a42] to-[#1a4a18] text-white text-[11px] font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-[0_2px_8px_-2px_rgba(26,74,24,0.3)]">
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="white" stroke-width="1.3" stroke-linecap="round"/></svg>
                          Approve
                        </button>
                        <button class="flex-1 h-8 bg-white border border-[#e5e7eb] text-[#374151] text-[11px] font-semibold rounded-lg">
                          Review
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 5: COMPARISON TABLE
         Visual side-by-side with agent branding
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#eaf6ea] via-[#f0f9ee] to-[#eaf6ea] pointer-events-none -z-10"></div>
      <div class="absolute top-[30%] left-[50%] -translate-x-1/2 w-[50%] h-[50%] bg-radial-[closest-side] from-[#4a9a42]/5 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-12">
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827]">
            What changes when bids are <span class="section-gradient-text">actively optimised.</span>
          </h2>
        </div>

        <!-- ═══ Desktop: Enhanced table ═══ -->
        <div class="hidden md:block">
          <div class="bg-white rounded-2xl border border-[#acdfa4]/30 overflow-hidden shadow-[0_4px_24px_-4px_rgba(74,154,66,0.1)]">

            <!-- Table Header — two distinct zones -->
            <div class="grid grid-cols-[1fr_1fr_1.15fr]">
              <!-- Capability header -->
              <div class="bg-[#f8faf8] p-5 border-b border-[#e5e7eb]/60">
                <span class="text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.04em]">Capability</span>
              </div>
              <!-- Without optimization header -->
              <div class="bg-[#f8faf8] p-5 border-b border-[#e5e7eb]/60 border-l border-l-[#e5e7eb]/40">
                <div class="flex items-center gap-2">
                  <div class="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.04em]">Without optimization</span>
                </div>
              </div>
              <!-- With AdRadar header — branded, highlighted -->
              <div class="bg-gradient-to-r from-[#1a4a18] to-[#245f22] p-5 border-b border-[#1a4a18]">
                <div class="flex items-center gap-3">
                  <!-- Agent avatar with adRadar ring -->
                  <div class="w-8 h-8 rounded-full bg-[#acdfa4] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0">
                    <img src="/agents/Bidding Optimization Agent.png" alt="Bidding Optimization Agent" class="w-full h-full object-cover rounded-full" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[13px] font-semibold text-white leading-tight">With AdRadar Optimization</span>
                    <span class="text-[10px] text-white/50 leading-tight">Bidding Optimization Agent</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Table Rows -->
            @for (row of comparisonRows; track row.capability; let i = $index; let even = $even) {
              <div
                class="group grid grid-cols-[1fr_1fr_1.15fr] border-t border-[#e5e7eb]/40 transition-colors duration-200 hover:bg-[#f6fbf5]/60"
              >
                <!-- Capability -->
                <div class="p-5 flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-[#f0f9ee] flex items-center justify-center shrink-0">
                    <!-- Row-specific icons -->
                    @switch (i) {
                      @case (0) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="#4a9a42" stroke-width="1.5"/><path d="M8 5v3h3" stroke="#4a9a42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                      @case (1) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 2L3 7v6l7 5 7-5V7l-7-5z" stroke="#4a9a42" stroke-width="1.5" stroke-linejoin="round" transform="translate(0, -1) scale(0.85)"/><path d="M5 9l3 3 5-5" stroke="#4a9a42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" transform="translate(-1, 1) scale(0.8)"/></svg>
                      }
                      @case (2) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12l4-8 4 8" stroke="#4a9a42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 9h5" stroke="#4a9a42" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (3) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="8" width="3" height="6" rx="0.5" fill="#4a9a42"/><rect x="6.5" y="5" width="3" height="9" rx="0.5" fill="#4a9a42" opacity="0.7"/><rect x="11" y="2" width="3" height="12" rx="0.5" fill="#4a9a42" opacity="0.4"/></svg>
                      }
                      @case (4) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="2" stroke="#4a9a42" stroke-width="1.5"/><path d="M6 8h4" stroke="#4a9a42" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (5) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M10 5l3 3-3 3" stroke="#4a9a42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                    }
                  </div>
                  <span class="text-[14px] font-semibold text-[#111827]">{{ row.capability }}</span>
                </div>

                <!-- Without optimization value -->
                <div class="p-5 flex items-center gap-2.5 border-l border-[#e5e7eb]/40">
                  <div class="w-[18px] h-[18px] rounded-full bg-[#fef2f2] flex items-center justify-center shrink-0">
                    <svg width="7" height="7" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[14px] text-[#9ca3af]">{{ row.without }}</span>
                </div>

                <!-- With AdRadar value — highlighted column -->
                <div class="p-5 flex items-center gap-2.5 bg-[#f0f9ee]/70 group-hover:bg-[#e5f5e2]/60 transition-colors border-l-2 border-l-[#4a9a42]/20">
                  <div class="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#4a9a42] to-[#1a4a18] flex items-center justify-center shrink-0 shadow-[0_1px_4px_-1px_rgba(26,74,24,0.3)]">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <span class="text-[14px] text-[#1a4a18] font-semibold">{{ row.withOptimization }}</span>
                </div>
              </div>
            }

          </div>
        </div>

        <!-- ═══ Mobile: Stacked cards ═══ -->
        <div class="md:hidden space-y-3">
          <!-- Mobile branded header card -->
          <div class="flex items-center gap-3 bg-gradient-to-r from-[#1a4a18] to-[#245f22] rounded-xl px-4 py-3">
            <div class="w-8 h-8 rounded-full bg-[#acdfa4] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0">
              <img src="/agents/Bidding Optimization Agent.png" alt="" class="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <span class="text-[13px] font-semibold text-white block leading-tight">AdRadar Bid Optimization</span>
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
                    <p class="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#9ca3af]">Without</p>
                  </div>
                  <p class="text-[13px] text-[#9ca3af]">{{ row.without }}</p>
                </div>
                <div class="p-4 bg-[#f0f9ee]/70 border-l-2 border-l-[#4a9a42]/20">
                  <div class="flex items-center gap-1.5 mb-2">
                    <div class="w-[14px] h-[14px] rounded-full bg-gradient-to-br from-[#4a9a42] to-[#1a4a18] flex items-center justify-center">
                      <svg width="6" height="6" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
                    </div>
                    <p class="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#4a9a42]">With AdRadar</p>
                  </div>
                  <p class="text-[13px] text-[#1a4a18] font-semibold">{{ row.withOptimization }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 6: RESULTS — Dark immersive showcase
         ═══════════════════════════════════════════ -->
    <section class="relative py-16 lg:py-22 overflow-hidden">
      <!-- Dark background -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#0f2e12] via-[#1a4a18] to-[#122d14] pointer-events-none -z-10"></div>
      <!-- Ambient glows -->
      <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-radial-[closest-side] from-[#4a9a42]/15 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-radial-[closest-side] from-[#6bc462]/10 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] bg-radial-[closest-side] from-[#acdfa4]/6 to-transparent blur-[120px] pointer-events-none -z-10"></div>
      <!-- Dot pattern overlay -->
      <div class="absolute inset-0 opacity-[0.04] pointer-events-none -z-10" style="background-image: radial-gradient(circle, #acdfa4 1px, transparent 1px); background-size: 28px 28px;"></div>

      <div class="max-w-[1200px] mx-auto px-6">

        <!-- Top: Badge + Heading row -->
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
          <div class="max-w-[600px]">
            <div class="flex items-center gap-2.5 mb-4">
              <div class="w-8 h-8 rounded-full bg-[#acdfa4] p-[2px] overflow-hidden">
                <img src="/agents/Bidding Optimization Agent.png" alt="" class="w-full h-full object-cover rounded-full" />
              </div>
              <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#acdfa4]">
                Proven Results
              </span>
            </div>
            <h2 class="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.08] tracking-[-0.025em] text-white">
              First 30 days. Same budget.<br class="hidden lg:block" />
              <span class="cta-gradient-text">Optimised outcomes.</span>
            </h2>
          </div>
          <p class="text-[15px] text-[#acdfa4]/70 leading-[1.65] max-w-[340px] lg:text-right">
            Measured across teams who activated Bidding Optimization on existing campaigns — no additional spend required.
          </p>
        </div>

        <!-- Results cards — staggered grid -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- ══ Card 1: 20% Avg Spend Recovered — Donut chart ══ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <!-- Glow border -->
            <div class="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#4a9a42]/30 via-[#acdfa4]/10 to-[#4a9a42]/30 opacity-50 group-hover:opacity-100 blur-[2px] transition-opacity duration-500"></div>
            <div class="relative bg-[#ffffff]/[0.06] backdrop-blur-md rounded-2xl border border-white/[0.08] p-6 lg:p-7 h-full group-hover:bg-[#ffffff]/[0.09] transition-colors duration-500">
              <div class="shimmer-sweep absolute inset-0 pointer-events-none z-10 rounded-2xl"></div>

              <!-- Before → After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#fca5a5] bg-[#ef4444]/20 px-2.5 py-1 rounded-full">Wasted</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#acdfa4" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#4ade80] bg-[#22c55e]/25 px-2.5 py-1 rounded-full">Recovered</span>
              </div>

              <!-- Donut chart visualization -->
              <div class="relative w-[140px] h-[140px] mx-auto mb-6">
                <svg class="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <!-- Background ring -->
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="12" />
                  <!-- Before: wasted faded red ring -->
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#ef4444" stroke-opacity="0.35" stroke-width="12"
                    stroke-dasharray="62.8 251.2" stroke-linecap="round" />
                  <!-- After: 20% recovered bright ring -->
                  <circle cx="60" cy="60" r="50" fill="none" stroke="url(#resultGrad1bo)" stroke-width="12"
                    stroke-dasharray="62.8 251.2" stroke-linecap="round" />
                  <defs>
                    <linearGradient id="resultGrad1bo" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#4ade80" />
                      <stop offset="100%" stop-color="#acdfa4" />
                    </linearGradient>
                  </defs>
                </svg>
                <!-- Center number -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-[36px] font-bold text-white tracking-[-0.03em]">20%</span>
                </div>
              </div>

              <h3 class="text-[18px] font-bold text-white mb-1.5 text-center">Avg spend recovered</h3>
              <p class="text-[13px] text-[#acdfa4]/80 text-center leading-[1.5]">
                Monthly budget recaptured from overbidding, redeployed to optimized campaigns
              </p>
            </div>
          </div>

          <!-- ══ Card 2: Real-time Bid Monitoring — Bar chart before/after ══ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#6bc462]/35 via-[#acdfa4]/15 to-[#6bc462]/35 opacity-50 group-hover:opacity-100 blur-[2px] transition-opacity duration-500"></div>
            <div class="relative bg-[#ffffff]/[0.08] backdrop-blur-md rounded-2xl border border-white/[0.10] p-6 lg:p-7 h-full group-hover:bg-[#ffffff]/[0.12] transition-colors duration-500">
              <div class="shimmer-sweep absolute inset-0 pointer-events-none z-10 rounded-2xl"></div>

              <!-- Before → After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#fca5a5] bg-[#ef4444]/20 px-2.5 py-1 rounded-full">Weekly</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#acdfa4" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#4ade80] bg-[#22c55e]/25 px-2.5 py-1 rounded-full">Real-time</span>
              </div>

              <!-- Bar chart visualization — before vs after -->
              <div class="flex items-end gap-3 justify-center h-[140px] mb-6 px-2">
                <!-- Before bar -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[35px] relative overflow-hidden bg-[#ef4444]/25 border border-[#ef4444]/30">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#ef4444]/40 to-[#ef4444]/15"></div>
                  </div>
                  <span class="text-[10px] text-white/50 font-medium">Weekly</span>
                </div>
                <!-- After bars — bright green bars showing continuous monitoring -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[120px] relative overflow-hidden bg-[#4a9a42]/30 border border-[#4ade80]/30">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1a4a18] via-[#4a9a42]/80 to-[#4ade80]/60"></div>
                  </div>
                  <span class="text-[10px] text-[#4ade80] font-semibold">Real-time</span>
                </div>
                <!-- Extra bars showing coverage -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[95px] relative overflow-hidden bg-[#4a9a42]/20 border border-[#6bc462]/25">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1a4a18]/80 via-[#4a9a42]/60 to-[#6bc462]/40"></div>
                  </div>
                  <span class="text-[10px] text-[#6bc462] font-medium">24/7</span>
                </div>
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[75px] relative overflow-hidden bg-[#4a9a42]/15 border border-[#acdfa4]/20">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1a4a18]/60 via-[#6bc462]/40 to-[#acdfa4]/30"></div>
                  </div>
                  <span class="text-[10px] text-[#acdfa4] font-medium">Auto</span>
                </div>
              </div>

              <!-- Big number -->
              <div class="text-center">
                <p class="text-[48px] font-bold text-white tracking-[-0.04em] leading-none mb-1.5">Real-time</p>
                <h3 class="text-[18px] font-bold text-white mb-1.5">Bid monitoring</h3>
                <p class="text-[13px] text-[#acdfa4]/80 leading-[1.5]">
                  vs. weekly manual review — auction patterns detected and surfaced as they emerge
                </p>
              </div>
            </div>
          </div>

          <!-- ══ Card 3: 0 hrs Manual Bid Management ══ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#4a9a42]/30 via-[#acdfa4]/10 to-[#4a9a42]/30 opacity-50 group-hover:opacity-100 blur-[2px] transition-opacity duration-500"></div>
            <div class="relative bg-[#ffffff]/[0.06] backdrop-blur-md rounded-2xl border border-white/[0.08] p-6 lg:p-7 h-full group-hover:bg-[#ffffff]/[0.09] transition-colors duration-500">
              <div class="shimmer-sweep absolute inset-0 pointer-events-none z-10 rounded-2xl"></div>

              <!-- Before → After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#fca5a5] bg-[#ef4444]/20 px-2.5 py-1 rounded-full">Manual</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#acdfa4" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#4ade80] bg-[#22c55e]/25 px-2.5 py-1 rounded-full">Automated</span>
              </div>

              <!-- Budget flow visualization -->
              <div class="relative mb-6 px-1">
                <!-- Total budget bar -->
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[11px] text-white/70 font-medium uppercase tracking-[0.04em]">Total campaigns monitored</span>
                    <span class="text-[12px] text-white/80 font-semibold">All</span>
                  </div>
                  <div class="h-[12px] bg-white/[0.08] rounded-full overflow-hidden border border-white/[0.10]">
                    <div class="h-full w-full bg-gradient-to-r from-[#4a9a42] to-[#6bc462]/70 rounded-full"></div>
                  </div>
                </div>
                <!-- Manual hours -->
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[11px] text-[#4ade80] font-semibold uppercase tracking-[0.04em]">Manual review hours</span>
                    <span class="text-[12px] text-[#4ade80] font-bold">0 hrs/week</span>
                  </div>
                  <div class="h-[12px] bg-white/[0.08] rounded-full overflow-hidden border border-[#22c55e]/25">
                    <div class="h-full w-[2%] bg-gradient-to-r from-[#22c55e] to-[#4ade80] rounded-full"></div>
                  </div>
                </div>
                <!-- Arrow showing automation -->
                <div class="flex items-center gap-2 mt-4 bg-[#22c55e]/10 border border-[#22c55e]/15 rounded-lg px-3 py-2.5">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8h8M9.5 5.5L12 8l-2.5 2.5" stroke="#4ade80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span class="text-[11px] text-[#4ade80] font-medium">Agent handles all monitoring automatically</span>
                </div>
              </div>

              <div class="text-center">
                <p class="text-[48px] font-bold text-white tracking-[-0.04em] leading-none mb-1.5">0 hrs</p>
                <h3 class="text-[18px] font-bold text-white mb-1.5">Manual bid management</h3>
                <p class="text-[13px] text-[#acdfa4]/60 leading-[1.5]">
                  Agent handles continuous monitoring across all campaigns — no weekly review overhead
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom trust line -->
        <div class="flex items-center justify-center gap-3 mt-10 lg:mt-14">
          <div class="w-[1px] h-4 bg-gradient-to-b from-transparent to-[#acdfa4]/30"></div>
          <p class="text-[13px] text-[#acdfa4]/40 text-center">
            Results measured across active campaigns within 30 days of enabling Bidding Optimization Agent
          </p>
          <div class="w-[1px] h-4 bg-gradient-to-b from-transparent to-[#acdfa4]/30"></div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 7: RELATED AGENTS — 6 agents, themed cards
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#f5fbf4] via-[#f8faf8] to-white pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[50%] bg-radial-[closest-side] from-[#acdfa4]/8 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-10">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#4a9a42] mb-4 block">
            Connected Intelligence
          </span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
            Bid optimization is one layer.
            <br class="hidden md:block" />
            Six agents <span class="section-gradient-text">work together.</span>
          </h2>
          <p class="text-[15px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[720px] mx-0 md:mx-auto">
            The Bidding Optimization Agent shares context and memory with every other AdRadar agent —
            so bid decisions inform impression distribution, creative rotation, spend pacing, and competitor
            intelligence simultaneously.
          </p>
        </div>

        <!-- Agent Cards — 3-column grid -->
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
                <p class="text-[13px] text-[#6b7280] leading-[1.55] mb-4 flex-1">
                  {{ agent.description }}
                </p>

                <!-- Bottom: Connection line + arrow -->
                <div class="flex items-center justify-between pt-3 border-t transition-colors duration-300"
                  [style.borderColor]="agent.accentColor + '20'">
                  <!-- Connection to Bidding Optimization badge -->
                  <div class="flex items-center gap-1.5">
                    <div class="w-4 h-4 rounded-full bg-[#acdfa4] overflow-hidden shrink-0">
                      <img src="/agents/Bidding Optimization Agent.png" alt="" class="w-full h-full object-cover" />
                    </div>
                    <div class="w-5 h-[1.5px] rounded-full"
                      [style.background]="'linear-gradient(90deg, #acdfa4, ' + agent.accentColor + ')'">
                    </div>
                    <div class="w-4 h-4 rounded-full overflow-hidden shrink-0"
                      [style.backgroundColor]="agent.avatarBg">
                      <img [src]="agent.image" alt="" class="w-full h-full object-cover" />
                    </div>
                    <span class="text-[10px] text-[#9ca3af] font-medium ml-0.5">Synced</span>
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

    <!-- ═══════════════════════════════════════════
         SECTION 8: FINAL CTA
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <!-- Full-bleed ambient background image -->
      <div class="absolute inset-0 pointer-events-none">
        <img
          src="/images/cta-bg-2.png"
          alt=""
          class="object-cover scale-125 absolute inset-0 w-full h-full"
          aria-hidden="true"
        />
      </div>

      <div class="relative max-w-[960px] mx-auto px-6">
        <div class="relative rounded-[28px] lg:rounded-[32px] overflow-clip">
          <!-- CTA Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-[#1a4a18] via-[#1e5c1c] to-[#245f22]"></div>
          <!-- Ambient glow effects -->
          <div class="absolute top-[-20%] right-[-10%] w-[50%] h-[60%] bg-radial-[closest-side] from-[#4a9a42]/30 to-transparent blur-[60px] pointer-events-none"></div>
          <div class="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] bg-radial-[closest-side] from-[#acdfa4]/20 to-transparent blur-[60px] pointer-events-none"></div>
          <!-- Dot pattern -->
          <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 24px 24px;"></div>

          <div class="relative px-8 md:px-12 lg:px-16 py-16 lg:py-20 text-center">
            <!-- Agent avatar with glow -->
            <div class="relative w-20 h-20 mx-auto mb-8">
              <div class="absolute -inset-3 rounded-full bg-[#4a9a42]/20 blur-[12px] animate-[pulse-ring_3s_ease-in-out_infinite]"></div>
              <div class="relative w-full h-full rounded-full bg-gradient-to-br from-[#c8eec2] to-[#acdfa4] p-[2px] shadow-[0_8px_30px_-6px_rgba(172,223,164,0.5)]">
                <div class="w-full h-full rounded-full overflow-hidden bg-[#acdfa4]">
                  <img src="/agents/Bidding Optimization Agent.png" alt="" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-4">
              Stop leaving budget on the table.
              <br class="hidden md:block" />
              <span class="cta-gradient-text">Optimise every bid.</span>
            </h2>
            <p class="text-[17px] text-[#acdfa4] leading-[1.65] max-w-[520px] mx-auto mb-10">
              Connect your LinkedIn Ads account in 2 minutes. The Bidding Optimization Agent
              starts monitoring immediately. No credit card required.
            </p>

            <!-- CTAs -->
            <div class="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#"
                class="group inline-flex items-center gap-3 bg-white hover:bg-[#f0f9ee] text-[#1a4a18] rounded-full pl-6 pr-1.5 py-1.5 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(255,255,255,0.3)] hover:scale-[1.03]"
              >
                <span class="text-[15px] font-semibold">Start free trial</span>
                <div class="w-9 h-9 bg-[#1a4a18] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-15deg]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3l4 4-4 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </a>
              <a
                href="#"
                class="h-12 px-8 flex items-center justify-center border border-white/30 rounded-full text-[15px] font-medium text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Book a Demo
              </a>
            </div>

            <!-- Trust text -->
            <div class="flex items-center justify-center gap-2 text-[13px] font-medium text-[#acdfa4]/80 mt-6">
              <span>No credit card required</span>
              <span class="text-white/20 font-bold px-1">&bull;</span>
              <span>Setup in under 2 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }

    /* ═══ Hero gradient text ═══ */
    .hero-gradient-text {
      background: linear-gradient(135deg, #1a4a18 0%, #4a9a42 50%, #1a4a18 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ═══ Section gradient text ═══ */
    .section-gradient-text {
      background: linear-gradient(135deg, #1a4a18 0%, #4a9a42 60%, #6bc462 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ═══ CTA gradient text ═══ */
    .cta-gradient-text {
      background: linear-gradient(58deg, #acdfa4 0%, #d6f0d2 50%, #ffffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ═══ Orbiting agents float ═══ */
    .orbit-agent {
      animation: agent-float 4s ease-in-out infinite;
    }

    @keyframes agent-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    /* ═══ Orbit ring slow rotation ═══ */
    .orbit-ring {
      animation: orbit-rotate 30s linear infinite;
    }
    @keyframes orbit-rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    /* ═══ Pulse glow ring ═══ */
    @keyframes pulse-ring {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.15); opacity: 0.2; }
    }

    /* ═══ Glow pulse ═══ */
    @keyframes glow-pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 1; }
    }

    /* ═══ Stat card hover lift ═══ */
    .stat-card {
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease;
    }
    .stat-card:hover {
      transform: translateY(-6px);
    }
    .stat-card:hover .shimmer-sweep::after {
      animation: shimmer-sweep 1s ease-in-out forwards;
    }

    /* ═══ Shimmer sweep effect ═══ */
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
        rgba(172, 223, 164, 0.06),
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

    /* ═══ Donut chart fill animation ═══ */
    .donut-fill {
      stroke-dashoffset: 271.4;
      animation: donut-draw 1.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
    }
    @keyframes donut-draw {
      to { stroke-dashoffset: 54.3; }
    }

    /* ═══ Budget bar animation ═══ */
    .budget-bar {
      width: 0% !important;
      animation: bar-grow 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
    }
    @keyframes bar-grow {
      to { width: 80% !important; }
    }

    /* ═══ Agent card hover ═══ */
    .agent-card {
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .agent-card:hover {
      transform: translateY(-3px);
    }

    /* ═══ Result stat ═══ */
    .result-stat {
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    /* ═══ Agent pulse ring ═══ */
    @keyframes agent-pulse {
      0%, 100% { transform: scale(1); opacity: 0; }
      50% { transform: scale(1.6); opacity: 0.6; }
    }

    /* ═══ Connected agent card ═══ */
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
export class BiddingOptimizationComponent implements OnInit, OnDestroy {
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
    'Static bids set at launch, reviewed infrequently',
    'Generic suggested ranges — not campaign-specific',
    'No detection of overbidding or underdelivery patterns',
    'Bid strategy selection left to operator judgement',
    'Optimisation is weekly at best — reactive',
    'No cross-campaign bid coordination',
  ];

  adradarAdvantages = [
    'Continuous bid monitoring across linked campaigns',
    'Campaign-specific optimisation based on delivery history',
    'Overbid and underdelivery patterns detected automatically',
    'Bid strategy recommendations backed by performance data',
    'Real-time adjustments — no manual reviews',
    'Cross-campaign budget coordination for maximum efficiency',
  ];

  steps = [
    {
      number: '01',
      label: 'Link',
      title: 'Agent monitors auction performance across all linked campaigns',
      description:
        'From the moment campaigns are linked, the agent tracks CPM trends, win rate patterns, delivery pacing, cost-per-click trajectory, and bid competitiveness against the auction clearing price.',
    },
    {
      number: '02',
      label: 'Detect',
      title: 'Overbidding and underdelivery patterns are detected in real time',
      description:
        'The agent identifies when bids are consistently above the auction clearing price — paying a premium for impressions that didn\'t require it — and when bids are too low to compete effectively.',
    },
    {
      number: '03',
      label: 'Recommend',
      title: 'Bid adjustment recommendations are surfaced with context',
      description:
        'When there is a bid optimization opportunity, the agent surfaces precise recommendations: which campaign, which bid lever, what adjustment direction, avg impact on CPM and delivery.',
    },
    {
      number: '04',
      label: 'Track',
      title: 'Budget efficiency is tracked across the full campaign portfolio',
      description:
        'Track bid efficiency at portfolio level — identify where budget is working hardest and where it\'s absorbed by auction overhead. Cross-campaign reallocation opportunities are surfaced.',
    },
    {
      number: '05',
      label: 'Approve',
      title: 'You approve every adjustment. Always.',
      description:
        'The agent recommends — it never adjusts bids without your approval. Every suggestion includes the rationale, the expected outcome, and the campaign context. Human-in-the-loop by design.',
    },
  ];

  comparisonRows: ComparisonRow[] = [
    {
      capability: 'Bid review frequency',
      without: 'Weekly at best — reactive',
      withOptimization: 'Continuous, real-time monitoring',
    },
    {
      capability: 'Overbid detection',
      without: 'Invisible until CPM trend is obvious',
      withOptimization: 'Flagged as soon as pattern emerges',
    },
    {
      capability: 'Underdelivery diagnosis',
      without: 'Assumed to be low demand',
      withOptimization: 'Identified as bid competitiveness issue',
    },
    {
      capability: 'Bid strategy fit',
      without: 'Set at launch, rarely revisited',
      withOptimization: 'Evaluated against live delivery data',
    },
    {
      capability: 'Cross-campaign efficiency',
      without: 'Managed in silos',
      withOptimization: 'Coordinated across full portfolio',
    },
    {
      capability: 'Recovered budget visibility',
      without: 'Not tracked or surfaced',
      withOptimization: 'Identified and reallocation recommended',
    },
  ];

  relatedAgents: RelatedAgent[] = [
    {
      name: 'Company Blocking Agent',
      image: '/agents/Company Blocking Agent.png',
      avatarBg: '#b8dff0',
      description:
        'Blocks non-ICP companies entirely — bid savings are amplified when irrelevant accounts are removed from the auction.',
      accentColor: '#4a9cc5',
      route: '/agents/bidding-optimization',
    },
    {
      name: 'Impression Capping Agent',
      image: '/agents/Impression Capping Agent.png',
      avatarBg: '#a8d1dc',
      description:
        'Controls account-level impression frequency — optimised bids deliver more value when impressions are evenly distributed.',
      accentColor: '#3a97ab',
      route: '/agents/impression-capping',
    },
    {
      name: 'Title Blocking Agent',
      image: '/agents/Title Blocking Agent.png',
      avatarBg: '#ee95a0',
      description:
        'Removes irrelevant job titles from impressions — every bid-optimised impression reaches the right decision-maker.',
      accentColor: '#d4606f',
      route: '/agents/bidding-optimization',
    },
    {
      name: 'Ad Rotation Agent',
      image: '/agents/Ad Rotation Agent.png',
      avatarBg: '#d9e1fb',
      description:
        'Detects creative fatigue before CTR drops — optimised bids paired with fresh creative maximise every impression.',
      accentColor: '#6b5ea0',
      route: '/agents/bidding-optimization',
    },
    {
      name: 'Campaign Scheduling Agent',
      image: '/agents/Campaign Scheduling Agent.png',
      avatarBg: '#fbf5df',
      description:
        'Pauses campaigns during low-conversion windows — bid savings compound when delivery is timed to peak engagement.',
      accentColor: '#c5a030',
      route: '/agents/bidding-optimization',
    },
    {
      name: 'Analyse Competitors',
      image: '/agents/Analyse competitors LinkedIn Ads.png',
      avatarBg: '#acdfa4',
      description:
        'Tracks competitor ad presence across your target list — bid adjustments factor in competitive auction pressure.',
      accentColor: '#4a9a42',
      route: '/agents/bidding-optimization',
    },
  ];
}
