import { Component, ChangeDetectorRef, ElementRef, AfterViewInit, OnDestroy, OnInit, ViewChild, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { CtaSectionComponent } from '../../../components/cta-section/cta-section.component';

interface ComparisonRow {
  capability: string;
  without: string;
  withCapping: string;
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
  selector: 'app-impression-capping',
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
      <div class="absolute top-[-15%] right-[-10%] w-[60%] h-[70%] bg-radial-[closest-side] from-[#e8573a]/15 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[0%] left-[-15%] w-[50%] h-[60%] bg-radial-[closest-side] from-[#f5a896]/20 to-transparent blur-[80px] pointer-events-none -z-10"></div>
      <div class="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-radial-[closest-side] from-[#1a1a2e]/5 to-transparent blur-[120px] pointer-events-none -z-10"></div>
      <!-- Subtle dot pattern overlay -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" style="background-image: radial-gradient(circle, #1a1a2e 1px, transparent 1px); background-size: 32px 32px;"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <!-- Left: Text content -->
          <div class="flex-1 text-left">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2.5 bg-[#fef6f3]/80 backdrop-blur-sm border border-[#f5a896]/40 rounded-full px-4 py-1.5 mb-6 shadow-[0_2px_12px_-4px_rgba(232,87,58,0.1)]">
              <div class="w-6 h-6 rounded-full overflow-hidden bg-[#f5a896] ring-2 ring-white/60">
                <img src="/agents/Impression Capping Agent.png" alt="" class="w-full h-full object-cover" />
              </div>
              <span class="text-[11px] font-bold tracking-[0.08em] text-[#1a1a2e] uppercase">
                Impression Capping Agent
              </span>
            </div>

            <!-- Heading -->
            <h1 class="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em] text-[#111827] mb-6">
              Don't Depend on LinkedIn's algorithm to decide
              <span class="hero-gradient-text">who sees your ads.</span>
            </h1>

            <!-- Subheading -->
            <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-[540px] mb-8">
              Enforce account-level impression limits across your entire target list, automatically
              redistributing budget to under-served accounts the moment any company hits its cap.
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
                class="h-12 px-8 flex items-center justify-center border border-[#f5a896] rounded-full text-[15px] font-medium text-[#1a1a2e] hover:bg-[#fef6f3]/50 hover:border-[#e8573a]/50 transition-all duration-300"
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
              <div class="absolute -inset-10 bg-radial-[closest-side] from-[#a8d1dc]/20 to-transparent blur-[40px] pointer-events-none"></div>

              <!-- Orbit rings -->
              <div class="absolute inset-[46px] rounded-full border border-dashed border-[#a8d1dc]/20"></div>
              <div class="absolute inset-[90px] rounded-full border border-[#a8d1dc]/8"></div>

              <!-- Subtle rotating ring -->
              <div class="absolute inset-[44px] rounded-full border border-[#3a97ab]/5 orbit-ring"></div>

              <!-- Connecting lines -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 420">
                <line x1="210" y1="210" x2="210" y2="46" stroke="url(#line-grad)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="128" stroke="url(#line-grad)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="292" stroke="url(#line-grad)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="210" y2="374" stroke="url(#line-grad)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="292" stroke="url(#line-grad)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="128" stroke="url(#line-grad)" stroke-width="1" opacity="0.15"/>
                <defs>
                  <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#a8d1dc" stop-opacity="0.6"/>
                    <stop offset="100%" stop-color="#a8d1dc" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>

              <!-- ══════ CENTER: Impression Capping Agent ══════ -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div class="absolute inset-[-32px] rounded-full bg-[#a8d1dc]/6 animate-[pulse-ring_3s_ease-in-out_infinite]"></div>
                <div class="absolute inset-[-22px] rounded-full bg-[#a8d1dc]/10 animate-[pulse-ring_3s_ease-in-out_infinite_0.5s]"></div>
                <div class="absolute inset-[-12px] rounded-full bg-gradient-to-br from-[#a8d1dc]/20 to-[#3a97ab]/12"></div>
                <div class="relative w-[110px] h-[110px] rounded-full bg-gradient-to-br from-[#c8e5ed] to-[#a8d1dc] p-[3px] shadow-[0_8px_40px_-4px_rgba(58,151,171,0.35)]">
                  <div class="w-full h-full rounded-full bg-gradient-to-br from-[#e5f7fa] to-[#b5d7e2] overflow-hidden">
                    <img src="/agents/Impression Capping Agent.png" alt="Impression Capping Agent" class="w-full h-full object-cover" />
                  </div>
                </div>
                <div class="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1a1a2e] text-white text-[10px] font-bold tracking-[0.05em] uppercase px-3 py-1 rounded-full shadow-[0_4px_12px_-2px_rgba(26,26,46,0.3)]">
                  Impression Capping
                </div>
              </div>

              <!-- ══════ ORBITING AGENTS ══════ -->
              <div class="absolute top-[16px] left-1/2 -translate-x-1/2 z-10 orbit-agent" style="animation-delay: 0s">
                <div class="w-[60px] h-[60px] rounded-full p-[2px] bg-gradient-to-br from-[#b8dff0]/60 to-[#9dcce7]/40 shadow-[0_4px_16px_-4px_rgba(157,204,231,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#e3f3fa] overflow-hidden">
                    <img src="/agents/Company Blocking Agent.png" alt="Company Blocking" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div class="absolute top-[98px] right-[38px] z-10 orbit-agent" style="animation-delay: 0.4s">
                <div class="w-[56px] h-[56px] rounded-full p-[2px] bg-gradient-to-br from-[#ee95a0]/50 to-[#f4e0e9]/40 shadow-[0_4px_16px_-4px_rgba(238,149,160,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#fbf2f5] overflow-hidden">
                    <img src="/agents/Title Blocking Agent.png" alt="Title Blocking" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div class="absolute bottom-[98px] right-[38px] z-10 orbit-agent" style="animation-delay: 0.8s">
                <div class="w-[54px] h-[54px] rounded-full p-[2px] bg-gradient-to-br from-[#acdfa4]/50 to-[#82c97a]/30 shadow-[0_4px_16px_-4px_rgba(130,201,122,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#edf8eb] overflow-hidden">
                    <img src="/agents/Bidding Optimization Agent.png" alt="Bidding Optimization" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-10 orbit-agent" style="animation-delay: 1.2s">
                <div class="w-[58px] h-[58px] rounded-full p-[2px] bg-gradient-to-br from-[#f0d48a]/50 to-[#fdecc8]/40 shadow-[0_4px_16px_-4px_rgba(240,212,138,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#fffbe3] overflow-hidden">
                    <img src="/agents/Campaign Scheduling Agent.png" alt="Campaign Scheduling" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div class="absolute bottom-[98px] left-[38px] z-10 orbit-agent" style="animation-delay: 1.6s">
                <div class="w-[54px] h-[54px] rounded-full p-[2px] bg-gradient-to-br from-[#c8b4e0]/50 to-[#d9e1fb]/40 shadow-[0_4px_16px_-4px_rgba(200,180,224,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#f7f3f8] overflow-hidden">
                    <img src="/agents/Ad Rotation Agent.png" alt="Ad Rotation" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
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
         SECTION 2: PROBLEM STATS — Minimal
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-white via-[#fef9f7] to-[#fef3ef] pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-10">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">The Problem</span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
            Did you know 80% of your LinkedIn budget goes to
            <br class="hidden md:block" />
            <span class="section-gradient-text">10% of your target accounts?</span>
          </h2>
          <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[680px] mx-0 md:mx-auto">
            You've built a precise target account list. Carefully selected with clear ICP.
            You set your budget, hit launch, and let it run for three weeks. But...
          </p>
        </div>

        <!-- Stats -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- Card 1: 80% -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">80%</span>
                <div class="w-10 h-10 rounded-xl bg-[#fef6f3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L2 18h16L10 2z" stroke="#ff6b35" stroke-width="1.5" fill="none"/>
                    <path d="M10 8v4" stroke="#ff6b35" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="10" cy="14.5" r="0.75" fill="#ff6b35"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                of impressions go to just 10% of your target accounts
              </p>
              <p class="text-[13px] text-[#4b5563] leading-[1.55]">
                Documented across hundreds of ABM campaigns analysed.
              </p>
            </div>
          </div>

          <!-- Card 2: 50-60% -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">50–60%</span>
                <div class="w-10 h-10 rounded-xl bg-[#fef6f3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7" stroke="#ff6b35" stroke-width="1.5" fill="none"/>
                    <path d="M10 6v4h3" stroke="#ff6b35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                of target accounts receive fewer than 3 impressions per day
              </p>
              <p class="text-[13px] text-[#4b5563] leading-[1.55]">
                Strategic accounts get zero buying signal from your ad spends.
              </p>
            </div>
          </div>

          <!-- Card 3: 20-40% -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">20–40%</span>
                <div class="w-10 h-10 rounded-xl bg-[#fef6f3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="11" width="3.5" height="6" rx="1" fill="#ff6b35"/>
                    <rect x="8.25" y="7" width="3.5" height="10" rx="1" fill="#ff6b35" opacity="0.6"/>
                    <rect x="13.5" y="3" width="3.5" height="14" rx="1" fill="#ff6b35" opacity="0.35"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                of monthly budget consumed by a single large enterprise account
              </p>
              <p class="text-[13px] text-[#4b5563] leading-[1.55]">
                Because they have more employees on LinkedIn, not because they're a priority.
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
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef3ef] via-[#fef7f4] to-white pointer-events-none -z-10"></div>
      <!-- Ambient glows -->
      <div class="absolute top-[20%] right-[5%] w-[35%] h-[50%] bg-radial-[closest-side] from-[#e8573a]/8 to-transparent blur-[80px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[10%] left-[10%] w-[30%] h-[40%] bg-radial-[closest-side] from-[#1a1a2e]/5 to-transparent blur-[80px] pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">

          <!-- ══ LEFT COLUMN (60%): Heading + description + stats ══ -->
          <div class="lg:w-[58%] flex flex-col">
            <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
              The Gap
            </span>
            <h2 class="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.08] tracking-[-0.025em] text-[#111827] mb-5">
              LinkedIn does individual-level capping.
              ABM needs <span class="section-gradient-text">Account-level.</span>
            </h2>
            <p class="text-[16px] text-[#4b5563] leading-[1.7] mb-8 max-w-[540px]">
              Lead Generation, Conversion, and Website Visit campaigns, the ones consuming most of your
              budget, are excluded entirely. Capping individuals doesn't prevent one enterprise company
              with 12,000 employees from consuming 40% of your monthly budget.
            </p>

            <!-- Before / After transformation card -->
            <div class="hidden lg:flex flex-col flex-1 bg-gradient-to-br from-[#fef9f7] to-[#fef6f3]/80 rounded-2xl border border-[#f5a896]/25 p-6 mt-2">

              <!-- Before: Without capping -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#fef2f2] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[12px] font-semibold text-[#4b5563] uppercase tracking-[0.04em]">Without capping</span>
                </div>
                <!-- Bar visualization: concentrated spend on few accounts -->
                <div class="flex gap-[3px] items-end h-[44px]">
                  <div class="flex-1 bg-[#ef4444]/20 rounded-[3px] h-full"></div>
                  <div class="flex-1 bg-[#ef4444]/16 rounded-[3px] h-[88%]"></div>
                  <div class="flex-1 bg-[#ef4444]/10 rounded-[3px] h-[52%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/70 rounded-[3px] h-[22%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/60 rounded-[3px] h-[16%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/50 rounded-[3px] h-[12%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/45 rounded-[3px] h-[10%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/40 rounded-[3px] h-[8%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/35 rounded-[3px] h-[7%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/30 rounded-[3px] h-[6%]"></div>
                </div>
                <div class="flex items-center justify-between mt-1.5">
                  <span class="text-[10px] text-[#ef4444]/60 font-medium">Top 10% accounts</span>
                  <span class="text-[10px] text-[#9ca3af]">Remaining 90%</span>
                </div>
              </div>

              <!-- Divider with arrow -->
              <div class="flex items-center gap-3 my-3">
                <div class="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#f5a896]/40"></div>
                <div class="w-7 h-7 rounded-full bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center shadow-[0_2px_8px_-2px_rgba(26,26,46,0.3)]">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M4 8l3 3 3-3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#f5a896]/40"></div>
              </div>

              <!-- After: With capping -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#ffe8df] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="#1a1a2e" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <span class="text-[12px] font-semibold text-[#1a1a2e] uppercase tracking-[0.04em]">With adRadar capping</span>
                </div>
                <!-- Bar visualization: even distribution -->
                <div class="flex gap-[3px] items-end h-[44px]">
                  <div class="flex-1 bg-gradient-to-t from-[#1a1a2e] to-[#e8573a] rounded-[3px] h-[78%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#1a1a2e] to-[#e8573a] rounded-[3px] h-[74%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#1a1a2e]/90 to-[#e8573a] rounded-[3px] h-[70%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#ff6b35] rounded-[3px] h-[66%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#ff6b35] rounded-[3px] h-[63%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#ff6b35] rounded-[3px] h-[60%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#ff6b35] to-[#f5a896] rounded-[3px] h-[56%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#ff6b35] to-[#f5a896] rounded-[3px] h-[52%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#f5a896] to-[#ffe8df] rounded-[3px] h-[48%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#f5a896] to-[#ffe8df] rounded-[3px] h-[44%]"></div>
                </div>
                <div class="flex items-center justify-between mt-1.5">
                  <span class="text-[10px] text-[#e8573a] font-medium">Capped accounts</span>
                  <span class="text-[10px] text-[#e8573a]">Budget redistributed</span>
                </div>
              </div>

              <!-- Flex spacer to push stats to bottom -->
              <div class="flex-1"></div>

              <!-- Stats row -->
              <div class="grid grid-cols-3 gap-3 pt-4 border-t border-[#f5a896]/20">
                <div>
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">8x</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Even distribution</p>
                </div>
                <div class="text-center">
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">84%</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Accounts reached</p>
                </div>
                <div class="text-right">
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">22%</p>
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
                      <h3 class="text-[14px] font-semibold text-[#374151] leading-tight">LinkedIn frequency cap</h3>
                      <p class="text-[11px] text-[#9ca3af] mt-0.5">Individual-level only</p>
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
              <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#e5e7eb] via-[#f5a896] to-[#e8573a]"></div>
              <div class="relative bg-gradient-to-br from-[#1a1a2e] to-[#e8573a] text-white text-[10px] font-bold tracking-[0.06em] uppercase px-4 py-2 rounded-full shadow-[0_4px_20px_-4px_rgba(26,26,46,0.35)] flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M4 9l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Upgrade to
              </div>
            </div>

            <!-- adRadar Card — premium, elevated, "new way" feel -->
            <div class="group relative rounded-2xl flex-1 transition-all duration-300">
              <div class="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#e8573a]/25 via-[#f5a896]/15 to-[#e8573a]/25 opacity-60 group-hover:opacity-100 blur-[3px] transition-opacity duration-500"></div>
              <div class="relative bg-gradient-to-br from-[#fef9f7] via-[#fdeee9] to-[#fde3da] rounded-2xl border-2 border-[#f5a896] p-5 lg:p-6 shadow-[0_8px_30px_-8px_rgba(232,87,58,0.15)] group-hover:shadow-[0_16px_50px_-12px_rgba(232,87,58,0.22)] flex flex-col h-full">
                <div class="shimmer-sweep absolute inset-0 pointer-events-none z-10 rounded-2xl"></div>

                <!-- Header -->
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-[#fdd5c8] to-[#f5a896] p-[2px] shadow-[0_4px_12px_-2px_rgba(232,87,58,0.3)]">
                      <div class="w-full h-full rounded-full bg-[#f5a896] overflow-hidden">
                        <img src="/agents/Impression Capping Agent.png" alt="" class="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 class="text-[14px] font-bold text-[#1a1a2e] leading-tight">adRadar Impression Capping</h3>
                      <p class="text-[11px] text-[#e8573a] mt-0.5">Account-level control</p>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#1a1a2e] bg-[#ffe8df] rounded-full px-2.5 py-0.5">Full Control</span>
                </div>

                <!-- Advantages list -->
                <ul class="space-y-2.5 mb-5">
                  @for (item of adradarAdvantages; track item) {
                    <li class="flex items-start gap-2.5">
                      <div class="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_2px_6px_-1px_rgba(26,26,46,0.25)]">
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
                <div class="bg-white/60 backdrop-blur-sm rounded-xl border border-[#f5a896]/20 p-3.5 mb-4">
                  <p class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#e8573a] mb-2.5">Impact when enabled</p>
                  <div class="grid grid-cols-3 gap-2">
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">84%</p>
                      <p class="text-[10px] text-[#4b5563] mt-1 leading-tight">Account<br/>penetration</p>
                    </div>
                    <div class="text-center border-l border-r border-[#f5a896]/20">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">3-4x</p>
                      <p class="text-[10px] text-[#4b5563] mt-1 leading-tight">More accounts<br/>reached</p>
                    </div>
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">22%</p>
                      <p class="text-[10px] text-[#4b5563] mt-1 leading-tight">Budget<br/>recovered</p>
                    </div>
                  </div>
                </div>

                <!-- Bottom highlight strip -->
                <div class="flex items-center justify-between pt-3.5 border-t border-[#f5a896]/15">
                  <div class="flex items-center gap-2.5">
                    <div class="flex -space-x-1.5">
                      <div class="w-5 h-5 rounded-full bg-[#b8dff0] ring-2 ring-[#fef6f3] overflow-hidden"><img src="/agents/Company Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                      <div class="w-5 h-5 rounded-full bg-[#acdfa4] ring-2 ring-[#fef6f3] overflow-hidden"><img src="/agents/Bidding Optimization Agent.png" alt="" class="w-full h-full object-cover"/></div>
                      <div class="w-5 h-5 rounded-full bg-[#ee95a0] ring-2 ring-[#fef6f3] overflow-hidden"><img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                    </div>
                    <span class="text-[11px] text-[#e8573a] font-medium">+6 agents</span>
                  </div>
                  <a href="#" class="text-[11px] font-semibold text-[#1a1a2e] hover:text-[#e8573a] transition-colors flex items-center gap-1">
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
        <div class="absolute top-[20%] left-[-8%] w-[25%] h-[60%] bg-radial-[closest-side] from-[#f5a896]/8 to-transparent blur-[80px] pointer-events-none -z-10"></div>
        <div class="absolute bottom-[20%] right-[-8%] w-[25%] h-[60%] bg-radial-[closest-side] from-[#e8573a]/6 to-transparent blur-[80px] pointer-events-none -z-10"></div>

        <div class="h-full flex flex-col justify-center">
          <div class="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16 w-full">

            <!-- Header -->
            <div class="mb-6 lg:mb-8">
              <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a]">
                How It Works
              </span>
              <h2 class="text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mt-1.5 lg:mt-2">
                Connect once. Cap accounts.<br class="hidden lg:block" />
                <span class="section-gradient-text">Redistribute automatically.</span>
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
                      : 'bg-[#e5e7eb] text-[#9ca3af] group-hover:bg-[#d1d5db]'"
                  >
                    {{ step.number }}
                  </div>
                  <span
                    class="text-[12px] font-semibold uppercase tracking-[0.04em] transition-all duration-500 hidden lg:block"
                    [ngClass]="isStepActive(i) ? 'text-[#ff4829]' : 'text-[#9ca3af]'"
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
                          <span class="text-[13px] font-medium text-[#9ca3af]">Step {{ step.number }} of 05</span>
                        </div>
                      </div>

                      <!-- Right: Visualization -->
                      <div class="md:w-[340px] lg:w-[440px] xl:w-[500px] shrink-0">
                        <div class="bg-gradient-to-br from-[#fef6f3] to-[#ffe8df] rounded-2xl lg:rounded-3xl overflow-hidden p-5 lg:p-7 flex flex-col justify-center min-h-[300px] md:min-h-[380px]">

                          @switch (i) {
                            @case (0) {
                              <!-- Step 1 viz: Account Cap Settings -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M2 8h12" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Account Cap Settings</span>
                                </div>
                                <div class="space-y-3">
                                  <div class="flex items-center justify-between bg-[#fef9f7] rounded-lg px-3 py-2.5">
                                    <div>
                                      <p class="text-[12px] font-semibold text-[#1a1a2e]">Enterprise (5,000+)</p>
                                      <p class="text-[10px] text-[#4b5563]">Large buying committees</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                      <div class="w-[80px] h-[6px] bg-[#fef6f3] rounded-full overflow-hidden"><div class="h-full w-[85%] bg-gradient-to-r from-[#e8573a] to-[#1a1a2e] rounded-full"></div></div>
                                      <span class="text-[12px] font-bold text-[#1a1a2e]">850</span>
                                    </div>
                                  </div>
                                  <div class="flex items-center justify-between bg-[#fef8f6] rounded-lg px-3 py-2.5">
                                    <div>
                                      <p class="text-[12px] font-semibold text-[#374151]">Mid-Market (500-5K)</p>
                                      <p class="text-[10px] text-[#4b5563]">Standard committees</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                      <div class="w-[80px] h-[6px] bg-[#fef6f3] rounded-full overflow-hidden"><div class="h-full w-[55%] bg-gradient-to-r from-[#ff6b35] to-[#e8573a] rounded-full"></div></div>
                                      <span class="text-[12px] font-bold text-[#e8573a]">400</span>
                                    </div>
                                  </div>
                                  <div class="flex items-center justify-between bg-[#fef8f6] rounded-lg px-3 py-2.5">
                                    <div>
                                      <p class="text-[12px] font-semibold text-[#374151]">SMB (&lt;500)</p>
                                      <p class="text-[10px] text-[#4b5563]">Smaller teams</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                      <div class="w-[80px] h-[6px] bg-[#fef6f3] rounded-full overflow-hidden"><div class="h-full w-[30%] bg-gradient-to-r from-[#f5a896] to-[#ff6b35] rounded-full"></div></div>
                                      <span class="text-[12px] font-bold text-[#ff6b35]">200</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="mt-4 flex items-center gap-2 text-[11px] text-[#e8573a] font-medium">
                                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1v6l4 2" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="8" r="6.5" stroke="#e8573a" stroke-width="1.5"/></svg>
                                  Caps reset monthly
                                </div>
                              </div>
                            }
                            @case (1) {
                              <!-- Step 2 viz: Live Monitoring -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center justify-between mb-4">
                                  <div class="flex items-center gap-2">
                                    <div class="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></div>
                                    <span class="text-[13px] font-semibold text-[#111827]">Live Monitoring</span>
                                  </div>
                                  <span class="text-[10px] text-[#4b5563] bg-[#f3f4f6] px-2 py-0.5 rounded-full">Real-time</span>
                                </div>
                                <div class="space-y-2.5">
                                  <div>
                                    <div class="flex items-center justify-between mb-1"><span class="text-[11px] text-[#374151] font-medium">Acme Corp</span><span class="text-[11px] text-[#ef4444] font-semibold">780 / 850</span></div>
                                    <div class="h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden"><div class="h-full w-[92%] bg-gradient-to-r from-[#f59e0b] to-[#ef4444] rounded-full"></div></div>
                                  </div>
                                  <div>
                                    <div class="flex items-center justify-between mb-1"><span class="text-[11px] text-[#374151] font-medium">TechFlow Inc</span><span class="text-[11px] text-[#e8573a] font-semibold">312 / 400</span></div>
                                    <div class="h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden"><div class="h-full w-[78%] bg-gradient-to-r from-[#e8573a] to-[#ff6b35] rounded-full"></div></div>
                                  </div>
                                  <div>
                                    <div class="flex items-center justify-between mb-1"><span class="text-[11px] text-[#374151] font-medium">DataSync Ltd</span><span class="text-[11px] text-[#e8573a] font-semibold">145 / 400</span></div>
                                    <div class="h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden"><div class="h-full w-[36%] bg-gradient-to-r from-[#ff6b35] to-[#f5a896] rounded-full"></div></div>
                                  </div>
                                  <div>
                                    <div class="flex items-center justify-between mb-1"><span class="text-[11px] text-[#374151] font-medium">Orbit Systems</span><span class="text-[11px] text-[#22c55e] font-semibold">42 / 200</span></div>
                                    <div class="h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden"><div class="h-full w-[21%] bg-gradient-to-r from-[#f5a896] to-[#ffe8df] rounded-full"></div></div>
                                  </div>
                                </div>
                                <div class="mt-3 pt-3 border-t border-[#f3f4f6] flex items-center justify-between">
                                  <span class="text-[10px] text-[#4b5563]">247 accounts tracked</span>
                                  <span class="text-[10px] text-[#e8573a] font-medium">Updated 2s ago</span>
                                </div>
                              </div>
                            }
                            @case (2) {
                              <!-- Step 3 viz: Auto-Exclusion -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-[#fef2f2] flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/></svg></div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Auto-Exclusion Triggered</span>
                                </div>
                                <div class="bg-[#fef2f2]/60 border border-[#fecaca] rounded-lg p-3 mb-3">
                                  <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                      <div class="w-8 h-8 rounded-full bg-[#fee2e2] flex items-center justify-center"><span class="text-[11px] font-bold text-[#ef4444]">AC</span></div>
                                      <div><p class="text-[12px] font-semibold text-[#374151]">Acme Corp</p><p class="text-[10px] text-[#ef4444]">850 / 850 impressions</p></div>
                                    </div>
                                    <span class="text-[9px] font-bold tracking-[0.04em] uppercase text-[#ef4444] bg-[#fee2e2] px-2 py-0.5 rounded-full">Capped</span>
                                  </div>
                                  <div class="h-[6px] bg-[#fee2e2] rounded-full overflow-hidden mt-2"><div class="h-full w-full bg-[#ef4444]/60 rounded-full"></div></div>
                                </div>
                                <div class="space-y-2">
                                  <div class="bg-[#fef9f7] border border-[#f5a896]/20 rounded-lg px-3 py-2 flex items-center justify-between">
                                    <div class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-[#ffe8df] flex items-center justify-center"><span class="text-[9px] font-bold text-[#1a1a2e]">TF</span></div><span class="text-[11px] font-medium text-[#374151]">TechFlow Inc</span></div>
                                    <span class="text-[9px] font-bold text-[#22c55e] bg-[#f0fdf4] px-2 py-0.5 rounded-full">Active</span>
                                  </div>
                                  <div class="bg-[#fef9f7] border border-[#f5a896]/20 rounded-lg px-3 py-2 flex items-center justify-between">
                                    <div class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-[#ffe8df] flex items-center justify-center"><span class="text-[9px] font-bold text-[#1a1a2e]">DS</span></div><span class="text-[11px] font-medium text-[#374151]">DataSync Ltd</span></div>
                                    <span class="text-[9px] font-bold text-[#22c55e] bg-[#f0fdf4] px-2 py-0.5 rounded-full">Active</span>
                                  </div>
                                </div>
                              </div>
                            }
                            @case (3) {
                              <!-- Step 4 viz: Budget Redistribution -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#ffe8df] to-[#f5a896] flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M10 5l3 3-3 3" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Budget Redistribution</span>
                                </div>
                                <div class="bg-[#f9fafb] rounded-lg p-3 mb-2">
                                  <p class="text-[10px] font-semibold text-[#4b5563] uppercase tracking-[0.04em] mb-2">Freed budget</p>
                                  <div class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-[#fee2e2] flex items-center justify-center"><span class="text-[9px] font-bold text-[#ef4444]">AC</span></div><div class="flex-1 h-[6px] bg-[#e5e7eb] rounded-full overflow-hidden"><div class="h-full w-full bg-gradient-to-r from-[#ef4444]/20 to-[#e8573a]/40 rounded-full"></div></div><span class="text-[12px] font-bold text-[#1a1a2e]">$2,340</span></div>
                                </div>
                                <div class="flex justify-center py-1"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M5 10l3 3 3-3" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                                <div class="bg-[#fef9f7] rounded-lg p-3 space-y-2">
                                  <p class="text-[10px] font-semibold text-[#e8573a] uppercase tracking-[0.04em] mb-2">Redistributed to</p>
                                  <div class="flex items-center gap-2"><div class="w-5 h-5 rounded-full bg-[#ffe8df] flex items-center justify-center"><span class="text-[8px] font-bold text-[#1a1a2e]">OS</span></div><span class="text-[11px] text-[#374151] flex-1">Orbit Systems</span><span class="text-[11px] font-semibold text-[#22c55e]">+$780</span></div>
                                  <div class="flex items-center gap-2"><div class="w-5 h-5 rounded-full bg-[#ffe8df] flex items-center justify-center"><span class="text-[8px] font-bold text-[#1a1a2e]">NV</span></div><span class="text-[11px] text-[#374151] flex-1">Nova AI</span><span class="text-[11px] font-semibold text-[#22c55e]">+$880</span></div>
                                  <div class="flex items-center gap-2"><div class="w-5 h-5 rounded-full bg-[#ffe8df] flex items-center justify-center"><span class="text-[8px] font-bold text-[#1a1a2e]">CL</span></div><span class="text-[11px] text-[#374151] flex-1">CloudBase</span><span class="text-[11px] font-semibold text-[#22c55e]">+$680</span></div>
                                </div>
                              </div>
                            }
                            @case (4) {
                              <!-- Step 5 viz: Human-in-the-loop -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8.5l3 3 5-6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Human-in-the-loop</span>
                                </div>
                                <div class="space-y-2 mb-4">
                                  <div class="flex items-start gap-2 bg-[#fef9f7] rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#ffe8df] flex items-center justify-center shrink-0 mt-0.5"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#1a1a2e" stroke-width="1.3" stroke-linecap="round"/></svg></div>
                                    <div><p class="text-[11px] font-medium text-[#374151]">Excluded Acme Corp (850/850)</p><p class="text-[10px] text-[#4b5563]">2 min ago &bull; Logged &amp; reversible</p></div>
                                  </div>
                                  <div class="flex items-start gap-2 bg-[#fef9f7] rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#ffe8df] flex items-center justify-center shrink-0 mt-0.5"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#1a1a2e" stroke-width="1.3" stroke-linecap="round"/></svg></div>
                                    <div><p class="text-[11px] font-medium text-[#374151]">Redistributed $2,340 to 3 accounts</p><p class="text-[10px] text-[#4b5563]">2 min ago &bull; Auto-approved by rules</p></div>
                                  </div>
                                  <div class="flex items-start gap-2 bg-[#fffbeb] border border-[#fde68a]/40 rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#fef3c7] flex items-center justify-center shrink-0 mt-0.5"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="8.5" r="0.5" fill="#f59e0b"/><path d="M6 3v4" stroke="#f59e0b" stroke-width="1.3" stroke-linecap="round"/></svg></div>
                                    <div><p class="text-[11px] font-medium text-[#374151]">New tier suggested: Mid-Market &rarr; 500</p><p class="text-[10px] text-[#4b5563]">Awaiting your approval</p></div>
                                  </div>
                                </div>
                                <div class="flex gap-2">
                                  <button class="flex-1 h-8 bg-gradient-to-r from-[#e8573a] to-[#1a1a2e] text-white text-[11px] font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-[0_2px_8px_-2px_rgba(26,26,46,0.3)]"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="white" stroke-width="1.3" stroke-linecap="round"/></svg>Approve</button>
                                  <button class="flex-1 h-8 bg-white border border-[#e5e7eb] text-[#374151] text-[11px] font-semibold rounded-lg">Review</button>
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
         Visual side-by-side with agent branding
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef3ef] via-[#fef9f7] to-[#fef3ef] pointer-events-none -z-10"></div>
      <div class="absolute top-[30%] left-[50%] -translate-x-1/2 w-[50%] h-[50%] bg-radial-[closest-side] from-[#e8573a]/5 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-12">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
            The Difference
          </span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827]">
            What changes when impressions are <span class="section-gradient-text">controlled.</span>
          </h2>
        </div>

        <!-- ═══ Desktop: Enhanced table ═══ -->
        <div class="hidden md:block">
          <div class="bg-white rounded-2xl border border-[#f5a896]/30 overflow-hidden shadow-[0_4px_24px_-4px_rgba(232,87,58,0.1)]">

            <!-- Table Header — two distinct zones -->
            <div class="grid grid-cols-[1fr_1fr_1.15fr]">
              <!-- Capability header -->
              <div class="bg-[#fef8f6] p-5 border-b border-[#e5e7eb]/60">
                <span class="text-[13px] font-semibold text-[#4b5563] uppercase tracking-[0.04em]">Capability</span>
              </div>
              <!-- Without capping header -->
              <div class="bg-[#fef8f6] p-5 border-b border-[#e5e7eb]/60 border-l border-l-[#e5e7eb]/40">
                <div class="flex items-center gap-2">
                  <div class="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[13px] font-semibold text-[#4b5563] uppercase tracking-[0.04em]">Without capping</span>
                </div>
              </div>
              <!-- With adRadar header — branded, highlighted -->
              <div class="bg-gradient-to-r from-[#1a1a2e] to-[#1e1e36] p-5 border-b border-[#1a1a2e]">
                <div class="flex items-center gap-3">
                  <!-- Agent avatar with adRadar ring -->
                  <div class="w-8 h-8 rounded-full bg-[#f5a896] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0">
                    <img src="/agents/Impression Capping Agent.png" alt="Impression Capping Agent" class="w-full h-full object-cover rounded-full" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[13px] font-semibold text-white leading-tight">With adRadar Capping</span>
                    <span class="text-[10px] text-white/50 leading-tight">Impression Capping Agent</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Table Rows -->
            @for (row of comparisonRows; track row.capability; let i = $index; let even = $even) {
              <div
                class="group grid grid-cols-[1fr_1fr_1.15fr] border-t border-[#e5e7eb]/40 transition-colors duration-200 hover:bg-[#fef9f7]/60"
              >
                <!-- Capability -->
                <div class="p-5 flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-[#fef9f7] flex items-center justify-center shrink-0">
                    <!-- Row-specific icons -->
                    @switch (i) {
                      @case (0) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="#e8573a" stroke-width="1.5"/><path d="M8 5v3h3" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                      @case (1) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="8" width="3" height="6" rx="0.5" fill="#e8573a"/><rect x="6.5" y="5" width="3" height="9" rx="0.5" fill="#e8573a" opacity="0.7"/><rect x="11" y="2" width="3" height="12" rx="0.5" fill="#e8573a" opacity="0.4"/></svg>
                      }
                      @case (2) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="3" stroke="#e8573a" stroke-width="1.5"/><path d="M4 13c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (3) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12l4-8 4 8" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 9h5" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (4) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="2" stroke="#e8573a" stroke-width="1.5"/><path d="M6 8h4" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (5) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M10 5l3 3-3 3" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                    }
                  </div>
                  <span class="text-[14px] font-semibold text-[#111827]">{{ row.capability }}</span>
                </div>

                <!-- Without capping value -->
                <div class="p-5 flex items-center gap-2.5 border-l border-[#e5e7eb]/40">
                  <div class="w-[18px] h-[18px] rounded-full bg-[#fef2f2] flex items-center justify-center shrink-0">
                    <svg width="7" height="7" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[14px] text-[#9ca3af]">{{ row.without }}</span>
                </div>

                <!-- With adRadar value — highlighted column -->
                <div class="p-5 flex items-center gap-2.5 bg-[#fef9f7]/70 group-hover:bg-[#fdeee9]/60 transition-colors border-l-2 border-l-[#e8573a]/20">
                  <div class="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center shrink-0 shadow-[0_1px_4px_-1px_rgba(26,26,46,0.3)]">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <span class="text-[14px] text-[#1a1a2e] font-semibold">{{ row.withCapping }}</span>
                </div>
              </div>
            }

          </div>
        </div>

        <!-- ═══ Mobile: Stacked cards ═══ -->
        <div class="md:hidden space-y-3">
          <!-- Mobile branded header card -->
          <div class="flex items-center gap-3 bg-gradient-to-r from-[#1a1a2e] to-[#1e1e36] rounded-xl px-4 py-3">
            <div class="w-8 h-8 rounded-full bg-[#f5a896] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0">
              <img src="/agents/Impression Capping Agent.png" alt="" class="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <span class="text-[13px] font-semibold text-white block leading-tight">adRadar Impression Capping</span>
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
                <div class="p-4 bg-[#fef9f7]/70 border-l-2 border-l-[#e8573a]/20">
                  <div class="flex items-center gap-1.5 mb-2">
                    <div class="w-[14px] h-[14px] rounded-full bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                      <svg width="6" height="6" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
                    </div>
                    <p class="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#e8573a]">With adRadar</p>
                  </div>
                  <p class="text-[13px] text-[#1a1a2e] font-semibold">{{ row.withCapping }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 6: RESULTS — Light showcase
         ═══════════════════════════════════════════ -->
    <section class="relative py-16 lg:py-22 overflow-hidden">
      <!-- Light background -->
      <div class="absolute inset-0 bg-[#fef6f3] pointer-events-none -z-10"></div>
      <!-- Ambient glows -->
      <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-radial-[closest-side] from-[#e8573a]/8 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-radial-[closest-side] from-[#ff6b35]/6 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] bg-radial-[closest-side] from-[#f5a896]/4 to-transparent blur-[120px] pointer-events-none -z-10"></div>
      <!-- Dot pattern overlay -->
      <div class="absolute inset-0 opacity-[0.04] pointer-events-none -z-10" style="background-image: radial-gradient(circle, #e8573a 1px, transparent 1px); background-size: 28px 28px;"></div>

      <div class="max-w-[1200px] mx-auto px-6">

        <!-- Top: Badge + Heading row -->
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
          <div class="max-w-[600px]">
            <div class="flex items-center gap-2.5 mb-4">
              <div class="w-8 h-8 rounded-full bg-[#f5a896] p-[2px] overflow-hidden">
                <img src="/agents/Impression Capping Agent.png" alt="" class="w-full h-full object-cover rounded-full" />
              </div>
              <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a]">
                Proven Results
              </span>
            </div>
            <h2 class="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.08] tracking-[-0.025em] text-[#111827]">
              First 30 days. Same budget.<br class="hidden lg:block" />
              <span class="section-gradient-text">Completely different outcomes.</span>
            </h2>
          </div>
          <p class="text-[15px] text-[#4b5563] leading-[1.65] max-w-[340px] lg:text-right">
            Measured across teams who activated Impression Capping on existing campaigns, no additional spend required.
          </p>
        </div>

        <!-- Results cards — staggered grid -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- ══ Card 1: 84% Account Penetration ══ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-6 lg:p-7 h-full group-hover:shadow-[0_8px_30px_-6px_rgba(232,87,58,0.12)] transition-shadow duration-500">

              <!-- Before → After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">10%</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#e8573a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#e8573a] bg-[#ff6b35]/15 px-2.5 py-1 rounded-full">84%</span>
              </div>

              <!-- Donut chart visualization -->
              <div class="relative w-[140px] h-[140px] mx-auto mb-6">
                <svg class="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <!-- Background ring -->
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" stroke-width="12" />
                  <!-- Before: 10% faded red ring -->
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#ef4444" stroke-opacity="0.5" stroke-width="12"
                    stroke-dasharray="31.4 282.6" stroke-linecap="round" />
                  <!-- After: 84% bright ring -->
                  <circle cx="60" cy="60" r="50" fill="none" stroke="url(#resultGrad1)" stroke-width="12"
                    stroke-dasharray="263.9 50.1" stroke-linecap="round" />
                  <defs>
                    <linearGradient id="resultGrad1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#e8573a" />
                      <stop offset="100%" stop-color="#ff6b35" />
                    </linearGradient>
                  </defs>
                </svg>
                <!-- Center number -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-[36px] font-bold text-[#111827] tracking-[-0.03em]">84%</span>
                </div>
              </div>

              <h3 class="text-[18px] font-bold text-[#111827] mb-1.5 text-center">Account penetration</h3>
              <p class="text-[13px] text-[#4b5563] text-center leading-[1.5]">
                Same budget, same list, 8x more accounts reached
              </p>
            </div>
          </div>

          <!-- ══ Card 2: 3-4x More Accounts — taller card with offset ══ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-6 lg:p-7 h-full group-hover:shadow-[0_8px_30px_-6px_rgba(232,87,58,0.12)] transition-shadow duration-500">

              <!-- Before → After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">1x reach</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#e8573a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#e8573a] bg-[#ff6b35]/15 px-2.5 py-1 rounded-full">3-4x reach</span>
              </div>

              <!-- Bar chart visualization — before vs after -->
              <div class="flex items-end gap-3 justify-center h-[140px] mb-6 px-2">
                <!-- Before bar -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[35px] relative overflow-hidden bg-[#fee2e2] border border-[#fca5a5]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#ef4444] to-[#fca5a5]"></div>
                  </div>
                  <span class="text-[10px] text-[#4b5563] font-medium">Before</span>
                </div>
                <!-- After bars — bright bars showing multiple accounts reached -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[120px] relative overflow-hidden bg-[#e8573a] border border-[#d14a30]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#e8573a] to-[#ff6b35]"></div>
                  </div>
                  <span class="text-[10px] text-[#e8573a] font-semibold">After</span>
                </div>
                <!-- Extra bars showing redistribution -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[95px] relative overflow-hidden bg-[#ff6b35] border border-[#d14a30]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#e8573a] to-[#ff6b35]"></div>
                  </div>
                  <span class="text-[10px] text-[#ff6b35] font-medium">+New</span>
                </div>
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[75px] relative overflow-hidden bg-[#f5a896] border border-[#d14a30]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#e8573a] to-[#ff6b35]"></div>
                  </div>
                  <span class="text-[10px] text-[#e8573a] font-medium">+New</span>
                </div>
              </div>

              <!-- Big number -->
              <div class="text-center">
                <p class="text-[48px] font-bold text-[#111827] tracking-[-0.04em] leading-none mb-1.5">3-4x</p>
                <h3 class="text-[18px] font-bold text-[#111827] mb-1.5">More accounts reached</h3>
                <p class="text-[13px] text-[#4b5563] leading-[1.5]">
                  Budget flows to previously untouched accounts
                </p>
              </div>
            </div>
          </div>

          <!-- ══ Card 3: 22% Budget Recovered ══ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-6 lg:p-7 h-full group-hover:shadow-[0_8px_30px_-6px_rgba(232,87,58,0.12)] transition-shadow duration-500">

              <!-- Before → After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">Wasted</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#e8573a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#16a34a] bg-[#dcfce7] px-2.5 py-1 rounded-full">Recovered</span>
              </div>

              <!-- Budget flow visualization -->
              <div class="relative mb-6 px-1">
                <!-- Total budget bar -->
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[11px] text-[#4b5563] font-medium uppercase tracking-[0.04em]">Total monthly budget</span>
                    <span class="text-[12px] text-[#374151] font-semibold">$50,000</span>
                  </div>
                  <div class="h-[12px] bg-[#f3f4f6] rounded-full overflow-hidden border border-[#e5e7eb]">
                    <div class="h-full w-full bg-gradient-to-r from-[#e8573a] to-[#ff6b35] rounded-full"></div>
                  </div>
                </div>
                <!-- Recovered portion -->
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[11px] text-[#16a34a] font-semibold uppercase tracking-[0.04em]">Budget recovered</span>
                    <span class="text-[12px] text-[#16a34a] font-bold">$11,000</span>
                  </div>
                  <div class="h-[12px] bg-[#f3f4f6] rounded-full overflow-hidden border border-[#22c55e]/40">
                    <div class="h-full w-[22%] bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-full"></div>
                  </div>
                </div>
                <!-- Arrow showing reallocation -->
                <div class="flex items-center gap-2 mt-4 bg-[#dcfce7] border border-[#86efac] rounded-lg px-3 py-2.5">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8h8M9.5 5.5L12 8l-2.5 2.5" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span class="text-[11px] text-[#16a34a] font-medium">Reallocated to under-served accounts</span>
                </div>
              </div>

              <div class="text-center">
                <p class="text-[48px] font-bold text-[#111827] tracking-[-0.04em] leading-none mb-1.5">22%</p>
                <h3 class="text-[18px] font-bold text-[#111827] mb-1.5">Budget recovered</h3>
                <p class="text-[13px] text-[#4b5563] leading-[1.5]">
                  From overexposed accounts in first 30-day audit
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom trust line -->
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 7: RELATED AGENTS — 6 agents, themed cards
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef9f7] via-[#fef8f6] to-white pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[50%] bg-radial-[closest-side] from-[#f5a896]/8 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-10">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
            Connected Intelligence
          </span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
            Impression capping is one layer.
            <br class="hidden md:block" />
            Six agents <span class="section-gradient-text">work together.</span>
          </h2>
          <p class="text-[15px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[720px] mx-0 md:mx-auto">
            The Impression Capping Agent shares context and memory with every other adRadar agent —
            so capping decisions inform audience quality, creative rotation, spend pacing, and competitor
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
                <p class="text-[13px] text-[#4b5563] leading-[1.55] mb-4 flex-1">
                  {{ agent.description }}
                </p>

                <!-- Bottom: Connection line + arrow -->
                <div class="flex items-center justify-between pt-3 border-t transition-colors duration-300"
                  [style.borderColor]="agent.accentColor + '20'">
                  <!-- Connection to Impression Capping badge -->
                  <div class="flex items-center gap-1.5">
                    <div class="w-4 h-4 rounded-full bg-[#f5a896] overflow-hidden shrink-0">
                      <img src="/agents/Impression Capping Agent.png" alt="" class="w-full h-full object-cover" />
                    </div>
                    <div class="w-5 h-[1.5px] rounded-full"
                      [style.background]="'linear-gradient(90deg, #f5a896, ' + agent.accentColor + ')'">
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

    <app-cta-section
      headingStart="Stop letting algorithms decide your"
      headingGradient="budget allocation."
      description="Connect your LinkedIn Ads account in 2 minutes. The Impression Capping Agent starts monitoring immediately. No credit card required."
    />
  `,
  styles: [`
    :host { display: block; }

    /* ═══ Hero gradient text ═══ */
    .hero-gradient-text {
      background: linear-gradient(135deg, #e8573a, #ff6b35);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ═══ Section gradient text ═══ */
    .section-gradient-text {
      background: linear-gradient(135deg, #e8573a, #ff6b35);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ═══ CTA gradient text ═══ */
    .cta-gradient-text {
      background: linear-gradient(58deg, #f5a896 0%, #fef6f3 50%, #ffffff 100%);
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
        rgba(245, 168, 150, 0.06),
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
export class ImpressionCappingComponent implements OnInit, OnDestroy {
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
    'Controls individual user exposure',
    'Brand Awareness campaigns only',
    'Does not prevent account-level budget concentration',
    'No firmographic tiering or ABM strategy logic',
  ];

  adradarAdvantages = [
    'Controls impressions at the company level',
    'Works across all campaign types',
    'Auto-redistributes budget to under-served accounts',
    'Firmographic tiering by ICP, size, industry, and revenue',
  ];

  steps = [
    {
      number: '01',
      label: 'Configure',
      title: 'Set your account-level caps',
      description:
        'Define maximum impressions per company per month. Set different caps by firmographic tier, enterprise accounts (5,000+ employees) get a higher ceiling than SMB accounts because their buying committees are larger.',
    },
    {
      number: '02',
      label: 'Monitor',
      title: 'Agent monitors impression distribution in real time',
      description:
        'Every time an impression is served, the agent tracks it against the account\'s cap. No polling. No daily check-ins. Continuous monitoring across your entire target account list.',
    },
    {
      number: '03',
      label: 'Enforce',
      title: 'Accounts that hit their cap are automatically excluded',
      description:
        'The moment an account reaches its impression limit, the agent removes it from the active auction. Budget stops flowing to that company immediately, not at the next manual review.',
    },
    {
      number: '04',
      label: 'Redistribute',
      title: 'Budget redistributes to under-served accounts',
      description:
        'The freed budget flows automatically to accounts that haven\'t hit their caps yet. Accounts that haven\'t been reached get impressions. Your target list gets even coverage, not algorithmic concentration.',
    },
    {
      number: '05',
      label: 'Control',
      title: 'You approve the rules. The agent executes.',
      description:
        'Human-in-the-loop by design. You set the cap thresholds and firmographic logic. The agent operates within those parameters. Every action is logged, explained, and reversible. You\'re always in control.',
    },
  ];

  comparisonRows: ComparisonRow[] = [
    {
      capability: 'Account penetration rate',
      without: '10–25% of target list reached',
      withCapping: '80–90% of target list reached',
    },
    {
      capability: 'Budget concentration',
      without: 'Top 10% of accounts eat 70%+ of spend',
      withCapping: 'Evenly distributed across full TAL',
    },
    {
      capability: 'Strategic account exposure',
      without: 'Often zero impressions',
      withCapping: 'Guaranteed minimum frequency',
    },
    {
      capability: 'Impression distribution logic',
      without: 'LinkedIn\'s engagement algorithm',
      withCapping: 'Your ABM strategy and ICP tiers',
    },
    {
      capability: 'Manual monitoring required',
      without: 'Weekly audit needed to catch waste',
      withCapping: 'Continuous, fully automated',
    },
    {
      capability: 'Budget reallocation',
      without: 'Manual, reactive, always late',
      withCapping: 'Automatic, real-time, proactive',
    },
  ];

  relatedAgents: RelatedAgent[] = [
    {
      name: 'Company Blocking Agent',
      image: '/agents/Company Blocking Agent.png',
      avatarBg: '#b8dff0',
      description:
        'Blocks non-ICP companies entirely. Capping controls frequency, blocking removes irrelevant accounts from the auction.',
      accentColor: '#4a9cc5',
      route: '/agents/company-blocking',
    },
    {
      name: 'Ad Rotation Agent',
      image: '/agents/Ad Rotation Agent.png',
      avatarBg: '#d9e1fb',
      description:
        'Detects fatigue before CTR drops. Near-cap accounts get fresh creative. Every impression counts.',
      accentColor: '#6b5ea0',
      route: '/agents/ad-rotation',
    },
    {
      name: 'Bidding Optimization Agent',
      image: '/agents/Bidding Optimization Agent.png',
      avatarBg: '#acdfa4',
      description:
        'Optimises CPM as budget redistributes, maximising reach efficiency across newly eligible companies.',
      accentColor: '#4a9a42',
      route: '/agents/bidding-optimization',
    },
    {
      name: 'Title Blocking Agent',
      image: '/agents/Title Blocking Agent.png',
      avatarBg: '#ee95a0',
      description:
        'Removes irrelevant job titles from impressions. The right people at the right companies see your ads.',
      accentColor: '#d4606f',
      route: '/agents/title-blocking',
    },
    {
      name: 'Campaign Scheduling Agent',
      image: '/agents/Campaign Scheduling Agent.png',
      avatarBg: '#fbf5df',
      description:
        'Pauses campaigns during low-conversion windows. Capped accounts don\'t waste budget off-peak.',
      accentColor: '#c5a030',
      route: '/agents/campaign-scheduling',
    },
    {
      name: 'Analyse Competitors',
      image: '/agents/Analyse competitors LinkedIn Ads.png',
      avatarBg: '#acdfa4',
      description:
        'Tracks competitor ad presence across your target list. Capping ensures even coverage despite competitive pressure.',
      accentColor: '#4a9a42',
      route: '/agents/analyse-competitors',
    },
  ];
}
