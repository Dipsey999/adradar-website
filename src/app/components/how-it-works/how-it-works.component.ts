import { Component, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, ViewChild, signal, inject } from '@angular/core';
import { NgClass } from '@angular/common';

interface Step {
  number: string;
  label: string;
  title: string;
  description: string;
  image: string;
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
      style="height: 280vh"
    >
      <!-- Sticky container — offset for 70px navbar -->
      <div class="sticky top-[70px] h-[calc(100vh-70px)] overflow-hidden flex items-center">
        <div class="w-full py-4 lg:py-6">
          <div class="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-20 w-full">
            <div class="flex gap-8 lg:gap-16 items-stretch">
              <!-- Left side: Badge + Heading + Steps timeline -->
              <div class="flex-1 min-w-0">
                <!-- Badge + Heading -->
                <div class="mb-4 lg:mb-8">
                  <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#ff4829]">
                    HOW IT WORKS
                  </span>
                  <h2 class="text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mt-1.5 lg:mt-2">
                    Connect once. On the radar instantly.
                  </h2>
                </div>

                <!-- Timeline -->
                <div class="relative">
                  @for (step of steps; track step.number; let i = $index) {
                    <div class="flex gap-4 lg:gap-7">
                      <!-- Timeline column -->
                      <div class="flex flex-col items-center shrink-0 self-stretch">
                        <!-- Number circle -->
                        <div
                          class="w-9 h-9 lg:w-[46px] lg:h-[46px] rounded-full flex items-center justify-center shrink-0 transition-all duration-500"
                          [ngClass]="isActive(i)
                            ? 'bg-gradient-to-br from-[#ff4829] to-[#ff8f6b] shadow-[0_4px_14px_0_rgba(255,72,41,0.25)]'
                            : 'bg-[#f2c391]'"
                        >
                          <span
                            class="text-xs lg:text-sm font-bold transition-colors duration-500"
                            [ngClass]="isActive(i) ? 'text-white' : 'text-[#5a4a3a]'"
                          >
                            {{ step.number }}
                          </span>
                        </div>

                        <!-- Vertical line -->
                        @if (!isLast(i)) {
                          <div
                            class="w-[2.5px] flex-1 transition-colors duration-500"
                            [ngClass]="isActive(i) ? 'bg-[#ff4829]' : 'bg-[#f2c391]'"
                          ></div>
                        }
                      </div>

                      <!-- Content column -->
                      <div
                        class="flex-1 pt-1.5 lg:pt-2 transition-all duration-500"
                        [ngClass]="isLast(i) ? 'pb-0' : 'pb-2 lg:pb-4'"
                      >
                        <!-- Step label -->
                        <span
                          class="inline-block text-[11px] lg:text-[12px] font-semibold tracking-[0.06em] uppercase transition-opacity duration-500 mb-0.5 text-[#ff4829]"
                          [ngClass]="isActive(i) ? 'opacity-100' : 'opacity-40'"
                        >
                          {{ step.label }}
                        </span>

                        <!-- Step title -->
                        <h3
                          class="text-[15px] lg:text-[18px] font-semibold tracking-[-0.01em] leading-snug transition-all duration-500 text-[#111827]"
                          [ngClass]="isActive(i) ? 'opacity-100' : 'opacity-40'"
                        >
                          {{ step.title }}
                        </h3>

                        <!-- Step description - animated expand/collapse -->
                        <div
                          class="overflow-hidden transition-all duration-500 ease-in-out"
                          [style.maxHeight]="isCurrent(i) ? '160px' : '0px'"
                          [style.opacity]="isCurrent(i) ? 1 : 0"
                          [style.marginTop]="isCurrent(i) ? '3px' : '0px'"
                        >
                          <p class="text-[13px] lg:text-[15px] text-[#4b5563] leading-[1.6] lg:leading-[1.65]">
                            {{ step.description }}
                          </p>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>

              <!-- Right side: Image - matches left column height, centered -->
              <div class="hidden md:flex md:w-[320px] lg:w-[420px] xl:w-[500px] shrink-0 items-center justify-center">
                <div class="bg-[#f2efea] rounded-2xl lg:rounded-3xl overflow-hidden relative w-full h-full">
                  @for (step of steps; track step.number; let i = $index) {
                    <div
                      class="absolute inset-0 transition-all duration-700 ease-in-out"
                      [style.opacity]="activeStep() === i ? 1 : 0"
                      [style.transform]="activeStep() === i
                        ? 'scale(1) translateY(0)'
                        : activeStep() > i
                          ? 'scale(0.95) translateY(-20px)'
                          : 'scale(0.95) translateY(20px)'"
                    >
                      <img
                        [src]="step.image"
                        [alt]="step.title"
                        class="object-contain absolute inset-0 w-full h-full"
                      />
                    </div>
                  }
                </div>
              </div>
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

  steps: Step[] = [
    {
      number: '01',
      label: 'Pre-flight',
      title: 'Connect LinkedIn Ads & CRM in 2 minutes',
      description:
        'OAuth in seconds. AdRadar ingests campaigns, creative history, and audience data \u2014 then syncs with HubSpot, Salesforce, or Pipedrive. No CSV. No manual wiring.',
      image: '/images/how-it-works/Container-1.png',
    },
    {
      number: '02',
      label: 'Takeoff',
      title: 'Agents run their first audit immediately',
      description:
        'Audience, Creative, Spend, and Strategy agents sweep your account on first connect. You get a LinkedIn Ads Health Score and a ranked list of issues \u2014 most teams find something non-obvious before the first coffee is done.',
      image: '/images/how-it-works/Container-2.png',
    },
    {
      number: '03',
      label: 'Cruise',
      title: 'Daily briefings replace dashboard-checking',
      description:
        'Every morning: what shifted overnight, what needs attention, what to do first. AdRadar becomes the voice in your headset \u2014 not another tab you forget to check.',
      image: '/images/how-it-works/Container-3.png',
    },
    {
      number: '04',
      label: 'Control',
      title: 'You approve every move. Always.',
      description:
        'Agents recommend. You decide. Human-in-the-loop by design \u2014 no black-box autopilot. Every action is explained, logged, and reversible. You\u2019re always the captain.',
      image: '/images/how-it-works/Container-4.png',
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

  private onScroll(): void {
    const el = this.sectionRef.nativeElement;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const sectionHeight = el.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollableDistance = sectionHeight - viewportHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

    // Distribute 4 steps evenly across scroll, with last step holding longer
    const newStep = Math.min(3, Math.floor(progress * 4));
    if (newStep !== this.activeStep()) {
      this.activeStep.set(newStep);
      this.cdr.detectChanges();
    }
  }

  isActive(index: number): boolean {
    return index === this.activeStep() || index < this.activeStep();
  }

  isCurrent(index: number): boolean {
    return index === this.activeStep();
  }

  isLast(index: number): boolean {
    return index === this.steps.length - 1;
  }
}
