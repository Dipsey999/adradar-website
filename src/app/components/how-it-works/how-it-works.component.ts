import { Component, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, ViewChild, signal, inject, computed } from '@angular/core';
import { NgClass } from '@angular/common';

interface Step {
  number: string;
  label: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [NgClass],
  template: `
    <section
      #sectionRef
      id="how-it-works"
      class="relative bg-section-bg"
      [style.height]="sectionHeight()"
    >
      <!-- Sticky container, offset for 70px navbar -->
      <div class="sticky top-[70px] h-[calc(100vh-70px)] overflow-hidden">
        <div class="h-full flex flex-col">
          <div class="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16 w-full flex-1 flex flex-col pt-8 lg:pt-10">

            <!-- Header -->
            <div class="mb-6 lg:mb-8">
              <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#ff4829]">
                HOW IT WORKS
              </span>
              <h2 class="text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mt-1.5 lg:mt-2">
                Connect once. On the radar
                <span class="italic bg-clip-text text-transparent" style="background-image: linear-gradient(58deg, #FF4829 22.76%, #F1CD98 96.62%)">instantly.</span>
              </h2>
            </div>

            <!-- Progress bar -->
            <div class="hidden md:flex items-center gap-3 mb-6 lg:mb-8">
              @for (step of steps; track step.number; let i = $index) {
                <button
                  class="group flex items-center gap-2 cursor-pointer"
                  (click)="scrollToStep(i)"
                >
                  <div
                    class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 text-[12px] font-bold"
                    [ngClass]="isActive(i)
                      ? 'bg-gradient-to-br from-[#ff4829] to-[#e8573a] text-white shadow-[0_4px_14px_0_rgba(255,72,41,0.25)]'
                      : 'bg-[#e5e7eb] text-[#9ca3af] group-hover:bg-[#d1d5db]'"
                  >
                    {{ step.number }}
                  </div>
                  <span
                    class="text-[12px] font-semibold uppercase tracking-[0.04em] transition-all duration-500 hidden lg:block"
                    [ngClass]="isActive(i) ? 'text-[#ff4829]' : 'text-[#9ca3af]'"
                  >
                    {{ step.label }}
                  </span>
                </button>
                @if (i < steps.length - 1) {
                  <div class="flex-1 h-[2px] rounded-full overflow-hidden bg-[#e5e7eb]">
                    <div
                      class="h-full bg-gradient-to-r from-[#ff4829] to-[#e8573a] rounded-full transition-all duration-700 ease-out"
                      [style.width]="isActive(i) ? '100%' : '0%'"
                    ></div>
                  </div>
                }
              }
            </div>

            <!-- Horizontal scrolling cards container -->
            <div class="relative overflow-hidden flex-1 pb-6 lg:pb-8">
              <div
                class="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] h-full"
                [style.transform]="'translateX(-' + (activeStep() * 100) + '%)'"
              >
                @for (step of steps; track step.number; let i = $index) {
                  <div class="w-full shrink-0 pr-0 h-full">
                    <div class="flex flex-col md:flex-row gap-6 lg:gap-10 items-center h-full">

                      <!-- Left: Text content -->
                      <div class="flex-1 flex flex-col justify-center min-w-0">
                        <!-- Step label mobile -->
                        <div class="flex items-center gap-3 mb-4 md:hidden">
                          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff4829] to-[#e8573a] text-white flex items-center justify-center text-[12px] font-bold shadow-[0_4px_14px_0_rgba(255,72,41,0.25)]">
                            {{ step.number }}
                          </div>
                          <span class="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#ff4829]">
                            {{ step.label }}
                          </span>
                        </div>

                        <h3 class="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#111827] leading-[1.15] tracking-[-0.02em] mb-3 lg:mb-4">
                          {{ step.title }}
                        </h3>
                        <p class="text-[15px] md:text-[16px] text-[#4b5563] leading-[1.65] max-w-[520px]">
                          {{ step.description }}
                        </p>

                        <!-- Step counter -->
                        <div class="mt-6 lg:mt-8 flex items-center gap-2">
                          <span class="text-[13px] font-medium text-[#9ca3af]">Step {{ step.number }} of 0{{ steps.length }}</span>
                        </div>
                      </div>

                      <!-- Right: Visualization -->
                      <div class="md:w-[340px] lg:w-[440px] xl:w-[520px] shrink-0 self-stretch">
                        <div class="bg-gradient-to-br from-[#fef6f3] to-[#ffe8df] rounded-2xl lg:rounded-3xl overflow-hidden p-5 lg:p-7 flex flex-col justify-center min-h-[300px] md:min-h-[380px]">

                          @switch (i) {
                            @case (0) {
                              <!-- Step 1: Connect LinkedIn + CRM -->
                              <div class="flex flex-col items-center gap-4">
                                <!-- LinkedIn -->
                                <div class="flex flex-col items-center gap-1.5">
                                  <div class="w-14 h-14 rounded-xl bg-[#0A66C2] flex items-center justify-center shadow-[0_4px_16px_-2px_rgba(10,102,194,0.3)]">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                  </div>
                                  <span class="text-[11px] font-semibold text-[#374151]">LinkedIn Ads</span>
                                </div>

                                <!-- Arrow down with "2 min" -->
                                <div class="flex items-center gap-2">
                                  <svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M10 0v28M4 22l6 6 6-6" stroke="#e8573a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                  <span class="text-[12px] font-bold text-[#e8573a]">2 min</span>
                                </div>

                                <!-- adRadar hub -->
                                <div class="w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_-4px_rgba(232,87,58,0.25)] flex items-center justify-center">
                                  <div class="w-10 h-10 rounded-full border-[3px] border-[#e8573a]/30 flex items-center justify-center relative">
                                    <div class="w-5 h-5 rounded-full border-2 border-[#e8573a]/50 flex items-center justify-center">
                                      <div class="w-2.5 h-2.5 rounded-full bg-[#e8573a]"></div>
                                    </div>
                                  </div>
                                </div>

                                <!-- Arrow up with "2 min" -->
                                <div class="flex items-center gap-2">
                                  <svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M10 32V4M4 10l6-6 6 6" stroke="#e8573a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                  <span class="text-[12px] font-bold text-[#e8573a]">2 min</span>
                                </div>

                                <!-- CRM icons -->
                                <div class="bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] rounded-xl px-6 py-3 flex items-center gap-4 shadow-[0_4px_16px_-2px_rgba(26,26,46,0.3)]">
                                  <div class="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#FF7A59"/><path d="M16.5 8.5c-.8-.3-1.7-.5-2.5-.5-2.2 0-4 1.1-4 2.5s1.8 2.5 4 2.5c.9 0 1.7-.2 2.5-.5M7.5 15.5c.8.3 1.6.5 2.5.5 2.2 0 4-1.1 4-2.5" stroke="white" stroke-width="1.2" stroke-linecap="round"/></svg>
                                  </div>
                                  <div class="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                                    <svg width="18" height="13" viewBox="0 0 24 17" fill="none"><path d="M14.9 1.6c-1.1-.4-2.3-.6-3.5-.4C8.3 1.8 6 4.5 6 7.7v.8c0 .3-.2.5-.5.5H4.4c-.5 0-.8.5-.6.9l3.4 6.5c.2.4.8.4 1 0l3.4-6.5c.2-.4-.1-.9-.6-.9H10c-.3 0-.5-.2-.5-.5v-.3c0-1.8 1.3-3.4 3.1-3.6.6-.1 1.2 0 1.7.2" stroke="#00A1E0" stroke-width="1.5" stroke-linecap="round"/><path d="M16.5 3c.5.4.9.9 1.2 1.5.4.8.5 1.7.4 2.6-.2 1.8-1.5 3.3-3.3 3.5-.5.1-1 0-1.4-.1" stroke="#00A1E0" stroke-width="1.5" stroke-linecap="round"/></svg>
                                  </div>
                                  <span class="text-[12px] font-semibold text-white">CRM</span>
                                </div>
                              </div>
                            }
                            @case (1) {
                              <!-- Step 2: First Audit / Health Score -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3v5l3 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">LinkedIn Ads Health Score</span>
                                </div>

                                <!-- Score circle -->
                                <div class="flex items-center gap-5 mb-4">
                                  <div class="relative w-20 h-20 shrink-0">
                                    <svg class="w-full h-full -rotate-90" viewBox="0 0 80 80">
                                      <circle cx="40" cy="40" r="34" fill="none" stroke="#f3f4f6" stroke-width="6"/>
                                      <circle cx="40" cy="40" r="34" fill="none" stroke="url(#scoreGrad)" stroke-width="6" stroke-linecap="round" stroke-dasharray="213.6" stroke-dashoffset="59.8"/>
                                      <defs><linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e8573a"/><stop offset="100%" stop-color="#1a1a2e"/></linearGradient></defs>
                                    </svg>
                                    <div class="absolute inset-0 flex items-center justify-center">
                                      <span class="text-[22px] font-bold text-[#111827]">72</span>
                                    </div>
                                  </div>
                                  <div class="flex-1 space-y-1.5">
                                    <p class="text-[11px] font-semibold text-[#e8573a] uppercase tracking-[0.04em]">Needs attention</p>
                                    <p class="text-[12px] text-[#4b5563] leading-[1.5]">5 issues found across audience targeting, bid strategy, and creative rotation</p>
                                  </div>
                                </div>

                                <!-- Audit findings -->
                                <div class="space-y-2">
                                  <div class="flex items-center gap-2.5 bg-[#fef2f2] rounded-lg px-3 py-2">
                                    <div class="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center shrink-0">
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2v3.5M5 7.5v.01" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                                    </div>
                                    <p class="text-[11px] text-[#374151] font-medium">42 off-target companies receiving impressions</p>
                                  </div>
                                  <div class="flex items-center gap-2.5 bg-[#fffbeb] rounded-lg px-3 py-2">
                                    <div class="w-5 h-5 rounded-full bg-[#fef3c7] flex items-center justify-center shrink-0">
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2v3.5M5 7.5v.01" stroke="#f59e0b" stroke-width="1.3" stroke-linecap="round"/></svg>
                                    </div>
                                    <p class="text-[11px] text-[#374151] font-medium">3 ads running past fatigue threshold</p>
                                  </div>
                                  <div class="flex items-center gap-2.5 bg-[#fffbeb] rounded-lg px-3 py-2">
                                    <div class="w-5 h-5 rounded-full bg-[#fef3c7] flex items-center justify-center shrink-0">
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2v3.5M5 7.5v.01" stroke="#f59e0b" stroke-width="1.3" stroke-linecap="round"/></svg>
                                    </div>
                                    <p class="text-[11px] text-[#374151] font-medium">Bid strategy not optimized for conversion</p>
                                  </div>
                                </div>
                              </div>
                            }
                            @case (2) {
                              <!-- Step 3: Daily Briefing -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center justify-between mb-4">
                                  <div class="flex items-center gap-2">
                                    <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h8" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
                                    </div>
                                    <span class="text-[13px] font-semibold text-[#111827]">Today's Briefing</span>
                                  </div>
                                  <span class="text-[10px] font-medium text-[#6b7280] bg-[#f3f4f6] px-2 py-0.5 rounded-full">9:00 AM</span>
                                </div>

                                <!-- Briefing items -->
                                <div class="space-y-3">
                                  <div class="border border-[#fee2e2] bg-[#fef9f7] rounded-lg p-3">
                                    <div class="flex items-start gap-2.5">
                                      <div class="w-2 h-2 rounded-full bg-[#ef4444] mt-1.5 shrink-0"></div>
                                      <div>
                                        <p class="text-[12px] font-semibold text-[#111827]">CPL increased 23%</p>
                                        <p class="text-[10px] text-[#4b5563] mt-0.5">Campaign: Tech Leaders Q1</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="border border-[#d1fae5] bg-[#f0fdf4] rounded-lg p-3">
                                    <div class="flex items-start gap-2.5">
                                      <div class="w-2 h-2 rounded-full bg-[#22c55e] mt-1.5 shrink-0"></div>
                                      <div>
                                        <p class="text-[12px] font-semibold text-[#111827]">New leads +12</p>
                                        <p class="text-[10px] text-[#4b5563] mt-0.5">Engagement up overnight</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="border border-[#e5e7eb] bg-[#f9fafb] rounded-lg p-3">
                                    <div class="flex items-start gap-2.5">
                                      <div class="w-2 h-2 rounded-full bg-[#f59e0b] mt-1.5 shrink-0"></div>
                                      <div>
                                        <p class="text-[12px] font-semibold text-[#111827]">Budget 78% spent</p>
                                        <p class="text-[10px] text-[#4b5563] mt-0.5">On track for month-end target</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="border border-[#e5e7eb] bg-[#f9fafb] rounded-lg p-3">
                                    <div class="flex items-start gap-2.5">
                                      <div class="w-2 h-2 rounded-full bg-[#3b82f6] mt-1.5 shrink-0"></div>
                                      <div>
                                        <p class="text-[12px] font-semibold text-[#111827]">Competitor detected new ad</p>
                                        <p class="text-[10px] text-[#4b5563] mt-0.5">Acme Inc. launched 2 new creatives</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            }
                            @case (3) {
                              <!-- Step 4: Approval / Human-in-the-loop -->
                              <div class="bg-white rounded-xl shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] p-4 lg:p-5">
                                <div class="flex items-center gap-2 mb-4">
                                  <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e8573a] to-[#1a1a2e] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                  </div>
                                  <span class="text-[13px] font-semibold text-[#111827]">Pending Approval</span>
                                  <span class="ml-auto text-[10px] font-bold text-white bg-[#e8573a] px-2 py-0.5 rounded-full">2 actions</span>
                                </div>

                                <!-- Approval cards -->
                                <div class="space-y-3">
                                  <div class="border-2 border-[#e8573a]/20 rounded-lg p-3.5 bg-[#fef9f7]">
                                    <div class="flex items-center gap-2 mb-2">
                                      <div class="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="#ef4444" stroke-width="1.3" stroke-linecap="round"/></svg>
                                      </div>
                                      <p class="text-[12px] font-bold text-[#111827]">Pause low-performing ad</p>
                                    </div>
                                    <p class="text-[11px] text-[#4b5563] mb-3">CTR below 0.3% for 7 days. Recommended by Ad Rotation Agent.</p>
                                    <div class="flex gap-2">
                                      <button class="flex-1 bg-gradient-to-r from-[#e8573a] to-[#1a1a2e] text-white text-[11px] font-semibold py-2 rounded-lg">Approve</button>
                                      <button class="flex-1 bg-white border border-[#e5e7eb] text-[#374151] text-[11px] font-semibold py-2 rounded-lg">Decline</button>
                                    </div>
                                  </div>

                                  <div class="border border-[#e5e7eb] rounded-lg p-3.5">
                                    <div class="flex items-center gap-2 mb-2">
                                      <div class="w-5 h-5 rounded-full bg-[#fffbeb] flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9l4-8 4 8H1z" stroke="#f59e0b" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                      </div>
                                      <p class="text-[12px] font-bold text-[#111827]">Block 12 off-target companies</p>
                                    </div>
                                    <p class="text-[11px] text-[#4b5563] mb-3">Companies outside your ICP detected by Company Blocking Agent.</p>
                                    <div class="flex gap-2">
                                      <button class="flex-1 bg-white border border-[#e5e7eb] text-[#374151] text-[11px] font-semibold py-2 rounded-lg">Approve</button>
                                      <button class="flex-1 bg-white border border-[#e5e7eb] text-[#374151] text-[11px] font-semibold py-2 rounded-lg">Decline</button>
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

            <!-- Mobile dots / swipe indicator -->
            <div class="flex md:hidden items-center justify-center gap-2 mt-6">
              @for (step of steps; track step.number; let i = $index) {
                <button
                  class="transition-all duration-300 rounded-full cursor-pointer"
                  [ngClass]="activeStep() === i
                    ? 'w-6 h-2 bg-[#ff4829]'
                    : 'w-2 h-2 bg-[#d1d5db]'"
                  (click)="scrollToStep(i)"
                ></button>
              }
            </div>

          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`:host { display: block; }`],
})
export class HowItWorksComponent implements OnInit, OnDestroy {
  @ViewChild('sectionRef', { static: true }) sectionRef!: ElementRef<HTMLElement>;
  private cdr = inject(ChangeDetectorRef);

  activeStep = signal(0);

  // Dynamic section height: enough scroll space for all steps
  sectionHeight = computed(() => (this.steps.length * 100) + 'vh');

  steps: Step[] = [
    {
      number: '01',
      label: 'Pre-flight',
      title: 'Connect LinkedIn Ads & CRM in 2 minutes',
      description:
        'OAuth in seconds. adRadar ingests campaigns, creative history, and audience data, then syncs with HubSpot, Salesforce, or Pipedrive. No CSV. No manual wiring.',
    },
    {
      number: '02',
      label: 'Takeoff',
      title: 'Agents run their first audit immediately',
      description:
        'Audience, Creative, Spend, and Strategy agents sweep your account on first connect. You get a LinkedIn Ads Health Score and a ranked list of issues, most teams find something non-obvious before the first coffee is done.',
    },
    {
      number: '03',
      label: 'Cruise',
      title: 'Daily briefings replace dashboard-checking',
      description:
        'Every morning: what shifted overnight, what needs attention, what to do first. adRadar becomes the voice in your headset, not another tab you forget to check.',
    },
    {
      number: '04',
      label: 'Control',
      title: 'You approve every move. Always.',
      description:
        'Agents recommend. You decide. Human-in-the-loop by design, no black-box autopilot. Every action is explained, logged, and reversible. You\u2019re always the captain.',
    },
  ];

  private scrollHandler = () => this.onScroll();

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.onScroll();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollToStep(index: number): void {
    const el = this.sectionRef.nativeElement;
    if (!el) return;
    const sectionTop = el.offsetTop;
    const sectionHeight = el.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = sectionHeight - viewportHeight;
    const targetScroll = sectionTop + (index / this.steps.length) * scrollableDistance;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }

  private onScroll(): void {
    const el = this.sectionRef.nativeElement;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const sectionHeight = el.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollableDistance = sectionHeight - viewportHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

    const total = this.steps.length;
    const newStep = Math.min(total - 1, Math.floor(progress * total));
    if (newStep !== this.activeStep()) {
      this.activeStep.set(newStep);
      this.cdr.detectChanges();
    }
  }

  isActive(index: number): boolean {
    return index <= this.activeStep();
  }

  isCurrent(index: number): boolean {
    return index === this.activeStep();
  }

  isLast(index: number): boolean {
    return index === this.steps.length - 1;
  }
}
