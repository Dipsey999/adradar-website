import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  popular: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [NgClass],
  template: `
    <section id="pricing" class="py-24 bg-section-bg">
      <div class="max-w-[1200px] mx-auto px-6">
        <!-- Badge -->
        <div class="text-left md:text-center mb-6">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-primary">
            Pricing
          </span>
        </div>

        <!-- Heading -->
        <h2 class="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-left md:text-center leading-[1.1] tracking-[-0.025em] mb-6">
          Start free. Scale as you grow.
        </h2>

        <!-- Subheading -->
        <p class="text-left md:text-center text-[#6b7280] text-[17px] leading-[1.65] max-w-none md:max-w-[580px] mx-0 md:mx-auto mb-16">
          No lock-in. No sales calls needed. Connect your LinkedIn Ads account
          and get your first insights in minutes.
        </p>

        <!-- Pricing Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          @for (plan of plans; track plan.name) {
            <div
              class="relative bg-white rounded-2xl p-6 border flex flex-col"
              [ngClass]="plan.highlighted
                ? 'border-primary shadow-lg shadow-primary/10'
                : 'border-gray-200'"
            >
              <!-- Popular Badge -->
              @if (plan.popular) {
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">
                  &#9733; Most Popular
                </div>
              }

              <!-- Plan Name -->
              <p class="text-[12px] font-bold tracking-[0.06em] uppercase text-dark-bg mb-4">
                {{ plan.name }}
              </p>

              <!-- Price -->
              <div class="mb-6">
                <span class="text-[36px] font-bold tracking-[-0.02em] text-foreground">{{ plan.price }}</span>
                <p class="text-sm text-muted mt-1">{{ plan.period }}</p>
              </div>

              <!-- Features -->
              <ul class="space-y-3 mb-8 flex-1">
                @for (feature of plan.features; track feature) {
                  <li class="flex items-start gap-2">
                    <svg
                      class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-[14px] text-[#6b7280] leading-[1.5]">
                      {{ feature.includes('(Coming Soon)') ? feature.replace(' (Coming Soon)', '') : feature }}
                      @if (feature.includes('(Coming Soon)')) {
                        <span class="ml-1 text-[9px] font-bold uppercase tracking-[0.03em] bg-[#fff7ed] text-[#c2410c] px-1.5 py-[1px] rounded-full border border-[#fed7aa] align-middle">Soon</span>
                      }
                    </span>
                  </li>
                }
              </ul>

              <!-- CTA Button -->
              <a
                href="#"
                class="block text-center py-3 rounded-full text-[14px] font-medium transition-colors"
                [ngClass]="plan.highlighted
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'border border-dark-bg text-dark-bg hover:bg-gray-50'"
              >
                {{ plan.cta }}
              </a>
            </div>
          }
        </div>

        <!-- Agency Note -->
        <p class="text-left md:text-center text-[14px]">
          <span class="font-bold text-primary">Agency plan starts at $149/mo</span>
          <span class="text-muted">
            , includes 2 client workspaces, unlimited users, and cross-account insights.
          </span>
        </p>
      </div>
    </section>
  `,
})
export class PricingComponent {
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
        'Campaign Bidding Optimization Agent (Coming Soon)',
        'Auto Irrelevant Account Blocking Agent',
        'Auto Irrelevant Title Blocking Agent',
        'Ad Rotation Recommendation Agent (Coming Soon)',
        'Analyse competitors LinkedIn Ads (Coming Soon)',
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
}
