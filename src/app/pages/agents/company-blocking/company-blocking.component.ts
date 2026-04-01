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
  selector: 'app-company-blocking',
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
            <div class="inline-flex items-center gap-2.5 bg-[#fef6f3]/80 backdrop-blur-sm border border-[#9dcce7]/40 rounded-full px-4 py-1.5 mb-6 shadow-[0_2px_12px_-4px_rgba(74,156,197,0.15)]">
              <div class="w-6 h-6 rounded-full overflow-hidden bg-[#b8dff0] ring-2 ring-white/60">
                <img src="/agents/Company Blocking Agent.png" alt="" class="w-full h-full object-cover" />
              </div>
              <span class="text-[11px] font-bold tracking-[0.08em] text-[#1a1a2e] uppercase">
                Company Blocking Agent
              </span>
            </div>

            <!-- Heading -->
            <h1 class="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em] text-[#111827] mb-6">
              LinkedIn ads shouldn't be spent on companies that will
              <span class="hero-gradient-text">never buy from you.</span>
            </h1>

            <!-- Subheading -->
            <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-[540px] mb-8">
              Automatically exclude every account outside your target company criteria, so every impression,
              every click, and every dollar stays within your ICP.
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
                class="h-12 px-8 flex items-center justify-center border border-[#9dcce7] rounded-full text-[15px] font-medium text-[#1a1a2e] hover:bg-[#e3f3fa]/50 hover:border-[#4a9cc5]/50 transition-all duration-300"
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
              <div class="absolute -inset-10 bg-radial-[closest-side] from-[#b8dff0]/20 to-transparent blur-[40px] pointer-events-none"></div>

              <!-- Orbit rings -->
              <div class="absolute inset-[46px] rounded-full border border-dashed border-[#b8dff0]/20"></div>
              <div class="absolute inset-[90px] rounded-full border border-[#b8dff0]/8"></div>

              <!-- Subtle rotating ring -->
              <div class="absolute inset-[44px] rounded-full border border-[#4a9cc5]/5 orbit-ring"></div>

              <!-- Connecting lines -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 420">
                <line x1="210" y1="210" x2="210" y2="46" stroke="url(#line-grad-cb)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="128" stroke="url(#line-grad-cb)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="352" y2="292" stroke="url(#line-grad-cb)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="210" y2="374" stroke="url(#line-grad-cb)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="292" stroke="url(#line-grad-cb)" stroke-width="1" opacity="0.15"/>
                <line x1="210" y1="210" x2="68" y2="128" stroke="url(#line-grad-cb)" stroke-width="1" opacity="0.15"/>
                <defs>
                  <linearGradient id="line-grad-cb" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#b8dff0" stop-opacity="0.6"/>
                    <stop offset="100%" stop-color="#b8dff0" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>

              <!-- ══════ CENTER: Company Blocking Agent ══════ -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div class="absolute inset-[-32px] rounded-full bg-[#b8dff0]/6 animate-[pulse-ring_3s_ease-in-out_infinite]"></div>
                <div class="absolute inset-[-22px] rounded-full bg-[#b8dff0]/10 animate-[pulse-ring_3s_ease-in-out_infinite_0.5s]"></div>
                <div class="absolute inset-[-12px] rounded-full bg-gradient-to-br from-[#b8dff0]/20 to-[#4a9cc5]/12"></div>
                <div class="relative w-[110px] h-[110px] rounded-full bg-gradient-to-br from-[#d4eef8] to-[#b8dff0] p-[3px] shadow-[0_8px_40px_-4px_rgba(74,156,197,0.35)]">
                  <div class="w-full h-full rounded-full bg-gradient-to-br from-[#e3f3fa] to-[#b8dff0] overflow-hidden">
                    <img src="/agents/Company Blocking Agent.png" alt="Company Blocking Agent" class="w-full h-full object-cover" />
                  </div>
                </div>
                <div class="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1a1a2e] text-white text-[10px] font-bold tracking-[0.05em] uppercase px-3 py-1 rounded-full shadow-[0_4px_12px_-2px_rgba(26,26,46,0.3)]">
                  Company Blocking
                </div>
              </div>

              <!-- ══════ ORBITING AGENTS ══════ -->
              <!-- Top: Impression Capping -->
              <div class="absolute top-[16px] left-1/2 -translate-x-1/2 z-10 orbit-agent" style="animation-delay: 0s">
                <div class="w-[60px] h-[60px] rounded-full p-[2px] bg-gradient-to-br from-[#a8d1dc]/60 to-[#d0eef4]/40 shadow-[0_4px_16px_-4px_rgba(168,209,220,0.3)] transition-transform duration-500 hover:scale-110">
                  <div class="w-full h-full rounded-full bg-[#e5f7fa] overflow-hidden">
                    <img src="/agents/Impression Capping Agent.png" alt="Impression Capping" class="w-full h-full object-cover" />
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
            LinkedIn campaigns drift beyond your intended account criteria —
            <br class="hidden md:block" />
            <span class="section-gradient-text">silently, continuously, and at your expense.</span>
          </h2>
          <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[680px] mx-0 md:mx-auto">
            You defined your ICP carefully. You set your targeting to match. But LinkedIn's delivery algorithm
            doesn't optimise for your account criteria. It optimises for engagement.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- Card 1: 22% -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">22%</span>
                <div class="w-10 h-10 rounded-xl bg-[#e3f3fa] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L2 18h16L10 2z" stroke="#4a9cc5" stroke-width="1.5" fill="none"/>
                    <path d="M10 8v4" stroke="#4a9cc5" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="10" cy="14.5" r="0.75" fill="#4a9cc5"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                Avg budget delivered to non-ICP companies in a standard LinkedIn campaign
              </p>
              <p class="text-[13px] text-[#4b5563] leading-[1.55]">
                Budget that generated no pipeline and no learning value.
              </p>
            </div>
          </div>

          <!-- Card 2: 30-40% -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">30–40%</span>
                <div class="w-10 h-10 rounded-xl bg-[#e3f3fa] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="11" width="3.5" height="6" rx="1" fill="#4a9cc5"/>
                    <rect x="8.25" y="7" width="3.5" height="10" rx="1" fill="#4a9cc5" opacity="0.7"/>
                    <rect x="13.5" y="3" width="3.5" height="14" rx="1" fill="#4a9cc5" opacity="0.4"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                ICP miss rate on LinkedIn campaigns without active account-level blocking
              </p>
              <p class="text-[13px] text-[#4b5563] leading-[1.55]">
                Nearly a third of impressions reach a company outside your ICP definition.
              </p>
            </div>
          </div>

          <!-- Card 3: 0 -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e5e7eb] shadow-sm hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
            <div class="relative p-7 lg:p-8">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-none text-[#111827]">0</span>
                <div class="w-10 h-10 rounded-xl bg-[#e3f3fa] flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="3" width="14" height="14" rx="3" stroke="#4a9cc5" stroke-width="1.5" fill="none"/>
                    <path d="M7 10h6" stroke="#4a9cc5" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="10" cy="10" r="1" fill="#4a9cc5" opacity="0.5"/>
                  </svg>
                </div>
              </div>
              <p class="text-[15px] font-semibold text-[#374151] leading-[1.4] mb-2">
                Native LinkedIn tools to automatically block off-ICP companies as delivery drifts
              </p>
              <p class="text-[13px] text-[#4b5563] leading-[1.55]">
                LinkedIn Campaign Manager reports company delivery, with no automatic account enforcement.
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
              Define your target company criteria once. The agent enforces it
              <span class="section-gradient-text">on every impression.</span>
            </h2>
            <p class="text-[16px] text-[#4b5563] leading-[1.7] mb-8 max-w-[540px]">
              The Company Blocking Agent monitors every company receiving impressions across linked campaigns —
              blocking any that fall outside your configured criteria before budget reaches them.
            </p>

            <!-- Before / After transformation card -->
            <div class="hidden lg:flex flex-col flex-1 bg-gradient-to-br from-[#fef9f7] to-[#e3f3fa]/40 rounded-2xl border border-[#9dcce7]/25 p-6 mt-2">

              <!-- Before: Without blocking -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#fef2f2] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[12px] font-semibold text-[#4b5563] uppercase tracking-[0.04em]">Without blocking</span>
                </div>
                <!-- Bar visualization: mixed ICP and off-ICP companies -->
                <div class="flex gap-[3px] items-end h-[44px]">
                  <div class="flex-1 bg-[#ef4444]/20 rounded-[3px] h-full"></div>
                  <div class="flex-1 bg-[#e5e7eb]/70 rounded-[3px] h-[82%]"></div>
                  <div class="flex-1 bg-[#ef4444]/16 rounded-[3px] h-[75%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/60 rounded-[3px] h-[60%]"></div>
                  <div class="flex-1 bg-[#ef4444]/10 rounded-[3px] h-[52%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/50 rounded-[3px] h-[40%]"></div>
                  <div class="flex-1 bg-[#ef4444]/14 rounded-[3px] h-[30%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/40 rounded-[3px] h-[22%]"></div>
                  <div class="flex-1 bg-[#ef4444]/8 rounded-[3px] h-[15%]"></div>
                  <div class="flex-1 bg-[#e5e7eb]/30 rounded-[3px] h-[10%]"></div>
                </div>
                <div class="flex items-center justify-between mt-1.5">
                  <span class="text-[10px] text-[#ef4444]/60 font-medium">Off-ICP companies</span>
                  <span class="text-[10px] text-[#9ca3af]">ICP companies</span>
                </div>
              </div>

              <!-- Divider with arrow -->
              <div class="flex items-center gap-3 my-3">
                <div class="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#9dcce7]/40"></div>
                <div class="w-7 h-7 rounded-full bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center shadow-[0_2px_8px_-2px_rgba(26,26,46,0.3)]">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M4 8l3 3 3-3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#9dcce7]/40"></div>
              </div>

              <!-- After: With blocking -->
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-6 h-6 rounded-full bg-[#e3f3fa] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="#1a1a2e" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <span class="text-[12px] font-semibold text-[#1a1a2e] uppercase tracking-[0.04em]">With adRadar blocking</span>
                </div>
                <!-- Bar visualization: mostly ICP companies -->
                <div class="flex gap-[3px] items-end h-[44px]">
                  <div class="flex-1 bg-gradient-to-t from-[#1a1a2e] to-[#e8573a] rounded-[3px] h-[78%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#1a1a2e] to-[#e8573a] rounded-[3px] h-[74%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#1a1a2e]/90 to-[#e8573a] rounded-[3px] h-[70%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#ff6b35] rounded-[3px] h-[66%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#ff6b35] rounded-[3px] h-[63%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#e8573a] to-[#ff6b35] rounded-[3px] h-[60%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#ff6b35] to-[#f5a896] rounded-[3px] h-[56%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#ff6b35] to-[#f5a896] rounded-[3px] h-[52%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#f5a896] to-[#e3f3fa] rounded-[3px] h-[48%]"></div>
                  <div class="flex-1 bg-gradient-to-t from-[#f5a896] to-[#e3f3fa] rounded-[3px] h-[44%]"></div>
                </div>
                <div class="flex items-center justify-between mt-1.5">
                  <span class="text-[10px] text-[#e8573a] font-medium">ICP-matched</span>
                  <span class="text-[10px] text-[#e8573a]">Clean delivery</span>
                </div>
              </div>

              <!-- Flex spacer -->
              <div class="flex-1"></div>

              <!-- Stats row -->
              <div class="grid grid-cols-3 gap-3 pt-4 border-t border-[#9dcce7]/20">
                <div>
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">22%</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">Budget recovered</p>
                </div>
                <div class="text-center">
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">85%+</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">ICP match rate</p>
                </div>
                <div class="text-right">
                  <p class="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.03em] leading-none">28%</p>
                  <p class="text-[11px] font-medium text-[#374151] mt-1">CPL reduction</p>
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
                        <rect x="3" y="3" width="14" height="14" rx="3" stroke="#9ca3af" stroke-width="1.5" fill="none"/>
                        <line x1="4" y1="16" x2="16" y2="4" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-[14px] font-semibold text-[#374151] leading-tight">LinkedIn company targeting</h3>
                      <p class="text-[11px] text-[#9ca3af] mt-0.5">Reactive exclusion only</p>
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
              <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#e5e7eb] via-[#9dcce7] to-[#4a9cc5]"></div>
              <div class="relative bg-gradient-to-br from-[#1a1a2e] to-[#e8573a] text-white text-[10px] font-bold tracking-[0.06em] uppercase px-4 py-2 rounded-full shadow-[0_4px_20px_-4px_rgba(26,26,46,0.35)] flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M4 9l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Upgrade to
              </div>
            </div>

            <!-- adRadar Card -->
            <div class="group relative rounded-2xl flex-1 transition-all duration-300">
              <div class="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#4a9cc5]/25 via-[#9dcce7]/15 to-[#4a9cc5]/25 opacity-60 group-hover:opacity-100 blur-[3px] transition-opacity duration-500"></div>
              <div class="relative bg-gradient-to-br from-[#f0f9fd] via-[#e3f3fa] to-[#d4eef8] rounded-2xl border-2 border-[#9dcce7] p-5 lg:p-6 shadow-[0_8px_30px_-8px_rgba(74,156,197,0.15)] group-hover:shadow-[0_16px_50px_-12px_rgba(74,156,197,0.22)] flex flex-col h-full">
                <div class="shimmer-sweep absolute inset-0 pointer-events-none z-10 rounded-2xl"></div>

                <!-- Header -->
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-[#d4eef8] to-[#9dcce7] p-[2px] shadow-[0_4px_12px_-2px_rgba(74,156,197,0.3)]">
                      <div class="w-full h-full rounded-full bg-[#b8dff0] overflow-hidden">
                        <img src="/agents/Company Blocking Agent.png" alt="" class="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 class="text-[14px] font-bold text-[#1a1a2e] leading-tight">adRadar Company Blocking</h3>
                      <p class="text-[11px] text-[#4a9cc5] mt-0.5">Account-level enforcement</p>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#1a5a78] bg-[#e3f3fa] rounded-full px-2.5 py-0.5">Full Control</span>
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
                <div class="bg-white/60 backdrop-blur-sm rounded-xl border border-[#9dcce7]/20 p-3.5 mb-4">
                  <p class="text-[10px] font-bold tracking-[0.06em] uppercase text-[#4a9cc5] mb-2.5">Impact when enabled</p>
                  <div class="grid grid-cols-3 gap-2">
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">22%</p>
                      <p class="text-[10px] text-[#4b5563] mt-1 leading-tight">Budget<br/>recovered</p>
                    </div>
                    <div class="text-center border-l border-r border-[#9dcce7]/20">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">85%+</p>
                      <p class="text-[10px] text-[#4b5563] mt-1 leading-tight">ICP match<br/>rate</p>
                    </div>
                    <div class="text-center">
                      <p class="text-[20px] font-bold text-[#1a1a2e] tracking-[-0.02em] leading-none">28%</p>
                      <p class="text-[10px] text-[#4b5563] mt-1 leading-tight">CPL<br/>reduction</p>
                    </div>
                  </div>
                </div>

                <!-- Bottom highlight strip -->
                <div class="flex items-center justify-between pt-3.5 border-t border-[#9dcce7]/15">
                  <div class="flex items-center gap-2.5">
                    <div class="flex -space-x-1.5">
                      <div class="w-5 h-5 rounded-full bg-[#ee95a0] ring-2 ring-[#e3f3fa] overflow-hidden"><img src="/agents/Title Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                      <div class="w-5 h-5 rounded-full bg-[#acdfa4] ring-2 ring-[#e3f3fa] overflow-hidden"><img src="/agents/Bidding Optimization Agent.png" alt="" class="w-full h-full object-cover"/></div>
                      <div class="w-5 h-5 rounded-full bg-[#a8d1dc] ring-2 ring-[#e3f3fa] overflow-hidden"><img src="/agents/Impression Capping Agent.png" alt="" class="w-full h-full object-cover"/></div>
                    </div>
                    <span class="text-[11px] text-[#4a9cc5] font-medium">+6 agents</span>
                  </div>
                  <a href="#" class="text-[11px] font-semibold text-[#1a1a2e] hover:text-[#4a9cc5] transition-colors flex items-center gap-1">
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
        <div class="absolute top-[20%] left-[-8%] w-[25%] h-[60%] bg-radial-[closest-side] from-[#9dcce7]/8 to-transparent blur-[80px] pointer-events-none -z-10"></div>
        <div class="absolute bottom-[20%] right-[-8%] w-[25%] h-[60%] bg-radial-[closest-side] from-[#4a9cc5]/6 to-transparent blur-[80px] pointer-events-none -z-10"></div>

        <div class="h-full flex flex-col justify-center">
          <div class="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16 w-full">

            <!-- Header -->
            <div class="mb-6 lg:mb-8">
              <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a]">
                How It Works
              </span>
              <h2 class="text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mt-1.5 lg:mt-2">
                Define your ICP once.<br class="hidden lg:block" />
                <span class="section-gradient-text">The agent enforces it continuously.</span>
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
                              <!-- Step 1 viz: ICP Criteria Configuration -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M2 8h12" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">ICP Criteria</span>
                                </div>
                                <!-- Criteria fields -->
                                <div class="space-y-2.5 mb-4">
                                  <div class="flex items-center justify-between bg-[#e3f3fa]/60 rounded-lg px-3 py-2.5 border-2 border-[#4a9cc5]/30">
                                    <div class="flex items-center gap-2">
                                      <div class="w-4 h-4 rounded-full bg-[#4a9cc5] flex items-center justify-center">
                                        <div class="w-2 h-2 rounded-full bg-white"></div>
                                      </div>
                                      <div>
                                        <p class="text-[12px] font-semibold text-[#1a1a2e]">Industry</p>
                                        <p class="text-[10px] text-[#4b5563]">SaaS, FinTech, MarTech</p>
                                      </div>
                                    </div>
                                    <span class="text-[9px] font-bold text-[#1a5a78] bg-[#e3f3fa] px-2 py-0.5 rounded-full">SET</span>
                                  </div>
                                  <div class="flex items-center justify-between bg-[#e3f3fa]/60 rounded-lg px-3 py-2.5 border-2 border-[#4a9cc5]/30">
                                    <div class="flex items-center gap-2">
                                      <div class="w-4 h-4 rounded-full bg-[#4a9cc5] flex items-center justify-center">
                                        <div class="w-2 h-2 rounded-full bg-white"></div>
                                      </div>
                                      <div>
                                        <p class="text-[12px] font-semibold text-[#1a1a2e]">Company Size</p>
                                        <p class="text-[10px] text-[#4b5563]">50-5,000 employees</p>
                                      </div>
                                    </div>
                                    <span class="text-[9px] font-bold text-[#1a5a78] bg-[#e3f3fa] px-2 py-0.5 rounded-full">SET</span>
                                  </div>
                                  <div class="flex items-center justify-between bg-[#e3f3fa]/60 rounded-lg px-3 py-2.5 border-2 border-[#4a9cc5]/30">
                                    <div class="flex items-center gap-2">
                                      <div class="w-4 h-4 rounded-full bg-[#4a9cc5] flex items-center justify-center">
                                        <div class="w-2 h-2 rounded-full bg-white"></div>
                                      </div>
                                      <div>
                                        <p class="text-[12px] font-semibold text-[#1a1a2e]">Revenue</p>
                                        <p class="text-[10px] text-[#4b5563]">$5M-$500M ARR</p>
                                      </div>
                                    </div>
                                    <span class="text-[9px] font-bold text-[#1a5a78] bg-[#e3f3fa] px-2 py-0.5 rounded-full">SET</span>
                                  </div>
                                </div>
                                <!-- Geography tags -->
                                <div>
                                  <p class="text-[10px] font-semibold text-[#4b5563] uppercase tracking-[0.04em] mb-2">Geography</p>
                                  <div class="flex flex-wrap gap-1.5">
                                    <span class="text-[10px] font-medium text-[#1a5a78] bg-[#e3f3fa] px-2 py-1 rounded-full">North America</span>
                                    <span class="text-[10px] font-medium text-[#1a5a78] bg-[#e3f3fa] px-2 py-1 rounded-full">EMEA</span>
                                    <span class="text-[10px] font-medium text-[#1a5a78] bg-[#e3f3fa] px-2 py-1 rounded-full">APAC</span>
                                  </div>
                                </div>
                              </div>
                            }
                            @case (1) {
                              <!-- Step 2 viz: Real-time Monitoring Dashboard -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center justify-between mb-4">
                                  <div class="flex items-center gap-2">
                                    <div class="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></div>
                                    <span class="text-[13px] font-semibold text-[#111827]">Live Monitoring</span>
                                  </div>
                                  <span class="text-[10px] text-[#4b5563] bg-[#f3f4f6] px-2 py-0.5 rounded-full">Active</span>
                                </div>
                                <!-- Company evaluation rows -->
                                <div class="space-y-2.5">
                                  <div class="bg-[#f0fdf4] border border-[#bbf7d0]/40 rounded-lg px-3 py-2.5">
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] text-[#374151] font-medium">Acme Corp (SaaS, 200 emp)</span>
                                      <span class="text-[9px] font-bold text-[#22c55e] bg-[#f0fdf4] px-2 py-0.5 rounded-full">ICP Match</span>
                                    </div>
                                    <div class="flex items-center gap-1.5">
                                      <div class="w-4 h-4 rounded-full bg-[#b8dff0] overflow-hidden"><img src="/agents/Company Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                                      <span class="text-[10px] text-[#4a9cc5]">Allowed - all criteria met</span>
                                    </div>
                                  </div>
                                  <div class="bg-[#fef2f2] border border-[#fecaca]/40 rounded-lg px-3 py-2.5">
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] text-[#374151] font-medium">BigCo Inc (Consulting, 50k emp)</span>
                                      <span class="text-[9px] font-bold text-[#ef4444] bg-[#fee2e2] px-2 py-0.5 rounded-full">Off-ICP</span>
                                    </div>
                                    <div class="flex items-center gap-1.5">
                                      <div class="w-4 h-4 rounded-full bg-[#b8dff0] overflow-hidden"><img src="/agents/Company Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                                      <span class="text-[10px] text-[#ef4444]">Blocked - industry + size mismatch</span>
                                    </div>
                                  </div>
                                  <div class="bg-[#f0fdf4] border border-[#bbf7d0]/40 rounded-lg px-3 py-2.5">
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] text-[#374151] font-medium">TechStart (FinTech, 80 emp)</span>
                                      <span class="text-[9px] font-bold text-[#22c55e] bg-[#f0fdf4] px-2 py-0.5 rounded-full">ICP Match</span>
                                    </div>
                                    <div class="flex items-center gap-1.5">
                                      <div class="w-4 h-4 rounded-full bg-[#b8dff0] overflow-hidden"><img src="/agents/Company Blocking Agent.png" alt="" class="w-full h-full object-cover"/></div>
                                      <span class="text-[10px] text-[#4a9cc5]">Allowed - all criteria met</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="mt-3 pt-3 border-t border-[#f3f4f6] flex items-center justify-between">
                                  <span class="text-[10px] text-[#4b5563]">12 companies evaluated today</span>
                                  <span class="text-[10px] text-[#4a9cc5] font-medium">3 blocked</span>
                                </div>
                              </div>
                            }
                            @case (2) {
                              <!-- Step 3 viz: Blocked Company Log -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-[#fef2f2] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Blocking Log</span>
                                </div>
                                <!-- Blocked companies -->
                                <div class="space-y-2 mb-3">
                                  <div class="bg-[#fef2f2]/60 border border-[#fecaca] rounded-lg p-2.5">
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] font-medium text-[#374151]">BigCo Inc</span>
                                      <span class="text-[9px] font-bold text-[#ef4444] bg-[#fee2e2] px-2 py-0.5 rounded-full">Blocked</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                      <span class="text-[10px] text-[#4b5563]">Consulting / 50k employees</span>
                                      <span class="text-[10px] text-[#22c55e] font-medium">$128 saved</span>
                                    </div>
                                  </div>
                                  <div class="bg-[#fef2f2]/60 border border-[#fecaca] rounded-lg p-2.5">
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] font-medium text-[#374151]">MegaRetail</span>
                                      <span class="text-[9px] font-bold text-[#ef4444] bg-[#fee2e2] px-2 py-0.5 rounded-full">Blocked</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                      <span class="text-[10px] text-[#4b5563]">Retail / 120k employees</span>
                                      <span class="text-[10px] text-[#22c55e] font-medium">$245 saved</span>
                                    </div>
                                  </div>
                                  <div class="bg-[#fef2f2]/60 border border-[#fecaca] rounded-lg p-2.5">
                                    <div class="flex items-center justify-between mb-1">
                                      <span class="text-[11px] font-medium text-[#374151]">LocalServices Co</span>
                                      <span class="text-[9px] font-bold text-[#ef4444] bg-[#fee2e2] px-2 py-0.5 rounded-full">Blocked</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                      <span class="text-[10px] text-[#4b5563]">Services / 15 employees</span>
                                      <span class="text-[10px] text-[#22c55e] font-medium">$67 saved</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="bg-[#f0fdf4] border border-[#bbf7d0]/40 rounded-lg px-3 py-2 flex items-center justify-between">
                                  <span class="text-[10px] text-[#22c55e] font-semibold">Total spend saved today</span>
                                  <span class="text-[13px] font-bold text-[#22c55e]">$440</span>
                                </div>
                              </div>
                            }
                            @case (3) {
                              <!-- Step 4 viz: Criteria Propagation -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e3f3fa] to-[#9dcce7] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8h8M8 4v8" stroke="#1a5a78" stroke-width="1.3" stroke-linecap="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Criteria Update</span>
                                </div>
                                <!-- Update notification -->
                                <div class="bg-[#e3f3fa]/60 border border-[#9dcce7]/40 rounded-lg p-3 mb-3">
                                  <div class="flex items-center gap-2 mb-2">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v6l3 2" stroke="#4a9cc5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7" cy="7" r="6" stroke="#4a9cc5" stroke-width="1" opacity="0.3"/></svg>
                                    <span class="text-[11px] font-semibold text-[#1a5a78]">Criteria updated 2 min ago</span>
                                  </div>
                                  <p class="text-[10px] text-[#4b5563]">Added "Healthcare" industry to ICP criteria</p>
                                </div>
                                <!-- Propagation status -->
                                <div class="space-y-2">
                                  <div class="flex items-center justify-between bg-[#f0fdf4] rounded-lg px-3 py-2">
                                    <span class="text-[11px] text-[#374151] font-medium">ABM Campaign - Q1</span>
                                    <span class="text-[9px] font-bold text-[#22c55e] bg-[#dcfce7] px-2 py-0.5 rounded-full">Updated</span>
                                  </div>
                                  <div class="flex items-center justify-between bg-[#f0fdf4] rounded-lg px-3 py-2">
                                    <span class="text-[11px] text-[#374151] font-medium">Enterprise Pipeline - NA</span>
                                    <span class="text-[9px] font-bold text-[#22c55e] bg-[#dcfce7] px-2 py-0.5 rounded-full">Updated</span>
                                  </div>
                                  <div class="flex items-center justify-between bg-[#f0fdf4] rounded-lg px-3 py-2">
                                    <span class="text-[11px] text-[#374151] font-medium">Brand Awareness - EMEA</span>
                                    <span class="text-[9px] font-bold text-[#22c55e] bg-[#dcfce7] px-2 py-0.5 rounded-full">Updated</span>
                                  </div>
                                </div>
                                <div class="mt-3 pt-3 border-t border-[#f3f4f6] flex items-center gap-2">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#22c55e" stroke-width="1.3" stroke-linecap="round"/></svg>
                                  <span class="text-[10px] text-[#22c55e] font-medium">All 3 campaigns updated instantly</span>
                                </div>
                              </div>
                            }
                            @case (4) {
                              <!-- Step 5 viz: Approve / Review Interface -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8.5l3 3 5-6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Rule Control</span>
                                </div>
                                <!-- Active criteria summary -->
                                <div class="bg-[#e3f3fa]/60 rounded-lg p-3 mb-3">
                                  <div class="flex items-center justify-between mb-2">
                                    <span class="text-[11px] font-semibold text-[#374151]">Active Criteria</span>
                                    <div class="flex items-center gap-1">
                                      <span class="text-[10px] text-[#4a9cc5] font-medium bg-[#e3f3fa] px-2 py-0.5 rounded-full">4 rules active</span>
                                    </div>
                                  </div>
                                  <div class="flex flex-wrap gap-1.5">
                                    <span class="text-[10px] font-medium text-[#1a5a78] bg-white px-2 py-1 rounded-full">Industry: SaaS, FinTech, MarTech</span>
                                    <span class="text-[10px] font-medium text-[#1a5a78] bg-white px-2 py-1 rounded-full">Size: 50-5k</span>
                                    <span class="text-[10px] font-medium text-[#1a5a78] bg-white px-2 py-1 rounded-full">Revenue: $5M-$500M</span>
                                    <span class="text-[10px] font-medium text-[#1a5a78] bg-white px-2 py-1 rounded-full">Geo: NA, EMEA, APAC</span>
                                  </div>
                                </div>
                                <!-- Recent actions -->
                                <div class="space-y-2 mb-3">
                                  <div class="flex items-start gap-2 bg-[#f0fafb] rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#e3f3fa] flex items-center justify-center shrink-0 mt-0.5">
                                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#1a1a2e" stroke-width="1.3" stroke-linecap="round"/></svg>
                                    </div>
                                    <div>
                                      <p class="text-[11px] font-medium text-[#374151]">Unblocked "HealthTech Ltd" manually</p>
                                      <p class="text-[10px] text-[#4b5563]">1 hr ago - Override logged</p>
                                    </div>
                                  </div>
                                  <div class="flex items-start gap-2 bg-[#f0fafb] rounded-lg p-2.5">
                                    <div class="w-5 h-5 rounded-full bg-[#e3f3fa] flex items-center justify-center shrink-0 mt-0.5">
                                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 6.5l2 2 4-4.5" stroke="#1a1a2e" stroke-width="1.3" stroke-linecap="round"/></svg>
                                    </div>
                                    <div>
                                      <p class="text-[11px] font-medium text-[#374151]">Expanded size range to 10k employees</p>
                                      <p class="text-[10px] text-[#4b5563]">Yesterday - Applied to all campaigns</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="flex gap-2">
                                  <button class="flex-1 h-8 bg-gradient-to-r from-[#e8573a] to-[#1a1a2e] text-white text-[11px] font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-[0_2px_8px_-2px_rgba(26,26,46,0.3)]">
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 3v6M3 6h6" stroke="white" stroke-width="1.3" stroke-linecap="round"/></svg>
                                    Edit Criteria
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

            <!-- Mobile dots navigation -->
            <div class="flex md:hidden justify-center gap-2 mt-6">
              @for (step of steps; track step.number; let i = $index) {
                <button
                  class="w-2 h-2 rounded-full transition-all duration-500"
                  [ngClass]="isStepCurrent(i) ? 'bg-[#ff4829] w-6' : 'bg-[#d1d5db]'"
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
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef9f7] via-[#fef9fa] to-[#fef9f7] pointer-events-none -z-10"></div>
      <div class="absolute top-[30%] left-[50%] -translate-x-1/2 w-[50%] h-[50%] bg-radial-[closest-side] from-[#4a9cc5]/5 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-12">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
            The Difference
          </span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827]">
            What changes when company delivery is <span class="section-gradient-text">enforced automatically.</span>
          </h2>
        </div>

        <!-- ═══ Desktop: Enhanced table ═══ -->
        <div class="hidden md:block">
          <div class="bg-white rounded-2xl border border-[#9dcce7]/30 overflow-hidden shadow-[0_4px_24px_-4px_rgba(74,156,197,0.1)]">

            <!-- Table Header -->
            <div class="grid grid-cols-[1fr_1fr_1.15fr]">
              <div class="bg-[#f8fafb] p-5 border-b border-[#e5e7eb]/60">
                <span class="text-[13px] font-semibold text-[#4b5563] uppercase tracking-[0.04em]">Capability</span>
              </div>
              <div class="bg-[#f8fafb] p-5 border-b border-[#e5e7eb]/60 border-l border-l-[#e5e7eb]/40">
                <div class="flex items-center gap-2">
                  <div class="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                  </div>
                  <span class="text-[13px] font-semibold text-[#4b5563] uppercase tracking-[0.04em]">Without blocking</span>
                </div>
              </div>
              <div class="bg-gradient-to-r from-[#1a1a2e] to-[#1a5a78] p-5 border-b border-[#1a1a2e]">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-[#b8dff0] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0">
                    <img src="/agents/Company Blocking Agent.png" alt="Company Blocking Agent" class="w-full h-full object-cover rounded-full" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[13px] font-semibold text-white leading-tight">With adRadar Blocking</span>
                    <span class="text-[10px] text-white/50 leading-tight">Company Blocking Agent</span>
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
                  <div class="w-8 h-8 rounded-lg bg-[#e3f3fa] flex items-center justify-center shrink-0">
                    @switch (i) {
                      @case (0) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="3" stroke="#4a9cc5" stroke-width="1.5"/><path d="M4 14c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#4a9cc5" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (1) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="#4a9cc5" stroke-width="1.5"/><path d="M8 5v3h3" stroke="#4a9cc5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      }
                      @case (2) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="2" stroke="#4a9cc5" stroke-width="1.5"/><path d="M5 7h6M5 10h3" stroke="#4a9cc5" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (3) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12l4-8 4 8" stroke="#4a9cc5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 9h5" stroke="#4a9cc5" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (4) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="3" width="10" height="10" rx="2" stroke="#4a9cc5" stroke-width="1.5"/><path d="M6 8h4" stroke="#4a9cc5" stroke-width="1.5" stroke-linecap="round"/><path d="M8 6v4" stroke="#4a9cc5" stroke-width="1.5" stroke-linecap="round"/></svg>
                      }
                      @case (5) {
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M10 5l3 3-3 3" stroke="#4a9cc5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
                <div class="p-5 flex items-center gap-2.5 bg-[#e3f3fa]/20 group-hover:bg-[#e3f3fa]/40 transition-colors border-l-2 border-l-[#4a9cc5]/20">
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
          <div class="flex items-center gap-3 bg-gradient-to-r from-[#1a1a2e] to-[#1a5a78] rounded-xl px-4 py-3">
            <div class="w-8 h-8 rounded-full bg-[#b8dff0] p-[2px] ring-2 ring-white/20 overflow-hidden shrink-0">
              <img src="/agents/Company Blocking Agent.png" alt="" class="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <span class="text-[13px] font-semibold text-white block leading-tight">adRadar Company Blocking</span>
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
                <div class="p-4 bg-[#e3f3fa]/20 border-l-2 border-l-[#4a9cc5]/20">
                  <div class="flex items-center gap-1.5 mb-2">
                    <div class="w-[14px] h-[14px] rounded-full bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                      <svg width="6" height="6" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
                    </div>
                    <p class="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#4a9cc5]">With adRadar</p>
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
      <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-radial-[closest-side] from-[#4a9cc5]/8 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-radial-[closest-side] from-[#9dcce7]/6 to-transparent blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] bg-radial-[closest-side] from-[#9dcce7]/4 to-transparent blur-[120px] pointer-events-none -z-10"></div>
      <!-- Dot pattern -->
      <div class="absolute inset-0 opacity-[0.04] pointer-events-none -z-10" style="background-image: radial-gradient(circle, #1a1a2e 1px, transparent 1px); background-size: 28px 28px;"></div>

      <div class="max-w-[1200px] mx-auto px-6">

        <!-- Top: Badge + Heading row -->
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
          <div class="max-w-[600px]">
            <div class="flex items-center gap-2.5 mb-4">
              <div class="w-8 h-8 rounded-full bg-[#b8dff0] p-[2px] overflow-hidden">
                <img src="/agents/Company Blocking Agent.png" alt="" class="w-full h-full object-cover rounded-full" />
              </div>
              <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a]">
                Proven Results
              </span>
            </div>
            <h2 class="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.08] tracking-[-0.025em] text-[#111827]">
              First 30 days. Same budget.<br class="hidden lg:block" />
              <span class="section-gradient-text">Clean company delivery.</span>
            </h2>
          </div>
          <p class="text-[15px] text-[#4b5563] leading-[1.65] max-w-[340px] lg:text-right">
            Measured across teams who activated Company Blocking on existing campaigns, with no additional spend required.
          </p>
        </div>

        <!-- Results cards -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">

          <!-- ══ Card 1: 22% Budget Recovered ══ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] p-6 lg:p-7 h-full shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_30px_-6px_rgba(74,156,197,0.12)] transition-all duration-500">

              <!-- Before -> After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">Wasted</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#e8573a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#e8573a] bg-[#ff6b35]/15 px-2.5 py-1 rounded-full">+22% recovered</span>
              </div>

              <!-- Donut chart -->
              <div class="relative w-[140px] h-[140px] mx-auto mb-6">
                <svg class="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" stroke-width="12" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#ef4444" stroke-opacity="0.5" stroke-width="12"
                    stroke-dasharray="157 157" stroke-linecap="round" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="url(#resultGradCB1)" stroke-width="12"
                    stroke-dasharray="69 245" stroke-linecap="round" />
                  <defs>
                    <linearGradient id="resultGradCB1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#1a5a78" />
                      <stop offset="100%" stop-color="#4a9cc5" />
                    </linearGradient>
                  </defs>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-[36px] font-bold text-[#111827] tracking-[-0.03em]">22%</span>
                </div>
              </div>

              <h3 class="text-[18px] font-bold text-[#111827] mb-1.5 text-center">Avg budget recovered</h3>
              <p class="text-[13px] text-[#4b5563] text-center leading-[1.5]">
                Recaptured from off-ICP company delivery; redeployed to target accounts in first audit
              </p>
            </div>
          </div>

          <!-- ══ Card 2: 85%+ ICP Match Rate ══ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] p-6 lg:p-7 h-full shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_30px_-6px_rgba(74,156,197,0.12)] transition-all duration-500">

              <!-- Before -> After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">60-70%</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#e8573a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#e8573a] bg-[#ff6b35]/15 px-2.5 py-1 rounded-full">85%+</span>
              </div>

              <!-- Bar chart -->
              <div class="flex items-end gap-3 justify-center h-[140px] mb-6 px-2">
                <!-- Before bar -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[77px] relative overflow-hidden bg-[#fee2e2] border border-[#fca5a5]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#ef4444] to-[#fca5a5]"></div>
                  </div>
                  <span class="text-[10px] text-[#4b5563] font-medium">60-70%<br/>before</span>
                </div>
                <!-- After bar -->
                <div class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full max-w-[48px] rounded-lg h-[120px] relative overflow-hidden bg-[#1a5a78] border border-[#4a9cc5]">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1a5a78] via-[#4a9cc5] to-[#4a9cc5]"></div>
                  </div>
                  <span class="text-[10px] text-[#4a9cc5] font-semibold">85%+<br/>after</span>
                </div>
              </div>

              <div class="text-center">
                <p class="text-[48px] font-bold text-[#111827] tracking-[-0.04em] leading-none mb-1.5">85%+</p>
                <h3 class="text-[18px] font-bold text-[#111827] mb-1.5">ICP match rate</h3>
                <p class="text-[13px] text-[#4b5563] leading-[1.5]">
                  After agent activation, vs 60-70% without active company blocking enforcement
                </p>
              </div>
            </div>
          </div>

          <!-- ══ Card 3: 28% CPL Reduction ══ -->
          <div class="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
            <div class="relative bg-white rounded-2xl border border-[#e5e7eb] p-6 lg:p-7 h-full shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_30px_-6px_rgba(74,156,197,0.12)] transition-all duration-500">

              <!-- Before -> After badge -->
              <div class="flex items-center gap-2 mb-6">
                <span class="text-[12px] font-medium text-[#ef4444] bg-[#ef4444]/10 px-2.5 py-1 rounded-full">Inflated</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#e8573a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="text-[12px] font-semibold text-[#16a34a] bg-[#dcfce7] px-2.5 py-1 rounded-full">-28% CPL</span>
              </div>

              <!-- Flow visualization -->
              <div class="relative mb-6 px-1">
                <!-- Before CPL -->
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[11px] text-[#4b5563] font-medium uppercase tracking-[0.04em]">Before: Off-ICP spend included</span>
                    <span class="text-[12px] text-[#ef4444] font-semibold line-through">$142 CPL</span>
                  </div>
                  <div class="h-[12px] bg-[#f3f4f6] rounded-full overflow-hidden border border-[#e5e7eb]">
                    <div class="h-full w-[85%] bg-gradient-to-r from-[#ef4444] to-[#f87171] rounded-full"></div>
                  </div>
                </div>
                <!-- After CPL -->
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[11px] text-[#16a34a] font-semibold uppercase tracking-[0.04em]">After: ICP-only delivery</span>
                    <span class="text-[12px] text-[#16a34a] font-bold">$102 CPL</span>
                  </div>
                  <div class="h-[12px] bg-[#f3f4f6] rounded-full overflow-hidden border border-[#86efac]">
                    <div class="h-full w-[61%] bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-full"></div>
                  </div>
                </div>
                <!-- Savings callout -->
                <div class="flex items-center gap-2 mt-4 bg-[#dcfce7] border border-[#86efac] rounded-lg px-3 py-2.5">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8h8M9.5 5.5L12 8l-2.5 2.5" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span class="text-[11px] text-[#16a34a] font-medium">Budget concentrates on target accounts only</span>
                </div>
              </div>

              <div class="text-center">
                <p class="text-[48px] font-bold text-[#111827] tracking-[-0.04em] leading-none mb-1.5">28%</p>
                <h3 class="text-[18px] font-bold text-[#111827] mb-1.5">CPL reduction</h3>
                <p class="text-[13px] text-[#4b5563] leading-[1.5]">
                  Average drop in cost per lead when off-ICP company spend is eliminated and budget concentrates on target accounts
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
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef9fa] via-[#fefafb] to-white pointer-events-none -z-10"></div>
      <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[50%] bg-radial-[closest-side] from-[#9dcce7]/8 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-[1100px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-10">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#e8573a] mb-4 block">
            Connected Intelligence
          </span>
          <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
            Company blocking is one layer.
            <br class="hidden md:block" />
            Six agents <span class="section-gradient-text">work together.</span>
          </h2>
          <p class="text-[15px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[720px] mx-0 md:mx-auto">
            The Company Blocking Agent shares context and memory with every other adRadar agent —
            so ICP enforcement decisions inform impression distribution, creative rotation, spend pacing,
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
                <p class="text-[13px] text-[#4b5563] leading-[1.55] mb-4 flex-1">
                  {{ agent.description }}
                </p>

                <!-- Bottom: Connection line + arrow -->
                <div class="flex items-center justify-between pt-3 border-t transition-colors duration-300"
                  [style.borderColor]="agent.accentColor + '20'">
                  <!-- Connection to Company Blocking badge -->
                  <div class="flex items-center gap-1.5">
                    <div class="w-4 h-4 rounded-full bg-[#b8dff0] overflow-hidden shrink-0">
                      <img src="/agents/Company Blocking Agent.png" alt="" class="w-full h-full object-cover" />
                    </div>
                    <div class="w-5 h-[1.5px] rounded-full"
                      [style.background]="'linear-gradient(90deg, #b8dff0, ' + agent.accentColor + ')'">
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
      headingStart="Stop paying for impressions on companies that will"
      headingGradient="never convert."
      description="Connect your LinkedIn Ads account in 2 minutes. The Company Blocking Agent starts monitoring immediately. No credit card required."
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
      background: linear-gradient(58deg, #b8dff0 0%, #9dcce7 50%, #ffffff 100%);
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
        rgba(157, 204, 231, 0.06),
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
export class CompanyBlockingComponent implements OnInit, OnDestroy {
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
    'Exclusions added reactively after drift',
    'No automatic detection of new off-ICP company delivery',
    'Exclusion lists require ongoing manual curation per campaign',
    'Criteria changes must be manually propagated across all campaigns',
    'No spend attribution to excluded companies before blocking',
    'Budget spent on wrong companies before exclusion is applied',
  ];

  adradarAdvantages = [
    'Blocking rules enforced from the first impression',
    'Continuous monitoring - off-ICP companies blocked as they appear',
    'Rule-based enforcement - no exclusion lists to maintain',
    'Criteria updates propagate instantly across all linked campaigns',
    'Estimated saved spend reported per blocked company',
    'Budget protected from day one - not after the fact',
  ];

  steps = [
    {
      number: '01',
      label: 'Configure',
      title: 'Select your target company criteria',
      description:
        'Define the account properties that characterise your ICP - industry, company size, revenue range, geography, or a combination.',
    },
    {
      number: '02',
      label: 'Monitor',
      title: 'Agent links to your campaigns and begins monitoring immediately',
      description:
        'From the moment the agent is configured, every impression is evaluated against your company criteria. Off-ICP companies are blocked before delivery completes.',
    },
    {
      number: '03',
      label: 'Block',
      title: 'Off-ICP companies are blocked and logged automatically',
      description:
        'When a company outside your criteria receives an impression attempt, the agent blocks it and records the event, including when the block was applied and estimated spend saved.',
    },
    {
      number: '04',
      label: 'Propagate',
      title: 'Criteria updates propagate instantly across all linked campaigns',
      description:
        'If your ICP definition changes - new market segment, revised size threshold, expanded geography - update the criteria once and it takes effect immediately.',
    },
    {
      number: '05',
      label: 'Control',
      title: 'You define the criteria. The agent enforces it. Always.',
      description:
        'Agent operates within whatever criteria you configure. Every blocking action is logged, explained, reversible. Stay in full control.',
    },
  ];

  comparisonRows: ComparisonRow[] = [
    {
      capability: 'Off-ICP detection',
      without: 'Manual review of company delivery reports',
      withBlocking: 'Automatic - blocked before delivery',
    },
    {
      capability: 'ICP enforcement speed',
      without: 'Reactive - days or weeks after drift starts',
      withBlocking: 'Immediate - enforced from first impression',
    },
    {
      capability: 'Criteria maintenance',
      without: 'Manual exclusion lists per campaign',
      withBlocking: 'Rule-based - single criteria update propagates everywhere',
    },
    {
      capability: 'Estimated spend visibility',
      without: 'Not tracked or reported',
      withBlocking: 'Per-company blocked spend estimated and reported',
    },
    {
      capability: 'Budget protection',
      without: 'Only after exclusions are manually added',
      withBlocking: 'From day one of agent activation',
    },
    {
      capability: 'ICP match rate',
      without: '60–70% without active enforcement',
      withBlocking: '85%+ with continuous blocking',
    },
  ];

  relatedAgents: RelatedAgent[] = [
    {
      name: 'Title Blocking Agent',
      image: '/agents/Title Blocking Agent.png',
      avatarBg: '#ee95a0',
      description:
        'Company blocking removes off-ICP accounts entirely. Title blocking removes off-persona individuals. Together they form a complete two-layer targeting precision system.',
      accentColor: '#d4606f',
      route: '/agents/title-blocking',
    },
    {
      name: 'Impression Capping Agent',
      image: '/agents/Impression Capping Agent.png',
      avatarBg: '#a8d1dc',
      description:
        'Company blocking ensures accounts entering impression capping pool are ICP-qualified. Capping controls how evenly impressions are distributed, maximising reach without waste.',
      accentColor: '#3a97ab',
      route: '/agents/impression-capping',
    },
    {
      name: 'Analyse Competitors',
      image: '/agents/Analyse competitors LinkedIn Ads.png',
      avatarBg: '#acdfa4',
      description:
        'Company delivery data feeds into competitor analysis, so you can see which ICP accounts competitors are reaching and how your blocking strategy compares.',
      accentColor: '#4a9a42',
      route: '/agents/analyse-competitors',
    },
    {
      name: 'Ad Rotation Agent',
      image: '/agents/Ad Rotation Agent.png',
      avatarBg: '#d9e1fb',
      description:
        'When company delivery is clean, creative performance data becomes more reliable. Engagement signals from ICP accounts are not diluted by off-ICP clicks.',
      accentColor: '#6b5ea0',
      route: '/agents/ad-rotation',
    },
    {
      name: 'Campaign Scheduling Agent',
      image: '/agents/Campaign Scheduling Agent.png',
      avatarBg: '#fbf5df',
      description:
        'Company blocking rules stay enforced throughout scheduled windows, so no off-hours impressions slip through to blocked companies.',
      accentColor: '#c5a030',
      route: '/agents/campaign-scheduling',
    },
    {
      name: 'Bidding Optimization Agent',
      image: '/agents/Bidding Optimization Agent.png',
      avatarBg: '#acdfa4',
      description:
        'With off-ICP companies removed from the auction, bid optimization operates on a cleaner audience, improving efficiency and reducing wasted spend.',
      accentColor: '#4a9a42',
      route: '/agents/bidding-optimization',
    },
  ];
}
