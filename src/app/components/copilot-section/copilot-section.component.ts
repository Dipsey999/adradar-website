import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

interface Agent {
  name: string;
  image: string;
  description: string;
  route: string;
  cardBg: string;
  cardBorder: string;
  avatarBg: string;
  accentColor: string;
  btnBg: string;
  btnText: string;
}

const agents: Agent[] = [
  {
    name: 'Company Blocking Agent',
    image: '/agents/Company Blocking Agent.png',
    description:
      'Your LinkedIn ads shouldn\'t be funding companies that will never buy from you. It automatically excludes any account outside your target criteria, so every impression, and every dollar, stays within your ICP.',
    route: '/agents/company-blocking',
    cardBg: 'bg-[#e3f3fa]',
    cardBorder: 'border-[#9dcce7]',
    avatarBg: '#b8dff0',
    accentColor: '#9dcce7',
    btnBg: '#9dcce7',
    btnText: '#1a5a78',
  },
  {
    name: 'Impression Capping Agent',
    image: '/agents/Impression Capping Agent.png',
    description:
      'Stop letting LinkedIn\'s algorithm decide who sees your ads. Automatically cap impressions per account and redistribute budget evenly across your entire target list. No manual audits required.',
    route: '/agents/impression-capping',
    cardBg: 'bg-[#e5f7fa]',
    cardBorder: 'border-[#a8d1dc]',
    avatarBg: '#a8d1dc',
    accentColor: '#a8d1dc',
    btnBg: '#a8d1dc',
    btnText: '#1a5a6a',
  },
  {
    name: 'Title Blocking Agent',
    image: '/agents/Title Blocking Agent.png',
    description:
      'Your ads shouldn\'t be reaching interns and irrelevant departments while your actual buyers scroll past. Exclude job titles outside your configured persona, map every impression to seniority, department, and titles that actually move the pipeline.',
    route: '/agents/title-blocking',
    cardBg: 'bg-[#fbf2f5]',
    cardBorder: 'border-[#f4e0e9]',
    avatarBg: '#ee95a0',
    accentColor: '#ee95a0',
    btnBg: '#ee95a0',
    btnText: '#5e1a24',
  },
  {
    name: 'Bidding Optimization Agent',
    image: '/agents/Bidding Optimization Agent.png',
    description:
      'Overbidding inflates CPM. Underbidding kills reach. Continuously adjust bids across campaigns to maximise delivery efficiency, keeping you competitive in the auction without burning budget on overpriced impressions.',
    route: '/agents/bidding-optimization',
    cardBg: 'bg-[rgba(38,216,98,0.12)]',
    cardBorder: 'border-[#acdfa4]',
    avatarBg: '#acdfa4',
    accentColor: '#82c97a',
    btnBg: '#82c97a',
    btnText: '#1a4a18',
  },
  {
    name: 'Campaign Scheduling Agent',
    image: '/agents/Campaign Scheduling Agent.png',
    description:
      'Your LinkedIn ads shouldn\'t be spending budget at 2 am on a Sunday when your buyers aren\'t online. Automatically runs your campaigns only during the days and hours you choose, pausing outside those windows so every impression lands when it actually counts.',
    route: '/agents/campaign-scheduling',
    cardBg: 'bg-[#fffbe3]',
    cardBorder: 'border-[#fdecc8]',
    avatarBg: '#fbf5df',
    accentColor: '#f0d48a',
    btnBg: '#f0d48a',
    btnText: '#5e4a0e',
  },
  {
    name: 'Ad Rotation Agent',
    image: '/agents/Ad Rotation Agent.png',
    description:
      'Running the same ads until CTR drops is expensive to discover your optimal creative. Detect fatigue before performance falls, automatically recommend to rotate creatives so every account sees new messages at the right frequency.',
    route: '/agents/ad-rotation',
    cardBg: 'bg-[#f7f3f8]',
    cardBorder: 'border-[#e8deee]',
    avatarBg: '#d9e1fb',
    accentColor: '#c8b4e0',
    btnBg: '#c8b4e0',
    btnText: '#3e2460',
  },
  {
    name: 'Analyse competitors LinkedIn Ads',
    image: '/agents/Analyse competitors LinkedIn Ads.png',
    description:
      'Your competitors are running LinkedIn Ads, you have no idea what they\'re saying to your buyers. Monitor rival campaigns in real time, track creative changes, messaging shifts, and new launches to respond proactively.',
    route: '/agents/analyse-competitors',
    cardBg: 'bg-[#e8f5ee]',
    cardBorder: 'border-[#b5dcc5]',
    avatarBg: '#a0d4b4',
    accentColor: '#5aab7a',
    btnBg: '#5aab7a',
    btnText: '#1a4a2e',
  },
];


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
        <p class="text-left md:text-center text-[#4b5563] text-[17px] leading-[1.65] max-w-none md:max-w-[720px] mx-0 md:mx-auto mb-20">
          Each Copilot owns a distinct layer of your LinkedIn Ads performance.
          Individually powerful. Together, they share context and memory,
          compounding intelligence with every campaign.
        </p>

        <!-- Grid layout: equal-height cards per row, last item centered -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          @for (agent of agents; track agent.name; let i = $index; let last = $last) {
            <div [class]="last ? 'lg:col-start-2 h-full' : 'h-full'">
              <ng-container
                [ngTemplateOutlet]="agentCard"
                [ngTemplateOutletContext]="{ $implicit: agent, index: i }"
              ></ng-container>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Agent Card Template -->
    <ng-template #agentCard let-agent let-i="index">
      <a
        [href]="agent.route"
        class="copilot-card group relative rounded-2xl transition-all duration-500 hover:-translate-y-1.5 block h-full"
      >
        <!-- Outer glow on hover -->
        <div class="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[3px]"
          [style.background]="'linear-gradient(135deg, ' + agent.accentColor + '35, transparent, ' + agent.accentColor + '35)'">
        </div>

        <!-- Card body -->
        <div class="relative rounded-2xl border p-6 h-full flex flex-col transition-all duration-500 group-hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.12)] overflow-hidden"
          [style.backgroundColor]="agent.avatarBg + '25'"
          [style.borderColor]="agent.accentColor + '30'"
        >
          <!-- Shimmer sweep -->
          <div class="copilot-shimmer absolute inset-0 pointer-events-none z-10 rounded-2xl"></div>

          <!-- Top: Avatar + status -->
          <div class="flex items-center justify-between mb-4">
            <div class="relative">
              <!-- Pulse ring animation -->
              <div class="absolute -inset-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                [style.background]="'radial-gradient(circle, ' + agent.accentColor + '20, transparent 70%)'"
                style="animation: copilot-pulse 2.5s ease-in-out infinite;">
              </div>
              <div
                class="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/80 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-110"
                [style.backgroundColor]="agent.avatarBg"
              >
                <img [src]="agent.image" [alt]="agent.name" class="w-full h-full object-cover" />
              </div>
            </div>

            <!-- Status indicator (shows on hover) -->
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
          <h3 class="text-[16px] font-bold text-[#111827] mb-2 leading-tight">
            {{ agent.name }}
          </h3>

          <!-- Description -->
          <p class="text-[14px] text-[#4b5563] leading-[1.6] mb-5 flex-1">
            {{ agent.description }}
          </p>

          <!-- Bottom: Learn More button -->
          <div class="pt-3">
            <span
              class="inline-flex items-center gap-2 text-[13px] font-semibold transition-all duration-300 group-hover:gap-3"
              [style.color]="agent.btnText"
            >
              Learn More
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M5 3l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </a>
    </ng-template>
  `,
  styles: `
    :host {
      display: block;
    }

    .copilot-shimmer::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 60%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
      transition: none;
    }
    .copilot-card:hover .copilot-shimmer::after {
      animation: copilot-shimmer-sweep 1.2s ease-in-out;
    }

    @keyframes copilot-shimmer-sweep {
      0% { left: -100%; }
      100% { left: 150%; }
    }

    @keyframes copilot-pulse {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.3); opacity: 0; }
    }
  `,
})
export class CopilotSectionComponent {
  agents = agents;
}
