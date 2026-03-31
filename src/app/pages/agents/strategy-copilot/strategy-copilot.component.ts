import { Component, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, ViewChild, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

interface ComparisonRow {
  capability: string;
  without: string;
  withCopilot: string;
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
  selector: 'app-strategy-copilot',
  standalone: true,
  imports: [RouterLink, NgClass],
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
            <div class="inline-flex items-center gap-2.5 bg-[#fef6f3]/80 backdrop-blur-sm border border-[#fdd5c8]/40 rounded-full px-4 py-1.5 mb-6 shadow-[0_2px_12px_-4px_rgba(232,87,58,0.1)]">
              <div class="w-6 h-6 rounded-full overflow-hidden bg-gradient-to-br from-[#f5a896] to-[#e8573a] ring-2 ring-white/60 flex items-center justify-center">
                <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3v18h18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7 14l4-4 4 4 6-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="text-[11px] font-bold tracking-[0.08em] text-[#1a1a2e] uppercase">
                Strategy Copilot
              </span>
            </div>

            <!-- Heading -->
            <h1 class="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em] text-[#111827] mb-6">
              Stop guessing at campaign structure.
              <span class="hero-gradient-text">Let the data design it for you.</span>
            </h1>

            <!-- Subheading -->
            <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-[540px] mb-8">
              Audit your LinkedIn Ads architecture against real B2B benchmarks — by ACV, industry,
              and funnel stage — so you know what to fix before you spend another dollar.
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
                class="h-12 px-8 flex items-center justify-center border border-[#fdd5c8] rounded-full text-[15px] font-medium text-[#1a1a2e] hover:bg-[#fef6f3]/50 hover:border-[#e8573a]/50 transition-all duration-300"
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
              <div class="absolute -inset-10 bg-radial-[closest-side] from-[#93b4e8]/20 to-transparent blur-[40px] pointer-events-none"></div>

              <!-- Orbit rings -->
              <div class="absolute inset-[46px] rounded-full border border-dashed border-[#93b4e8]/20"></div>
              <div class="absolute inset-[90px] rounded-full border border-[#93b4e8]/8"></div>

              <!-- Subtle rotating ring -->
              <div class="absolute inset-[44px] rounded-full border border-[#3a6ea5]/5 orbit-ring"></div>

              <!-- Connecting lines -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 420">
                <line x1="210" y1="210" x2="210" y2="46" stroke="url(#line-grad-sc)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="128" stroke="url(#line-grad-sc)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="292" stroke="url(#line-grad-sc)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="210" y2="374" stroke="url(#line-grad-sc)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="292" stroke="url(#line-grad-sc)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="128" stroke="url(#line-grad-sc)" stroke-width="1" opacity="0.15"/>
                <defs>
                  <linearGradient id="line-grad-sc" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#93b4e8" stop-opacity="0.6"/>
                    <stop offset="100%" stop-color="#93b4e8" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>

              <!-- CENTER: Strategy Copilot Agent (SVG icon) -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div class="absolute inset-[-32px] rounded-full bg-[#93b4e8]/6 animate-[pulse-ring_3s_ease-in-out_infinite]"></div>
                <div class="absolute inset-[-22px] rounded-full bg-[#93b4e8]/10 animate-[pulse-ring_3s_ease-in-out_infinite_0.5s]"></div>
                <div class="absolute inset-[-12px] rounded-full bg-gradient-to-br from-[#93b4e8]/20 to-[#3a6ea5]/12"></div>
                <div class="relative w-[110px] h-[110px] rounded-full bg-gradient-to-br from-[#b8cfe8] to-[#93b4e8] p-[3px] shadow-[0_8px_40px_-4px_rgba(58,110,165,0.35)]">
                  <div class="w-full h-full rounded-full bg-gradient-to-br from-[#93b4e8] to-[#3a6ea5] flex items-center justify-center">
                    <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3v18h18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7 14l4-4 4 4 6-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div class="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1a1a2e] text-white text-[10px] font-bold tracking-[0.05em] uppercase px-3 py-1 rounded-full shadow-[0_4px_12px_-2px_rgba(26,26,46,0.3)]">
                  Strategy Copilot
                </div>
              </div>

              <!-- ORBITING AGENTS -->
              <!-- Company Blocking (blue) -->
              <div class="absolute top-[16px] left-1/2 -translate-x-1/2 z-10 orbit-agent" style="animation-delay: 0s">
                <div class="w-[60px] h-[60px] rounded-full p-[2px] bg-gradient-to-br from-[#b8dff0]/60 to-[#9dcce7]/40 shadow-[0_4px_16px_-4px_rgba(157,204,231,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#e3f3fa] overflow-hidden">
                    <img src="/agents/Company Blocking Agent.png" alt="Company Blocking" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Impression Capping (teal) -->
              <div class="absolute top-[98px] right-[38px] z-10 orbit-agent" style="animation-delay: 0.4s">
                <div class="w-[56px] h-[56px] rounded-full p-[2px] bg-gradient-to-br from-[#a8d1dc]/50 to-[#5bb5c5]/40 shadow-[0_4px_16px_-4px_rgba(168,209,220,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#e5f7fa] overflow-hidden">
                    <img src="/agents/Impression Capping Agent.png" alt="Impression Capping" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Title Blocking (pink) -->
              <div class="absolute bottom-[98px] right-[38px] z-10 orbit-agent" style="animation-delay: 0.8s">
                <div class="w-[54px] h-[54px] rounded-full p-[2px] bg-gradient-to-br from-[#ee95a0]/50 to-[#f4e0e9]/40 shadow-[0_4px_16px_-4px_rgba(238,149,160,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#fbf2f5] overflow-hidden">
                    <img src="/agents/Title Blocking Agent.png" alt="Title Blocking" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Bidding Optimization (green) -->
              <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-10 orbit-agent" style="animation-delay: 1.2s">
                <div class="w-[58px] h-[58px] rounded-full p-[2px] bg-gradient-to-br from-[#acdfa4]/50 to-[#82c97a]/30 shadow-[0_4px_16px_-4px_rgba(130,201,122,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#edf8eb] overflow-hidden">
                    <img src="/agents/Bidding Optimization Agent.png" alt="Bidding Optimization" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Ad Rotation (purple) -->
              <div class="absolute bottom-[98px] left-[38px] z-10 orbit-agent" style="animation-delay: 1.6s">
                <div class="w-[54px] h-[54px] rounded-full p-[2px] bg-gradient-to-br from-[#c8b4e0]/50 to-[#d9e1fb]/40 shadow-[0_4px_16px_-4px_rgba(200,180,224,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#f7f3f8] overflow-hidden">
                    <img src="/agents/Ad Rotation Agent.png" alt="Ad Rotation" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <!-- Campaign Scheduling (yellow) -->
              <div class="absolute top-[98px] left-[38px] z-10 orbit-agent" style="animation-delay: 2s">
                <div class="w-[56px] h-[56px] rounded-full p-[2px] bg-gradient-to-br from-[#f0d48a]/50 to-[#fdecc8]/40 shadow-[0_4px_16px_-4px_rgba(240,212,138,0.25)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#fffbe3] overflow-hidden">
                    <img src="/agents/Campaign Scheduling Agent.png" alt="Campaign Scheduling" class="w-full h-full object-cover" />
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
      <div class="absolute inset-0 bg-gradient-to-b from-white via-[#fef9f7] to-[#fef6f3] pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-10">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">The Problem</span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
            Most LinkedIn campaign structures are built on
            <br class="hidden md:block" />
            <span class="section-gradient-text">instinct, not intelligence.</span>
          </h2>
          <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[680px] mx-0 md:mx-auto">
            When you don't know what 'good' looks like for your specific ACV, industry, and funnel stage,
            every campaign is a gamble.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- Card 1: 45 min -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">45 min</span>
                <div class="w-10 h-10 rounded-xl bg-[#fef6f3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7" stroke="#e8573a" stroke-width="1.5" fill="none"/>
                    <path d="M10 6v4h3" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                Campaign build time with Strategy Copilot
              </p>
              <p class="text-[13px] text-[#6b7280] leading-[1.55]">
                Down from 3-5 hours of manual structuring
              </p>
            </div>
          </div>

          <!-- Card 2: 22% -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">22%</span>
                <div class="w-10 h-10 rounded-xl bg-[#fef6f3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 17l4-6 4 3 6-10" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                Budget recovered from structural waste identified in first audit
              </p>
              <p class="text-[13px] text-[#6b7280] leading-[1.55]">
                From structural waste identified in first audit
              </p>
            </div>
          </div>

          <!-- Card 3: 34% -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">34%</span>
                <div class="w-10 h-10 rounded-xl bg-[#fef6f3] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="11" width="3.5" height="6" rx="1" fill="#e8573a"/>
                    <rect x="8.25" y="7" width="3.5" height="10" rx="1" fill="#e8573a" opacity="0.6"/>
                    <rect x="13.5" y="3" width="3.5" height="14" rx="1" fill="#e8573a" opacity="0.35"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                Pipeline from LinkedIn attributed with structured funnel coverage
              </p>
              <p class="text-[13px] text-[#6b7280] leading-[1.55]">
                Attributed pipeline with structured funnel coverage
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
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef6f3] via-[#fef9f7] to-white pointer-events-none -z-10"></div>
      <!-- Ambient glows -->
      <div class="absolute top-[20%] right-[5%] w-[35%] h-[50%] bg-radial-[closest-side] from-[#e8573a]/8 to-transparent blur-[80px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[10%] left-[10%] w-[30%] h-[40%] bg-radial-[closest-side] from-[#1a1a2e]/5 to-transparent blur-[80px] pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">

          <!-- LEFT COLUMN (60%): Heading + description + stats -->
          <div class="lg:w-[58%] flex flex-col">
            <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
              The Gap
            </span>
            <h2 class="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.08] tracking-[-0.025em] text-[#111827] mb-5">
              Building campaigns without benchmarks is
              <span class="section-gradient-text">guessing with budget.</span>
            </h2>
            <p class="text-[16px] text-[#4b5563] leading-[1.7] mb-8 max-w-[540px]">
              Without context-specific benchmarks, you don't know if your funnel weighting, audience
              segmentation, or budget allocation is competitive for your ACV and industry.
            </p>

            <!-- Before / After transformation card -->
            <div class="hidden lg:flex flex-col flex-1 bg-gradient-to-br from-[#fef6f3] to-[#fef6f3]/80 rounded-2xl border border-[#fdd5c8]/25 p-6 mt-2">

              <!-- Before: Structural gaps -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#fef2f2] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[12px] font-semibold text-[#6b7280] uppercase tracking-[0.04em]">Structural gaps</span>
                </div>
                <!-- Bar visualization: uneven/problematic campaign structure -->
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
                  <span class="text-[10px] text-[#ef4444]/60 font-medium">Awareness only</span>
                  <span class="text-[10px] text-[#9ca3af]">No BoFU coverage</span>
                </div>
              </div>

              <!-- Divider with arrow -->
              <div class="flex items-center gap-3 my-3">
                <div class="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#fdd5c8]/40"></div>
                <div class="w-7 h-7 rounded-full bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center shadow-[0_2px_8px_-2px_rgba(26,26,46,0.3)]">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M4 8l3 3 3-3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#fdd5c8]/40"></div>
              </div>

              <!-- After: Optimized architecture -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#ffe8df] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="#1a1a2e" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <span class="text-[12px] font-semibold text-[#1a1a2e] uppercase tracking-[0.04em]">Optimized architecture</span>
                </div>
                <!-- Bar visualization: balanced distribution -->
                <div class="flex gap-[3px] items-end h-[44px]">
                  <div class="flex-1 bg-gradient-to-t from-[#1a1a2e] to-[#e8573a] rounded-[3px] h-[78%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#1a1a2e] to-[#e8573a] rounded-[3px] h-[74%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#1a1a2e]/90 to-[#e8573a] rounded-[3px] h-[70%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#e8573a] rounded-[3px] h-[66%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#e8573a] rounded-[3px] h-[63%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#e8573a] rounded-[3px] h-[60%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#f5a896] rounded-[3px] h-[56%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#f5a896] rounded-[3px] h-[52%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#f5a896] to-[#fdd5c8] rounded-[3px] h-[48%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#f5a896] to-[#fdd5c8] rounded-[3px] h-[44%]"></div>
                </div>
                <div class="flex items-center justify-between mt-1.5">
                  <span class="text-[10px] text-[#e8573a] font-medium">Full funnel coverage</span>
                  <span class="text-[10px] text-[#e8573a]">Benchmarked allocation</span>
                </div>
              </div>

              <!-- Flex spacer to push stats to bottom -->
              <div class="flex-1"></div>

              <!-- Stats row -->
              <div class="grid grid-cols-3 gap-3 pt-4 border-t border-[#fdd5c8]/20">
                <div>
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">6x</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Faster builds</p>
                </div>
                <div class="text-center">
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">22%</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Budget recovered</p>
                </div>
                <div class="text-right">
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">34%</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Pipeline attributed</p>
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
                      <h3 class="text-[14px] font-semibold text-[#374151] leading-tight">LinkedIn campaign tools</h3>
                      <p class="text-[11px] text-[#9ca3af] mt-0.5">Generic best practices</p>
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
              <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#e5e7eb] via-[#fdd5c8] to-[#e8573a]"></div>
              <div class="relative bg-gradient-to-br from-[#1a1a2e] to-[#e8573a] text-white text-[10px] font-bold tracking-[0.06em] uppercase px-4 py-2 rounded-full shadow-[0_4px_20px_-4px_rgba(26,26,46,0.35)] flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M4 9l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Upgrade to
              </div>
            </div>

            <!-- AdRadar Card -->
            <div class="group relative rounded-2xl flex-1 transition-all duration-300">
              <div class="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#e8573a]/25 via-[#f5a896]/15 to-[#e8573a]/25 opacity-60 group-hover:opacity-100 blur-[3px] transition-opacity duration-500"></div>
              <div class="relative bg-gradient-to-br from-[#fef6f3] via-[#fef2ec] to-[#ffe8df] rounded-2xl border-2 border-[#f5a896] p-5 lg:p-6 shadow-[0_8px_30px_-8px_rgba(232,87,58,0.15)] group-hover:shadow-[0_16px_50px_-12px_rgba(232,87,58,0.22)] flex flex-col h-full">
                <div class="shimmer-sweep absolute inset-0 pointer-events-none z-10 rounded-2xl"></div>

                <!-- Header -->
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-[#fdd5c8] to-[#f5a896] p-[2px] shadow-[0_4px_12px_-2px_rgba(232,87,58,0.3)]">
                      <div class="w-full h-full rounded-full bg-gradient-to-br from-[#f5a896] to-[#e8573a] flex items-center justify-center">
                        <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none">
                          <path d="M3 3v18h18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M7 14l4-4 4 4 6-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 class="text-[14px] font-bold text-[#1a1a2e] leading-tight">AdRadar Strategy Copilot</h3>
                      <p class="text-[11px] text-[#e8573a] mt-0.5">Data-driven architecture</p>
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
                <div class="bg-white/60 backdrop-blur-sm rounded-xl border border-[#fdd5c8]/20 p-3.5 mb-4">
                  <p class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#e8573a] mb-2.5">Impact when enabled</p>
                  <div class="grid grid-cols-3 gap-2">
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">6x</p>
                      <p class="text-[10px] text-[#6b7280] mt-1 leading-tight">Faster<br/>campaign builds</p>
                    </div>
                    <div class="text-center border-l border-r border-[#fdd5c8]/20">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">22%</p>
                      <p class="text-[10px] text-[#6b7280] mt-1 leading-tight">Budget<br/>recovered</p>
                    </div>
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">34%</p>
                      <p class="text-[10px] text-[#6b7280] mt-1 leading-tight">Pipeline<br/>attributed</p>
                    </div>
                  </div>
                </div>

                <!-- Bottom highlight strip -->
                <div class="flex items-center justify-between pt-3.5 border-t border-[#fdd5c8]/15">
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
      <div class="sticky top-0 h-full overflow-hidden">
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
                Six audit layers.<br class="hidden lg:block" />
                <span class="section-gradient-text">One clear action plan.</span>
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
                              <!-- Step 1 viz: Funnel Coverage Audit -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 3h12M4 7h8M6 11h4" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Funnel Coverage Audit</span>
                                </div>
                                <!-- Funnel stages -->
                                <div class="space-y-3">
                                  <div class="flex items-center justify-between bg-[#fef6f3] rounded-lg px-3 py-2.5">
                                    <div>
                                      <p class="text-[12px] font-semibold text-[#1a1a2e]">ToFU - Awareness</p>
                                      <p class="text-[10px] text-[#6b7280]">Brand awareness campaigns</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                      <div class="w-[80px] h-[6px] bg-[#fef6f3] rounded-full overflow-hidden">
                                        <div class="h-full w-[92%] bg-gradient-to-r from-[#e8573a] to-[#1a1a2e] rounded-full"></div>
                                      </div>
                                      <span class="text-[12px] font-bold text-[#1a1a2e]">92%</span>
                                    </div>
                                  </div>
                                  <div class="flex items-center justify-between bg-[#fef6f3] rounded-lg px-3 py-2.5">
                                    <div>
                                      <p class="text-[12px] font-semibold text-[#374151]">MoFU - Consideration</p>
                                      <p class="text-[10px] text-[#6b7280]">Engagement campaigns</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                      <div class="w-[80px] h-[6px] bg-[#fef2f2] rounded-full overflow-hidden">
                                        <div class="h-full w-[31%] bg-gradient-to-r from-[#f59e0b] to-[#ef4444] rounded-full"></div>
                                      </div>
                                      <span class="text-[12px] font-bold text-[#ef4444]">31%</span>
                                    </div>
                                  </div>
                                  <div class="flex items-center justify-between bg-[#fef2f2]/60 rounded-lg px-3 py-2.5">
                                    <div>
                                      <p class="text-[12px] font-semibold text-[#374151]">BoFU - Conversion</p>
                                      <p class="text-[10px] text-[#6b7280]">Lead gen & conversion</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                      <div class="w-[80px] h-[6px] bg-[#fef2f2] rounded-full overflow-hidden">
                                        <div class="h-full w-[8%] bg-[#ef4444] rounded-full"></div>
                                      </div>
                                      <span class="text-[12px] font-bold text-[#ef4444]">8%</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="mt-4 flex items-center gap-2 text-[11px] text-[#ef4444] font-medium">
                                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2L2 14h12L8 2z" stroke="#ef4444" stroke-width="1.2" fill="none"/><path d="M8 6v4" stroke="#ef4444" stroke-width="1.2" stroke-linecap="round"/><circle cx="8" cy="12" r="0.6" fill="#ef4444"/></svg>
                                  Critical gap: BoFU coverage insufficient for ACV &gt; $50K
                                </div>
                              </div>
                            }
                            @case (1) {
                              <!-- Step 2 viz: Budget Allocation -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center justify-between mb-4">
                                  <div class="flex items-center gap-2">
                                    <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"/><path d="M8 2v6l4 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                    <span class="text-[13px] font-semibold text-[#111827]">Budget Allocation</span>
                                  </div>
                                  <span class="text-[10px] text-[#ef4444] bg-[#fef2f2] px-2 py-0.5 rounded-full font-semibold">Imbalanced</span>
                                </div>
                                <!-- Budget segments -->
                                <div class="space-y-2.5">
                                  <div>
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] text-[#374151] font-medium">Awareness</span>
                                      <span class="text-[11px] text-[#ef4444] font-semibold">80% ($40K)</span>
                                    </div>
                                    <div class="h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                      <div class="h-full w-[80%] bg-gradient-to-r from-[#f59e0b] to-[#ef4444] rounded-full"></div>
                                    </div>
                                  </div>
                                  <div>
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] text-[#374151] font-medium">Consideration</span>
                                      <span class="text-[11px] text-[#e8573a] font-semibold">15% ($7.5K)</span>
                                    </div>
                                    <div class="h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                      <div class="h-full w-[15%] bg-gradient-to-r from-[#e8573a] to-[#e8573a] rounded-full"></div>
                                    </div>
                                  </div>
                                  <div>
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] text-[#374151] font-medium">Retargeting</span>
                                      <span class="text-[11px] text-[#6b7280] font-semibold">5% ($2.5K)</span>
                                    </div>
                                    <div class="h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden">
                                      <div class="h-full w-[5%] bg-[#fdd5c8] rounded-full"></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="mt-3 pt-3 border-t border-[#f3f4f6]">
                                  <div class="flex items-center gap-2 bg-[#fef6f3] border border-[#fde68a]/40 rounded-lg px-3 py-2">
                                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 2L2 14h12L8 2z" stroke="#f59e0b" stroke-width="1.2" fill="none"/><path d="M8 6v4" stroke="#f59e0b" stroke-width="1.2" stroke-linecap="round"/></svg>
                                    <span class="text-[10px] text-[#92400e] font-medium">Warning: 80% budget in awareness with no retargeting</span>
                                  </div>
                                </div>
                              </div>
                            }
                            @case (2) {
                              <!-- Step 3 viz: Benchmark Comparison -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="8" width="3" height="6" rx="0.5" fill="white"/><rect x="6.5" y="5" width="3" height="9" rx="0.5" fill="white" opacity="0.7"/><rect x="11" y="2" width="3" height="12" rx="0.5" fill="white" opacity="0.4"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Benchmark Comparison</span>
                                </div>
                                <p class="text-[10px] text-[#6b7280] font-medium uppercase tracking-[0.04em] mb-3">ACV: $50K+ | Industry: SaaS B2B</p>
                                <!-- Metrics comparison -->
                                <div class="space-y-3">
                                  <div class="bg-[#fef6f3] rounded-lg p-3">
                                    <div class="flex items-center justify-between mb-1.5">
                                      <span class="text-[11px] font-medium text-[#374151]">CTR</span>
                                      <div class="flex items-center gap-2">
                                        <span class="text-[10px] text-[#6b7280]">You: 0.38%</span>
                                        <span class="text-[10px] text-[#22c55e] font-semibold">Top: 0.62%</span>
                                      </div>
                                    </div>
                                    <div class="h-[6px] bg-[#e5e7eb] rounded-full overflow-hidden relative">
                                      <div class="absolute h-full w-[61%] bg-gradient-to-r from-[#e8573a] to-[#e8573a] rounded-full"></div>
                                      <div class="absolute h-full left-[61%] w-[39%] bg-[#22c55e]/30 rounded-r-full"></div>
                                    </div>
                                  </div>
                                  <div class="bg-[#fef6f3] rounded-lg p-3">
                                    <div class="flex items-center justify-between mb-1.5">
                                      <span class="text-[11px] font-medium text-[#374151]">CPL</span>
                                      <div class="flex items-center gap-2">
                                        <span class="text-[10px] text-[#ef4444]">You: $285</span>
                                        <span class="text-[10px] text-[#22c55e] font-semibold">Top: $142</span>
                                      </div>
                                    </div>
                                    <div class="h-[6px] bg-[#e5e7eb] rounded-full overflow-hidden relative">
                                      <div class="absolute h-full w-[100%] bg-gradient-to-r from-[#ef4444]/40 to-[#ef4444] rounded-full"></div>
                                      <div class="absolute h-full w-[50%] bg-gradient-to-r from-[#22c55e] to-[#22c55e]/60 rounded-full"></div>
                                    </div>
                                  </div>
                                  <div class="bg-[#fef6f3] rounded-lg p-3">
                                    <div class="flex items-center justify-between mb-1.5">
                                      <span class="text-[11px] font-medium text-[#374151]">Pipeline velocity</span>
                                      <div class="flex items-center gap-2">
                                        <span class="text-[10px] text-[#6b7280]">You: 12d</span>
                                        <span class="text-[10px] text-[#22c55e] font-semibold">Top: 8d</span>
                                      </div>
                                    </div>
                                    <div class="h-[6px] bg-[#e5e7eb] rounded-full overflow-hidden relative">
                                      <div class="absolute h-full w-[75%] bg-gradient-to-r from-[#e8573a] to-[#e8573a] rounded-full"></div>
                                      <div class="absolute h-full left-[75%] w-[25%] bg-[#22c55e]/30 rounded-r-full"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            }
                            @case (3) {
                              <!-- Step 4 viz: Overlap Detection -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-[#fef2f2] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="8" r="4" stroke="#ef4444" stroke-width="1.2" fill="none"/><circle cx="10" cy="8" r="4" stroke="#ef4444" stroke-width="1.2" fill="none"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Audience Overlap Detection</span>
                                </div>
                                <!-- Venn diagram style overlaps -->
                                <div class="relative h-[120px] mb-4">
                                  <!-- Circle A -->
                                  <div class="absolute left-[15%] top-[10%] w-[100px] h-[100px] rounded-full bg-[#e8573a]/15 border-2 border-[#e8573a]/30 flex items-center justify-center">
                                    <span class="text-[10px] font-semibold text-[#1a1a2e] -ml-4">Campaign A</span>
                                  </div>
                                  <!-- Circle B -->
                                  <div class="absolute left-[35%] top-[10%] w-[100px] h-[100px] rounded-full bg-[#ef4444]/15 border-2 border-[#ef4444]/30 flex items-center justify-center">
                                    <span class="text-[10px] font-semibold text-[#ef4444] ml-4">Campaign B</span>
                                  </div>
                                  <!-- Overlap indicator -->
                                  <div class="absolute left-[30%] top-[30%] bg-[#ef4444]/20 rounded-lg px-2 py-1">
                                    <span class="text-[10px] font-bold text-[#ef4444]">42% overlap</span>
                                  </div>
                                  <!-- Circle C -->
                                  <div class="absolute right-[15%] top-[20%] w-[80px] h-[80px] rounded-full bg-[#f59e0b]/15 border-2 border-[#f59e0b]/30 flex items-center justify-center">
                                    <span class="text-[9px] font-semibold text-[#92400e]">Campaign C</span>
                                  </div>
                                </div>
                                <!-- Overlap details -->
                                <div class="space-y-2">
                                  <div class="bg-[#fef2f2]/60 border border-[#fecaca] rounded-lg px-3 py-2 flex items-center justify-between">
                                    <span class="text-[11px] font-medium text-[#374151]">A <> B overlap</span>
                                    <div class="flex items-center gap-2">
                                      <span class="text-[10px] text-[#ef4444] font-semibold">42% shared audience</span>
                                      <span class="text-[9px] font-bold text-[#ef4444] bg-[#fee2e2] px-1.5 py-0.5 rounded">+$3.2K CPM waste</span>
                                    </div>
                                  </div>
                                  <div class="bg-[#fffbeb] border border-[#fde68a]/40 rounded-lg px-3 py-2 flex items-center justify-between">
                                    <span class="text-[11px] font-medium text-[#374151]">B <> C overlap</span>
                                    <div class="flex items-center gap-2">
                                      <span class="text-[10px] text-[#f59e0b] font-semibold">18% shared audience</span>
                                      <span class="text-[9px] font-bold text-[#92400e] bg-[#fef3c7] px-1.5 py-0.5 rounded">+$1.1K CPM waste</span>
                                    </div>
                                  </div>
                                </div>
                                <p class="text-[10px] text-[#6b7280] mt-3 flex items-center gap-1">
                                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 2l6 12H2L8 2z" stroke="#6b7280" stroke-width="1.2" fill="none"/></svg>
                                  Suggested: Suppress overlapping segments or merge campaigns
                                </p>
                              </div>
                            }
                            @case (4) {
                              <!-- Step 5 viz: Health Score -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8.5l3 3 5-6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Structural Health Score</span>
                                </div>
                                <!-- Score circle -->
                                <div class="flex items-center gap-5 mb-4">
                                  <div class="relative w-[80px] h-[80px] shrink-0">
                                    <svg class="w-full h-full -rotate-90" viewBox="0 0 80 80">
                                      <circle cx="40" cy="40" r="32" fill="none" stroke="#e5e7eb" stroke-width="7" />
                                      <circle cx="40" cy="40" r="32" fill="none" stroke="url(#healthGrad)" stroke-width="7"
                                        stroke-dasharray="144.5 56.5" stroke-linecap="round" />
                                      <defs>
                                        <linearGradient id="healthGrad" x1="0" y1="0" x2="1" y2="1">
                                          <stop offset="0%" stop-color="#e8573a" />
                                          <stop offset="100%" stop-color="#e8573a" />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                    <div class="absolute inset-0 flex items-center justify-center">
                                      <span class="text-[22px] font-bold text-[#1a1a2e]">72</span>
                                    </div>
                                  </div>
                                  <div>
                                    <p class="text-[14px] font-bold text-[#1a1a2e] mb-1">Score: 72/100</p>
                                    <p class="text-[11px] text-[#6b7280]">3 critical issues, 5 recommendations</p>
                                    <p class="text-[10px] text-[#e8573a] font-medium mt-1">Top quartile benchmark: 85+</p>
                                  </div>
                                </div>
                                <!-- Ranked issues -->
                                <div class="space-y-2">
                                  <div class="flex items-start gap-2 bg-[#fef2f2]/60 rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center shrink-0 mt-0.5">
                                      <span class="text-[9px] font-bold text-[#ef4444]">1</span>
                                    </div>
                                    <div>
                                      <p class="text-[11px] font-medium text-[#374151]">No BoFU retargeting campaigns</p>
                                      <p class="text-[10px] text-[#ef4444]">Est. impact: -$8,200/mo in pipeline</p>
                                    </div>
                                  </div>
                                  <div class="flex items-start gap-2 bg-[#fffbeb] rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#fef3c7] flex items-center justify-center shrink-0 mt-0.5">
                                      <span class="text-[9px] font-bold text-[#f59e0b]">2</span>
                                    </div>
                                    <div>
                                      <p class="text-[11px] font-medium text-[#374151]">42% audience overlap across 2 campaigns</p>
                                      <p class="text-[10px] text-[#92400e]">Est. impact: -$3,200/mo in wasted CPM</p>
                                    </div>
                                  </div>
                                  <div class="flex items-start gap-2 bg-[#fef6f3] rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#ffe8df] flex items-center justify-center shrink-0 mt-0.5">
                                      <span class="text-[9px] font-bold text-[#e8573a]">3</span>
                                    </div>
                                    <div>
                                      <p class="text-[11px] font-medium text-[#374151]">Budget skew: 80% in awareness</p>
                                      <p class="text-[10px] text-[#e8573a]">Rec: Shift 25% to consideration & conversion</p>
                                    </div>
                                  </div>
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
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef6f3] via-[#fef6f3] to-[#fef6f3] pointer-events-none -z-10"></div>
      <div class="absolute top-[30%] left-[50%] -translate-x-1/2 w-[50%] h-[50%] bg-radial-[closest-side] from-[#e8573a]/5 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-12">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
            The Difference
          </span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827]">
            What changes when strategy is <span class="section-gradient-text">data-driven.</span>
          </h2>
        </div>

        <!-- Desktop: Enhanced table -->
        <div class="hidden md:block">
          <div class="bg-white rounded-2xl border border-[#fdd5c8]/30 overflow-hidden shadow-[0_4px_24px_-4px_rgba(232,87,58,0.1)]">

            <!-- Table Header -->
            <div class="grid grid-cols-[1fr_1fr_1.15fr]">
              <!-- Capability header -->
              <div class="bg-[#fefaf8] p-5 border-b border-[#e5e7eb]/60">
                <span class="text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.04em]">Capability</span>
              </div>
              <!-- Without header -->
              <div class="bg-[#fefaf8] p-5 border-b border-[#e5e7eb]/60 border-l border-l-[#e5e7eb]/40">
                <div class="flex items-center gap-2">
                  <div class="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.04em]">Without Strategy Copilot</span>
                </div>
              </div>
              <!-- With AdRadar header -->
              <div class="bg-gradient-to-r from-[#1a1a2e] to-[#2a1a30] p-5 border-b border-[#1a1a2e]">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#f5a896] to-[#e8573a] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0 flex items-center justify-center">
                    <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3v18h18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7 14l4-4 4 4 6-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[13px] font-semibold text-white leading-tight">With Strategy Copilot</span>
                    <span class="text-[10px] text-white/50 leading-tight">AdRadar Strategy Copilot</span>
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
                  <div class="w-8 h-8 rounded-lg bg-[#fef6f3] flex items-center justify-center shrink-0">
                    @switch (i) {
                      @case (0) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 3h12M4 7h8M6 11h4" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (1) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 14l4-6 4 3 4-8" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                      @case (2) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="8" width="3" height="6" rx="0.5" fill="#e8573a"/><rect x="6.5" y="5" width="3" height="9" rx="0.5" fill="#e8573a" opacity="0.7"/><rect x="11" y="2" width="3" height="12" rx="0.5" fill="#e8573a" opacity="0.4"/></svg>
                      }
                      @case (3) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="3" stroke="#e8573a" stroke-width="1.5"/><path d="M4 13c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (4) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="#e8573a" stroke-width="1.5"/><path d="M8 5v3h3" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                      @case (5) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8.5l3 3 5-6" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                    }
                  </div>
                  <span class="text-[14px] font-semibold text-[#111827]">{{ row.capability }}</span>
                </div>

                <!-- Without value -->
                <div class="p-5 flex items-center gap-2.5 border-l border-[#e5e7eb]/40">
                  <div class="w-[18px] h-[18px] rounded-full bg-[#fef2f2] flex items-center justify-center shrink-0">
                    <svg width="7" height="7" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[14px] text-[#9ca3af]">{{ row.without }}</span>
                </div>

                <!-- With AdRadar value -->
                <div class="p-5 flex items-center gap-2.5 bg-[#fef6f3]/70 group-hover:bg-[#fef2ec]/60 transition-colors border-l-2 border-l-[#e8573a]/20">
                  <div class="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center shrink-0 shadow-[0_1px_4px_-1px_rgba(26,26,46,0.3)]">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <span class="text-[14px] text-[#1a1a2e] font-semibold">{{ row.withCopilot }}</span>
                </div>
              </div>
            }

          </div>
        </div>

        <!-- Mobile: Stacked cards -->
        <div class="md:hidden space-y-3">
          <!-- Mobile branded header card -->
          <div class="flex items-center gap-3 bg-gradient-to-r from-[#1a1a2e] to-[#2a1a30] rounded-xl px-4 py-3">
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#f5a896] to-[#e8573a] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0 flex items-center justify-center">
              <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none">
                <path d="M3 3v18h18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 14l4-4 4 4 6-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <span class="text-[13px] font-semibold text-white block leading-tight">AdRadar Strategy Copilot</span>
              <span class="text-[10px] text-white/50 block leading-tight">See the difference the copilot makes</span>
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
                <div class="p-4 bg-[#fef6f3]/70 border-l-2 border-l-[#e8573a]/20">
                  <div class="flex items-center gap-1.5 mb-2">
                    <div class="w-[14px] h-[14px] rounded-full bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                      <svg width="6" height="6" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
                    </div>
                    <p class="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#e8573a]">With Copilot</p>
                  </div>
                  <p class="text-[13px] text-[#1a1a2e] font-semibold">{{ row.withCopilot }}</p>
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
      <div class="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-radial-[closest-side] from-[#e8573a]/5 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] bg-radial-[closest-side] from-[#f5a896]/4 to-transparent blur-[120px] pointer-events-none -z-10"></div>
      <!-- Dot pattern overlay -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" style="background-image: radial-gradient(circle, #1a1a2e 1px, transparent 1px); background-size: 28px 28px;"></div>

      <div class="max-w-[1200px] mx-auto px-6">

        <!-- Top: Badge + Heading row -->
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
          <div class="max-w-[600px]">
            <div class="flex items-center gap-2.5 mb-4">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#f5a896] to-[#e8573a] p-[2px] overflow-hidden flex items-center justify-center">
                <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3v18h18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7 14l4-4 4 4 6-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a]">
                Proven Results
              </span>
            </div>
            <h2 class="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.08] tracking-[-0.025em] text-[#111827]">
              First audit. Same account.<br class="hidden lg:block" />
              <span class="section-gradient-text">Completely different structure.</span>
            </h2>
          </div>
          <p class="text-[15px] text-[#4b5563] leading-[1.65] max-w-[340px] lg:text-right">
            Measured across teams who activated Strategy Copilot on existing campaigns — no additional spend required.
          </p>
        </div>

        <!-- Results cards -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- Card 1: 45 min Campaign Build Time -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-6 lg:p-7 h-full group-hover:shadow-[0_8px_30px_-6px_rgba(232,87,58,0.12)] transition-all duration-500">

              <!-- Before -> After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">3-5 hrs</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#e8573a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#e8573a] bg-[#ff6b35]/15 px-2.5 py-1 rounded-full">45 min</span>
              </div>

              <!-- Donut chart visualization -->
              <div class="relative w-[140px] h-[140px] mx-auto mb-6">
                <svg class="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" stroke-width="12" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#ef4444" stroke-opacity="0.5" stroke-width="12"
                    stroke-dasharray="282.7 31.3" stroke-linecap="round" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="url(#resultGrad1sc)" stroke-width="12"
                    stroke-dasharray="47.1 266.9" stroke-linecap="round" />
                  <defs>
                    <linearGradient id="resultGrad1sc" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#e8573a" />
                      <stop offset="100%" stop-color="#ff6b35" />
                    </linearGradient>
                  </defs>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <span class="text-[28px] font-bold text-[#111827] tracking-[-0.03em] leading-none">45</span>
                  <span class="text-[12px] text-[#6b7280]">min</span>
                </div>
              </div>

              <h3 class="text-[18px] font-bold text-[#111827] mb-1.5 text-center">Campaign build time</h3>
              <p class="text-[13px] text-[#6b7280] text-center leading-[1.5]">
                Down from 3-5 hours of manual structuring
              </p>
            </div>
          </div>

          <!-- Card 2: 22% Budget Recovered -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-6 lg:p-7 h-full group-hover:shadow-[0_8px_30px_-6px_rgba(232,87,58,0.12)] transition-all duration-500">

              <!-- Before -> After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">Wasted</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#e8573a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#16a34a] bg-[#dcfce7] px-2.5 py-1 rounded-full">Recovered</span>
              </div>

              <!-- Bar chart visualization -->
              <div class="flex items-end gap-3 justify-center h-[140px] mb-6 px-2">
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[120px] relative overflow-hidden bg-[#fee2e2] border border-[#fca5a5]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#ef4444] to-[#fca5a5]"></div>
                  </div>
                  <span class="text-[10px] text-[#6b7280] font-medium">Before</span>
                </div>
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[93px] relative overflow-hidden bg-[#1a1a2e] border border-[#e8573a]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#e8573a] to-[#ff6b35]"></div>
                  </div>
                  <span class="text-[10px] text-[#e8573a] font-semibold">After</span>
                </div>
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[26px] relative overflow-hidden bg-[#dcfce7] border border-[#86efac]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#22c55e] to-[#16a34a]"></div>
                  </div>
                  <span class="text-[10px] text-[#16a34a] font-medium">Saved</span>
                </div>
              </div>

              <div class="text-center">
                <p class="text-[48px] font-bold text-[#111827] tracking-[-0.04em] leading-none mb-1.5">22%</p>
                <h3 class="text-[18px] font-bold text-[#111827] mb-1.5">Budget recovered</h3>
                <p class="text-[13px] text-[#6b7280] leading-[1.5]">
                  From structural waste identified in first audit
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: 34% Pipeline -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-6 lg:p-7 h-full group-hover:shadow-[0_8px_30px_-6px_rgba(232,87,58,0.12)] transition-all duration-500">

              <!-- Before -> After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">Unstructured</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#e8573a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#e8573a] bg-[#ff6b35]/15 px-2.5 py-1 rounded-full">Structured</span>
              </div>

              <!-- Budget flow visualization -->
              <div class="relative mb-6 px-1">
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[11px] text-[#6b7280] font-medium uppercase tracking-[0.04em]">LinkedIn ad spend</span>
                    <span class="text-[12px] text-[#374151] font-semibold">$50,000</span>
                  </div>
                  <div class="h-[12px] bg-[#f3f4f6] rounded-full overflow-hidden border border-[#e5e7eb]">
                    <div class="h-full w-full bg-gradient-to-r from-[#e8573a] to-[#e8573a] rounded-full"></div>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[11px] text-[#e8573a] font-semibold uppercase tracking-[0.04em]">Pipeline attributed</span>
                    <span class="text-[12px] text-[#e8573a] font-bold">$17,000</span>
                  </div>
                  <div class="h-[12px] bg-[#f3f4f6] rounded-full overflow-hidden border border-[#e8573a]/25">
                    <div class="h-full w-[34%] bg-gradient-to-r from-[#e8573a] to-[#e8573a] rounded-full"></div>
                  </div>
                </div>
                <div class="flex items-center gap-2 mt-4 bg-[#e8573a]/10 border border-[#e8573a]/20 rounded-lg px-3 py-2.5">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8h8M9.5 5.5L12 8l-2.5 2.5" stroke="#e8573a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span class="text-[11px] text-[#e8573a] font-medium">With structured funnel coverage</span>
                </div>
              </div>

              <div class="text-center">
                <p class="text-[48px] font-bold text-[#111827] tracking-[-0.04em] leading-none mb-1.5">34%</p>
                <h3 class="text-[18px] font-bold text-[#111827] mb-1.5">Pipeline from LinkedIn</h3>
                <p class="text-[13px] text-[#6b7280] leading-[1.5]">
                  Attributed pipeline with structured funnel coverage
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom trust line -->
        <div class="flex items-center justify-center gap-3 mt-10 lg:mt-14">
          <div class="w-[1px] h-4 bg-gradient-to-b from-transparent to-[#d1d5db]"></div>
          <p class="text-[13px] text-[#9ca3af] text-center">
            Results measured across active campaigns within first audit of enabling Strategy Copilot
          </p>
          <div class="w-[1px] h-4 bg-gradient-to-b from-transparent to-[#d1d5db]"></div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 7: RELATED AGENTS
         ═══════════════════════════════════════════ -->
    <section class="relative py-14 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef9f7] via-[#fefaf8] to-white pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[50%] bg-radial-[closest-side] from-[#f5a896]/8 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-10">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
            Connected Intelligence
          </span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
            Strategy is the foundation.
            <br class="hidden md:block" />
            Six agents <span class="section-gradient-text">execute the plan.</span>
          </h2>
          <p class="text-[15px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[720px] mx-0 md:mx-auto">
            The Strategy Copilot shares context and memory with every other AdRadar agent —
            so structural insights inform impression capping, audience targeting, creative rotation,
            spend pacing, and competitor intelligence simultaneously.
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
                  <!-- Connection to Strategy Copilot badge -->
                  <div class="flex items-center gap-1.5">
                    <div class="w-4 h-4 rounded-full bg-gradient-to-br from-[#f5a896] to-[#e8573a] overflow-hidden shrink-0 flex items-center justify-center">
                      <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3v18h18" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 14l4-4 4 4 6-6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
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

    <!-- ═══════════════════════════════════════════
         SECTION 8: FINAL CTA
         ═══════════════════════════════════════════ -->
    <section class="relative py-12 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <img src="/images/cta-bg-2.png" alt="" class="object-cover scale-125 absolute inset-0 w-full h-full" aria-hidden="true" />
      </div>

      <div class="relative max-w-[1200px] mx-auto px-6">
        <div class="relative rounded-[28px] lg:rounded-[32px] bg-white overflow-clip shadow-[0_0_24px_4px_rgba(0,0,0,0.12)] pt-12 lg:pt-16 pb-[120px] lg:pb-[160px] px-8 md:px-12 lg:px-16">
          <div class="relative z-10 text-left md:text-center max-w-[700px] mx-auto">
            <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-3">
              Stop guessing campaign structure.
              <br class="hidden md:block" />
              <span
                class="italic font-bold bg-clip-text text-transparent"
                [style.backgroundImage]="'linear-gradient(58deg, #FF4829 22.76%, #F1CD98 96.62%)'"
              >
                Let data design it.
              </span>
            </h2>
            <p class="text-[15px] md:text-[17px] text-[#4b5563] max-w-none md:max-w-[520px] mx-0 md:mx-auto mb-6 leading-[1.65]">
              Connect your LinkedIn Ads account in 2 minutes. The Strategy Copilot
              runs its first audit immediately. No credit card required.
            </p>
            <a href="#" class="inline-flex items-center gap-3.5 bg-[#ff6500] hover:bg-[#e85a00] text-white rounded-full pl-9 pr-1 py-1 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(255,101,0,0.4)] hover:scale-[1.03]">
              <span class="text-[15px] lg:text-[17px] font-medium">Start free trial</span>
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3l4 4-4 4" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>
          </div>

          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-[110%] max-w-[1310px] h-[200px] hidden md:block">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1310 200" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d="M 30 55 Q 200 95 400 135 Q 550 165 655 175 Q 760 165 910 135 Q 1110 95 1280 55" stroke="#f5a896" stroke-width="2" fill="none" opacity="0.4"/>
            </svg>

            <div class="absolute" style="left: 2%; bottom: 110px">
              <div class="relative">
                <div class="w-[52px] h-[52px] rounded-full bg-[#acdfa4] p-[2px] shadow-md">
                  <img src="/agents/Analyse competitors LinkedIn Ads.png" alt="" class="w-full h-full rounded-full object-cover bg-[#acdfa4]"/>
                </div>
                <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#22c55e] text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">Available</div>
              </div>
            </div>

            <div class="absolute" style="left: 15%; bottom: 80px">
              <div class="relative">
                <div class="w-[60px] h-[60px] rounded-full bg-[#fbf5df] p-[2px] shadow-md">
                  <img src="/agents/Campaign Scheduling Agent.png" alt="" class="w-full h-full rounded-full object-cover bg-[#fbf5df]"/>
                </div>
                <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#22c55e] text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">Available</div>
              </div>
            </div>

            <div class="absolute" style="left: 30%; bottom: 45px">
              <div class="relative">
                <div class="w-[68px] h-[68px] rounded-full bg-[#ee95a0] p-[2px] shadow-md">
                  <img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full rounded-full object-cover bg-[#ee95a0]"/>
                </div>
                <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#22c55e] text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">Available</div>
              </div>
            </div>

            <!-- CENTER: Strategy Copilot (SVG icon — no image) -->
            <div class="absolute" style="left: 46%; bottom: 15px">
              <div class="relative">
                <div class="w-[84px] h-[84px] rounded-full bg-gradient-to-br from-[#f5a896] to-[#e8573a] p-[2px] shadow-lg ring-4 ring-[#f5a896]/30">
                  <div class="w-full h-full rounded-full bg-gradient-to-br from-[#f5a896] to-[#e8573a] flex items-center justify-center">
                    <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3v18h18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7 14l4-4 4 4 6-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#22c55e] text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">Available</div>
              </div>
            </div>

            <div class="absolute" style="left: 62%; bottom: 45px">
              <div class="relative">
                <div class="w-[68px] h-[68px] rounded-full bg-[#a8d1dc] p-[2px] shadow-md">
                  <img src="/agents/Impression Capping Agent.png" alt="" class="w-full h-full rounded-full object-cover bg-[#a8d1dc]"/>
                </div>
                <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#22c55e] text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">Available</div>
              </div>
            </div>

            <div class="absolute" style="left: 77%; bottom: 80px">
              <div class="relative">
                <div class="w-[60px] h-[60px] rounded-full bg-[#acdfa4] p-[2px] shadow-md">
                  <img src="/agents/Bidding Optimization Agent.png" alt="" class="w-full h-full rounded-full object-cover bg-[#acdfa4]"/>
                </div>
                <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#22c55e] text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">Available</div>
              </div>
            </div>

            <div class="absolute" style="left: 90%; bottom: 110px">
              <div class="relative">
                <div class="w-[52px] h-[52px] rounded-full bg-[#b8dff0] p-[2px] shadow-md">
                  <img src="/agents/Company Blocking Agent.png" alt="" class="w-full h-full rounded-full object-cover bg-[#b8dff0]"/>
                </div>
                <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#22c55e] text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      background: linear-gradient(58deg, #f5a896 0%, #fdd5c8 50%, #ffffff 100%);
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

    /* Donut chart fill animation */
    .donut-fill {
      stroke-dashoffset: 271.4;
      animation: donut-draw 1.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
    }
    @keyframes donut-draw {
      to { stroke-dashoffset: 54.3; }
    }

    /* Budget bar animation */
    .budget-bar {
      width: 0% !important;
      animation: bar-grow 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
    }
    @keyframes bar-grow {
      to { width: 80% !important; }
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
export class StrategyCopilotComponent implements OnInit, OnDestroy {
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
    'No structural audit of campaign architecture',
    'Generic best practices \u2014 not ACV-specific',
    'No funnel stage coverage analysis',
    'Budget allocation based on gut feel',
    'No audience overlap detection',
    'No pre-launch campaign review',
  ];

  adradarAdvantages = [
    'Full structural audit on every connect',
    'Benchmarked by ACV, industry, and vertical',
    'Funnel sequencing audit built-in',
    'Data-driven budget allocation recommendations',
    'Audience overlap detection and suppression suggestions',
    'Pre-launch review against benchmarks',
  ];

  steps = [
    {
      number: '01',
      label: 'Audit',
      title: 'Funnel sequencing audit',
      description:
        'Evaluate whether your campaign mix maps to the buyer journey \u2014 ToFU awareness, MoFU consideration, BoFU conversion \u2014 for your average deal cycle and ACV tier.',
    },
    {
      number: '02',
      label: 'Analyse',
      title: 'Budget allocation analysis',
      description:
        'Check how spend is distributed across funnel stages and audience segments. Flag imbalances \u2014 like 80% of budget in awareness with no retargeting covered.',
    },
    {
      number: '03',
      label: 'Benchmark',
      title: 'ACV and industry benchmarking',
      description:
        'Compare campaign KPIs against AdRadar\u2019s B2B benchmarks, segmented by ACV, industry vertical, company size. See where you sit \u2014 and what top-quartile looks like.',
    },
    {
      number: '04',
      label: 'Detect',
      title: 'Audience overlap detection',
      description:
        'Identify campaigns competing for the same audience segments, which inflates CPM and internal competition. Suggest suppression logic, segment restructuring.',
    },
    {
      number: '05',
      label: 'Score',
      title: 'Structural health scoring',
      description:
        'Generates a campaign architecture score with a ranked list of structural issues \u2014 each with an estimated budget impact, a root cause, and a specific recommended fix.',
    },
  ];

  comparisonRows: ComparisonRow[] = [
    {
      capability: 'Campaign structure audit',
      without: 'Manual review, hours of work',
      withCopilot: 'Automated on every connect',
    },
    {
      capability: 'Funnel stage coverage',
      without: 'Estimated from experience',
      withCopilot: 'Benchmarked by ACV & industry',
    },
    {
      capability: 'Budget allocation logic',
      without: 'Gut feel or last quarter\u2019s setup',
      withCopilot: 'Data-driven recommendations',
    },
    {
      capability: 'ICP audience alignment',
      without: 'Checked periodically',
      withCopilot: 'Audited continuously',
    },
    {
      capability: 'Campaign build time',
      without: '3\u20135 hours',
      withCopilot: 'Under 45 minutes',
    },
    {
      capability: 'Confidence going into launch',
      without: 'Low \u2014 always second-guessing',
      withCopilot: 'High \u2014 backed by benchmark data',
    },
  ];

  relatedAgents: RelatedAgent[] = [
    {
      name: 'Company Blocking Agent',
      image: '/agents/Company Blocking Agent.png',
      avatarBg: '#b8dff0',
      description:
        'Blocks non-ICP companies entirely \u2014 structural audits inform which companies to exclude based on ACV alignment.',
      accentColor: '#4a9cc5',
      route: '/agents/company-blocking',
    },
    {
      name: 'Impression Capping Agent',
      image: '/agents/Impression Capping Agent.png',
      avatarBg: '#a8d1dc',
      description:
        'Enforces account-level impression limits \u2014 Strategy Copilot recommends optimal cap thresholds by segment.',
      accentColor: '#3a97ab',
      route: '/agents/impression-capping',
    },
    {
      name: 'Title Blocking Agent',
      image: '/agents/Title Blocking Agent.png',
      avatarBg: '#ee95a0',
      description:
        'Removes irrelevant job titles from impressions \u2014 audience overlap detection feeds title exclusion lists.',
      accentColor: '#d4606f',
      route: '/agents/title-blocking',
    },
    {
      name: 'Bidding Optimization Agent',
      image: '/agents/Bidding Optimization Agent.png',
      avatarBg: '#acdfa4',
      description:
        'Optimises CPM as budget redistributes \u2014 budget allocation recommendations feed bidding strategies.',
      accentColor: '#4a9a42',
      route: '/agents/bidding-optimization',
    },
    {
      name: 'Ad Rotation Agent',
      image: '/agents/Ad Rotation Agent.png',
      avatarBg: '#d9e1fb',
      description:
        'Detects creative fatigue before CTR drops \u2014 funnel stage coverage data informs creative sequencing.',
      accentColor: '#6b5ea0',
      route: '/agents/ad-rotation',
    },
    {
      name: 'Campaign Scheduling Agent',
      image: '/agents/Campaign Scheduling Agent.png',
      avatarBg: '#fbf5df',
      description:
        'Pauses campaigns during low-conversion windows \u2014 ACV benchmarks determine optimal scheduling.',
      accentColor: '#c5a030',
      route: '/agents/campaign-scheduling',
    },
  ];
}
