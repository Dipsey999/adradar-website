import { Component, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, ViewChild, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { CtaSectionComponent } from '../../../components/cta-section/cta-section.component';

interface ComparisonRow {
  capability: string;
  without: string;
  withBlocking: string;
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
  selector: 'app-title-blocking',
  standalone: true,
  imports: [RouterLink, NgClass, CtaSectionComponent],
  template: `
    <!-- ═══════════════════════════════════════════
         SECTION 1: HERO
         ═══════════════════════════════════════════ -->
    <section class="relative pt-12 lg:pt-20 pb-16 lg:pb-20 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef9f7] via-[#fef9fa] to-white pointer-events-none -z-10"></div>
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
            <div class="inline-flex items-center gap-2.5 bg-[#fef6f3]/80 backdrop-blur-sm border border-[#ffe8df]/40 rounded-full px-4 py-1.5 mb-6 shadow-[0_2px_12px_-4px_rgba(232,87,58,0.1)]">
              <div class="w-6 h-6 rounded-full overflow-hidden bg-[#f5a896] ring-2 ring-white/60">
                <img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full object-cover" />
              </div>
              <span class="text-[11px] font-bold tracking-[0.08em] text-[#1a1a2e] uppercase">
                Title Blocking Agent
              </span>
            </div>

            <!-- Heading -->
            <h1 class="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em] text-[#111827] mb-6">
              Your ads shouldn't reach personas that don't matter;
              <span class="hero-gradient-text">while actual buyers scroll past.</span>
            </h1>

            <!-- Subheading -->
            <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-[540px] mb-8">
              Automatically prevent delivery to any job title outside your configured persona, keeping every
              impression locked to seniority, department, and titles that actually move pipeline.
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
                class="h-12 px-8 flex items-center justify-center border border-[#ffe8df] rounded-full text-[15px] font-medium text-[#1a1a2e] hover:bg-[#fef6f3]/50 hover:border-[#e8573a]/50 transition-all duration-300"
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
              <div class="absolute -inset-10 bg-radial-[closest-side] from-[#ee95a0]/20 to-transparent blur-[40px] pointer-events-none"></div>

              <!-- Orbit rings -->
              <div class="absolute inset-[46px] rounded-full border border-dashed border-[#ee95a0]/20"></div>
              <div class="absolute inset-[90px] rounded-full border border-[#ee95a0]/8"></div>

              <!-- Subtle rotating ring -->
              <div class="absolute inset-[44px] rounded-full border border-[#d4606f]/5 orbit-ring"></div>

              <!-- Connecting lines -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 420">
                <line x1="210" y1="210" x2="210" y2="46" stroke="url(#line-grad-tb)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="128" stroke="url(#line-grad-tb)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="292" stroke="url(#line-grad-tb)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="210" y2="374" stroke="url(#line-grad-tb)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="292" stroke="url(#line-grad-tb)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="128" stroke="url(#line-grad-tb)" stroke-width="1" opacity="0.15"/>
                <defs>
                  <linearGradient id="line-grad-tb" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#ee95a0" stop-opacity="0.6"/>
                    <stop offset="100%" stop-color="#ee95a0" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>

              <!-- ══════ CENTER: Title Blocking Agent ══════ -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div class="absolute inset-[-32px] rounded-full bg-[#ee95a0]/6 animate-[pulse-ring_3s_ease-in-out_infinite]"></div>
                <div class="absolute inset-[-22px] rounded-full bg-[#ee95a0]/10 animate-[pulse-ring_3s_ease-in-out_infinite_0.5s]"></div>
                <div class="absolute inset-[-12px] rounded-full bg-gradient-to-br from-[#ee95a0]/20 to-[#d4606f]/12"></div>
                <div class="relative w-[110px] h-[110px] rounded-full bg-gradient-to-br from-[#f4c8ce] to-[#ee95a0] p-[3px] shadow-[0_8px_40px_-4px_rgba(212,96,111,0.35)]">
                  <div class="w-full h-full rounded-full bg-gradient-to-br from-[#fdf2f4] to-[#f4c8ce] overflow-hidden">
                    <img src="/agents/Title Blocking Agent.png" alt="Title Blocking Agent" class="w-full h-full object-cover" />
                  </div>
                </div>
                <div class="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1a1a2e] text-white text-[10px] font-bold tracking-[0.05em] uppercase px-3 py-1 rounded-full shadow-[0_4px_12px_-2px_rgba(26,26,46,0.3)]">
                  Title Blocking
                </div>
              </div>

              <!-- ══════ ORBITING AGENTS ══════ -->
              <!-- Top: Company Blocking -->
              <div class="absolute top-[16px] left-1/2 -translate-x-1/2 z-10 orbit-agent" style="animation-delay: 0s">
                <div class="w-[60px] h-[60px] rounded-full p-[2px] bg-gradient-to-br from-[#b8dff0]/60 to-[#9dcce7]/40 shadow-[0_4px_16px_-4px_rgba(157,204,231,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#e3f3fa] overflow-hidden">
                    <img src="/agents/Company Blocking Agent.png" alt="Company Blocking" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Top-right: Impression Capping -->
              <div class="absolute top-[98px] right-[38px] z-10 orbit-agent" style="animation-delay: 0.4s">
                <div class="w-[56px] h-[56px] rounded-full p-[2px] bg-gradient-to-br from-[#a8d1dc]/50 to-[#d0eef4]/40 shadow-[0_4px_16px_-4px_rgba(168,209,220,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#e5f7fa] overflow-hidden">
                    <img src="/agents/Impression Capping Agent.png" alt="Impression Capping" class="w-full h-full object-cover" />
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
      <div class="absolute inset-0 bg-gradient-to-b from-white via-[#fef9fa] to-[#fef9f7] pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-10">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">The Problem</span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
            LinkedIn job title targeting is set once at launch.
            <br class="hidden md:block" />
            <span class="section-gradient-text">It drifts silently from there.</span>
          </h2>
          <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[680px] mx-0 md:mx-auto">
            Campaigns drift to irrelevant job titles over time, not because of a mistake, but because
            LinkedIn's delivery algorithm optimises for engagement signals, not persona fit.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- Card 1: 55% -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">55%</span>
                <div class="w-10 h-10 rounded-xl bg-[#fef6f3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="8" r="3.5" stroke="#f5a896" stroke-width="1.5" fill="none"/>
                    <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#f5a896" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M14 5l2 2-2 2" stroke="#f5a896" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <line x1="10" y1="7" x2="16" y2="7" stroke="#f5a896" stroke-width="1.3" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                LinkedIn job title data accuracy - nearly half of title targeting is based on incorrect information
              </p>
              <p class="text-[13px] text-[#6b7280] leading-[1.55]">
                The persona you set at launch is not the audience you're actually reaching.
              </p>
            </div>
          </div>

          <!-- Card 2: 35% -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">35%</span>
                <div class="w-10 h-10 rounded-xl bg-[#fef6f3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="11" width="3.5" height="6" rx="1" fill="#f5a896"/>
                    <rect x="8.25" y="7" width="3.5" height="10" rx="1" fill="#f5a896" opacity="0.7"/>
                    <rect x="13.5" y="3" width="3.5" height="14" rx="1" fill="#f5a896" opacity="0.4"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                Average improvement in MQL quality when off-persona titles are systematically blocked
              </p>
              <p class="text-[13px] text-[#6b7280] leading-[1.55]">
                Same budget. Same targeting intent. Tighter persona enforcement.
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
                    <rect x="3" y="3" width="14" height="14" rx="3" stroke="#f5a896" stroke-width="1.5" fill="none"/>
                    <path d="M7 10h6" stroke="#f5a896" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="10" cy="10" r="1" fill="#f5a896" opacity="0.5"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                Native LinkedIn tools to detect and automatically block off-persona title drift as it happens
              </p>
              <p class="text-[13px] text-[#6b7280] leading-[1.55]">
                LinkedIn Campaign Manager reports title delivery, but it doesn't block drift automatically.
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
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef9f7] via-[#fef8f9] to-white pointer-events-none -z-10"></div>
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
              Checking title delivery reports weekly doesn't stop
              <span class="section-gradient-text">budget flowing to wrong personas.</span>
            </h2>
            <p class="text-[16px] text-[#4b5563] leading-[1.7] mb-8 max-w-[540px]">
              LinkedIn's title delivery data is available, but interpreting it, identifying off-persona titles,
              manually excluding them is a reactive process.
            </p>

            <!-- Before / After transformation card -->
            <div class="hidden lg:flex flex-col flex-1 bg-gradient-to-br from-[#fef9f7] to-[#fef6f3]/80 rounded-2xl border border-[#ffe8df]/25 p-6 mt-2">

              <!-- Before: Without blocking -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#fef2f2] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[12px] font-semibold text-[#6b7280] uppercase tracking-[0.04em]">Without blocking</span>
                </div>
                <!-- Bar visualization: concentrated on wrong titles -->
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
                  <span class="text-[10px] text-[#ef4444]/60 font-medium">Off-persona titles</span>
                  <span class="text-[10px] text-[#9ca3af]">Target personas</span>
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

              <!-- After: With blocking -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#fce4e8] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="#1a1a2e" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <span class="text-[12px] font-semibold text-[#1a1a2e] uppercase tracking-[0.04em]">With adRadar blocking</span>
                </div>
                <!-- Bar visualization: even distribution to right personas -->
                <div class="flex gap-[3px] items-end h-[44px]">
                  <div class="flex-1 bg-gradient-to-t from-[#1a1a2e] to-[#e8573a] rounded-[3px] h-[78%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#1a1a2e] to-[#e8573a] rounded-[3px] h-[74%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#1a1a2e]/90 to-[#e8573a] rounded-[3px] h-[70%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#f5a896] rounded-[3px] h-[66%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#f5a896] rounded-[3px] h-[63%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#f5a896] rounded-[3px] h-[60%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#f5a896] to-[#f4c4ca] rounded-[3px] h-[56%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#f5a896] to-[#f4c4ca] rounded-[3px] h-[52%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#f4c4ca] to-[#fce4e8] rounded-[3px] h-[48%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#f4c4ca] to-[#fce4e8] rounded-[3px] h-[44%]"></div>
                </div>
                <div class="flex items-center justify-between mt-1.5">
                  <span class="text-[10px] text-[#e8573a] font-medium">Persona-matched</span>
                  <span class="text-[10px] text-[#e8573a]">Even distribution</span>
                </div>
              </div>

              <!-- Flex spacer -->
              <div class="flex-1"></div>

              <!-- Stats row -->
              <div class="grid grid-cols-3 gap-3 pt-4 border-t border-[#ffe8df]/20">
                <div>
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">3x</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Persona accuracy</p>
                </div>
                <div class="text-center">
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">100%</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Title coverage</p>
                </div>
                <div class="text-right">
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">35%</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">MQL uplift</p>
                </div>
              </div>
            </div>
          </div>

          <!-- ══ RIGHT COLUMN (40%): Stacked comparison cards ══ -->
          <div class="lg:w-[42%] flex flex-col">

            <!-- LinkedIn Card -->
            <div class="bg-white rounded-2xl border border-[#e5e7eb] p-5 lg:p-6 relative">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#f9fafb]/50 rounded-2xl pointer-events-none"></div>
              <div class="relative">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="7" r="3.5" stroke="#9ca3af" stroke-width="1.5" fill="none"/>
                        <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round"/>
                        <line x1="4" y1="16" x2="16" y2="4" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-[14px] font-semibold text-[#374151] leading-tight">LinkedIn title targeting</h3>
                      <p class="text-[11px] text-[#9ca3af] mt-0.5">Manual exclusion only</p>
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

            <!-- adRadar Card -->
            <div class="group relative rounded-2xl flex-1 transition-all duration-300">
              <div class="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#e8573a]/25 via-[#f5a896]/15 to-[#e8573a]/25 opacity-60 group-hover:opacity-100 blur-[3px] transition-opacity duration-500"></div>
              <div class="relative bg-gradient-to-br from-[#fef9f7] via-[#fbf0f3] to-[#f8e8ed] rounded-2xl border-2 border-[#f5a896] p-5 lg:p-6 shadow-[0_8px_30px_-8px_rgba(232,87,58,0.15)] group-hover:shadow-[0_16px_50px_-12px_rgba(232,87,58,0.22)] flex flex-col h-full">
                <div class="shimmer-sweep absolute inset-0 pointer-events-none z-10 rounded-2xl"></div>

                <!-- Header -->
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-[#f4c4ca] to-[#f5a896] p-[2px] shadow-[0_4px_12px_-2px_rgba(232,87,58,0.3)]">
                      <div class="w-full h-full rounded-full bg-[#f5a896] overflow-hidden">
                        <img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 class="text-[14px] font-bold text-[#1a1a2e] leading-tight">adRadar Title Blocking</h3>
                      <p class="text-[11px] text-[#e8573a] mt-0.5">Persona-level control</p>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#1a1a2e] bg-[#fce4e8] rounded-full px-2.5 py-0.5">Full Control</span>
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
                <div class="bg-white/60 backdrop-blur-sm rounded-xl border border-[#ffe8df]/20 p-3.5 mb-4">
                  <p class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#e8573a] mb-2.5">Impact when enabled</p>
                  <div class="grid grid-cols-3 gap-2">
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">3x</p>
                      <p class="text-[10px] text-[#6b7280] mt-1 leading-tight">Persona<br/>accuracy</p>
                    </div>
                    <div class="text-center border-l border-r border-[#ffe8df]/20">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">100%</p>
                      <p class="text-[10px] text-[#6b7280] mt-1 leading-tight">Title<br/>coverage</p>
                    </div>
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">35%</p>
                      <p class="text-[10px] text-[#6b7280] mt-1 leading-tight">MQL<br/>uplift</p>
                    </div>
                  </div>
                </div>

                <!-- Bottom highlight strip -->
                <div class="flex items-center justify-between pt-3.5 border-t border-[#ffe8df]/15">
                  <div class="flex items-center gap-2.5">
                    <div class="flex -space-x-1.5">
                      <div class="w-5 h-5 rounded-full bg-[#b8dff0] ring-2 ring-[#fef6f3] overflow-hidden"><img src="/agents/Company Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                      <div class="w-5 h-5 rounded-full bg-[#acdfa4] ring-2 ring-[#fef6f3] overflow-hidden"><img src="/agents/Bidding Optimization Agent.png" alt="" class="w-full h-full object-cover"/></div>
                      <div class="w-5 h-5 rounded-full bg-[#a8d1dc] ring-2 ring-[#fef6f3] overflow-hidden"><img src="/agents/Impression Capping Agent.png" alt="" class="w-full h-full object-cover"/></div>
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
        <div class="h-full flex flex-col justify-center">
          <div class="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16 w-full">
            <!-- Header -->
            <div class="mb-6 lg:mb-8">
              <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a]">How It Works</span>
              <h2 class="text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mt-1.5 lg:mt-2">
                Define your persona once.<br class="hidden lg:block" />
                <span class="section-gradient-text">The agent enforces it continuously.</span>
              </h2>
            </div>

            <!-- Progress bar with step numbers, labels, connecting lines -->
            <div class="hidden md:flex items-center gap-3 mb-8 lg:mb-10">
              @for (step of steps; track step.number; let i = $index) {
                <button class="group flex items-center gap-2 cursor-pointer" (click)="scrollToStep(i)">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 text-[12px] font-bold"
                    [ngClass]="isStepActive(i) ? 'bg-gradient-to-br from-[#ff4829] to-[#e8573a] text-white shadow-[0_4px_14px_0_rgba(255,72,41,0.25)]' : 'bg-[#e5e7eb] text-[#9ca3af] group-hover:bg-[#d1d5db]'">
                    {{ step.number }}
                  </div>
                  <span class="text-[12px] font-semibold uppercase tracking-[0.04em] transition-all duration-500 hidden lg:block"
                    [ngClass]="isStepActive(i) ? 'text-[#ff4829]' : 'text-[#9ca3af]'">
                    {{ step.label }}
                  </span>
                </button>
                @if (i < steps.length - 1) {
                  <div class="flex-1 h-[2px] rounded-full overflow-hidden bg-[#e5e7eb]">
                    <div class="h-full bg-gradient-to-r from-[#ff4829] to-[#e8573a] rounded-full transition-all duration-700 ease-out"
                      [style.width]="isStepActive(i) ? '100%' : '0%'"></div>
                  </div>
                }
              }
            </div>

            <!-- Horizontal scroll container -->
            <div class="relative overflow-hidden">
              <div class="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                [style.transform]="'translateX(-' + (activeStep() * 100) + '%)'">
                @for (step of steps; track step.number; let i = $index) {
                  <div class="w-full shrink-0">
                    <div class="flex flex-col md:flex-row gap-6 lg:gap-10 items-stretch">
                      <!-- Left: Text -->
                      <div class="flex-1 flex flex-col justify-center min-w-0">
                        <div class="flex items-center gap-3 mb-4 md:hidden">
                          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff4829] to-[#e8573a] text-white flex items-center justify-center text-[12px] font-bold shadow-[0_4px_14px_0_rgba(255,72,41,0.25)]">{{ step.number }}</div>
                          <span class="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#ff4829]">{{ step.label }}</span>
                        </div>
                        <h3 class="text-[22px] md:text-[26px] lg:text-[30px] font-bold text-[#111827] leading-[1.15] tracking-[-0.02em] mb-3 lg:mb-4">{{ step.title }}</h3>
                        <p class="text-[15px] md:text-[16px] text-[#4b5563] leading-[1.65] max-w-[520px]">{{ step.description }}</p>
                        <div class="mt-6 flex items-center gap-2">
                          <span class="text-[13px] font-medium text-[#9ca3af]">Step {{ step.number }} of 05</span>
                        </div>
                      </div>
                      <!-- Right: Visualization -->
                      <div class="md:w-[340px] lg:w-[440px] xl:w-[500px] shrink-0">
                        <div class="bg-gradient-to-br from-[#fef6f3] to-[#ffe8df] rounded-2xl lg:rounded-3xl overflow-hidden p-5 lg:p-7 flex flex-col justify-center min-h-[300px] md:min-h-[380px]">
                          @switch (i) {
                            @case (0) {
                              <!-- Step 1: Persona Configuration -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M2 8h12" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Persona Configuration</span>
                                </div>
                                <!-- Mode selection -->
                                <div class="space-y-2.5 mb-4">
                                  <div class="flex items-center justify-between bg-[#fef9f7] rounded-lg px-3 py-2.5 border-2 border-[#e8573a]/30">
                                    <div class="flex items-center gap-2">
                                      <div class="w-4 h-4 rounded-full bg-[#e8573a] flex items-center justify-center">
                                        <div class="w-2 h-2 rounded-full bg-white"></div>
                                      </div>
                                      <div>
                                        <p class="text-[12px] font-semibold text-[#1a1a2e]">Department & Seniority</p>
                                        <p class="text-[10px] text-[#6b7280]">Catches all title variations</p>
                                      </div>
                                    </div>
                                    <span class="text-[9px] font-bold text-[#1a1a2e] bg-[#fce4e8] px-2 py-0.5 rounded-full">SELECTED</span>
                                  </div>
                                  <div class="flex items-center justify-between bg-[#f8fafb] rounded-lg px-3 py-2.5">
                                    <div class="flex items-center gap-2">
                                      <div class="w-4 h-4 rounded-full border-2 border-[#d1d5db]"></div>
                                      <div>
                                        <p class="text-[12px] font-semibold text-[#374151]">Titles</p>
                                        <p class="text-[10px] text-[#6b7280]">Explicit title list</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <!-- Selected departments -->
                                <div class="mb-3">
                                  <p class="text-[10px] font-semibold text-[#6b7280] uppercase tracking-[0.04em] mb-2">Departments</p>
                                  <div class="flex flex-wrap gap-1.5">
                                    <span class="text-[10px] font-medium text-[#1a1a2e] bg-[#fce4e8] px-2 py-1 rounded-full">Marketing</span>
                                    <span class="text-[10px] font-medium text-[#1a1a2e] bg-[#fce4e8] px-2 py-1 rounded-full">Sales</span>
                                    <span class="text-[10px] font-medium text-[#1a1a2e] bg-[#fce4e8] px-2 py-1 rounded-full">Revenue Ops</span>
                                  </div>
                                </div>
                                <!-- Selected seniority -->
                                <div>
                                  <p class="text-[10px] font-semibold text-[#6b7280] uppercase tracking-[0.04em] mb-2">Seniority</p>
                                  <div class="flex flex-wrap gap-1.5">
                                    <span class="text-[10px] font-medium text-[#1a1a2e] bg-[#fce4e8] px-2 py-1 rounded-full">Director</span>
                                    <span class="text-[10px] font-medium text-[#1a1a2e] bg-[#fce4e8] px-2 py-1 rounded-full">VP</span>
                                    <span class="text-[10px] font-medium text-[#1a1a2e] bg-[#fce4e8] px-2 py-1 rounded-full">C-Suite</span>
                                  </div>
                                </div>
                              </div>
                            }
                            @case (1) {
                              <!-- Step 2: Rule Enforcement dashboard -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center justify-between mb-4">
                                  <div class="flex items-center gap-2">
                                    <div class="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></div>
                                    <span class="text-[13px] font-semibold text-[#111827]">Rule Enforcement</span>
                                  </div>
                                  <span class="text-[10px] text-[#6b7280] bg-[#f3f4f6] px-2 py-0.5 rounded-full">Active</span>
                                </div>
                                <!-- Campaign rows -->
                                <div class="space-y-2.5">
                                  <div class="bg-[#fef9f7] border border-[#ffe8df]/40 rounded-lg px-3 py-2.5">
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] text-[#374151] font-medium">ABM Campaign - Q1 2026</span>
                                      <span class="text-[9px] font-bold text-[#22c55e] bg-[#f0fdf4] px-2 py-0.5 rounded-full">Protected</span>
                                    </div>
                                    <div class="flex items-center gap-1.5">
                                      <div class="w-4 h-4 rounded-full bg-[#f5a896] overflow-hidden"><img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                                      <span class="text-[10px] text-[#e8573a]">Dept & Seniority mode</span>
                                    </div>
                                  </div>
                                  <div class="bg-[#fef9f7] border border-[#ffe8df]/40 rounded-lg px-3 py-2.5">
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] text-[#374151] font-medium">Enterprise Pipeline - NA</span>
                                      <span class="text-[9px] font-bold text-[#22c55e] bg-[#f0fdf4] px-2 py-0.5 rounded-full">Protected</span>
                                    </div>
                                    <div class="flex items-center gap-1.5">
                                      <div class="w-4 h-4 rounded-full bg-[#f5a896] overflow-hidden"><img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                                      <span class="text-[10px] text-[#e8573a]">Dept & Seniority mode</span>
                                    </div>
                                  </div>
                                  <div class="bg-[#fef9f7] border border-[#ffe8df]/40 rounded-lg px-3 py-2.5">
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] text-[#374151] font-medium">Brand Awareness - EMEA</span>
                                      <span class="text-[9px] font-bold text-[#22c55e] bg-[#f0fdf4] px-2 py-0.5 rounded-full">Protected</span>
                                    </div>
                                    <div class="flex items-center gap-1.5">
                                      <div class="w-4 h-4 rounded-full bg-[#f5a896] overflow-hidden"><img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                                      <span class="text-[10px] text-[#e8573a]">Titles mode</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="mt-3 pt-3 border-t border-[#f3f4f6] flex items-center justify-between">
                                  <span class="text-[10px] text-[#6b7280]">3 campaigns protected</span>
                                  <span class="text-[10px] text-[#e8573a] font-medium">All rules active</span>
                                </div>
                              </div>
                            }
                            @case (2) {
                              <!-- Step 3: Blocking Log -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-[#fef2f2] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Blocking Log</span>
                                </div>
                                <!-- Blocked titles -->
                                <div class="space-y-2 mb-3">
                                  <div class="bg-[#fef2f2]/60 border border-[#fecaca] rounded-lg p-2.5">
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] font-medium text-[#374151]">Software Engineer</span>
                                      <span class="text-[9px] font-bold text-[#ef4444] bg-[#fee2e2] px-2 py-0.5 rounded-full">Blocked</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                      <span class="text-[10px] text-[#6b7280]">Engineering / IC level</span>
                                      <span class="text-[10px] text-[#22c55e] font-medium">$42 saved</span>
                                    </div>
                                  </div>
                                  <div class="bg-[#fef2f2]/60 border border-[#fecaca] rounded-lg p-2.5">
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] font-medium text-[#374151]">HR Coordinator</span>
                                      <span class="text-[9px] font-bold text-[#ef4444] bg-[#fee2e2] px-2 py-0.5 rounded-full">Blocked</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                      <span class="text-[10px] text-[#6b7280]">Human Resources / Entry</span>
                                      <span class="text-[10px] text-[#22c55e] font-medium">$28 saved</span>
                                    </div>
                                  </div>
                                  <div class="bg-[#fef2f2]/60 border border-[#fecaca] rounded-lg p-2.5">
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] font-medium text-[#374151]">Office Manager</span>
                                      <span class="text-[9px] font-bold text-[#ef4444] bg-[#fee2e2] px-2 py-0.5 rounded-full">Blocked</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                      <span class="text-[10px] text-[#6b7280]">Operations / Manager</span>
                                      <span class="text-[10px] text-[#22c55e] font-medium">$35 saved</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="bg-[#f0fdf4] border border-[#bbf7d0]/40 rounded-lg px-3 py-2 flex items-center justify-between">
                                  <span class="text-[10px] text-[#22c55e] font-semibold">Total spend saved today</span>
                                  <span class="text-[13px] font-bold text-[#22c55e]">$312</span>
                                </div>
                              </div>
                            }
                            @case (3) {
                              <!-- Step 4: Department matrix -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#fce4e8] to-[#f5a896] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" stroke="#1a1a2e" stroke-width="1.3"/><rect x="9" y="2" width="5" height="5" rx="1" stroke="#1a1a2e" stroke-width="1.3"/><rect x="2" y="9" width="5" height="5" rx="1" stroke="#1a1a2e" stroke-width="1.3"/><rect x="9" y="9" width="5" height="5" rx="1" stroke="#1a1a2e" stroke-width="1.3"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Department & Seniority Matrix</span>
                                </div>
                                <!-- Matrix grid -->
                                <div class="overflow-hidden rounded-lg border border-[#e5e7eb]/60">
                                  <!-- Header row -->
                                  <div class="grid grid-cols-4 bg-[#f8fafb]">
                                    <div class="p-2 border-b border-r border-[#e5e7eb]/40"></div>
                                    <div class="p-2 border-b border-r border-[#e5e7eb]/40 text-center">
                                      <span class="text-[9px] font-bold text-[#6b7280] uppercase tracking-[0.04em]">VP</span>
                                    </div>
                                    <div class="p-2 border-b border-r border-[#e5e7eb]/40 text-center">
                                      <span class="text-[9px] font-bold text-[#6b7280] uppercase tracking-[0.04em]">Director</span>
                                    </div>
                                    <div class="p-2 border-b border-[#e5e7eb]/40 text-center">
                                      <span class="text-[9px] font-bold text-[#6b7280] uppercase tracking-[0.04em]">C-Suite</span>
                                    </div>
                                  </div>
                                  <!-- Marketing row -->
                                  <div class="grid grid-cols-4">
                                    <div class="p-2 border-b border-r border-[#e5e7eb]/40 bg-[#f8fafb]">
                                      <span class="text-[10px] font-semibold text-[#374151]">Marketing</span>
                                    </div>
                                    <div class="p-2 border-b border-r border-[#e5e7eb]/40 flex items-center justify-center bg-[#f0fdf4]">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.5l3 3 5-5.5" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                    <div class="p-2 border-b border-r border-[#e5e7eb]/40 flex items-center justify-center bg-[#f0fdf4]">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.5l3 3 5-5.5" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                    <div class="p-2 border-b border-[#e5e7eb]/40 flex items-center justify-center bg-[#f0fdf4]">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.5l3 3 5-5.5" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                  </div>
                                  <!-- Sales row -->
                                  <div class="grid grid-cols-4">
                                    <div class="p-2 border-b border-r border-[#e5e7eb]/40 bg-[#f8fafb]">
                                      <span class="text-[10px] font-semibold text-[#374151]">Sales</span>
                                    </div>
                                    <div class="p-2 border-b border-r border-[#e5e7eb]/40 flex items-center justify-center bg-[#f0fdf4]">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.5l3 3 5-5.5" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                    <div class="p-2 border-b border-r border-[#e5e7eb]/40 flex items-center justify-center bg-[#f0fdf4]">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.5l3 3 5-5.5" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                    <div class="p-2 border-b border-[#e5e7eb]/40 flex items-center justify-center bg-[#f0fdf4]">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.5l3 3 5-5.5" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                  </div>
                                  <!-- Engineering row - blocked -->
                                  <div class="grid grid-cols-4">
                                    <div class="p-2 border-b border-r border-[#e5e7eb]/40 bg-[#f8fafb]">
                                      <span class="text-[10px] font-semibold text-[#374151]">Engineering</span>
                                    </div>
                                    <div class="p-2 border-b border-r border-[#e5e7eb]/40 flex items-center justify-center bg-[#fef2f2]">
                                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/></svg>
                                    </div>
                                    <div class="p-2 border-b border-r border-[#e5e7eb]/40 flex items-center justify-center bg-[#fef2f2]">
                                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/></svg>
                                    </div>
                                    <div class="p-2 border-b border-[#e5e7eb]/40 flex items-center justify-center bg-[#fef2f2]">
                                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/></svg>
                                    </div>
                                  </div>
                                  <!-- Finance row - blocked -->
                                  <div class="grid grid-cols-4">
                                    <div class="p-2 border-r border-[#e5e7eb]/40 bg-[#f8fafb]">
                                      <span class="text-[10px] font-semibold text-[#374151]">Finance</span>
                                    </div>
                                    <div class="p-2 border-r border-[#e5e7eb]/40 flex items-center justify-center bg-[#fef2f2]">
                                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/></svg>
                                    </div>
                                    <div class="p-2 border-r border-[#e5e7eb]/40 flex items-center justify-center bg-[#fef2f2]">
                                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/></svg>
                                    </div>
                                    <div class="p-2 flex items-center justify-center bg-[#fef2f2]">
                                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/></svg>
                                    </div>
                                  </div>
                                </div>
                                <div class="flex items-center gap-4 mt-3">
                                  <div class="flex items-center gap-1.5">
                                    <div class="w-3 h-3 rounded bg-[#f0fdf4] border border-[#bbf7d0]"></div>
                                    <span class="text-[10px] text-[#6b7280]">Allowed</span>
                                  </div>
                                  <div class="flex items-center gap-1.5">
                                    <div class="w-3 h-3 rounded bg-[#fef2f2] border border-[#fecaca]"></div>
                                    <span class="text-[10px] text-[#6b7280]">Blocked</span>
                                  </div>
                                </div>
                              </div>
                            }
                            @case (4) {
                              <!-- Step 5: Rule Control panel -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8.5l3 3 5-6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Rule Control</span>
                                </div>
                                <!-- Toggle mode -->
                                <div class="bg-[#fef9f7] rounded-lg p-3 mb-3">
                                  <div class="flex items-center justify-between mb-2">
                                    <span class="text-[11px] font-semibold text-[#374151]">Active Mode</span>
                                    <div class="flex items-center gap-1">
                                      <span class="text-[10px] text-[#e8573a] font-medium bg-[#fce4e8] px-2 py-0.5 rounded-full">Dept & Seniority</span>
                                    </div>
                                  </div>
                                  <div class="flex items-center gap-2">
                                    <div class="w-8 h-[18px] bg-[#e8573a] rounded-full relative">
                                      <div class="absolute right-[2px] top-[2px] w-[14px] h-[14px] bg-white rounded-full shadow-sm"></div>
                                    </div>
                                    <span class="text-[10px] text-[#6b7280]">Switch to Titles mode</span>
                                  </div>
                                </div>
                                <!-- Update history -->
                                <div class="space-y-2 mb-3">
                                  <div class="flex items-start gap-2 bg-[#f0fafb] rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#fce4e8] flex items-center justify-center shrink-0 mt-0.5">
                                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#1a1a2e" stroke-width="1.3" stroke-linecap="round"/></svg>
                                    </div>
                                    <div>
                                      <p class="text-[11px] font-medium text-[#374151]">Added "Revenue Ops" department</p>
                                      <p class="text-[10px] text-[#6b7280]">2 hrs ago - Applied to 3 campaigns</p>
                                    </div>
                                  </div>
                                  <div class="flex items-start gap-2 bg-[#f0fafb] rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#fce4e8] flex items-center justify-center shrink-0 mt-0.5">
                                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#1a1a2e" stroke-width="1.3" stroke-linecap="round"/></svg>
                                    </div>
                                    <div>
                                      <p class="text-[11px] font-medium text-[#374151]">Switched from Titles to Dept & Seniority</p>
                                      <p class="text-[10px] text-[#6b7280]">Yesterday - Immediate effect</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="flex gap-2">
                                  <button class="flex-1 h-8 bg-gradient-to-r from-[#e8573a] to-[#1a1a2e] text-white text-[11px] font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-[0_2px_8px_-2px_rgba(26,26,46,0.3)]">
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 3v6M3 6h6" stroke="white" stroke-width="1.3" stroke-linecap="round"/></svg>
                                    Edit Rule
                                  </button>
                                  <button class="flex-1 h-8 bg-white border border-[#e5e7eb] text-[#374151] text-[11px] font-semibold rounded-lg">
                                    View History
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
                <button class="transition-all duration-300 rounded-full cursor-pointer"
                  [ngClass]="activeStep() === i ? 'w-6 h-2 bg-[#ff4829]' : 'w-2 h-2 bg-[#d1d5db]'"
                  (click)="scrollToStep(i)"></button>
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
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef9f7] via-[#fef9fa] to-[#fef9f7] pointer-events-none -z-10"></div>
      <div class="absolute top-[30%] left-[50%] -translate-x-1/2 w-[50%] h-[50%] bg-radial-[closest-side] from-[#e8573a]/5 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-12">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
            The Difference
          </span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827]">
            What changes when title delivery is <span class="section-gradient-text">enforced intelligently.</span>
          </h2>
        </div>

        <!-- ═══ Desktop: Enhanced table ═══ -->
        <div class="hidden md:block">
          <div class="bg-white rounded-2xl border border-[#ffe8df]/30 overflow-hidden shadow-[0_4px_24px_-4px_rgba(232,87,58,0.1)]">

            <!-- Table Header -->
            <div class="grid grid-cols-[1fr_1fr_1.15fr]">
              <div class="bg-[#f8fafb] p-5 border-b border-[#e5e7eb]/60">
                <span class="text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.04em]">Capability</span>
              </div>
              <div class="bg-[#f8fafb] p-5 border-b border-[#e5e7eb]/60 border-l border-l-[#e5e7eb]/40">
                <div class="flex items-center gap-2">
                  <div class="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.04em]">Without blocking</span>
                </div>
              </div>
              <div class="bg-gradient-to-r from-[#1a1a2e] to-[#6e2a34] p-5 border-b border-[#1a1a2e]">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-[#f5a896] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0">
                    <img src="/agents/Title Blocking Agent.png" alt="Title Blocking Agent" class="w-full h-full object-cover rounded-full" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[13px] font-semibold text-white leading-tight">With adRadar Blocking</span>
                    <span class="text-[10px] text-white/50 leading-tight">Title Blocking Agent</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Table Rows -->
            @for (row of comparisonRows; track row.capability; let i = $index; let even = $even) {
              <div
                class="group grid grid-cols-[1fr_1fr_1.15fr] border-t border-[#e5e7eb]/40 transition-colors duration-200 hover:bg-[#fef9fa]/60"
              >
                <!-- Capability -->
                <div class="p-5 flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-[#fef9f7] flex items-center justify-center shrink-0">
                    @switch (i) {
                      @case (0) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="3" stroke="#e8573a" stroke-width="1.5"/><path d="M4 14c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (1) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="2" stroke="#e8573a" stroke-width="1.5"/><path d="M5 7h6M5 10h3" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (2) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="#e8573a" stroke-width="1.5"/><path d="M8 5v3h3" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                      @case (3) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12l4-8 4 8" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 9h5" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (4) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="3" width="10" height="10" rx="2" stroke="#e8573a" stroke-width="1.5"/><path d="M6 8h4" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round"/><path d="M8 6v4" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (5) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M10 5l3 3-3 3" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                    }
                  </div>
                  <span class="text-[14px] font-semibold text-[#111827]">{{ row.capability }}</span>
                </div>

                <!-- Without blocking value -->
                <div class="p-5 flex items-center gap-2.5 border-l border-[#e5e7eb]/40">
                  <div class="w-[18px] h-[18px] rounded-full bg-[#fef2f2] flex items-center justify-center shrink-0">
                    <svg width="7" height="7" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[14px] text-[#9ca3af]">{{ row.without }}</span>
                </div>

                <!-- With adRadar value -->
                <div class="p-5 flex items-center gap-2.5 bg-[#fef9f7]/70 group-hover:bg-[#fbf0f3]/60 transition-colors border-l-2 border-l-[#e8573a]/20">
                  <div class="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center shrink-0 shadow-[0_1px_4px_-1px_rgba(26,26,46,0.3)]">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <span class="text-[14px] text-[#1a1a2e] font-semibold">{{ row.withBlocking }}</span>
                </div>
              </div>
            }

          </div>
        </div>

        <!-- ═══ Mobile: Stacked cards ═══ -->
        <div class="md:hidden space-y-3">
          <div class="flex items-center gap-3 bg-gradient-to-r from-[#1a1a2e] to-[#6e2a34] rounded-xl px-4 py-3">
            <div class="w-8 h-8 rounded-full bg-[#f5a896] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0">
              <img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <span class="text-[13px] font-semibold text-white block leading-tight">adRadar Title Blocking</span>
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
                  <p class="text-[13px] text-[#1a1a2e] font-semibold">{{ row.withBlocking }}</p>
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
      <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-radial-[closest-side] from-[#e8573a]/8 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-radial-[closest-side] from-[#f5a896]/6 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] bg-radial-[closest-side] from-[#f5a896]/4 to-transparent blur-[120px] pointer-events-none -z-10"></div>
      <!-- Dot pattern -->
      <div class="absolute inset-0 opacity-[0.04] pointer-events-none -z-10" style="background-image: radial-gradient(circle, #1a1a2e 1px, transparent 1px); background-size: 28px 28px;"></div>

      <div class="max-w-[1200px] mx-auto px-6">

        <!-- Top: Badge + Heading row -->
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
          <div class="max-w-[600px]">
            <div class="flex items-center gap-2.5 mb-4">
              <div class="w-8 h-8 rounded-full bg-[#f5a896] p-[2px] overflow-hidden">
                <img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full object-cover rounded-full" />
              </div>
              <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a]">
                Proven Results
              </span>
            </div>
            <h2 class="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.08] tracking-[-0.025em] text-[#111827]">
              First 30 days. Same budget.<br class="hidden lg:block" />
              <span class="section-gradient-text">Precise persona delivery.</span>
            </h2>
          </div>
          <p class="text-[15px] text-[#4b5563] leading-[1.65] max-w-[340px] lg:text-right">
            Measured across teams who activated Title Blocking on existing campaigns. No additional spend required.
          </p>
        </div>

        <!-- Results cards -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- ══ Card 1: 35% MQL Quality Uplift ══ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] p-6 lg:p-7 h-full shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_30px_-6px_rgba(232,87,58,0.12)] transition-all duration-500">

              <!-- Before -> After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">Diluted</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#e8573a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#e8573a] bg-[#ff6b35]/15 px-2.5 py-1 rounded-full">+35%</span>
              </div>

              <!-- Donut chart -->
              <div class="relative w-[140px] h-[140px] mx-auto mb-6">
                <svg class="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" stroke-width="12" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#ef4444" stroke-opacity="0.5" stroke-width="12"
                    stroke-dasharray="157 157" stroke-linecap="round" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="url(#resultGradTB1)" stroke-width="12"
                    stroke-dasharray="110 204" stroke-linecap="round" />
                  <defs>
                    <linearGradient id="resultGradTB1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#e8573a" />
                      <stop offset="100%" stop-color="#ff6b35" />
                    </linearGradient>
                  </defs>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-[36px] font-bold text-[#111827] tracking-[-0.03em]">35%</span>
                </div>
              </div>

              <h3 class="text-[18px] font-bold text-[#111827] mb-1.5 text-center">MQL quality uplift</h3>
              <p class="text-[13px] text-[#6b7280] text-center leading-[1.5]">
                Average improvement when off-persona titles are systematically blocked from day one
              </p>
            </div>
          </div>

          <!-- ══ Card 2: 55% LinkedIn Title Accuracy ══ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] p-6 lg:p-7 h-full shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_30px_-6px_rgba(232,87,58,0.12)] transition-all duration-500">

              <!-- Before -> After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">55% accurate</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#e8573a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#e8573a] bg-[#ff6b35]/15 px-2.5 py-1 rounded-full">Auto-corrected</span>
              </div>

              <!-- Bar chart -->
              <div class="flex items-end gap-3 justify-center h-[140px] mb-6 px-2">
                <!-- Incorrect bar -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[63px] relative overflow-hidden bg-[#fee2e2] border border-[#fca5a5]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#ef4444] to-[#fca5a5]"></div>
                  </div>
                  <span class="text-[10px] text-[#6b7280] font-medium">45%<br/>wrong</span>
                </div>
                <!-- Correct bar -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[77px] relative overflow-hidden bg-[#e8573a] border border-[#d14a30]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#e8573a] to-[#ff6b35]"></div>
                  </div>
                  <span class="text-[10px] text-[#e8573a] font-semibold">55%<br/>right</span>
                </div>
                <!-- Dept & Seniority correction -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[120px] relative overflow-hidden bg-[#ff6b35] border border-[#d14a30]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#e8573a] to-[#ff6b35]"></div>
                  </div>
                  <span class="text-[10px] text-[#e8573a] font-medium">Corrected</span>
                </div>
              </div>

              <div class="text-center">
                <p class="text-[48px] font-bold text-[#111827] tracking-[-0.04em] leading-none mb-1.5">55%</p>
                <h3 class="text-[18px] font-bold text-[#111827] mb-1.5">LinkedIn title accuracy</h3>
                <p class="text-[13px] text-[#6b7280] leading-[1.5]">
                  Meaning nearly half of title targeting is imprecise. Department & Seniority mode corrects for this automatically
                </p>
              </div>
            </div>
          </div>

          <!-- ══ Card 3: 0 hrs Exclusion List Maintenance ══ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] p-6 lg:p-7 h-full shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_30px_-6px_rgba(232,87,58,0.12)] transition-all duration-500">

              <!-- Before -> After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">Manual</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#e8573a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#16a34a] bg-[#dcfce7] px-2.5 py-1 rounded-full">Automated</span>
              </div>

              <!-- Budget flow visualization -->
              <div class="relative mb-6 px-1">
                <!-- Manual exclusion work -->
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[11px] text-[#6b7280] font-medium uppercase tracking-[0.04em]">Manual exclusion work</span>
                    <span class="text-[12px] text-[#ef4444]/80 font-semibold line-through">4-6 hrs/week</span>
                  </div>
                  <div class="h-[12px] bg-[#f3f4f6] rounded-full overflow-hidden border border-[#e5e7eb]">
                    <div class="h-full w-[75%] bg-gradient-to-r from-[#ef4444] to-[#f87171] rounded-full"></div>
                  </div>
                </div>
                <!-- With adRadar -->
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[11px] text-[#16a34a] font-semibold uppercase tracking-[0.04em]">With adRadar</span>
                    <span class="text-[12px] text-[#16a34a] font-bold">0 hrs</span>
                  </div>
                  <div class="h-[12px] bg-[#f3f4f6] rounded-full overflow-hidden border border-[#22c55e]/40">
                    <div class="h-full w-[2%] bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-full"></div>
                  </div>
                </div>
                <!-- Arrow showing automation -->
                <div class="flex items-center gap-2 mt-4 bg-[#dcfce7] border border-[#86efac] rounded-lg px-3 py-2.5">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8h8M9.5 5.5L12 8l-2.5 2.5" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span class="text-[11px] text-[#16a34a] font-medium">Rule-based enforcement requires zero curation</span>
                </div>
              </div>

              <div class="text-center">
                <p class="text-[48px] font-bold text-[#111827] tracking-[-0.04em] leading-none mb-1.5">0 hrs</p>
                <h3 class="text-[18px] font-bold text-[#111827] mb-1.5">Exclusion list maintenance</h3>
                <p class="text-[13px] text-[#6b7280] leading-[1.5]">
                  Rule-based enforcement requires no ongoing manual curation across campaigns
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom trust line -->
        <div class="flex items-center justify-center gap-3 mt-10 lg:mt-14">
          <div class="w-[1px] h-4 bg-gradient-to-b from-transparent to-[#e8573a]/20"></div>
          <p class="text-[13px] text-[#9ca3af] text-center">
            Results measured across active campaigns within 30 days of enabling Title Blocking Agent
          </p>
          <div class="w-[1px] h-4 bg-gradient-to-b from-transparent to-[#e8573a]/20"></div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 7: RELATED AGENTS
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef9fa] via-[#fefafb] to-white pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[50%] bg-radial-[closest-side] from-[#f5a896]/8 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-10">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
            Connected Intelligence
          </span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
            Title blocking is one layer.
            <br class="hidden md:block" />
            Six agents <span class="section-gradient-text">work together.</span>
          </h2>
          <p class="text-[15px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[720px] mx-0 md:mx-auto">
            The Title Blocking Agent shares context and memory with every other adRadar agent —
            so persona enforcement decisions inform impression distribution, creative rotation, spend pacing,
            and competitor intelligence simultaneously.
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
                <div class="shimmer-sweep absolute inset-0 pointer-events-none z-10 rounded-2xl"></div>

                <!-- Top: Avatar + pulse ring -->
                <div class="flex items-center justify-between mb-4">
                  <div class="relative">
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
                  <!-- Connection to Title Blocking badge -->
                  <div class="flex items-center gap-1.5">
                    <div class="w-4 h-4 rounded-full bg-[#f5a896] overflow-hidden shrink-0">
                      <img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full object-cover" />
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
      headingStart="Stop budget flowing to wrong personas."
      headingGradient="Enforce your persona rules."
      description="Connect your LinkedIn Ads account in 2 minutes. The Title Blocking Agent starts monitoring immediately. No credit card required."
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
      background: linear-gradient(58deg, #f5a896 0%, #f4c4ca 50%, #ffffff 100%);
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
export class TitleBlockingComponent implements OnInit, OnDestroy {
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
    'Exclusions added reactively after drift is spotted',
    'Title variations must be identified and excluded individually',
    'No automatic detection of new off-persona title delivery',
    'Department-level drift invisible without deep manual review',
    'Exclusion lists require manual curation',
    'Budget spent on wrong titles before exclusion is applied',
  ];

  adradarAdvantages = [
    'Blocking rules enforced from the moment the agent is configured',
    'Department & seniority mode catches all title variations automatically',
    'Continuous monitoring, with new off-persona titles blocked as they appear',
    'Department-level enforcement prevents category-wide drift',
    'No exclusion list to maintain, rules update automatically',
    'Budget protected from the first impression, not after the fact',
  ];

  steps = [
    {
      number: '01',
      label: 'Configure',
      title: 'Select your configuration mode',
      description:
        'Choose between two rule modes: Department & Seniority (broader, catches all title variations within a function and level) or Titles (explicit title list for precision targeting). Both modes block everything outside the defined rule.',
    },
    {
      number: '02',
      label: 'Enforce',
      title: 'Agent enforces the rule across all linked campaigns',
      description:
        'From the moment the agent is configured, every impression is evaluated against your persona rule. Titles that don\'t match are blocked before delivery, not flagged after.',
    },
    {
      number: '03',
      label: 'Block',
      title: 'Off-persona titles are blocked and logged automatically',
      description:
        'When a title outside your rule receives an impression attempt, the agent blocks it and logs the event. The report shows exactly which titles were blocked, when, and the estimated spend saved.',
    },
    {
      number: '04',
      label: 'Categorise',
      title: 'Department & Seniority mode handles title variation automatically',
      description:
        'Rather than maintain an exhaustive list of individual titles, Department & Seniority mode allows delivery by function (Engineering, Marketing, Finance) and level (Director, VP, C-Suite). Any other combination is blocked.',
    },
    {
      number: '05',
      label: 'Control',
      title: 'You stay in control of the rule. Always.',
      description:
        'The agent enforces whatever rule you set. Switching between modes, updating the department or seniority selection, or modifying the explicit title list takes effect immediately across all linked campaigns.',
    },
  ];

  comparisonRows: ComparisonRow[] = [
    {
      capability: 'Off-persona title detection',
      without: 'Manual review of delivery reports',
      withBlocking: 'Automatic - blocked before delivery',
    },
    {
      capability: 'Title variation coverage',
      without: 'Only explicitly excluded titles blocked',
      withBlocking: 'Full department & seniority enforcement',
    },
    {
      capability: 'Drift correction speed',
      without: 'Days to weeks after it starts',
      withBlocking: 'Immediate - rule enforced from day one',
    },
    {
      capability: 'MQL quality impact',
      without: 'Diluted by off-persona clicks',
      withBlocking: 'Concentrated on persona engagers',
    },
    {
      capability: 'Exclusion list maintenance',
      without: 'Ongoing manual curation',
      withBlocking: 'Zero - rule-based, automated',
    },
    {
      capability: 'Spend accountability',
      without: 'No title-level spend visibility',
      withBlocking: 'Blocked title spend estimated and reported',
    },
  ];

  relatedAgents: RelatedAgent[] = [
    {
      name: 'Company Blocking Agent',
      image: '/agents/Company Blocking Agent.png',
      avatarBg: '#b8dff0',
      description:
        'Blocks non-ICP companies entirely. Title blocking controls persona fit, company blocking removes irrelevant accounts from the auction.',
      accentColor: '#4a9cc5',
      route: '/agents/company-blocking',
    },
    {
      name: 'Impression Capping Agent',
      image: '/agents/Impression Capping Agent.png',
      avatarBg: '#a8d1dc',
      description:
        'Controls account-level impression limits. Combined with title blocking, ensures the right people at the right companies see your ads.',
      accentColor: '#3a97ab',
      route: '/agents/impression-capping',
    },
    {
      name: 'Bidding Optimization Agent',
      image: '/agents/Bidding Optimization Agent.png',
      avatarBg: '#acdfa4',
      description:
        'Optimises CPM across persona-matched impressions, maximising reach efficiency for the titles that actually matter.',
      accentColor: '#4a9a42',
      route: '/agents/bidding-optimization',
    },
    {
      name: 'Ad Rotation Agent',
      image: '/agents/Ad Rotation Agent.png',
      avatarBg: '#d9e1fb',
      description:
        'Detects fatigue before CTR drops. Persona-matched impressions get fresh creative, and every blocked title frees budget for better placements.',
      accentColor: '#6b5ea0',
      route: '/agents/ad-rotation',
    },
    {
      name: 'Campaign Scheduling Agent',
      image: '/agents/Campaign Scheduling Agent.png',
      avatarBg: '#fbf5df',
      description:
        'Pauses campaigns during low-conversion windows. Title blocking ensures budget isn\'t wasted on off-persona titles during active hours.',
      accentColor: '#c5a030',
      route: '/agents/campaign-scheduling',
    },
    {
      name: 'Analyse Competitors',
      image: '/agents/Analyse competitors LinkedIn Ads.png',
      avatarBg: '#acdfa4',
      description:
        'Tracks competitor ad presence across your target personas. Title blocking ensures your persona-matched impressions aren\'t diluted.',
      accentColor: '#4a9a42',
      route: '/agents/analyse-competitors',
    },
  ];
}
