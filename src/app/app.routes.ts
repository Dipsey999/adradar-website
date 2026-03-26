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
  { path: '**', redirectTo: '' },
];
