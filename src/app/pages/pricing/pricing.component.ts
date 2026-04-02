import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';

interface PlanFeature {
  text: string;
  type: 'heading' | 'feature' | 'note';
  comingSoon?: boolean;
}

interface Plan {
  name: string;
  price: string;
  annualPrice: string;
  period: string;
  features: PlanFeature[];
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
  comingSoon?: boolean;
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
  imports: [NgClass, CtaSectionComponent],
  template: `
    <!-- ═══════════════════════════════════════════
         SECTION 1: HERO + PRICING CARDS
         ═══════════════════════════════════════════ -->
    <section class="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      <!-- Light warm gradient background, matches landing page -->
      <div class="absolute inset-0 bg-gradient-to-b from-white via-white to-[#fff0e6] pointer-events-none -z-20"></div>

      <!-- Decorative warm glows -->
      <div class="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-radial-[closest-side] from-[#e8573a]/[0.06] via-[#ff6b35]/[0.03] to-transparent pointer-events-none -z-10"></div>
      <div class="absolute top-[5%] right-[-5%] w-[400px] h-[400px] bg-radial-[closest-side] from-[#f5a855]/[0.08] to-transparent blur-[60px] pointer-events-none -z-10"></div>
      <div class="absolute top-[10%] left-[-5%] w-[350px] h-[350px] bg-radial-[closest-side] from-[#f09030]/[0.06] to-transparent blur-[60px] pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <!-- Badge pill, same style as landing hero -->
        <div class="text-left md:text-center mb-8">
          <div class="inline-flex items-center gap-2.5 bg-primary/10 rounded-full px-4 py-1.5">
            <span class="w-2 h-2 rounded-full bg-primary"></span>
            <span class="text-[11px] font-bold tracking-[0.08em] text-primary uppercase">
              Pricing
            </span>
            <span class="w-2 h-2 rounded-full bg-primary"></span>
            <span class="text-[11px] font-bold tracking-[0.08em] text-primary uppercase">
              Start Free
            </span>
            <span class="w-2 h-2 rounded-full bg-primary"></span>
          </div>
        </div>

        <!-- Heading -->
        <h1 class="text-[40px] md:text-[56px] lg:text-[68px] font-bold text-left md:text-center leading-[1.05] tracking-[-0.03em] text-[#1A1A1A] mb-5">
          Simple pricing that
          <br class="hidden md:block" />
          <span class="italic bg-clip-text text-transparent" style="background-image: linear-gradient(58deg, #FF4829 22.76%, #F1CD98 96.62%);">scales with you.</span>
        </h1>

        <!-- Subheading -->
        <p class="text-left md:text-center text-[#4b5563] text-[17px] leading-[1.65] max-w-none md:max-w-[580px] mx-0 md:mx-auto mb-8">
          No lock-in. No sales calls needed. Connect your LinkedIn Ads account
          and get your first insights in minutes.
        </p>

        <!-- Trust badges -->
        <div class="flex flex-wrap items-center justify-start md:justify-center gap-2 text-[14px] font-medium text-gray-600 mb-10">
          <span>No credit card required</span>
          <span class="text-gray-300 font-bold px-1">&bull;</span>
          <span>Cancel anytime</span>
          <span class="text-gray-300 font-bold px-1">&bull;</span>
          <span>Setup in under 2 minutes</span>
        </div>

        <!-- Billing toggle -->
        <div class="flex items-center justify-start md:justify-center mb-14">
          <div class="inline-flex items-center bg-[#f3f4f6] rounded-full p-1">
            <button
              (click)="setBillingPeriod('monthly')"
              class="text-[14px] font-medium px-5 py-2 rounded-full transition-all duration-300"
              [ngClass]="billingPeriod() === 'monthly'
                ? 'bg-white text-[#111827] shadow-sm'
                : 'text-[#6b7280] hover:text-[#374151]'"
            >
              Monthly
            </button>
            <button
              (click)="setBillingPeriod('annual')"
              class="text-[14px] font-medium px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2"
              [ngClass]="billingPeriod() === 'annual'
                ? 'bg-white text-[#111827] shadow-sm'
                : 'text-[#6b7280] hover:text-[#374151]'"
            >
              Annual
              <span class="text-[11px] font-bold tracking-[0.04em] bg-[#22c55e] text-white px-2 py-0.5 rounded-full">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

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
                  <span class="text-[40px] font-bold tracking-[-0.03em] leading-none text-[#111827]">{{ billingPeriod() === 'annual' ? plan.annualPrice : plan.price }}</span>
                  <span class="text-[14px] text-[#6b7280] ml-1">/ month</span>
                  @if (billingPeriod() === 'annual') {
                    <span class="block text-[12px] text-[#15803d] font-medium mt-1">Billed annually</span>
                  }
                </div>

                <!-- Features -->
                <ul class="space-y-3 mb-8 flex-1">
                  @for (feature of plan.features; track feature.text) {
                    @if (feature.type === 'heading') {
                      <li class="pt-2 first:pt-0">
                        <span class="text-[14px] font-bold text-[#111827] leading-[1.5]">{{ feature.text }}</span>
                      </li>
                    } @else if (feature.type === 'note') {
                      <li>
                        <span class="text-[13px] text-[#4b5563] leading-[1.5]">{{ feature.text }}</span>
                      </li>
                    } @else {
                      <li class="flex items-start gap-2.5">
                        <svg class="w-[18px] h-[18px] text-[#e8573a] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-[14px] text-[#4b5563] leading-[1.5]">
                          {{ feature.text }}
                          @if (feature.comingSoon) {
                            <span class="ml-1 text-[9px] font-bold uppercase tracking-[0.03em] bg-[#fff7ed] text-[#c2410c] px-1.5 py-[1px] rounded-full border border-[#fed7aa] align-middle">Soon</span>
                          }
                        </span>
                      </li>
                    }
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
         SECTION 2: SOCIAL PROOF / RESULTS
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
          Real Results from adRadar Customers.
          <br class="hidden md:block" />
          <span class="italic bg-clip-text text-transparent" [style.backgroundImage]="'linear-gradient(58deg, #FF4829 22.76%, #F1CD98 96.62%)'">Try now for FREE</span>
        </h2>
        <p class="text-left md:text-center text-[#4b5563] text-[17px] leading-[1.65] max-w-none md:max-w-[580px] mx-0 md:mx-auto mb-12">
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
              <p class="text-[14px] text-[#4b5563] leading-[1.55]">{{ stat.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION 3: FEATURE COMPARISON TABLE
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
        <p class="text-left md:text-center text-[#4b5563] text-[17px] leading-[1.65] max-w-none md:max-w-[680px] mx-0 md:mx-auto mb-12">
          Start on Starter and upgrade as your campaigns scale. Every plan builds on the last, no features removed, only added.
        </p>

        <!-- Table -->
        <div class="overflow-x-auto rounded-xl border border-[#e5e7eb]">
          <table class="w-full min-w-[700px]">
            <!-- Header -->
            <thead>
              <tr class="bg-[#1a1a2e]">
                <th class="text-left py-5 px-5 text-[13px] font-semibold text-white/60 w-[30%]">Feature</th>
                <th class="text-center py-5 px-3 w-[17.5%]">
                  <span class="block text-[17px] font-bold text-[#ff6b35]">Starter</span>
                  <span class="block text-[12px] font-medium text-white/50 mt-1">$29/mo</span>
                </th>
                <th class="text-center py-5 px-3 w-[17.5%]">
                  <span class="block text-[17px] font-bold text-white">Growth</span>
                  <span class="block text-[12px] font-medium text-white/50 mt-1">$59/mo</span>
                </th>
                <th class="text-center py-5 px-3 w-[17.5%]">
                  <span class="block text-[17px] font-bold text-white">Pro</span>
                  <span class="block text-[12px] font-medium text-white/50 mt-1">$99/mo</span>
                </th>
                <th class="text-center py-5 px-3 w-[17.5%]">
                  <span class="block text-[17px] font-bold text-white">Agency</span>
                  <span class="block text-[12px] font-medium text-white/50 mt-1">$149/mo</span>
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
                    <td class="py-3.5 px-5 text-[14px] text-[#374151]">
                      {{ row.name }}
                      @if (row.comingSoon) {
                        <span class="ml-1 text-[9px] font-bold uppercase tracking-[0.03em] bg-[#fff7ed] text-[#c2410c] px-1.5 py-[1px] rounded-full border border-[#fed7aa] align-middle">Soon</span>
                      }
                    </td>
                    <td class="text-center py-3.5 px-3">
                      @if (row.starter) {
                        <svg class="w-5 h-5 text-[#15803d] mx-auto" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      } @else {
                        <span class="text-[#6b7280]">&mdash;</span>
                      }
                    </td>
                    <td class="text-center py-3.5 px-3">
                      @if (row.growth) {
                        <svg class="w-5 h-5 text-[#15803d] mx-auto" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      } @else {
                        <span class="text-[#6b7280]">&mdash;</span>
                      }
                    </td>
                    <td class="text-center py-3.5 px-3">
                      @if (row.pro) {
                        <svg class="w-5 h-5 text-[#15803d] mx-auto" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      } @else {
                        <span class="text-[#6b7280]">&mdash;</span>
                      }
                    </td>
                    <td class="text-center py-3.5 px-3">
                      @if (row.agency) {
                        <svg class="w-5 h-5 text-[#15803d] mx-auto" viewBox="0 0 20 20" fill="currentColor">
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
         SECTION 4: EVERY PLAN INCLUDES
         ═══════════════════════════════════════════ -->
    <section class="relative py-16 lg:py-24 overflow-hidden">
      <div class="absolute inset-0 bg-white pointer-events-none -z-10"></div>

      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-left md:text-center mb-6">
          <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#c94a32]">
            Every Plan Includes
          </span>
        </div>
        <h2 class="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-left md:text-center leading-[1.1] tracking-[-0.025em] text-[#111827] mb-6">
          No features hidden behind a sales call.
        </h2>
        <p class="text-left md:text-center text-[#4b5563] text-[17px] leading-[1.65] max-w-none md:max-w-[720px] mx-0 md:mx-auto mb-16">
          Every adRadar plan comes with the same foundation, full LinkedIn Ads connectivity, CRM integration, and the infrastructure your campaigns need to run with intelligence from day one.
        </p>

        <!-- Features Grid, accordion style matching landing page -->
        <div class="grid md:grid-cols-2 gap-4 items-start">
          @for (item of everyPlanFeatures; track item.title; let i = $index) {
            <button
              (click)="togglePlanFeature(i)"
              [ngClass]="{
                'border border-[#eca65b] space-y-5': expandedPlanFeature() === i,
                'border border-transparent hover:shadow-md': expandedPlanFeature() !== i
              }"
              class="text-left bg-[#f8f5f0] rounded-xl p-6 transition-all duration-300"
            >
              <!-- Header Row -->
              <div class="flex items-center gap-5 w-full">
                <!-- Icon -->
                <div class="w-[52px] h-[52px] flex-shrink-0 rounded-xl bg-[#e8573a] flex items-center justify-center">
                  @switch (i) {
                    @case (0) {
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.1 1.1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    }
                    @case (1) {
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 17a3 3 0 106 0 3 3 0 00-6 0z" stroke="white" stroke-width="2"/></svg>
                    }
                    @case (2) {
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>
                    }
                    @case (3) {
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    }
                    @case (4) {
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="white" stroke-width="2"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    }
                    @case (5) {
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/><path d="M12 6v6l4 2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    }
                  }
                </div>

                <!-- Title -->
                <h3 class="flex-1 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black">
                  {{ item.title }}
                </h3>

                <!-- Chevron -->
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  class="flex-shrink-0 transition-transform duration-300"
                  [ngClass]="{ 'rotate-180': expandedPlanFeature() === i }"
                >
                  <path
                    d="M8 11l6 6 6-6"
                    [attr.stroke]="expandedPlanFeature() === i ? '#e8573a' : '#666'"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              <!-- Expanded Content -->
              @if (expandedPlanFeature() === i) {
                <div class="animate-in fade-in duration-300">
                  <p class="text-[15px] text-black/60 leading-[1.6]">
                    {{ item.description }}
                  </p>
                </div>
              }
            </button>
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
          What teams find when they start using adRadar.
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
                  <p class="text-[15px] text-[#4b5563] leading-[1.65]">{{ faq.answer }}</p>
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
    <app-cta-section />
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class PricingPageComponent {
  openFaq = signal<number | null>(null);
  expandedPlanFeature = signal<number | null>(null);
  billingPeriod = signal<'monthly' | 'annual'>('monthly');

  setBillingPeriod(period: 'monthly' | 'annual'): void {
    this.billingPeriod.set(period);
  }

  togglePlanFeature(index: number): void {
    this.expandedPlanFeature.set(this.expandedPlanFeature() === index ? null : index);
  }

  plans: Plan[] = [
    {
      name: 'Starter',
      price: '$29',
      annualPrice: '$23',
      period: 'per month',
      features: [
        { text: 'Revenue Attribution', type: 'heading' },
        { text: 'Inbound CRM Sync', type: 'feature' },
        { text: 'Company Insights', type: 'feature' },
        { text: 'Campaign Analytics', type: 'feature' },
        { text: 'Ad Analytics', type: 'feature' },
        { text: 'Custom Revenue Attribution Model', type: 'feature' },
        { text: 'Customer Journey View', type: 'feature' },
        { text: 'Campaign Optimization', type: 'heading' },
        { text: 'Easy Manual Irrelevant Account Blocking', type: 'feature' },
        { text: 'Easy Manual Irrelevant Title Blocking', type: 'feature' },
      ],
      cta: 'Start free trial',
      highlighted: false,
      popular: false,
    },
    {
      name: 'Growth',
      price: '$59',
      annualPrice: '$47',
      period: 'per month',
      features: [
        { text: 'Everything in Starter +', type: 'note' },
        { text: 'AI Agents', type: 'heading' },
        { text: 'Impression Capping', type: 'feature' },
        { text: 'Campaign Scheduling Agent', type: 'feature' },
        { text: 'Campaign Bidding Optimization Agent', type: 'feature', comingSoon: true },
        { text: 'Auto Irrelevant Account Blocking Agent', type: 'feature' },
        { text: 'Auto Irrelevant Title Blocking Agent', type: 'feature' },
        { text: 'Ad Rotation Recommendation Agent', type: 'feature', comingSoon: true },
        { text: 'Analyse competitors LinkedIn Ads', type: 'feature', comingSoon: true },
      ],
      cta: 'Start free trial',
      highlighted: true,
      popular: true,
    },
    {
      name: 'Pro',
      price: '$99',
      annualPrice: '$79',
      period: 'per month',
      features: [
        { text: 'Everything in Growth +', type: 'note' },
        { text: 'Advanced Analytics', type: 'heading' },
        { text: 'ABM Analytics', type: 'feature' },
        { text: 'Company Scoring', type: 'feature' },
        { text: 'Journey Stage Prediction Modelling', type: 'feature' },
        { text: 'Outbound CRM Sync (Write account score and Journey Stage Data to CRM)', type: 'feature' },
      ],
      cta: 'Start free trial',
      highlighted: false,
      popular: false,
    },
    {
      name: 'Agency',
      price: '$149',
      annualPrice: '$119',
      period: 'per month',
      features: [
        { text: 'Everything in Pro +', type: 'note' },
        { text: 'Multi-Account Management', type: 'feature' },
        { text: '2 accounts included', type: 'feature' },
        { text: 'Additional accounts at $59', type: 'feature' },
        { text: 'Unlimited users', type: 'feature' },
        { text: 'Client views to switch between accounts', type: 'feature' },
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
        { name: 'Bidding Optimisation Agent', starter: false, growth: true, pro: true, agency: true, comingSoon: true },
        { name: 'Auto Account Blocking Agent', starter: false, growth: true, pro: true, agency: true },
        { name: 'Auto Title Blocking Agent', starter: false, growth: true, pro: true, agency: true },
        { name: 'Ad Rotation Recommendation Agent', starter: false, growth: true, pro: true, agency: true, comingSoon: true },
        { name: 'Competitor LinkedIn Ads Analysis', starter: false, growth: true, pro: true, agency: true, comingSoon: true },
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
      question: 'What CRMs does adRadar integrate with?',
      answer: 'adRadar integrates with HubSpot, Salesforce, and Pipedrive on all plans (inbound sync). Pro and Agency plans additionally include outbound CRM sync \u2014 writing account scores and journey stage data back to your CRM fields.',
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
