import { Component, signal, inject, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavAgent {
  name: string;
  image: string;
  avatarBg: string;
  accentColor: string;
  route: string;
  comingSoon?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="fixed top-0 left-0 w-full z-50 bg-white border-b border-border">
      <div class="max-w-[1480px] mx-auto px-6 flex items-center justify-between h-[70px]">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center" (click)="closeMobile()">
          <img
            src="/logo/adradar-logo.svg"
            alt="adRadar"
            width="140"
            height="34"
            class="h-[34px] w-auto"
          />
        </a>

        <!-- Desktop Nav Links -->
        <nav class="hidden md:flex items-center gap-1">
          <a
            routerLink="/"
            fragment="how-it-works"
            class="px-4 py-2 text-[15px] text-foreground/80 hover:text-foreground transition-colors"
          >
            How it works
          </a>

          <!-- Copilots with dropdown -->
          <div class="relative group/nav">
            <a
              routerLink="/"
              class="px-4 py-2 text-[15px] text-foreground/80 hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              AI Agents
              <svg class="w-3.5 h-3.5 transition-transform duration-300 group-hover/nav:rotate-180" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>

            <!-- Dropdown backdrop + panel -->
            <div class="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 ease-out">
              <!-- Pointer arrow -->
              <div class="absolute top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-[#e5e7eb] z-10"></div>

              <div class="nav-dropdown relative bg-white rounded-2xl border border-[#e8e8e8] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12),0_4px_20px_-2px_rgba(0,0,0,0.06)] p-5 w-[620px]">
                <!-- Header -->
                <div class="flex items-center justify-between mb-4 px-1">
                  <div>
                    <h3 class="text-[15px] font-semibold text-[#111827]">AI Agents</h3>
                    <p class="text-[13px] text-[#6b7280] mt-0.5">Seven specialized copilots for your LinkedIn Ads</p>
                  </div>
                  <a routerLink="/" class="text-[12px] font-medium text-primary hover:text-primary-dark transition-colors">
                    View all &rarr;
                  </a>
                </div>

                <!-- Agents grid -->
                <div class="grid grid-cols-2 gap-2">
                  @for (agent of agents; track agent.name) {
                    <a
                      [routerLink]="agent.route"
                      class="group/item flex items-center gap-3.5 p-3 rounded-xl transition-all duration-200 hover:bg-[#fafafa]"
                    >
                      <!-- Avatar -->
                      <div
                        class="w-10 h-10 shrink-0 rounded-full overflow-hidden"
                        [style.backgroundColor]="agent.avatarBg"
                      >
                        <img
                          [src]="agent.image"
                          [alt]="agent.name"
                          class="w-full h-full object-cover"
                        />
                      </div>

                      <!-- Name -->
                      <div class="flex-1 leading-tight">
                        <span class="text-[13.5px] font-medium text-[#374151] group-hover/item:text-[#111827] transition-colors">
                          {{ agent.name }}
                        </span>
                        @if (agent.comingSoon) {
                          <span class="ml-1.5 text-[9px] font-semibold uppercase tracking-[0.03em] bg-[#fff7ed] text-[#c2410c] px-1.5 py-[1px] rounded-full border border-[#fed7aa] align-middle">
                            Soon
                          </span>
                        }
                      </div>

                      <!-- Arrow (only for ready agents) -->
                      @if (!agent.comingSoon) {
                        <div
                          class="w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-all duration-200 shrink-0 translate-x-[-4px] group-hover/item:translate-x-0"
                          [style.backgroundColor]="agent.accentColor + '22'"
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M4.5 2.5L8 6L4.5 9.5" [attr.stroke]="agent.accentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      }
                    </a>
                  }
                </div>
              </div>
            </div>
          </div>

          <a
            routerLink="/pricing"
            class="px-4 py-2 text-[15px] text-foreground/80 hover:text-foreground transition-colors"
          >
            Pricing
          </a>
        </nav>

        <!-- Desktop CTA -->
        <a
          routerLink="/pricing"
          class="hidden md:flex group items-center gap-3 bg-primary hover:bg-primary-dark text-white rounded-full pl-5 pr-1 py-1 transition-colors"
        >
          <span class="text-[15px] font-medium ml-1">Start free trial</span>
          <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path
                d="M5 3l4 4-4 4"
                stroke="var(--color-primary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>

        <!-- Mobile Hamburger -->
        <button
          class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          (click)="toggleMobile()"
          [attr.aria-expanded]="mobileOpen()"
          aria-label="Toggle menu"
        >
          @if (!mobileOpen()) {
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" stroke-width="2" stroke-linecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          } @else {
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" stroke-width="2" stroke-linecap="round">
              <line x1="6" y1="6" x2="18" y2="18"/>
              <line x1="6" y1="18" x2="18" y2="6"/>
            </svg>
          }
        </button>
      </div>

      <!-- Mobile Menu -->
      @if (mobileOpen()) {
        <!-- Backdrop overlay -->
        <div class="md:hidden fixed inset-0 top-[70px] bg-black/20 z-40" (click)="closeMobile()"></div>
        <!-- Menu panel -->
        <div class="md:hidden relative z-50 bg-white max-h-[calc(100dvh-70px)] overflow-y-auto shadow-[0_16px_48px_-8px_rgba(0,0,0,0.16)] rounded-b-2xl">
          <nav class="px-6 py-4 flex flex-col gap-1">
            <a
              routerLink="/"
              fragment="how-it-works"
              class="px-3 py-3 text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-gray-50 rounded-xl transition-colors"
              (click)="closeMobile()"
            >
              How it works
            </a>

            <!-- AI Agents expandable -->
            <div>
              <button
                class="w-full flex items-center justify-between px-3 py-3 text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-gray-50 rounded-xl transition-colors"
                (click)="toggleAgents()"
              >
                AI Agents
                <svg
                  class="w-4 h-4 transition-transform duration-300"
                  [class.rotate-180]="agentsOpen()"
                  viewBox="0 0 12 12" fill="none"
                >
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>

              @if (agentsOpen()) {
                <div class="ml-2 mt-1 flex flex-col gap-0.5">
                  @for (agent of agents; track agent.name) {
                    <a
                      [routerLink]="agent.route"
                      class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                      (click)="closeMobile()"
                    >
                      <div
                        class="w-8 h-8 shrink-0 rounded-full overflow-hidden"
                        [style.backgroundColor]="agent.avatarBg"
                      >
                        <img
                          [src]="agent.image"
                          [alt]="agent.name"
                          class="w-full h-full object-cover"
                        />
                      </div>
                      <span class="text-[14px] font-medium text-[#374151]">{{ agent.name }}</span>
                      @if (agent.comingSoon) {
                        <span class="text-[9px] font-semibold uppercase tracking-[0.03em] bg-[#fff7ed] text-[#c2410c] px-1.5 py-[1px] rounded-full border border-[#fed7aa] ml-auto shrink-0">
                          Soon
                        </span>
                      }
                    </a>
                  }
                </div>
              }
            </div>

            <a
              routerLink="/pricing"
              class="px-3 py-3 text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-gray-50 rounded-xl transition-colors"
              (click)="closeMobile()"
            >
              Pricing
            </a>

            <!-- Mobile CTA -->
            <div class="mt-3 pt-3 border-t border-border">
              <a
                routerLink="/pricing"
                class="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white rounded-full py-3 px-6 transition-colors"
                (click)="closeMobile()"
              >
                <span class="text-[15px] font-medium">Start free trial</span>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3l4 4-4 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      }
    </header>
  `,
  styles: [`
    :host { display: block; }

    .nav-dropdown {
      transform: translateY(4px);
      transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    }

    .group\\/nav:hover .nav-dropdown {
      transform: translateY(0);
    }
  `],
})
export class NavbarComponent {
  private cdr = inject(ChangeDetectorRef);
  mobileOpen = signal(false);
  agentsOpen = signal(false);

  toggleMobile() {
    this.mobileOpen.update(v => !v);
    if (!this.mobileOpen()) {
      this.agentsOpen.set(false);
    }
    this.cdr.detectChanges();
  }

  closeMobile() {
    this.mobileOpen.set(false);
    this.agentsOpen.set(false);
    this.cdr.detectChanges();
  }

  toggleAgents() {
    this.agentsOpen.update(v => !v);
    this.cdr.detectChanges();
  }

  agents: NavAgent[] = [
    {
      name: 'Company Blocking Agent',
      image: '/agents/Company Blocking Agent.png',
      avatarBg: '#b8dff0',
      accentColor: '#4a9cc5',
      route: '/agents/company-blocking',
    },
    {
      name: 'Impression Capping Agent',
      image: '/agents/Impression Capping Agent.png',
      avatarBg: '#a8d1dc',
      accentColor: '#3a97ab',
      route: '/agents/impression-capping',
    },
    {
      name: 'Title Blocking Agent',
      image: '/agents/Title Blocking Agent.png',
      avatarBg: '#ee95a0',
      accentColor: '#d4606f',
      route: '/agents/title-blocking',
    },
    {
      name: 'Bidding Optimization Agent',
      image: '/agents/Bidding Optimization Agent.png',
      avatarBg: '#acdfa4',
      accentColor: '#4a9a42',
      route: '/agents/bidding-optimization',
      comingSoon: true,
    },
    {
      name: 'Campaign Scheduling Agent',
      image: '/agents/Campaign Scheduling Agent.png',
      avatarBg: '#fbf5df',
      accentColor: '#c5a030',
      route: '/agents/campaign-scheduling',
    },
    {
      name: 'Ad Rotation Agent',
      image: '/agents/Ad Rotation Agent.png',
      avatarBg: '#d9e1fb',
      accentColor: '#6b5ea0',
      route: '/agents/ad-rotation',
      comingSoon: true,
    },
    {
      name: 'Analyse Competitors',
      image: '/agents/Analyse competitors LinkedIn Ads.png',
      avatarBg: '#acdfa4',
      accentColor: '#4a9a42',
      route: '/agents/analyse-competitors',
      comingSoon: true,
    },
  ];
}
