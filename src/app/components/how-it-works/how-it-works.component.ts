import { Component, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, ViewChild, signal, inject, computed } from '@angular/core';
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
      [style.height]="sectionHeight()"
    >
      <!-- Sticky container — offset for 70px navbar -->
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

                      <!-- Right: Image -->
                      <div class="md:w-[340px] lg:w-[440px] xl:w-[520px] shrink-0 self-stretch">
                        <div class="bg-[#f2efea] rounded-2xl lg:rounded-3xl overflow-hidden relative h-full min-h-[280px]">
                          <img
                            [src]="step.image"
                            [alt]="step.title"
                            class="object-contain absolute inset-0 w-full h-full p-4 lg:p-5"
                          />
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
