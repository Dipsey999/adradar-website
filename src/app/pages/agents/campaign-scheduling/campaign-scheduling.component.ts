import { Component, ChangeDetectorRef, ElementRef, AfterViewInit, OnDestroy, OnInit, ViewChild, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { CtaSectionComponent } from '../../../components/cta-section/cta-section.component';

interface ComparisonRow {
  capability: string;
  without: string;
  withScheduling: string;
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
  selector: 'app-campaign-scheduling',
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
            <div class="inline-flex items-center gap-2.5 bg-[#fffbe3]/80 backdrop-blur-sm border border-[#fdecc8]/60 rounded-full px-4 py-1.5 mb-6 shadow-[0_2px_12px_-4px_rgba(197,160,48,0.15)]">
              <div class="w-6 h-6 rounded-full overflow-hidden bg-[#fbf5df] ring-2 ring-white/60">
                <img src="/agents/Campaign Scheduling Agent.png" alt="" class="w-full h-full object-cover" />
              </div>
              <span class="text-[11px] font-bold tracking-[0.08em] text-[#1a1a2e] uppercase">
                Campaign Scheduling Agent
              </span>
            </div>

            <!-- Heading -->
            <h1 class="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em] text-[#111827] mb-6">
              Your LinkedIn ads shouldn't be spending budget when your buyers
              <span class="hero-gradient-text">aren't online.</span>
            </h1>

            <!-- Subheading -->
            <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-[540px] mb-8">
              Automatically run your campaigns only during the days and hours you choose — pausing
              outside those windows so every impression lands when it actually counts.
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
                class="h-12 px-8 flex items-center justify-center border border-[#fdecc8] rounded-full text-[15px] font-medium text-[#1a1a2e] hover:bg-[#fffbe3]/50 hover:border-[#c5a030]/50 transition-all duration-300"
              >
                Book a Demo
              </a>
            </div>

            <!-- Trust indicators -->
            <div class="flex items-center gap-4 text-[13px] text-[#6b7280] mt-6">
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
              <div class="absolute -inset-10 bg-radial-[closest-side] from-[#f0d48a]/20 to-transparent blur-[40px] pointer-events-none"></div>

              <!-- Orbit rings -->
              <div class="absolute inset-[46px] rounded-full border border-dashed border-[#f0d48a]/20"></div>
              <div class="absolute inset-[90px] rounded-full border border-[#f0d48a]/8"></div>

              <!-- Subtle rotating ring -->
              <div class="absolute inset-[44px] rounded-full border border-[#c5a030]/5 orbit-ring"></div>

              <!-- Connecting lines -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 420">
                <line x1="210" y1="210" x2="210" y2="46" stroke="url(#line-grad-cs)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="128" stroke="url(#line-grad-cs)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="292" stroke="url(#line-grad-cs)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="210" y2="374" stroke="url(#line-grad-cs)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="292" stroke="url(#line-grad-cs)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="128" stroke="url(#line-grad-cs)" stroke-width="1" opacity="0.15"/>
                <defs>
                  <linearGradient id="line-grad-cs" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#f0d48a" stop-opacity="0.6"/>
                    <stop offset="100%" stop-color="#f0d48a" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>

              <!-- CENTER: Campaign Scheduling Agent -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div class="absolute inset-[-32px] rounded-full bg-[#f0d48a]/6 animate-[pulse-ring_3s_ease-in-out_infinite]"></div>
                <div class="absolute inset-[-22px] rounded-full bg-[#f0d48a]/10 animate-[pulse-ring_3s_ease-in-out_infinite_0.5s]"></div>
                <div class="absolute inset-[-12px] rounded-full bg-gradient-to-br from-[#f0d48a]/20 to-[#c5a030]/12"></div>
                <div class="relative w-[110px] h-[110px] rounded-full bg-gradient-to-br from-[#f0d48a] to-[#c5a030] p-[3px] shadow-[0_8px_40px_-4px_rgba(197,160,48,0.35)]">
                  <div class="w-full h-full rounded-full bg-gradient-to-br from-[#fffbe3] to-[#fdecc8] overflow-hidden">
                    <img src="/agents/Campaign Scheduling Agent.png" alt="Campaign Scheduling Agent" class="w-full h-full object-cover" />
                  </div>
                </div>
                <div class="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1a1a2e] text-white text-[10px] font-bold tracking-[0.05em] uppercase px-3 py-1 rounded-full shadow-[0_4px_12px_-2px_rgba(26,26,46,0.3)]">
                  Campaign Scheduling
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
              <!-- Bottom: Impression Capping -->
              <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-10 orbit-agent" style="animation-delay: 1.2s">
                <div class="w-[58px] h-[58px] rounded-full p-[2px] bg-gradient-to-br from-[#a8d1dc]/50 to-[#a8d1dc]/40 shadow-[0_4px_16px_-4px_rgba(58,151,171,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#e5f7fa] overflow-hidden">
                    <img src="/agents/Impression Capping Agent.png" alt="Impression Capping" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Bottom-left: Ad Rotation -->
              <div class="absolute bottom-[98px] left-[38px] z-10 orbit-agent" style="animation-delay: 1.6s">
                <div class="w-[54px] h-[54px] rounded-full p-[2px] bg-gradient-to-br from-[#c8b4e0]/50 to-[#d9e1fb]/40 shadow-[0_4px_16px_-4px_rgba(200,180,224,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#f7f3f8] overflow-hidden">
                    <img src="/agents/Ad Rotation Agent.png" alt="Ad Rotation" class="w-full h-full object-cover" />
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
            LinkedIn campaigns run 24/7 by default.
            <br class="hidden md:block" />
            <span class="section-gradient-text">Not your buyers.</span>
          </h2>
          <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[680px] mx-0 md:mx-auto">
            LinkedIn Campaign Manager has no native time-of-day delivery control. Your campaigns run
            continuously from the moment you launch them — burning budget when your buyers aren't even online.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- Card 1: 76% -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">76%</span>
                <div class="w-10 h-10 rounded-xl bg-[#fffbe3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7" stroke="#c5a030" stroke-width="1.5" fill="none"/>
                    <path d="M10 6v4h3" stroke="#c5a030" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                of the week is outside standard business hours
              </p>
              <p class="text-[13px] text-[#6b7280] leading-[1.55]">
                168 hours per week — only 40 are Mon-Fri 9-5. Budget running 24/7 wastes the rest.
              </p>
            </div>
          </div>

          <!-- Card 2: 0 -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">0</span>
                <div class="w-10 h-10 rounded-xl bg-[#fffbe3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L2 18h16L10 2z" stroke="#c5a030" stroke-width="1.5" fill="none"/>
                    <path d="M10 8v4" stroke="#c5a030" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="10" cy="14.5" r="0.75" fill="#c5a030"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                Native controls for time-of-day or day-of-week campaigns
              </p>
              <p class="text-[13px] text-[#6b7280] leading-[1.55]">
                LinkedIn Campaign Manager has no dayparting or scheduling feature.
              </p>
            </div>
          </div>

          <!-- Card 3: 28% -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">28%</span>
                <div class="w-10 h-10 rounded-xl bg-[#fffbe3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="11" width="3.5" height="6" rx="1" fill="#c5a030"/>
                    <rect x="8.25" y="7" width="3.5" height="10" rx="1" fill="#c5a030" opacity="0.6"/>
                    <rect x="13.5" y="3" width="3.5" height="14" rx="1" fill="#c5a030" opacity="0.35"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                average engagement rate improvement when B2B ads run during peak business hours only
              </p>
              <p class="text-[13px] text-[#6b7280] leading-[1.55]">
                Same budget. Better timing. Measurably better results.
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
      <div class="absolute top-[20%] right-[5%] w-[35%] h-[50%] bg-radial-[closest-side] from-[#e8573a]/8 to-transparent blur-[80px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[10%] left-[10%] w-[30%] h-[40%] bg-radial-[closest-side] from-[#1a1a2e]/5 to-transparent blur-[80px] pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">

          <!-- LEFT COLUMN (60%): Heading + description + weekly schedule viz -->
          <div class="lg:w-[58%] flex flex-col">
            <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
              The Gap
            </span>
            <h2 class="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.08] tracking-[-0.025em] text-[#111827] mb-5">
              Schedule once. Agent handles everything else.
              <span class="section-gradient-text">Zero Intervention.</span>
            </h2>
            <p class="text-[16px] text-[#4b5563] leading-[1.7] mb-8 max-w-[540px]">
              The Campaign Scheduling Agent runs continuously — activating your campaigns at the start
              of each configured window and pausing them the moment the window closes.
            </p>

            <!-- Before / After weekly schedule visualization -->
            <div class="hidden lg:flex flex-col flex-1 bg-gradient-to-br from-[#fffdf5] to-[#fffbe3]/80 rounded-2xl border border-[#fdecc8]/40 p-6 mt-2">

              <!-- Before: 24/7 delivery -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#fef2f2] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[12px] font-semibold text-[#6b7280] uppercase tracking-[0.04em]">Before: 24/7 delivery</span>
                </div>
                <!-- Weekly bars — all days red -->
                <div class="grid grid-cols-7 gap-[3px]">
                  <div class="text-center">
                    <span class="text-[9px] text-[#9ca3af] font-medium block mb-1">Mon</span>
                    <div class="h-[32px] bg-[#ef4444]/20 rounded-[3px] border border-[#ef4444]/15"></div>
                  </div>
                  <div class="text-center">
                    <span class="text-[9px] text-[#9ca3af] font-medium block mb-1">Tue</span>
                    <div class="h-[32px] bg-[#ef4444]/20 rounded-[3px] border border-[#ef4444]/15"></div>
                  </div>
                  <div class="text-center">
                    <span class="text-[9px] text-[#9ca3af] font-medium block mb-1">Wed</span>
                    <div class="h-[32px] bg-[#ef4444]/20 rounded-[3px] border border-[#ef4444]/15"></div>
                  </div>
                  <div class="text-center">
                    <span class="text-[9px] text-[#9ca3af] font-medium block mb-1">Thu</span>
                    <div class="h-[32px] bg-[#ef4444]/20 rounded-[3px] border border-[#ef4444]/15"></div>
                  </div>
                  <div class="text-center">
                    <span class="text-[9px] text-[#9ca3af] font-medium block mb-1">Fri</span>
                    <div class="h-[32px] bg-[#ef4444]/20 rounded-[3px] border border-[#ef4444]/15"></div>
                  </div>
                  <div class="text-center">
                    <span class="text-[9px] text-[#ef4444]/60 font-medium block mb-1">Sat</span>
                    <div class="h-[32px] bg-[#ef4444]/20 rounded-[3px] border border-[#ef4444]/15"></div>
                  </div>
                  <div class="text-center">
                    <span class="text-[9px] text-[#ef4444]/60 font-medium block mb-1">Sun</span>
                    <div class="h-[32px] bg-[#ef4444]/20 rounded-[3px] border border-[#ef4444]/15"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between mt-1.5">
                  <span class="text-[10px] text-[#ef4444]/60 font-medium">All 168 hours active</span>
                  <span class="text-[10px] text-[#9ca3af]">76% wasted off-hours</span>
                </div>
              </div>

              <!-- Divider with arrow -->
              <div class="flex items-center gap-3 my-3">
                <div class="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#fdecc8]/60"></div>
                <div class="w-7 h-7 rounded-full bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center shadow-[0_2px_8px_-2px_rgba(26,26,46,0.3)]">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M4 8l3 3 3-3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#fdecc8]/60"></div>
              </div>

              <!-- After: Mon-Fri 9-5 only -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#fffbe3] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="#1a1a2e" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <span class="text-[12px] font-semibold text-[#1a1a2e] uppercase tracking-[0.04em]">After: Scheduled Mon-Fri 9am-5pm</span>
                </div>
                <!-- Weekly bars — Mon-Fri with gradient, weekends empty -->
                <div class="grid grid-cols-7 gap-[3px]">
                  <div class="text-center">
                    <span class="text-[9px] text-[#c5a030] font-medium block mb-1">Mon</span>
                    <div class="h-[32px] bg-gradient-to-t from-[#1a1a2e] to-[#e8573a] rounded-[3px]"></div>
                  </div>
                  <div class="text-center">
                    <span class="text-[9px] text-[#c5a030] font-medium block mb-1">Tue</span>
                    <div class="h-[32px] bg-gradient-to-t from-[#1a1a2e] to-[#e8573a] rounded-[3px]"></div>
                  </div>
                  <div class="text-center">
                    <span class="text-[9px] text-[#c5a030] font-medium block mb-1">Wed</span>
                    <div class="h-[32px] bg-gradient-to-t from-[#1a1a2e] to-[#e8573a] rounded-[3px]"></div>
                  </div>
                  <div class="text-center">
                    <span class="text-[9px] text-[#c5a030] font-medium block mb-1">Thu</span>
                    <div class="h-[32px] bg-gradient-to-t from-[#1a1a2e] to-[#e8573a] rounded-[3px]"></div>
                  </div>
                  <div class="text-center">
                    <span class="text-[9px] text-[#c5a030] font-medium block mb-1">Fri</span>
                    <div class="h-[32px] bg-gradient-to-t from-[#1a1a2e] to-[#e8573a] rounded-[3px]"></div>
                  </div>
                  <div class="text-center">
                    <span class="text-[9px] text-[#9ca3af] font-medium block mb-1">Sat</span>
                    <div class="h-[32px] bg-[#e5e7eb]/30 rounded-[3px] border border-dashed border-[#e5e7eb]"></div>
                  </div>
                  <div class="text-center">
                    <span class="text-[9px] text-[#9ca3af] font-medium block mb-1">Sun</span>
                    <div class="h-[32px] bg-[#e5e7eb]/30 rounded-[3px] border border-dashed border-[#e5e7eb]"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between mt-1.5">
                  <span class="text-[10px] text-[#c5a030] font-medium">40 active hours</span>
                  <span class="text-[10px] text-[#c5a030]">Peak business hours only</span>
                </div>
              </div>

              <!-- Flex spacer to push stats to bottom -->
              <div class="flex-1"></div>

              <!-- Stats row -->
              <div class="grid grid-cols-3 gap-3 pt-4 border-t border-[#fdecc8]/30">
                <div>
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">76%</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Protected hours</p>
                </div>
                <div class="text-center">
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">0</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Manual effort</p>
                </div>
                <div class="text-right">
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">28%</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Engagement uplift</p>
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
                      <h3 class="text-[14px] font-semibold text-[#374151] leading-tight">LinkedIn Campaign Manager</h3>
                      <p class="text-[11px] text-[#9ca3af] mt-0.5">No scheduling feature</p>
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
              <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#e5e7eb] via-[#fdecc8] to-[#c5a030]"></div>
              <div class="relative bg-gradient-to-br from-[#1a1a2e] to-[#e8573a] text-white text-[10px] font-bold tracking-[0.06em] uppercase px-4 py-2 rounded-full shadow-[0_4px_20px_-4px_rgba(26,26,46,0.35)] flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M4 9l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Upgrade to
              </div>
            </div>

            <!-- adRadar Card -->
            <div class="group relative rounded-2xl flex-1 transition-all duration-300">
              <div class="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#c5a030]/25 via-[#f0d48a]/15 to-[#c5a030]/25 opacity-60 group-hover:opacity-100 blur-[3px] transition-opacity duration-500"></div>
              <div class="relative bg-gradient-to-br from-[#fffdf5] via-[#fffbe3] to-[#fdecc8] rounded-2xl border-2 border-[#fdecc8] p-5 lg:p-6 shadow-[0_8px_30px_-8px_rgba(197,160,48,0.15)] group-hover:shadow-[0_16px_50px_-12px_rgba(197,160,48,0.22)] flex flex-col h-full">
                <div class="shimmer-sweep absolute inset-0 pointer-events-none z-10 rounded-2xl"></div>

                <!-- Header -->
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-[#f0d48a] to-[#c5a030] p-[2px] shadow-[0_4px_12px_-2px_rgba(197,160,48,0.3)]">
                      <div class="w-full h-full rounded-full bg-[#fbf5df] overflow-hidden">
                        <img src="/agents/Campaign Scheduling Agent.png" alt="" class="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 class="text-[14px] font-bold text-[#1a1a2e] leading-tight">adRadar Campaign Scheduling</h3>
                      <p class="text-[11px] text-[#c5a030] mt-0.5">Automated day/time control</p>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#5e4a0e] bg-[#f0d48a] rounded-full px-2.5 py-0.5">Full Control</span>
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
                <div class="bg-white/60 backdrop-blur-sm rounded-xl border border-[#fdecc8]/30 p-3.5 mb-4">
                  <p class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#c5a030] mb-2.5">Impact when enabled</p>
                  <div class="grid grid-cols-3 gap-2">
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">76%</p>
                      <p class="text-[10px] text-[#6b7280] mt-1 leading-tight">Off-hours<br/>protected</p>
                    </div>
                    <div class="text-center border-l border-r border-[#fdecc8]/30">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">28%</p>
                      <p class="text-[10px] text-[#6b7280] mt-1 leading-tight">Engagement<br/>uplift</p>
                    </div>
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">0 hrs</p>
                      <p class="text-[10px] text-[#6b7280] mt-1 leading-tight">Manual<br/>overhead</p>
                    </div>
                  </div>
                </div>

                <!-- Bottom highlight strip -->
                <div class="flex items-center justify-between pt-3.5 border-t border-[#fdecc8]/20">
                  <div class="flex items-center gap-2.5">
                    <div class="flex -space-x-1.5">
                      <div class="w-5 h-5 rounded-full bg-[#a8d1dc] ring-2 ring-[#fffbe3] overflow-hidden"><img src="/agents/Impression Capping Agent.png" alt="" class="w-full h-full object-cover"/></div>
                      <div class="w-5 h-5 rounded-full bg-[#acdfa4] ring-2 ring-[#fffbe3] overflow-hidden"><img src="/agents/Bidding Optimization Agent.png" alt="" class="w-full h-full object-cover"/></div>
                      <div class="w-5 h-5 rounded-full bg-[#ee95a0] ring-2 ring-[#fffbe3] overflow-hidden"><img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                    </div>
                    <span class="text-[11px] text-[#c5a030] font-medium">+6 agents</span>
                  </div>
                  <a href="#" class="text-[11px] font-semibold text-[#1a1a2e] hover:text-[#c5a030] transition-colors flex items-center gap-1">
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
        <div class="absolute top-[20%] left-[-8%] w-[25%] h-[60%] bg-radial-[closest-side] from-[#f0d48a]/8 to-transparent blur-[80px] pointer-events-none -z-10"></div>
        <div class="absolute bottom-[20%] right-[-8%] w-[25%] h-[60%] bg-radial-[closest-side] from-[#c5a030]/6 to-transparent blur-[80px] pointer-events-none -z-10"></div>

        <div class="h-full flex flex-col justify-center">
          <div class="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16 w-full">

            <!-- Header -->
            <div class="mb-6 lg:mb-8">
              <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a]">
                How It Works
              </span>
              <h2 class="text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mt-1.5 lg:mt-2">
                Configure once. Agent runs<br class="hidden lg:block" />
                <span class="section-gradient-text">every scheduled window.</span>
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
                              <!-- Step 1 viz: Schedule Configuration -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#f0d48a] to-[#c5a030] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"/><path d="M8 5v3l2.5 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Schedule Configuration</span>
                                </div>
                                <!-- Timezone selector -->
                                <div class="bg-[#fffbe3] rounded-lg px-3 py-2.5 mb-3 flex items-center justify-between">
                                  <div>
                                    <p class="text-[10px] text-[#6b7280] uppercase tracking-[0.04em]">Timezone</p>
                                    <p class="text-[12px] font-semibold text-[#1a1a2e]">US/Eastern (UTC-5)</p>
                                  </div>
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5l3 3 3-3" stroke="#c5a030" stroke-width="1.5" stroke-linecap="round"/></svg>
                                </div>
                                <!-- Day/time grid -->
                                <div class="space-y-2">
                                  <div class="flex items-center justify-between bg-[#fef9f7] rounded-lg px-3 py-2.5">
                                    <div class="flex items-center gap-2">
                                      <div class="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                                      <p class="text-[12px] font-semibold text-[#1a1a2e]">Monday - Friday</p>
                                    </div>
                                    <span class="text-[11px] font-bold text-[#c5a030] bg-[#fffbe3] px-2 py-0.5 rounded-full">8:00am - 6:00pm</span>
                                  </div>
                                  <div class="flex items-center justify-between bg-[#f9fafb] rounded-lg px-3 py-2.5">
                                    <div class="flex items-center gap-2">
                                      <div class="w-2 h-2 rounded-full bg-[#e5e7eb]"></div>
                                      <p class="text-[12px] font-medium text-[#9ca3af]">Saturday - Sunday</p>
                                    </div>
                                    <span class="text-[11px] font-medium text-[#9ca3af] bg-[#f3f4f6] px-2 py-0.5 rounded-full">Paused</span>
                                  </div>
                                </div>
                                <div class="mt-4 flex items-center gap-2 text-[11px] text-[#c5a030] font-medium">
                                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8.5l3 3 5-6" stroke="#c5a030" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                  50 active hours per week configured
                                </div>
                              </div>
                            }
                            @case (1) {
                              <!-- Step 2 viz: Campaign Activation -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center justify-between mb-4">
                                  <div class="flex items-center gap-2">
                                    <div class="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></div>
                                    <span class="text-[13px] font-semibold text-[#111827]">Campaign Activation</span>
                                  </div>
                                  <span class="text-[10px] text-[#6b7280] bg-[#f3f4f6] px-2 py-0.5 rounded-full">Mon 8:00am ET</span>
                                </div>
                                <!-- Activated campaigns -->
                                <div class="space-y-2.5">
                                  <div class="bg-[#f0fdf4] border border-[#22c55e]/20 rounded-lg px-3 py-2.5 flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                      <div class="w-6 h-6 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#22c55e" stroke-width="1.3" stroke-linecap="round"/></svg>
                                      </div>
                                      <span class="text-[11px] font-medium text-[#374151]">Brand Awareness - Enterprise</span>
                                    </div>
                                    <span class="text-[9px] font-bold text-[#22c55e] bg-[#dcfce7] px-2 py-0.5 rounded-full">Active</span>
                                  </div>
                                  <div class="bg-[#f0fdf4] border border-[#22c55e]/20 rounded-lg px-3 py-2.5 flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                      <div class="w-6 h-6 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#22c55e" stroke-width="1.3" stroke-linecap="round"/></svg>
                                      </div>
                                      <span class="text-[11px] font-medium text-[#374151]">Lead Gen - Mid-Market</span>
                                    </div>
                                    <span class="text-[9px] font-bold text-[#22c55e] bg-[#dcfce7] px-2 py-0.5 rounded-full">Active</span>
                                  </div>
                                  <div class="bg-[#f0fdf4] border border-[#22c55e]/20 rounded-lg px-3 py-2.5 flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                      <div class="w-6 h-6 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#22c55e" stroke-width="1.3" stroke-linecap="round"/></svg>
                                      </div>
                                      <span class="text-[11px] font-medium text-[#374151]">Website Visits - EMEA</span>
                                    </div>
                                    <span class="text-[9px] font-bold text-[#22c55e] bg-[#dcfce7] px-2 py-0.5 rounded-full">Active</span>
                                  </div>
                                </div>
                                <div class="mt-3 pt-3 border-t border-[#f3f4f6] flex items-center justify-between">
                                  <span class="text-[10px] text-[#6b7280]">3 campaigns activated</span>
                                  <span class="text-[10px] text-[#c5a030] font-medium">Schedule window open</span>
                                </div>
                              </div>
                            }
                            @case (2) {
                              <!-- Step 3 viz: Auto-Pause Triggered -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-[#fffbe3] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="4" y="3" width="3" height="10" rx="1" fill="#c5a030"/><rect x="9" y="3" width="3" height="10" rx="1" fill="#c5a030"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Auto-Pause Triggered</span>
                                </div>
                                <!-- Paused status -->
                                <div class="bg-[#fffbe3]/60 border border-[#fdecc8] rounded-lg p-3 mb-3">
                                  <div class="flex items-center justify-between mb-2">
                                    <span class="text-[11px] font-semibold text-[#5e4a0e]">Friday 6:00pm ET</span>
                                    <span class="text-[9px] font-bold tracking-[0.04em] uppercase text-[#c5a030] bg-[#f0d48a]/40 px-2 py-0.5 rounded-full">Window closed</span>
                                  </div>
                                  <p class="text-[10px] text-[#6b7280]">All 3 campaigns paused automatically</p>
                                </div>
                                <!-- Paused campaigns -->
                                <div class="space-y-2">
                                  <div class="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg px-3 py-2 flex items-center justify-between">
                                    <span class="text-[11px] font-medium text-[#9ca3af]">Brand Awareness - Enterprise</span>
                                    <span class="text-[9px] font-bold text-[#9ca3af] bg-[#f3f4f6] px-2 py-0.5 rounded-full">Paused</span>
                                  </div>
                                  <div class="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg px-3 py-2 flex items-center justify-between">
                                    <span class="text-[11px] font-medium text-[#9ca3af]">Lead Gen - Mid-Market</span>
                                    <span class="text-[9px] font-bold text-[#9ca3af] bg-[#f3f4f6] px-2 py-0.5 rounded-full">Paused</span>
                                  </div>
                                  <div class="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg px-3 py-2 flex items-center justify-between">
                                    <span class="text-[11px] font-medium text-[#9ca3af]">Website Visits - EMEA</span>
                                    <span class="text-[9px] font-bold text-[#9ca3af] bg-[#f3f4f6] px-2 py-0.5 rounded-full">Paused</span>
                                  </div>
                                </div>
                                <p class="text-[10px] text-[#6b7280] mt-3 flex items-center gap-1">
                                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#6b7280" stroke-width="1.2"/><path d="M8 5v3l2 1" stroke="#6b7280" stroke-width="1.2" stroke-linecap="round"/></svg>
                                  Resumes Monday 8:00am ET automatically
                                </p>
                              </div>
                            }
                            @case (3) {
                              <!-- Step 4 viz: Multi-Timezone Blocks -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#f0d48a] to-[#c5a030] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.3"/><path d="M1 8h14" stroke="white" stroke-width="1" opacity="0.5"/><ellipse cx="8" cy="8" rx="3" ry="6" stroke="white" stroke-width="1" opacity="0.5"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Multi-Timezone Blocks</span>
                                </div>
                                <!-- Timezone blocks -->
                                <div class="space-y-2.5">
                                  <div class="bg-[#fffbe3]/50 border border-[#fdecc8] rounded-lg p-3">
                                    <div class="flex items-center justify-between mb-1.5">
                                      <span class="text-[11px] font-semibold text-[#1a1a2e]">US/Eastern</span>
                                      <span class="text-[10px] text-[#c5a030] font-medium">UTC-5</span>
                                    </div>
                                    <div class="flex items-center gap-1.5">
                                      <div class="flex-1 h-[6px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                        <div class="h-full w-[42%] bg-gradient-to-r from-[#c5a030] to-[#f0d48a] rounded-full ml-[33%]"></div>
                                      </div>
                                      <span class="text-[10px] text-[#6b7280]">8am-6pm</span>
                                    </div>
                                  </div>
                                  <div class="bg-[#fffbe3]/50 border border-[#fdecc8] rounded-lg p-3">
                                    <div class="flex items-center justify-between mb-1.5">
                                      <span class="text-[11px] font-semibold text-[#1a1a2e]">Europe/London</span>
                                      <span class="text-[10px] text-[#c5a030] font-medium">UTC+0</span>
                                    </div>
                                    <div class="flex items-center gap-1.5">
                                      <div class="flex-1 h-[6px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                        <div class="h-full w-[37%] bg-gradient-to-r from-[#e8573a] to-[#ff6b35] rounded-full ml-[37%]"></div>
                                      </div>
                                      <span class="text-[10px] text-[#6b7280]">9am-5pm</span>
                                    </div>
                                  </div>
                                  <div class="bg-[#fffbe3]/50 border border-[#fdecc8] rounded-lg p-3">
                                    <div class="flex items-center justify-between mb-1.5">
                                      <span class="text-[11px] font-semibold text-[#1a1a2e]">Asia/Singapore</span>
                                      <span class="text-[10px] text-[#c5a030] font-medium">UTC+8</span>
                                    </div>
                                    <div class="flex items-center gap-1.5">
                                      <div class="flex-1 h-[6px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                        <div class="h-full w-[37%] bg-gradient-to-r from-[#1a1a2e] to-[#374151] rounded-full ml-[4%]"></div>
                                      </div>
                                      <span class="text-[10px] text-[#6b7280]">9am-6pm</span>
                                    </div>
                                  </div>
                                </div>
                                <p class="text-[10px] text-[#c5a030] font-medium mt-3 flex items-center gap-1">
                                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M4 8.5l3 3 5-6" stroke="#c5a030" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                  Each block enforced independently
                                </p>
                              </div>
                            }
                            @case (4) {
                              <!-- Step 5 viz: Delivery Timeline Report -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="2" stroke="white" stroke-width="1.3"/><path d="M2 6h12" stroke="white" stroke-width="1.3"/><path d="M5 3V1M11 3V1" stroke="white" stroke-width="1.3" stroke-linecap="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Delivery Timeline Report</span>
                                </div>
                                <!-- Day-by-day timeline -->
                                <div class="space-y-2 mb-3">
                                  <div class="flex items-center gap-2">
                                    <span class="text-[10px] text-[#374151] font-medium w-[32px]">Mon</span>
                                    <div class="flex-1 h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                      <div class="h-full w-[72%] bg-gradient-to-r from-[#c5a030] to-[#f0d48a] rounded-full"></div>
                                    </div>
                                    <span class="text-[10px] text-[#374151] font-semibold w-[40px] text-right">1,240</span>
                                  </div>
                                  <div class="flex items-center gap-2">
                                    <span class="text-[10px] text-[#374151] font-medium w-[32px]">Tue</span>
                                    <div class="flex-1 h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                      <div class="h-full w-[85%] bg-gradient-to-r from-[#c5a030] to-[#f0d48a] rounded-full"></div>
                                    </div>
                                    <span class="text-[10px] text-[#374151] font-semibold w-[40px] text-right">1,480</span>
                                  </div>
                                  <div class="flex items-center gap-2">
                                    <span class="text-[10px] text-[#374151] font-medium w-[32px]">Wed</span>
                                    <div class="flex-1 h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                      <div class="h-full w-[68%] bg-gradient-to-r from-[#c5a030] to-[#f0d48a] rounded-full"></div>
                                    </div>
                                    <span class="text-[10px] text-[#374151] font-semibold w-[40px] text-right">1,180</span>
                                  </div>
                                  <div class="flex items-center gap-2">
                                    <span class="text-[10px] text-[#374151] font-medium w-[32px]">Thu</span>
                                    <div class="flex-1 h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                      <div class="h-full w-[78%] bg-gradient-to-r from-[#c5a030] to-[#f0d48a] rounded-full"></div>
                                    </div>
                                    <span class="text-[10px] text-[#374151] font-semibold w-[40px] text-right">1,350</span>
                                  </div>
                                  <div class="flex items-center gap-2">
                                    <span class="text-[10px] text-[#374151] font-medium w-[32px]">Fri</span>
                                    <div class="flex-1 h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                      <div class="h-full w-[60%] bg-gradient-to-r from-[#c5a030] to-[#f0d48a] rounded-full"></div>
                                    </div>
                                    <span class="text-[10px] text-[#374151] font-semibold w-[40px] text-right">1,040</span>
                                  </div>
                                  <div class="flex items-center gap-2">
                                    <span class="text-[10px] text-[#9ca3af] font-medium w-[32px]">Sat</span>
                                    <div class="flex-1 h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden"></div>
                                    <span class="text-[10px] text-[#9ca3af] font-medium w-[40px] text-right">0</span>
                                  </div>
                                  <div class="flex items-center gap-2">
                                    <span class="text-[10px] text-[#9ca3af] font-medium w-[32px]">Sun</span>
                                    <div class="flex-1 h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden"></div>
                                    <span class="text-[10px] text-[#9ca3af] font-medium w-[40px] text-right">0</span>
                                  </div>
                                </div>
                                <div class="pt-3 border-t border-[#f3f4f6] flex items-center justify-between">
                                  <span class="text-[10px] text-[#6b7280]">6,290 total impressions this week</span>
                                  <span class="text-[10px] text-[#22c55e] font-semibold">0 off-schedule</span>
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
      <div class="absolute top-[30%] left-[50%] -translate-x-1/2 w-[50%] h-[50%] bg-radial-[closest-side] from-[#c5a030]/5 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-12">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
            The Difference
          </span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827]">
            What changes when delivery is <span class="section-gradient-text">scheduled.</span>
          </h2>
        </div>

        <!-- Desktop: Enhanced table -->
        <div class="hidden md:block">
          <div class="bg-white rounded-2xl border border-[#fdecc8]/40 overflow-hidden shadow-[0_4px_24px_-4px_rgba(197,160,48,0.1)]">

            <!-- Table Header -->
            <div class="grid grid-cols-[1fr_1fr_1.15fr]">
              <!-- Capability header -->
              <div class="bg-[#fffdf5] p-5 border-b border-[#e5e7eb]/60">
                <span class="text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.04em]">Capability</span>
              </div>
              <!-- Without scheduling header -->
              <div class="bg-[#fffdf5] p-5 border-b border-[#e5e7eb]/60 border-l border-l-[#e5e7eb]/40">
                <div class="flex items-center gap-2">
                  <div class="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.04em]">Without scheduling</span>
                </div>
              </div>
              <!-- With adRadar header -->
              <div class="bg-gradient-to-r from-[#1a1a2e] to-[#1e1e36] p-5 border-b border-[#1a1a2e]">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-[#fbf5df] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0">
                    <img src="/agents/Campaign Scheduling Agent.png" alt="Campaign Scheduling Agent" class="w-full h-full object-cover rounded-full" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[13px] font-semibold text-white leading-tight">With adRadar Scheduling</span>
                    <span class="text-[10px] text-white/50 leading-tight">Campaign Scheduling Agent</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Table Rows -->
            @for (row of comparisonRows; track row.capability; let i = $index) {
              <div
                class="group grid grid-cols-[1fr_1fr_1.15fr] border-t border-[#e5e7eb]/40 transition-colors duration-200 hover:bg-[#fffdf5]/60"
              >
                <!-- Capability -->
                <div class="p-5 flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-[#fffbe3] flex items-center justify-center shrink-0">
                    @switch (i) {
                      @case (0) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="#c5a030" stroke-width="1.5"/><path d="M8 5v3h3" stroke="#c5a030" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                      @case (1) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="2" stroke="#c5a030" stroke-width="1.5"/><path d="M2 6h12" stroke="#c5a030" stroke-width="1.5"/></svg>
                      }
                      @case (2) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="#c5a030" stroke-width="1.5"/><path d="M8 5v3l2.5 1.5" stroke="#c5a030" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                      @case (3) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#c5a030" stroke-width="1.3"/><path d="M1 8h14" stroke="#c5a030" stroke-width="1" opacity="0.5"/><ellipse cx="8" cy="8" rx="3" ry="6" stroke="#c5a030" stroke-width="1" opacity="0.5"/></svg>
                      }
                      @case (4) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12l4-8 4 8" stroke="#c5a030" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 9h5" stroke="#c5a030" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (5) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="8" width="3" height="6" rx="0.5" fill="#c5a030"/><rect x="6.5" y="5" width="3" height="9" rx="0.5" fill="#c5a030" opacity="0.7"/><rect x="11" y="2" width="3" height="12" rx="0.5" fill="#c5a030" opacity="0.4"/></svg>
                      }
                    }
                  </div>
                  <span class="text-[14px] font-semibold text-[#111827]">{{ row.capability }}</span>
                </div>

                <!-- Without scheduling value -->
                <div class="p-5 flex items-center gap-2.5 border-l border-[#e5e7eb]/40">
                  <div class="w-[18px] h-[18px] rounded-full bg-[#fef2f2] flex items-center justify-center shrink-0">
                    <svg width="7" height="7" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[14px] text-[#9ca3af]">{{ row.without }}</span>
                </div>

                <!-- With adRadar value -->
                <div class="p-5 flex items-center gap-2.5 bg-[#fffdf5]/70 group-hover:bg-[#fffbe3]/60 transition-colors border-l-2 border-l-[#c5a030]/20">
                  <div class="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center shrink-0 shadow-[0_1px_4px_-1px_rgba(26,26,46,0.3)]">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <span class="text-[14px] text-[#1a1a2e] font-semibold">{{ row.withScheduling }}</span>
                </div>
              </div>
            }

          </div>
        </div>

        <!-- Mobile: Stacked cards -->
        <div class="md:hidden space-y-3">
          <!-- Mobile branded header card -->
          <div class="flex items-center gap-3 bg-gradient-to-r from-[#1a1a2e] to-[#1e1e36] rounded-xl px-4 py-3">
            <div class="w-8 h-8 rounded-full bg-[#fbf5df] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0">
              <img src="/agents/Campaign Scheduling Agent.png" alt="" class="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <span class="text-[13px] font-semibold text-white block leading-tight">adRadar Campaign Scheduling</span>
              <span class="text-[10px] text-white/50 block leading-tight">See the difference the agent makes</span>
            </div>
          </div>

          @for (row of comparisonRows; track row.capability) {
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
                <div class="p-4 bg-[#fffdf5]/70 border-l-2 border-l-[#c5a030]/20">
                  <div class="flex items-center gap-1.5 mb-2">
                    <div class="w-[14px] h-[14px] rounded-full bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                      <svg width="6" height="6" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
                    </div>
                    <p class="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#c5a030]">With adRadar</p>
                  </div>
                  <p class="text-[13px] text-[#1a1a2e] font-semibold">{{ row.withScheduling }}</p>
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
      <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-radial-[closest-side] from-[#c5a030]/8 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-radial-[closest-side] from-[#ff6b35]/6 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] bg-radial-[closest-side] from-[#f0d48a]/4 to-transparent blur-[120px] pointer-events-none -z-10"></div>
      <!-- Dot pattern overlay -->
      <div class="absolute inset-0 opacity-[0.04] pointer-events-none -z-10" style="background-image: radial-gradient(circle, #c5a030 1px, transparent 1px); background-size: 28px 28px;"></div>

      <div class="max-w-[1200px] mx-auto px-6">

        <!-- Top: Badge + Heading row -->
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
          <div class="max-w-[600px]">
            <div class="flex items-center gap-2.5 mb-4">
              <div class="w-8 h-8 rounded-full bg-[#fbf5df] p-[2px] overflow-hidden">
                <img src="/agents/Campaign Scheduling Agent.png" alt="" class="w-full h-full object-cover rounded-full" />
              </div>
              <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a]">
                Proven Results
              </span>
            </div>
            <h2 class="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.08] tracking-[-0.025em] text-[#111827]">
              Same budget. Better timing.<br class="hidden lg:block" />
              <span class="section-gradient-text">Measurably better results.</span>
            </h2>
          </div>
          <p class="text-[15px] text-[#4b5563] leading-[1.65] max-w-[340px] lg:text-right">
            Measured when campaigns are restricted to peak business hours only — no additional spend required.
          </p>
        </div>

        <!-- Results cards -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- Card 1: 76% Protected hours — donut chart -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-6 lg:p-7 h-full group-hover:shadow-[0_8px_30px_-6px_rgba(197,160,48,0.12)] transition-shadow duration-500">

              <!-- Badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">168 hrs</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#c5a030" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#c5a030] bg-[#f0d48a]/25 px-2.5 py-1 rounded-full">40 hrs active</span>
              </div>

              <!-- Donut chart visualization -->
              <div class="relative w-[140px] h-[140px] mx-auto mb-6">
                <svg class="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" stroke-width="12" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#ef4444" stroke-opacity="0.5" stroke-width="12"
                    stroke-dasharray="314.2 0" stroke-linecap="round" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="url(#resultGradCS1)" stroke-width="12"
                    stroke-dasharray="238.8 75.4" stroke-linecap="round" />
                  <defs>
                    <linearGradient id="resultGradCS1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#c5a030" />
                      <stop offset="100%" stop-color="#f0d48a" />
                    </linearGradient>
                  </defs>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-[36px] font-bold text-[#111827] tracking-[-0.03em]">76%</span>
                </div>
              </div>

              <h3 class="text-[18px] font-bold text-[#111827] mb-1.5 text-center">Of the week protected</h3>
              <p class="text-[13px] text-[#6b7280] text-center leading-[1.5]">
                Mon-Fri 9-5 blocks 128 of 168 weekly hours from off-hours delivery
              </p>
            </div>
          </div>

          <!-- Card 2: 28% Engagement rate uplift — bar chart before/after -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-6 lg:p-7 h-full group-hover:shadow-[0_8px_30px_-6px_rgba(197,160,48,0.12)] transition-shadow duration-500">

              <!-- Badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">24/7 ads</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#c5a030" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#c5a030] bg-[#f0d48a]/25 px-2.5 py-1 rounded-full">Peak hours</span>
              </div>

              <!-- Bar chart visualization — before vs after -->
              <div class="flex items-end gap-6 justify-center h-[140px] mb-6 px-4">
                <!-- Before bar -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[56px] rounded-lg h-[65px] relative overflow-hidden bg-[#fee2e2] border border-[#fca5a5]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#ef4444] to-[#fca5a5]"></div>
                  </div>
                  <span class="text-[10px] text-[#6b7280] font-medium">Before</span>
                </div>
                <!-- After bar -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[56px] rounded-lg h-[120px] relative overflow-hidden bg-[#c5a030] border border-[#f0d48a]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#c5a030] via-[#f0d48a] to-[#f0d48a]"></div>
                  </div>
                  <span class="text-[10px] text-[#c5a030] font-semibold">After</span>
                </div>
              </div>

              <div class="text-center">
                <p class="text-[48px] font-bold text-[#111827] tracking-[-0.04em] leading-none mb-1.5">28%</p>
                <h3 class="text-[18px] font-bold text-[#111827] mb-1.5">Engagement rate uplift</h3>
                <p class="text-[13px] text-[#6b7280] leading-[1.5]">
                  Average improvement when B2B campaigns run during peak business hours only
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: 0 hrs Manual overhead — automation viz -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-6 lg:p-7 h-full group-hover:shadow-[0_8px_30px_-6px_rgba(197,160,48,0.12)] transition-shadow duration-500">

              <!-- Badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">Manual</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#c5a030" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#16a34a] bg-[#dcfce7] px-2.5 py-1 rounded-full">Automated</span>
              </div>

              <!-- Automation flow visualization -->
              <div class="relative mb-6 px-1">
                <!-- Manual process -->
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[11px] text-[#6b7280] font-medium uppercase tracking-[0.04em]">Manual effort per week</span>
                    <span class="text-[12px] text-[#ef4444] font-semibold line-through">2-3 hrs</span>
                  </div>
                  <div class="h-[12px] bg-[#f3f4f6] rounded-full overflow-hidden border border-[#e5e7eb]">
                    <div class="h-full w-[60%] bg-gradient-to-r from-[#ef4444] to-[#f87171] rounded-full"></div>
                  </div>
                </div>
                <!-- With agent -->
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[11px] text-[#16a34a] font-semibold uppercase tracking-[0.04em]">With scheduling agent</span>
                    <span class="text-[12px] text-[#16a34a] font-bold">0 hrs</span>
                  </div>
                  <div class="h-[12px] bg-[#f3f4f6] rounded-full overflow-hidden border border-[#86efac]">
                    <div class="h-full w-[2%] bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-full"></div>
                  </div>
                </div>
                <!-- Automation indicator -->
                <div class="flex items-center gap-2 mt-4 bg-[#dcfce7] border border-[#86efac] rounded-lg px-3 py-2.5">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8.5l3 3 5-6" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span class="text-[11px] text-[#16a34a] font-medium">Agent handles all pausing and resuming</span>
                </div>
              </div>

              <div class="text-center">
                <p class="text-[48px] font-bold text-[#111827] tracking-[-0.04em] leading-none mb-1.5">0 hrs</p>
                <h3 class="text-[18px] font-bold text-[#111827] mb-1.5">Manual overhead per week</h3>
                <p class="text-[13px] text-[#6b7280] leading-[1.5]">
                  Agent handles all pausing and resuming — no human intervention required
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom trust line -->
        <div class="flex items-center justify-center gap-3 mt-10 lg:mt-14">
          <div class="w-[1px] h-4 bg-gradient-to-b from-transparent to-[#c5a030]/20"></div>
          <p class="text-[13px] text-[#9ca3af] text-center">
            Results measured when campaigns are restricted to configured schedule windows
          </p>
          <div class="w-[1px] h-4 bg-gradient-to-b from-transparent to-[#c5a030]/20"></div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 7: RELATED AGENTS
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef9f7] via-[#fef8f6] to-white pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[50%] bg-radial-[closest-side] from-[#f0d48a]/8 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-10">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
            Connected Intelligence
          </span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
            Campaign scheduling is one layer.
            <br class="hidden md:block" />
            Six agents <span class="section-gradient-text">work together.</span>
          </h2>
          <p class="text-[15px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[720px] mx-0 md:mx-auto">
            The Campaign Scheduling Agent shares context and memory with every other adRadar agent —
            so scheduling decisions inform impression capping, bid optimization, creative rotation, and
            competitor intelligence simultaneously.
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
                <p class="text-[13px] text-[#6b7280] leading-[1.55] mb-4 flex-1">
                  {{ agent.description }}
                </p>

                <!-- Bottom: Connection line + arrow -->
                <div class="flex items-center justify-between pt-3 border-t transition-colors duration-300"
                  [style.borderColor]="agent.accentColor + '20'">
                  <!-- Connection to Campaign Scheduling badge -->
                  <div class="flex items-center gap-1.5">
                    <div class="w-4 h-4 rounded-full bg-[#fbf5df] overflow-hidden shrink-0">
                      <img src="/agents/Campaign Scheduling Agent.png" alt="" class="w-full h-full object-cover" />
                    </div>
                    <div class="w-5 h-[1.5px] rounded-full"
                      [style.background]="'linear-gradient(90deg, #f0d48a, ' + agent.accentColor + ')'">
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
      headingStart="Stop paying for impressions when your buyers"
      headingGradient="aren't online."
      description="Connect your LinkedIn Ads account in 2 minutes. The Campaign Scheduling Agent starts monitoring immediately. No credit card required."
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
        rgba(240, 212, 138, 0.06),
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
export class CampaignSchedulingComponent implements OnInit, OnDestroy {
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
    'No native scheduling or dayparting feature',
    'Manual pause/resume required every week',
    'No timezone-aware delivery control',
    'Campaigns run 24/7 by default',
    'Breaks whenever someone forgets or is unavailable',
    'No visibility into off-hours delivery waste',
  ];

  adradarAdvantages = [
    'Configure day, time, and timezone once',
    'Agent handles all pausing and resuming automatically',
    'Full timezone control — set per campaign or globally',
    'Campaigns active only in configured windows',
    'Runs reliably weekly, no human intervention',
    'Delivery timeline report shows scheduled vs off-hours',
  ];

  steps = [
    {
      number: '01',
      label: 'Configure',
      title: 'Select campaigns and set your schedule',
      description:
        'Choose which campaigns to apply the agent to. Set your timezone, then define one or more day and time windows — for example, Monday to Friday, 8am to 6pm.',
    },
    {
      number: '02',
      label: 'Activate',
      title: 'Agent activates campaigns at the start of each window',
      description:
        'At the exact start of your configured schedule, the agent activates the linked campaigns. No manual action. No reminder.',
    },
    {
      number: '03',
      label: 'Pause',
      title: 'Campaigns are automatically paused outside the schedule',
      description:
        'The moment your configured window closes, the agent pauses all linked campaigns. Friday at 6pm — paused. Saturday and Sunday — paused.',
    },
    {
      number: '04',
      label: 'Multi-Zone',
      title: 'Multiple schedule blocks for complex time zones',
      description:
        'If your buyers are in multiple regions, configure separate schedule blocks for each timezone. The agent enforces each block independently.',
    },
    {
      number: '05',
      label: 'Report',
      title: 'Delivery timeline report shows exactly what ran and when',
      description:
        'The agent\'s report surfaces a day-by-day delivery timeline — impressions delivered during active windows, days where campaigns were paused.',
    },
  ];

  comparisonRows: ComparisonRow[] = [
    {
      capability: 'Delivery hours',
      without: '24/7 — all 168 hours of the week',
      withScheduling: 'Configured windows only — e.g. 40 hrs/week',
    },
    {
      capability: 'Weekend spend',
      without: 'Budget consumed Saturday & Sunday',
      withScheduling: 'Fully blocked — zero off-schedule delivery',
    },
    {
      capability: 'Time-of-day control',
      without: 'No native LinkedIn feature',
      withScheduling: 'Any start/end time, any timezone',
    },
    {
      capability: 'Multi-timezone delivery',
      without: 'Not supported natively',
      withScheduling: 'Multiple schedule blocks per campaign',
    },
    {
      capability: 'Operational overhead',
      without: 'Manual pause/resume every week',
      withScheduling: 'Zero — fully automated by the agent',
    },
    {
      capability: 'Delivery accountability',
      without: 'No report on when impressions ran',
      withScheduling: 'Day-by-day delivery timeline in report',
    },
  ];

  relatedAgents: RelatedAgent[] = [
    {
      name: 'Impression Capping Agent',
      image: '/agents/Impression Capping Agent.png',
      avatarBg: '#a8d1dc',
      description:
        'Cap cycles reset in coordination with schedule windows — ensuring account-level caps are evaluated against active delivery periods, not 24/7 calendar time.',
      accentColor: '#3a97ab',
      route: '/agents/impression-capping',
    },
    {
      name: 'Bidding Optimization Agent',
      image: '/agents/Bidding Optimization Agent.png',
      avatarBg: '#acdfa4',
      description:
        'Bid optimisation runs inside active windows — so bids are tuned for peak-hour competition, not averaged across hours when your buyers aren\'t there.',
      accentColor: '#4a9a42',
      route: '/agents/bidding-optimization',
    },
    {
      name: 'Ad Rotation Agent',
      image: '/agents/Ad Rotation Agent.png',
      avatarBg: '#d9e1fb',
      description:
        'Fatigue tracking is measured against scheduled delivery periods — ensuring rotation recommendations are based on active impression frequency.',
      accentColor: '#6b5ea0',
      route: '/agents/ad-rotation',
    },
    {
      name: 'Company Blocking Agent',
      image: '/agents/Company Blocking Agent.png',
      avatarBg: '#b8dff0',
      description:
        'Company blocking rules stay enforced throughout scheduled windows — no off-hours impressions slip through to blocked companies.',
      accentColor: '#4a9cc5',
      route: '/agents/company-blocking',
    },
    {
      name: 'Title Blocking Agent',
      image: '/agents/Title Blocking Agent.png',
      avatarBg: '#ee95a0',
      description:
        'Title blocking enforcement is synchronized with scheduling windows — ensuring persona-level precision is active during every active delivery hour.',
      accentColor: '#d4606f',
      route: '/agents/title-blocking',
    },
    {
      name: 'Analyse Competitors',
      image: '/agents/Analyse competitors LinkedIn Ads.png',
      avatarBg: '#acdfa4',
      description:
        'Competitor monitoring focuses on scheduled delivery windows — surfacing competitive pressure data that reflects when your campaigns are actually running.',
      accentColor: '#4a9a42',
      route: '/agents/analyse-competitors',
    },
  ];
}
