import { Component, signal } from '@angular/core';

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  popular: boolean;
}

interface FeatureRow {
  name: string;
  starter: boolean;
  growth: boolean;
  pro: boolean;
  agency: boolean;
}

interface FeatureGroup {
  category: string;
  rows: FeatureRow[];
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  template: `
    <!-- ═══════════════════════════════════════════
         SECTION 1: HERO + PRICING CARDS
         ═══════════════════════════════════════════ -->
    <section class="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#fef6f3] via-white to-white pointer-events-none -z-10"></div>
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-[closest-side] from-[#e8573a]/5 to-transparent pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <!-- Badge -->
        <div class="text-left md:text-center mb-4">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#c94a32]">
            Pricing
          </span>
        </div>

        <!-- Heading -->
        <h1 class="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-left md:text-center leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
          Start free. Scale as you grow.
        </h1>

        <!-- Subheading -->
        <p class="text-left md:text-center text-[#6b7280] text-[17px] leading-[1.65] max-w-none md:max-w-[580px] mx-0 md:mx-auto mb-14">
          No lock-in. No sales calls needed. Connect your LinkedIn Ads account
          and get your first insights in minutes.
        </p>

        <!-- Pricing Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

          @for (plan of plans; track plan.name; let i = $index) {
            <div
              class="relative bg-white rounded-2xl border flex flex-col transition-all duration-300 hover:-translate-y-1"
              [class]="plan.highlighted
                ? 'relative bg-white rounded-2xl border border-[#e8573a] shadow-lg shadow-[#e8573a]/10 flex flex-col transition-all duration-300 hover:-translate-y-1'
                : 'relative bg-white rounded-2xl border border-[#e5e7eb] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md'"
            >
              <!-- Popular Badge -->
              @if (plan.popular) {
                <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#e8573a] text-white text-[11px] font-bold tracking-[0.04em] px-4 py-1.5 rounded-full shadow-sm">
                  &#9733; Most Popular
                </div>
              }

              <div class="p-6 lg:p-7 flex flex-col flex-1">
                <!-- Plan Name -->
                <p class="text-[12px] font-bold tracking-[0.08em] uppercase text-[#6b7280] mb-3">
                  {{ plan.name }}
                </p>

                <!-- Price -->
                <div class="mb-6">
                  <span class="text-[40px] font-bold tracking-[-0.03em] leading-none text-[#111827]">{{ plan.price }}</span>
                  <span class="text-[14px] text-[#6b7280] ml-1">/ month</span>
                </div>

                <!-- Features -->
                <ul class="space-y-3 mb-8 flex-1">
                  @for (feature of plan.features; track feature) {
                    <li class="flex items-start gap-2.5">
                      <svg class="w-[18px] h-[18px] text-[#e8573a] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-[14px] text-[#4b5563] leading-[1.5]">{{ feature }}</span>
                    </li>
                  }
                </ul>

                <!-- CTA Button -->
                <a
                  href="#"
                  class="block text-center py-3.5 rounded-full text-[14px] font-semibold transition-all duration-300"
                  [class]="plan.highlighted
                    ? 'block text-center py-3.5 rounded-full text-[14px] font-semibold transition-all duration-300 bg-[#e8573a] text-white hover:bg-[#d14a30] hover:shadow-[0_8px_24px_-6px_rgba(232,87,58,0.4)]'
                    : 'block text-center py-3.5 rounded-full text-[14px] font-semibold transition-all duration-300 border border-[#1a1a2e] text-[#1a1a2e] hover:bg-[#fef6f3]'"
                >
                  {{ plan.cta }}
                </a>
              </div>
            </div>
          }

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 2: FEATURE COMPARISON TABLE
         ═══════════════════════════════════════════ -->
    <section class="relative py-16 lg:py-24 overflow-hidden">
      <div class="absolute inset-0 bg-white pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <!-- Heading -->
        <div class="text-left md:text-center mb-4">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#c94a32]">
            Compare Plans
          </span>
        </div>
        <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold text-left md:text-center leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
          Which Plan is Best for
          <span class="italic bg-clip-text text-transparent" [style.backgroundImage]="'linear-gradient(58deg, #FF4829 22.76%, #F1CD98 96.62%)'">YOU</span>
        </h2>
        <p class="text-left md:text-center text-[#6b7280] text-[17px] leading-[1.65] max-w-none md:max-w-[680px] mx-0 md:mx-auto mb-12">
          Start on Starter and upgrade as your campaigns scale. Every plan builds on the last &mdash; no features removed, only added.
        </p>

        <!-- Table -->
        <div class="overflow-x-auto rounded-xl border border-[#e5e7eb]">
          <table class="w-full min-w-[700px]">
            <!-- Header -->
            <thead>
              <tr class="bg-[#1a1a2e]">
                <th class="text-left py-4 px-5 text-[13px] font-semibold text-white w-[30%]">Feature</th>
                <th class="text-center py-4 px-3 text-[13px] font-semibold text-white w-[17.5%]">
                  <span class="text-[#ff6b35]">Starter</span>
                  <span class="block text-[11px] font-normal text-white/75 mt-0.5">$29/mo</span>
                </th>
                <th class="text-center py-4 px-3 text-[13px] font-semibold text-white w-[17.5%]">
                  Growth
                  <span class="block text-[11px] font-normal text-white/75 mt-0.5">$59/mo</span>
                </th>
                <th class="text-center py-4 px-3 text-[13px] font-semibold text-white w-[17.5%]">
                  Pro
                  <span class="block text-[11px] font-normal text-white/75 mt-0.5">$99/mo</span>
                </th>
                <th class="text-center py-4 px-3 text-[13px] font-semibold text-white w-[17.5%]">
                  Agency
                  <span class="block text-[11px] font-normal text-white/75 mt-0.5">$149/mo</span>
                </th>
              </tr>
            </thead>
            <tbody>
              @for (group of featureGroups; track group.category) {
                <!-- Category header -->
                <tr class="bg-[#f8fafb]">
                  <td colspan="5" class="py-3 px-5 text-[12px] font-bold tracking-[0.06em] uppercase text-[#111827]">
                    {{ group.category }}
                  </td>
                </tr>
                @for (row of group.rows; track row.name; let j = $index) {
                  <tr class="border-b border-[#f0f0f0] hover:bg-[#fef6f3]/30 transition-colors">
                    <td class="py-3.5 px-5 text-[14px] text-[#374151]">{{ row.name }}</td>
                    <td class="text-center py-3.5 px-3">
                      @if (row.starter) {
                        <svg class="w-5 h-5 text-[#22c55e] mx-auto" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      } @else {
                        <span class="text-[#6b7280]">&mdash;</span>
                      }
                    </td>
                    <td class="text-center py-3.5 px-3">
                      @if (row.growth) {
                        <svg class="w-5 h-5 text-[#22c55e] mx-auto" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      } @else {
                        <span class="text-[#6b7280]">&mdash;</span>
                      }
                    </td>
                    <td class="text-center py-3.5 px-3">
                      @if (row.pro) {
                        <svg class="w-5 h-5 text-[#22c55e] mx-auto" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      } @else {
                        <span class="text-[#6b7280]">&mdash;</span>
                      }
                    </td>
                    <td class="text-center py-3.5 px-3">
                      @if (row.agency) {
                        <svg class="w-5 h-5 text-[#22c55e] mx-auto" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      } @else {
                        <span class="text-[#6b7280]">&mdash;</span>
                      }
                    </td>
                  </tr>
                }
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 3: SOCIAL PROOF / RESULTS
         ═══════════════════════════════════════════ -->
    <section class="relative py-16 lg:py-24 overflow-hidden">
      <div class="absolute inset-0 bg-[#fef6f3] pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-left md:text-center mb-4">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#c94a32]">
            Proven Results
          </span>
        </div>
        <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold text-left md:text-center leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
          Real Results from AdRadar Customers.
          <br class="hidden md:block" />
          <span class="italic bg-clip-text text-transparent" [style.backgroundImage]="'linear-gradient(58deg, #FF4829 22.76%, #F1CD98 96.62%)'">Try now for FREE</span>
        </h2>
        <p class="text-left md:text-center text-[#6b7280] text-[17px] leading-[1.65] max-w-none md:max-w-[580px] mx-0 md:mx-auto mb-12">
          Numbers from real teams managing LinkedIn Ads with adRadar.
        </p>

        <!-- Stats Grid -->
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">
          @for (stat of stats; track stat.value) {
            <div class="bg-white rounded-2xl border border-[#e5e7eb] p-8 lg:p-10 text-center shadow-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-md">
              <!-- Progress bar accent -->
              <div class="w-20 h-1 rounded-full bg-gradient-to-r from-[#e8573a] to-[#ff6b35] mx-auto mb-6"></div>
              <span class="block text-[48px] lg:text-[56px] font-bold tracking-[-0.04em] leading-none text-[#e8573a] mb-3">{{ stat.value }}</span>
              <p class="text-[15px] font-semibold text-[#111827] mb-2">{{ stat.label }}</p>
              <p class="text-[13px] text-[#6b7280] leading-[1.55]">{{ stat.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 4: EVERY PLAN INCLUDES
         ═══════════════════════════════════════════ -->
    <section class="relative py-16 lg:py-24 overflow-hidden">
      <div class="absolute inset-0 bg-white pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-left md:text-center mb-4">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#c94a32]">
            Every Plan Includes
          </span>
        </div>
        <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold text-left md:text-center leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
          No features hidden behind a sales call.
        </h2>
        <p class="text-left md:text-center text-[#6b7280] text-[17px] leading-[1.65] max-w-none md:max-w-[720px] mx-0 md:mx-auto mb-12">
          Every AdRadar plan comes with the same foundation &mdash; full LinkedIn Ads connectivity, CRM integration, and the infrastructure your campaigns need to run with intelligence from day one.
        </p>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-2 gap-5 lg:gap-6">
          @for (item of everyPlanFeatures; track item.title) {
            <div class="bg-[#fef6f3] rounded-2xl p-7 lg:p-8 border border-[#f5e6e0]">
              <div class="flex items-start gap-3.5 mb-3">
                <div class="w-9 h-9 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg class="w-5 h-5 text-[#e8573a]" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="text-[16px] font-bold text-[#111827] leading-[1.3] pt-1.5">{{ item.title }}</h3>
              </div>
              <p class="text-[14px] text-[#6b7280] leading-[1.6] pl-[50px]">{{ item.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 5: FAQ
         ═══════════════════════════════════════════ -->
    <section class="relative py-16 lg:py-24 overflow-hidden">
      <div class="absolute inset-0 bg-[#fef6f3] pointer-events-none -z-10"></div>

      <div class="max-w-[800px] mx-auto px-6">
        <div class="text-left md:text-center mb-4">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#c94a32]">
            Frequently Asked Questions
          </span>
        </div>
        <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold text-left md:text-center leading-[1.1] tracking-[-0.025em] text-[#111827] mb-12">
          What teams find when they start using AdRadar.
        </h2>

        <!-- FAQ Items -->
        <div class="space-y-3">
          @for (faq of faqs; track faq.question; let i = $index) {
            <div class="bg-white rounded-xl border border-[#e5e7eb] overflow-hidden transition-all duration-300">
              <button
                class="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left cursor-pointer"
                (click)="toggleFaq(i)"
              >
                <h3 class="text-[15px] lg:text-[16px] font-semibold text-[#111827] leading-[1.4]">{{ faq.question }}</h3>
                <svg
                  class="w-5 h-5 text-[#9ca3af] flex-shrink-0 transition-transform duration-300"
                  [class.rotate-180]="openFaq() === i"
                  viewBox="0 0 20 20" fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </button>
              @if (openFaq() === i) {
                <div class="px-5 lg:px-6 pb-5 lg:pb-6">
                  <p class="text-[14px] text-[#6b7280] leading-[1.65]">{{ faq.answer }}</p>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 6: BOTTOM CTA
         ═══════════════════════════════════════════ -->
    <section class="relative py-12 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <img src="/images/cta-bg-2.png" alt="" class="object-cover scale-125 absolute inset-0 w-full h-full" aria-hidden="true" />
      </div>
      <div class="relative max-w-[1200px] mx-auto px-6">
        <div class="relative rounded-[28px] lg:rounded-[32px] bg-white overflow-clip shadow-[0_0_24px_4px_rgba(0,0,0,0.12)] pt-12 lg:pt-16 pb-[120px] lg:pb-[160px] px-8 md:px-12 lg:px-16">
          <div class="relative z-10 text-left md:text-center max-w-[700px] mx-auto">
            <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-3">
              Your LinkedIn spend deserves
              <br class="hidden md:block" />
              better than{{ ' ' }}
              <span
                class="italic font-bold bg-clip-text text-transparent"
                [style.backgroundImage]="'linear-gradient(58deg, #FF4829 22.76%, #F1CD98 96.62%)'"
              >
                gut feel.
              </span>
            </h2>
            <p class="text-[15px] md:text-[17px] text-[#4b5563] max-w-none md:max-w-[520px] mx-0 md:mx-auto mb-6 leading-[1.65]">
              Connect your LinkedIn Ads account in 2 minutes. Your first Copilot
              briefing is ready instantly. No credit card required.
            </p>
            <a
              href="#"
              class="inline-flex items-center gap-3.5 bg-[#ff6500] hover:bg-[#e85a00] text-white rounded-full pl-9 pr-1 py-1 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(255,101,0,0.4)] hover:scale-[1.03]"
            >
              <span class="text-[15px] lg:text-[17px] font-medium">Start free trial</span>
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3l4 4-4 4" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>
          </div>
          <!-- Avatar wave -->
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-[110%] max-w-[1310px]">
            <img src="/images/cta-avatar.svg" alt="AI Copilot agents" width="1310" height="310" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class PricingPageComponent {
  openFaq = signal<number | null>(null);

  plans: Plan[] = [
    {
      name: 'Starter',
      price: '$29',
      period: 'per month',
      features: [
        'Revenue Attribution',
        'Inbound CRM Sync',
        'Company Insights',
        'Campaign Analytics',
        'Ad Analytics',
        'Custom Revenue Attribution Model',
        'Customer Journey View',
        'Campaign Optimization',
        'Easy Manual Irrelevant Account Blocking',
        'Easy Manual Irrelevant Title Blocking',
      ],
      cta: 'Start free trial',
      highlighted: false,
      popular: false,
    },
    {
      name: 'Growth',
      price: '$59',
      period: 'per month',
      features: [
        'Everything in Starter +',
        'AI Agents',
        'Impression Capping',
        'Campaign Scheduling Agent',
        'Campaign Bidding Optimization Agent',
        'Auto Irrelevant Account Blocking Agent',
        'Auto Irrelevant Title Blocking Agent',
        'Ad Rotation Recommendation Agent',
        'Analyse competitors LinkedIn Ads',
      ],
      cta: 'Start free trial',
      highlighted: true,
      popular: true,
    },
    {
      name: 'Pro',
      price: '$99',
      period: 'per month',
      features: [
        'Everything in Growth +',
        'ABM Analytics',
        'Company Scoring',
        'Journey Stage Prediction Modelling',
        'Outbound CRM Sync (Write account score and Journey Stage Data to CRM)',
      ],
      cta: 'Start free trial',
      highlighted: false,
      popular: false,
    },
    {
      name: 'Agency',
      price: '$149',
      period: 'per month',
      features: [
        'Everything in Pro +',
        '2 accounts included',
        'Additional accounts at $59',
        'Unlimited users',
        'Client views to switch between accounts',
      ],
      cta: 'Talk to Sales',
      highlighted: false,
      popular: false,
    },
  ];

  featureGroups: FeatureGroup[] = [
    {
      category: 'Analytics & Attribution',
      rows: [
        { name: 'Revenue Attribution', starter: true, growth: true, pro: true, agency: true },
        { name: 'Inbound CRM Sync (HubSpot, Salesforce, Pipedrive)', starter: true, growth: true, pro: true, agency: true },
        { name: 'Custom Revenue Attribution Model', starter: true, growth: true, pro: true, agency: true },
        { name: 'Customer Journey View', starter: true, growth: true, pro: true, agency: true },
        { name: 'Company & Campaign Analytics', starter: true, growth: true, pro: true, agency: true },
        { name: 'Ad Analytics', starter: true, growth: true, pro: true, agency: true },
        { name: 'ABM Analytics', starter: false, growth: false, pro: true, agency: true },
        { name: 'Company Scoring', starter: false, growth: false, pro: true, agency: true },
        { name: 'Journey Stage Prediction Model', starter: false, growth: false, pro: true, agency: true },
        { name: 'Outbound CRM Sync (write account score + journey stage)', starter: false, growth: false, pro: true, agency: true },
      ],
    },
    {
      category: 'Campaign Optimisation',
      rows: [
        { name: 'Campaign Optimisation Dashboard', starter: true, growth: true, pro: true, agency: true },
        { name: 'Manual Account Blocking', starter: true, growth: true, pro: true, agency: true },
        { name: 'Manual Title Blocking', starter: true, growth: true, pro: true, agency: true },
      ],
    },
    {
      category: 'AI Agents (all 7 included in Growth+)',
      rows: [
        { name: 'Impression Capping Agent', starter: false, growth: true, pro: true, agency: true },
        { name: 'Campaign Scheduling Agent', starter: false, growth: true, pro: true, agency: true },
        { name: 'Bidding Optimisation Agent', starter: false, growth: true, pro: true, agency: true },
        { name: 'Auto Account Blocking Agent', starter: false, growth: true, pro: true, agency: true },
        { name: 'Auto Title Blocking Agent', starter: false, growth: true, pro: true, agency: true },
        { name: 'Ad Rotation Recommendation Agent', starter: false, growth: true, pro: true, agency: true },
        { name: 'Competitor LinkedIn Ads Analysis', starter: false, growth: true, pro: true, agency: true },
      ],
    },
    {
      category: 'Agency',
      rows: [
        { name: 'Client workspace switching', starter: false, growth: false, pro: false, agency: true },
        { name: '2 client accounts included', starter: false, growth: false, pro: false, agency: true },
        { name: 'Additional accounts ($59/month each)', starter: false, growth: false, pro: false, agency: true },
        { name: 'Unlimited users', starter: false, growth: false, pro: false, agency: true },
      ],
    },
  ];

  stats = [
    {
      value: '22%',
      label: 'Average budget recovered',
      description: 'From off-ICP impressions identified and blocked in the first audit',
    },
    {
      value: '4\u00d7',
      label: 'ROI on observability spend',
      description: 'Teams on full-stack campaign intelligence see 4x ROI vs. manual management',
    },
    {
      value: '$14K',
      label: 'Wasted spend found in week one',
      description: 'Typical first-audit finding for teams spending $10K+/month on LinkedIn',
    },
  ];

  everyPlanFeatures = [
    {
      title: 'LinkedIn Ads connection',
      description: 'OAuth in seconds. All campaigns, creative history, and audience data ingested immediately. No CSV. No manual wiring.',
    },
    {
      title: 'CRM integration (HubSpot, Salesforce, Pipedrive)',
      description: 'Connect your CRM in minutes and start mapping ad exposure to pipeline, opportunity creation, and revenue.',
    },
    {
      title: 'Revenue attribution model',
      description: 'Every plan includes the revenue attribution model \u2014 so you can connect LinkedIn spend to closed deals from day one, not just when you upgrade.',
    },
    {
      title: 'Campaign & ad analytics',
      description: "Full performance reporting across campaigns, creatives, audiences, and companies \u2014 with account-level visibility LinkedIn doesn\u2019t natively provide.",
    },
    {
      title: 'Human-in-the-loop by design',
      description: 'Agents recommend. You decide. Every action is explained, logged, and reversible. You are always the captain \u2014 no black-box autopilot on any plan.',
    },
    {
      title: 'Setup in under 2 minutes',
      description: 'No implementation project. No onboarding call required. Connect and get your first insights before the first coffee is done.',
    },
  ];

  faqs: FaqItem[] = [
    {
      question: 'Is there a free trial? Do I need a credit card to start?',
      answer: 'Every plan starts with a free trial \u2014 no credit card required. Connect your LinkedIn Ads account and get your first insights immediately. You only need to enter payment details when you decide to continue after the trial.',
    },
    {
      question: "What\u2019s the difference between manual blocking (Starter) and auto blocking (Growth)?",
      answer: "Starter includes manual company and title blocking \u2014 you review suggestions and apply blocks yourself. Growth upgrades this to fully automated agents that monitor delivery continuously and block off-ICP companies and off-persona titles automatically, without requiring manual review. The agents also log every action and report estimated spend saved.",
    },
    {
      question: 'Can I switch plans after signing up?',
      answer: 'Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately. If you downgrade, you retain access to higher-tier features until the end of your current billing period.',
    },
    {
      question: 'What CRMs does AdRadar integrate with?',
      answer: 'AdRadar integrates with HubSpot, Salesforce, and Pipedrive on all plans (inbound sync). Pro and Agency plans additionally include outbound CRM sync \u2014 writing account scores and journey stage data back to your CRM fields.',
    },
    {
      question: 'How does the Agency plan work for managing multiple clients?',
      answer: 'The Agency plan starts at $149/month and includes 2 client workspaces. Additional client accounts can be added at $59/month each. All users across all workspaces are included with no per-seat pricing. Client switching allows you to move between workspaces in one click.',
    },
    {
      question: 'Is annual billing available?',
      answer: 'Yes. Annual billing is available at a 20% discount across all plans. Contact us for annual plan pricing \u2014 or start on monthly and switch to annual when you\u2019re ready.',
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data remains accessible for 30 days after cancellation. You can export all campaign history, attribution reports, and agent logs before your account closes. After 30 days, data is permanently deleted in accordance with our privacy policy.',
    },
  ];

  toggleFaq(index: number): void {
    this.openFaq.set(this.openFaq() === index ? null : index);
  }
}
