import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { LogoBarComponent } from '../../components/logo-bar/logo-bar.component';
import { ProblemSectionComponent } from '../../components/problem-section/problem-section.component';
import { CopilotSectionComponent } from '../../components/copilot-section/copilot-section.component';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    LogoBarComponent,
    ProblemSectionComponent,
    CopilotSectionComponent,
    HowItWorksComponent,
    TestimonialsComponent,
    PricingComponent,
    CtaSectionComponent,
  ],
  template: `
    <app-hero />
    <app-logo-bar />
    <app-problem-section />
    <app-copilot-section />
    <app-how-it-works />
    <app-testimonials />
    <app-pricing />
    <app-cta-section />
  `,
})
export class HomeComponent {}
