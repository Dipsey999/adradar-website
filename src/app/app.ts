import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />
    <main class="pt-[70px]">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [],
})
export class App implements OnInit {
  private router = inject(Router);
  private viewportScroller = inject(ViewportScroller);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const sub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        // Don't scroll to top if navigating to a fragment (e.g. #how-it-works)
        if (!e.urlAfterRedirects.includes('#')) {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });

    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }
}
