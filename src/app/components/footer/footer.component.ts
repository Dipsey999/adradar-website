import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterCategory {
  category: string;
  items: FooterLink[];
}

interface SocialLink {
  label: string;
  href: string;
  svgPath: string;
  viewBox: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="relative bg-[#0c0c0c] text-white overflow-hidden">
      <!-- Main footer content -->
      <div class="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-20 pt-12 lg:pt-20 pb-8 lg:pb-10">
        <!-- Top section: Logo+tagline left, Link columns right -->
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <!-- Left: Logo + Tagline -->
          <div class="lg:max-w-[300px] shrink-0">
            <div class="mb-5">
              <img
                src="/logo/adradar-logo-lite.svg"
                alt="adRadar"
                width="140"
                height="34"
                class="h-8 w-auto"
              />
            </div>
            <p class="text-[#8a8a8a] text-[14px] leading-[1.6] max-w-[260px]">
              The AI Copilot for B2B teams running LinkedIn Ads. Stop guessing.
              Start knowing.
            </p>
          </div>

          <!-- Right: Link columns -->
          <div class="grid grid-cols-2 gap-8 lg:gap-16 flex-1">
            @for (group of footerLinks; track group.category) {
              <div>
                <h4 class="text-[13px] font-semibold tracking-[0.06em] uppercase text-white/60 mb-5">
                  {{ group.category }}
                </h4>
                <ul class="space-y-3.5">
                  @for (item of group.items; track item.label) {
                    <li>
                      <a
                        [href]="item.href"
                        class="text-[14px] text-[#a0a0a0] hover:text-white transition-colors duration-300"
                      >
                        {{ item.label }}
                      </a>
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-white/[0.08] mt-14 mb-8"></div>

        <!-- Bottom section: Social + copyright left, Terms right -->
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
          <!-- Left: Social icons + Copyright -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <!-- Social icons, liquid glass style -->
            <div class="flex items-center gap-3">
              @for (social of socialLinks; track social.label) {
                <a
                  [href]="social.href"
                  [attr.aria-label]="social.label"
                  class="social-glass-icon group/icon relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110"
                >
                  <!-- Glass background layers -->
                  <div class="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.12] to-white/[0.04] backdrop-blur-md"></div>
                  <div class="absolute inset-0 rounded-full border border-white/[0.15] group-hover/icon:border-white/[0.3] transition-colors duration-500"></div>
                  <!-- Inner highlight (top reflection) -->
                  <div class="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/[0.15] via-transparent to-transparent" style="height: 50%; bottom: auto;"></div>
                  <!-- Hover glow -->
                  <div class="absolute -inset-1 rounded-full bg-white/[0.06] blur-md opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500"></div>
                  <svg class="relative z-10 text-white/60 group-hover/icon:text-white transition-colors duration-500" width="18" height="18" [attr.viewBox]="social.viewBox" fill="currentColor">
                    <path [attr.d]="social.svgPath" />
                  </svg>
                </a>
              }
            </div>
            <p class="text-[13px] text-[#8a8a8a]">
              Copyright &copy; 2026 adRadar. All Rights Reserved.
            </p>
          </div>

          <!-- Right: Terms + Privacy -->
          <div class="flex items-center gap-4 md:gap-6">
            <a
              href="#"
              class="text-[13px] text-[#8a8a8a] hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              class="text-[13px] text-[#8a8a8a] hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <!-- Giant "adRadar", glass tube filled with orange liquid -->
      <div class="relative w-full overflow-hidden">
        <!-- Very subtle warm ambient glow behind text -->
        <div class="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[50%] h-[60%] bg-gradient-to-t from-[#ff6830]/[0.04] via-[#ff6830]/[0.02] to-transparent blur-[100px] pointer-events-none"></div>

        <div class="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-20">
          <div class="relative select-none pb-2 glass-tube-container">
            <!-- Glass tube outline layer -->
            <div
              class="glass-tube-outline text-[56px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[242px] font-normal leading-[0.85] tracking-[-0.04em]"
              style="font-family: Helvetica, Arial, sans-serif;"
              aria-hidden="true"
            >adRadar</div>

            <!-- Orange liquid fill layer -->
            <div
              class="glass-tube-liquid text-[56px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[242px] font-normal leading-[0.85] tracking-[-0.04em]"
              style="font-family: Helvetica, Arial, sans-serif;"
              aria-hidden="true"
            >adRadar</div>

            <!-- Glass highlight / reflection layer -->
            <div
              class="glass-tube-highlight text-[56px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[242px] font-normal leading-[0.85] tracking-[-0.04em]"
              style="font-family: Helvetica, Arial, sans-serif;"
            >adRadar</div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* ═══════════════════════════════════════
       Glass Tube with Orange Liquid Fill
       ═══════════════════════════════════════ */

    .glass-tube-container {
      position: relative;
    }

    /* ── Layer 1: Glass tube outline ── */
    .glass-tube-outline {
      position: relative;
      color: transparent;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1.2px rgba(255, 255, 255, 0.10);
      text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
    }

    /* ── Layer 2: Orange liquid fill (bottom-up) ── */
    .glass-tube-liquid {
      position: absolute;
      inset: 0;
      color: transparent;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 0;
      background: linear-gradient(
        to top,
        /* Deep liquid at bottom, dark amber, blends into bg */
        rgba(180, 60, 10, 0.50) 0%,
        rgba(200, 72, 20, 0.42) 15%,
        /* Rich amber body */
        rgba(220, 90, 30, 0.34) 30%,
        rgba(240, 105, 40, 0.26) 45%,
        /* Liquid surface, lighter where light hits */
        rgba(255, 130, 60, 0.22) 55%,
        /* Meniscus glow at liquid surface */
        rgba(255, 160, 80, 0.18) 62%,
        rgba(255, 140, 60, 0.08) 68%,
        /* Empty glass above liquid line */
        rgba(255, 120, 50, 0.02) 74%,
        transparent 80%
      );
      -webkit-background-clip: text;
      background-clip: text;
      pointer-events: none;
    }

    /* ── Layer 3: Glass reflections & highlights ── */
    .glass-tube-highlight {
      position: absolute;
      inset: 0;
      color: transparent;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 0;
      pointer-events: none;
    }

    /* Top edge highlight, light catching glass rim */
    .glass-tube-highlight::before {
      content: 'adRadar';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.16) 0%,
        rgba(255, 255, 255, 0.04) 8%,
        transparent 18%,
        transparent 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 0;
      pointer-events: none;
    }

    /* Diagonal specular reflection on glass surface */
    .glass-tube-highlight::after {
      content: 'adRadar';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        125deg,
        transparent 20%,
        rgba(255, 200, 150, 0.04) 32%,
        rgba(255, 255, 255, 0.09) 40%,
        rgba(255, 220, 180, 0.05) 48%,
        transparent 58%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 0;
      pointer-events: none;
    }

    /* ═══ Social Glass Icons ═══ */
    .social-glass-icon::before {
      content: '';
      position: absolute;
      inset: 1px;
      border-radius: 9999px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.14) 0%,
        rgba(255, 200, 150, 0.03) 40%,
        transparent 100%
      );
      pointer-events: none;
      z-index: 1;
    }
  `],
})
export class FooterComponent {
  footerLinks: FooterCategory[] = [
    {
      category: 'Product',
      items: [
        { label: 'How it works', href: '#how-it-works' },
        { label: 'AI Copilots', href: '#copilots' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Help Center', href: '#' },
      ],
    },
    {
      category: 'Legal',
      items: [
        { label: 'Website Terms', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'Platform Terms', href: '#' },
        { label: 'Platform Privacy', href: '#' },
        { label: 'Security Policy', href: '#' },
      ],
    },
  ];

  socialLinks: SocialLink[] = [
    {
      label: 'LinkedIn',
      href: '#',
      viewBox: '0 0 24 24',
      svgPath:
        'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
  ];
}
