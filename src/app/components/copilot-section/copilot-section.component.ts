import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

interface Agent {
  name: string;
  image: string;
  description: string;
  benefit: string;
  cardBg: string;
  cardBorder: string;
  avatarBg: string;
  btnBg: string;
  btnText: string;
}

const agents: Agent[] = [
  {
    name: 'Company Blocking Agent',
    image: '/agents/Company Blocking Agent.png',
    description:
      'Your LinkedIn ads shouldn\'t be funding companies that will never buy from you. It automatically excludes any account outside your target criteria \u2014 so every impression, and every dollar, stays within your ICP.',
    benefit: 'Higher ICP signal, lower wasted CPM',
    cardBg: 'bg-[#e3f3fa]',
    cardBorder: 'border-[#9dcce7]',
    avatarBg: 'bg-[#b8dff0]',
    btnBg: '#9dcce7',
    btnText: '#1a5a78',
  },
  {
    name: 'Impression Capping Agent',
    image: '/agents/Impression Capping Agent.png',
    description:
      'Stop letting LinkedIn\'s algorithm decide who sees your ads. Automatically cap impressions per account and redistribute budget evenly across your entire target list. No manual audits required.',
    benefit: 'Clear, scalable campaign design',
    cardBg: 'bg-[#e5f7fa]',
    cardBorder: 'border-[#a8d1dc]',
    avatarBg: 'bg-[#a8d1dc]',
    btnBg: '#a8d1dc',
    btnText: '#1a5a6a',
  },
  {
    name: 'Title Blocking Agent',
    image: '/agents/Title Blocking Agent.png',
    description:
      'Your ads shouldn\'t be reaching interns and irrelevant departments while your actual buyers scroll past. Exclude job titles outside your configured persona \u2014 map every impression to seniority, department, and titles that actually move the pipeline.',
    benefit: 'Systematic creative learning',
    cardBg: 'bg-[#fbf2f5]',
    cardBorder: 'border-[#f4e0e9]',
    avatarBg: 'bg-[#ee95a0]',
    btnBg: '#ee95a0',
    btnText: '#5e1a24',
  },
  {
    name: 'Bidding Optimization Agent',
    image: '/agents/Bidding Optimization Agent.png',
    description:
      'Overbidding inflates CPM. Underbidding kills reach. Continuously adjust bids across campaigns to maximise delivery efficiency, keeping you competitive in the auction without burning budget on overpriced impressions.',
    benefit: 'Controlled spend, measurable ROI',
    cardBg: 'bg-[rgba(38,216,98,0.12)]',
    cardBorder: 'border-[#acdfa4]',
    avatarBg: 'bg-[#acdfa4]',
    btnBg: '#82c97a',
    btnText: '#1a4a18',
  },
  {
    name: 'Campaign Scheduling Agent',
    image: '/agents/Campaign Scheduling Agent.png',
    description:
      'Your LinkedIn ads shouldn\'t be spending budget at 2 am on a Sunday when your buyers aren\'t online. Automatically runs your campaigns only during the days and hours you choose, pausing outside those windows so every impression lands when it actually counts.',
    benefit: 'Sustained performance, no sudden drops',
    cardBg: 'bg-[#fffbe3]',
    cardBorder: 'border-[#fdecc8]',
    avatarBg: 'bg-[#fbf5df]',
    btnBg: '#f0d48a',
    btnText: '#5e4a0e',
  },
  {
    name: 'Ad Rotation Agent',
    image: '/agents/Ad Rotation Agent.png',
    description:
      'Running the same ads until CTR drops is expensive to discover your optimal creative. Detect fatigue before performance falls, automatically recommend to rotate creatives so every account sees new messages at the right frequency.',
    benefit: 'Proactive competitive advantage',
    cardBg: 'bg-[#f7f3f8]',
    cardBorder: 'border-[#e8deee]',
    avatarBg: 'bg-[#d9e1fb]',
    btnBg: '#c8b4e0',
    btnText: '#3e2460',
  },
  {
    name: 'Analyse competitors LinkedIn Ads',
    image: '/agents/Analyse competitors LinkedIn Ads.png',
    description:
      'Your competitors are running LinkedIn Ads \u2014 you have no idea what they\'re saying to your buyers. Monitor rival campaigns in real time, track creative changes, messaging shifts, and new launches to respond proactively.',
    benefit: 'Proactive competitive advantage',
    cardBg: 'bg-[#edf3ec]',
    cardBorder: 'border-[#dbeddb]',
    avatarBg: 'bg-[#acdfa4]',
    btnBg: '#82c97a',
    btnText: '#1a4a18',
  },
];

/* Column layout: col1=[1,4], col2=[0,3,6], col3=[2,5] */
const col1 = [agents[1], agents[4]];
const col2 = [agents[0], agents[3], agents[6]];
const col3 = [agents[2], agents[5]];

@Component({
  selector: 'app-copilot-section',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <section id="copilots" class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <!-- Badge -->
        <div class="text-left md:text-center mb-6">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-primary">
            AI Copilots
          </span>
        </div>

        <!-- Heading -->
        <h2 class="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-left md:text-center leading-[1.1] tracking-[-0.025em] mb-6">
          Seven AI Agents. One intelligent formation.
        </h2>

        <!-- Subheading -->
        <p class="text-left md:text-center text-[#6b7280] text-[17px] leading-[1.65] max-w-none md:max-w-[720px] mx-0 md:mx-auto mb-20">
          Each Copilot owns a distinct layer of your LinkedIn Ads performance.
          Individually powerful. Together, they share context and memory &mdash;
          compounding intelligence with every campaign.
        </p>

        <!-- Desktop: 3-column layout with center alignment -->
        <div class="hidden md:flex items-center gap-[24px] max-w-[1100px] mx-auto">
          <!-- Column 1: 2 cards -->
          <div class="flex-1 flex flex-col gap-[24px]">
            @for (agent of col1; track agent.name) {
              <ng-container
                [ngTemplateOutlet]="agentCard"
                [ngTemplateOutletContext]="{ $implicit: agent }"
              ></ng-container>
            }
          </div>

          <!-- Column 2: 3 cards -->
          <div class="flex-1 flex flex-col gap-[24px]">
            @for (agent of col2; track agent.name) {
              <ng-container
                [ngTemplateOutlet]="agentCard"
                [ngTemplateOutletContext]="{ $implicit: agent }"
              ></ng-container>
            }
          </div>

          <!-- Column 3: 2 cards -->
          <div class="flex-1 flex flex-col gap-[24px]">
            @for (agent of col3; track agent.name) {
              <ng-container
                [ngTemplateOutlet]="agentCard"
                [ngTemplateOutletContext]="{ $implicit: agent }"
              ></ng-container>
            }
          </div>
        </div>

        <!-- Mobile: Simple stack -->
        <div class="md:hidden space-y-6">
          @for (agent of agents; track agent.name) {
            <ng-container
              [ngTemplateOutlet]="agentCard"
              [ngTemplateOutletContext]="{ $implicit: agent }"
            ></ng-container>
          }
        </div>
      </div>
    </section>

    <!-- Agent Card Template -->
    <ng-template #agentCard let-agent>
      <div
        [class]="agent.cardBg + ' ' + agent.cardBorder + ' border-2 rounded-[24px] p-8 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] flex flex-col'"
      >
        <!-- Avatar -->
        <div
          [class]="agent.avatarBg + ' w-[112px] h-[112px] shrink-0 rounded-full overflow-hidden mb-5 shadow-[0_8px_14px_0_rgba(15,42,81,0.04)]'"
        >
          <img
            [src]="agent.image"
            [alt]="agent.name"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content -->
        <div class="flex-1 flex flex-col">
          <!-- Title -->
          <h3 class="text-[17px] font-semibold text-[#111827] mb-2 leading-snug tracking-[-0.01em]">
            {{ agent.name }}
          </h3>

          <!-- Description -->
          <p class="text-[14px] text-[#4b5563] leading-[1.6]">
            {{ agent.description }}
          </p>
        </div>

        <!-- Divider + Benefit + Button -->
        <div class="border-t border-black/[0.06] pt-4 mt-5">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="#ff4829"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="text-[13px] font-semibold text-[#ff4829]">
                {{ agent.benefit }}
              </span>
            </div>
            <a
              href="#"
              class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-300 hover:opacity-80"
              [style.backgroundColor]="agent.btnBg"
              [style.color]="agent.btnText"
            >
              View
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CopilotSectionComponent {
  agents = agents;
  col1 = col1;
  col2 = col2;
  col3 = col3;
}
