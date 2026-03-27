import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'agents/impression-capping',
    loadComponent: () =>
      import('./pages/agents/impression-capping/impression-capping.component').then(
        (m) => m.ImpressionCappingComponent
      ),
  },
  {
    path: 'agents/title-blocking',
    loadComponent: () =>
      import('./pages/agents/title-blocking/title-blocking.component').then(
        (m) => m.TitleBlockingComponent
      ),
  },
  {
    path: 'agents/bidding-optimization',
    loadComponent: () =>
      import('./pages/agents/bidding-optimization/bidding-optimization.component').then(
        (m) => m.BiddingOptimizationComponent
      ),
  },
  {
    path: 'agents/strategy-copilot',
    loadComponent: () =>
      import('./pages/agents/strategy-copilot/strategy-copilot.component').then(
        (m) => m.StrategyCopilotComponent
      ),
  },
  {
    path: 'agents/analyse-competitors',
    loadComponent: () =>
      import('./pages/agents/analyse-competitors/analyse-competitors.component').then(
        (m) => m.AnalyseCompetitorsComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
