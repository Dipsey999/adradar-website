import { Component, signal } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';

interface Problem {
  title: string;
  icon: string;
  description: string;
  statTitle: string;
  statType: 'progress' | 'range' | 'trend' | 'connection' | 'tags' | 'comparison' | 'gauge' | 'donut';
  statLabel?: string;
  statValue?: string;
  statPercent?: number;
}

const problems: Problem[] = [
  {
    title: 'Optimisation is reactive, always late',
    icon: '/icons/the-problem/Background.svg',
    description:
      'You catch waste weekly. It compounds daily. No early warning. By the time the altimeter drops, you\u2019ve already lost altitude.',
    statTitle: 'Avg. 22% budget burned on non-ICP impressions',
    statType: 'progress',
    statLabel: 'Budget burned on non-ICP',
    statValue: '22%',
    statPercent: 22,
  },
  {
    title: 'Audience targeting silently drifts',
    icon: '/icons/the-problem/Background-1.svg',
    description:
      'Job titles are noisy. Audiences expand. Impressions reach the wrong personas. You don\u2019t find out until CPL spikes and pipeline dries up.',
    statTitle: 'ICP miss rate: often 30\u201340%',
    statType: 'range',
    statLabel: 'ICP miss rate range',
    statValue: '30\u201340%',
  },
  {
    title: 'Creative performance is tribal knowledge',
    icon: '/icons/the-problem/Background-2.svg',
    description:
      'What hook worked last week? What CTA converts for enterprise? Tribal knowledge lives in one person\u2019s head; resets when they leave.',
    statTitle: 'Zero systematic learning',
    statType: 'trend',
    statLabel: 'Knowledge retention over time',
  },
  {
    title: 'Ads and pipeline fly in different aircraft',
    icon: '/icons/the-problem/Background-3.svg',
    description:
      'Marketing can\u2019t prove which campaigns filled the funnel. Sales doesn\u2019t know which accounts are already warmed up on the runway.',
    statTitle: 'Attribution black hole',
    statType: 'connection',
    statLabel: 'Marketing & Sales alignment',
  },
  {
    title: 'Fragmented data, no reasoning layer',
    icon: '/icons/the-problem/Background-4.svg',
    description:
      'What hook worked last week? What CTA converts for enterprise? Tribal knowledge lives in one person\u2019s head; resets when they leave.',
    statTitle: 'Too many tools, no intelligence',
    statType: 'tags',
    statLabel: 'Disconnected data sources',
  },
  {
    title: 'Too many levers, zero guidance',
    icon: '/icons/the-problem/Background-5.svg',
    description:
      'LinkedIn Campaign Manager exposes bids, budgets, audiences, formats; zero guidance on priority. Decision quality only on operator skill.',
    statTitle: 'Gut feel over data',
    statType: 'comparison',
    statLabel: 'Decision-making breakdown',
  },
  {
    title: 'Lack of benchmarking for B2B LinkedIn',
    icon: '/icons/the-problem/Background-6.svg',
    description:
      'Teams rely on generic CTR benchmarks or anecdotal insights. There is no structured understanding of what "good" looks like by ACV, industry, funnel stage, or region.',
    statTitle: 'Metrics off by 15%',
    statType: 'gauge',
  },
  {
    title: 'Budget inefficiency and pacing anxiety',
    icon: '/icons/the-problem/Background-7.svg',
    description:
      'There is no predictive control layer that flags spend inefficiency before it escalates. Budget reallocation is based on lagging indicators, not forward-looking signals.',
    statTitle: 'Wasted spend: often 30\u201340%',
    statType: 'donut',
  },
];

@Component({
  selector: 'app-problem-section',
  standalone: true,
  imports: [NgClass, NgTemplateOutlet],
  template: `
    <section id="the-problem" class="bg-white py-24">
      <div class="max-w-[1200px] mx-auto px-6">
        <!-- Badge -->
        <div class="text-left md:text-center mb-6">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-primary">
            The Problem
          </span>
        </div>

        <!-- Heading -->
        <h2 class="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-left md:text-center leading-[1.1] tracking-[-0.025em] mb-6">
          LinkedIn Ads is your most strategic
          <br />
          channel. It&apos;s also your biggest black box.
        </h2>

        <!-- Subheading -->
        <p class="text-left md:text-center text-[#4b5563] text-[17px] leading-[1.65] max-w-none md:max-w-[680px] mx-0 md:mx-auto mb-16">
          Teams spending 5k - 250k monthly in LinkedIn are flying blind and fixing issues too late.
        </p>

        <!-- Problem Cards Grid -->
        <div class="grid md:grid-cols-2 gap-4 items-start">
          @for (problem of problems; track problem.title; let i = $index) {
            <button
              (click)="toggle(i)"
              [ngClass]="{
                'border border-[#eca65b] space-y-5': expandedIndex() === i,
                'border border-transparent hover:shadow-md': expandedIndex() !== i
              }"
              class="text-left bg-[#f8f5f0] rounded-xl p-6 transition-all duration-300"
            >
              <!-- Header Row -->
              <div class="flex items-center gap-5 w-full">
                <!-- Icon -->
                <div class="w-[60px] h-[60px] flex-shrink-0">
                  <img
                    [src]="problem.icon"
                    alt=""
                    width="60"
                    height="60"
                    class="w-full h-full"
                  />
                </div>

                <!-- Title -->
                <h3 class="flex-1 text-[20px] md:text-[22px] font-semibold leading-[1.3] tracking-[-0.01em] text-black">
                  {{ problem.title }}
                </h3>

                <!-- Chevron -->
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  class="flex-shrink-0 transition-transform duration-300"
                  [ngClass]="{ 'rotate-180': expandedIndex() === i }"
                >
                  <path
                    d="M8 11l6 6 6-6"
                    [attr.stroke]="expandedIndex() === i ? '#f1641e' : '#666'"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    [attr.fill]="expandedIndex() === i ? '#f1641e' : 'none'"
                  />
                </svg>
              </div>

              <!-- Expanded Content -->
              @if (expandedIndex() === i) {
                <div class="space-y-5 animate-in fade-in duration-300">
                  <!-- Description -->
                  <p class="text-[15px] text-black/60 leading-[1.6]">
                    {{ problem.description }}
                  </p>

                  <!-- Stat Card -->
                  <ng-container
                    [ngTemplateOutlet]="statCard"
                    [ngTemplateOutletContext]="{ $implicit: problem }"
                  ></ng-container>
                </div>
              }
            </button>
          }
        </div>
      </div>
    </section>

    <!-- Stat Card Template -->
    <ng-template #statCard let-problem>
      <div class="bg-[#f1641e] border border-[#eca65b] rounded-xl p-6 w-full">
        <!-- Stat Header -->
        <div class="flex items-center gap-2 mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 2L3 7v6l7 5 7-5V7l-7-5z"
              stroke="white"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <circle cx="10" cy="10" r="2" fill="white" />
          </svg>
          <span class="text-white font-semibold text-base">
            {{ problem.statTitle }}
          </span>
        </div>

        <!-- Stat Visual: progress -->
        @if (problem.statType === 'progress') {
          <div class="space-y-2">
            <div class="flex justify-between text-white text-sm">
              <span>{{ problem.statLabel }}</span>
              <span class="font-bold">{{ problem.statValue }}</span>
            </div>
            <div class="w-full h-3 bg-[#a0421a99] rounded-full overflow-hidden">
              <div
                class="h-full bg-[#eca65b] rounded-full"
                [style.width]="problem.statPercent + '%'"
              ></div>
            </div>
          </div>
        }

        <!-- Stat Visual: range -->
        @if (problem.statType === 'range') {
          <div class="space-y-2">
            <div class="flex justify-between text-white text-sm">
              <span>{{ problem.statLabel }}</span>
              <span class="font-bold">{{ problem.statValue }}</span>
            </div>
            <div class="w-full h-3 bg-[#a0421a99] rounded-full overflow-hidden relative">
              <div
                class="absolute h-full bg-[#eca65b] rounded-full"
                style="left: 27%; width: 20%"
              ></div>
            </div>
            <div class="flex justify-between text-white/80 text-xs">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        }

        <!-- Stat Visual: trend -->
        @if (problem.statType === 'trend') {
          <div class="space-y-2">
            <span class="text-white text-sm">{{ problem.statLabel }}</span>
            <div class="h-14">
              <svg viewBox="0 0 400 50" class="w-full h-full" preserveAspectRatio="none">
                <line x1="0" y1="10" x2="400" y2="10" stroke="white" stroke-opacity="0.15" stroke-width="1" />
                <line x1="0" y1="40" x2="400" y2="40" stroke="white" stroke-opacity="0.15" stroke-width="1" />
                <path
                  d="M0,35 Q50,15 100,20 T200,10 T300,30 T400,40"
                  fill="none"
                  stroke="#eca65b"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        }

        <!-- Stat Visual: connection -->
        @if (problem.statType === 'connection') {
          <div class="space-y-3">
            <span class="text-white text-sm">{{ problem.statLabel }}</span>
            <div class="relative flex items-center justify-between h-16">
              <div class="flex flex-col items-center gap-1">
                <div class="w-8 h-8 bg-[#e79034] rounded-full flex items-center justify-center">
                  <div class="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span class="text-white text-xs">Ads</span>
              </div>
              <div class="flex-1 mx-4 border-t-2 border-dashed border-[#822400] relative">
                <div class="absolute left-1/2 -translate-x-1/2 -top-4 w-8 h-8 bg-[#f1641e] rounded-full flex items-center justify-center text-white text-lg">
                  &#x2715;
                </div>
              </div>
              <div class="flex flex-col items-center gap-1">
                <div class="w-8 h-8 bg-[#e79034] rounded-full flex items-center justify-center">
                  <div class="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span class="text-white text-xs">Pipeline</span>
              </div>
            </div>
          </div>
        }

        <!-- Stat Visual: tags -->
        @if (problem.statType === 'tags') {
          <div class="space-y-3">
            <span class="text-white text-sm">{{ problem.statLabel }}</span>
            <div class="flex items-center gap-2 flex-wrap">
              @for (tag of tags; track tag) {
                <span class="px-3 py-1.5 bg-[#ffedd4] border border-[#ffd6a8] rounded-lg text-xs font-medium text-[#ca3500]">
                  {{ tag }}
                </span>
              }
              <span class="text-white/80 text-xs italic ml-1">
                No unified intelligence layer
              </span>
            </div>
          </div>
        }

        <!-- Stat Visual: comparison -->
        @if (problem.statType === 'comparison') {
          <div class="space-y-3">
            <span class="text-white text-sm">{{ problem.statLabel }}</span>
            <div class="space-y-2">
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-white">Gut feel</span>
                  <span class="font-semibold text-[#f54900]">70%</span>
                </div>
                <div class="w-full h-2 bg-[#f3f4f6] rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-[#eca65b] to-[#e79034] rounded-full w-[70%]"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-white">Data-driven</span>
                  <span class="font-semibold text-[#f54900]">30%</span>
                </div>
                <div class="w-full h-2 bg-[#a0421a99] rounded-full overflow-hidden">
                  <div class="h-full bg-[#eca65b] rounded-full w-[43%]"></div>
                </div>
              </div>
            </div>
          </div>
        }

        <!-- Stat Visual: gauge -->
        @if (problem.statType === 'gauge') {
          <div class="flex flex-col items-center bg-black/10 rounded-xl py-4">
            <svg width="80" height="28" viewBox="0 0 80 28">
              <path
                d="M5,25 Q40,0 75,25"
                fill="none"
                stroke="white"
                stroke-opacity="0.3"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M5,25 Q15,18 22,20"
                fill="none"
                stroke="#eca65b"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
            <span class="text-[#fed7aa] text-2xl font-bold mt-1">15%</span>
            <span class="text-white text-xs">deviation</span>
          </div>
        }

        <!-- Stat Visual: donut -->
        @if (problem.statType === 'donut') {
          <div class="flex items-center justify-between bg-black/10 rounded-xl px-6 py-3">
            <div>
              <p class="text-white font-semibold text-base">Budget waste</p>
              <p class="text-white text-sm">avg. 30-40%</p>
            </div>
            <div class="relative w-[80px] h-[80px]">
              <svg viewBox="0 0 36 36" class="w-full h-full -rotate-90">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(160,66,26,0.4)"
                  stroke-width="3.5"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eca65b"
                  stroke-width="3.5"
                  stroke-dasharray="35, 100"
                />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-[#fed7aa] text-xl font-bold">35%</span>
              </div>
            </div>
          </div>
        }
      </div>
    </ng-template>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProblemSectionComponent {
  problems = problems;
  tags = ['LinkedIn', 'CRM', 'ABM', 'Analytics'];
  expandedIndex = signal<number | null>(null);

  toggle(index: number) {
    this.expandedIndex.set(this.expandedIndex() === index ? null : index);
  }
}
