import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { TrackingService } from './tracking/tracking.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-dark-bg flex flex-col">
      <app-header />
      <div class="flex-grow">
        <router-outlet></router-outlet>
      </div>
      <app-footer />
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Guido Muratore - Portfolio';

  constructor(
    private trackingService: TrackingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Trackear cambios de ruta (SPA navigation)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.trackingService.trackVisit();
    });

    // Trackear la primera carga también (por si acaso)
    this.trackingService.trackVisit();
  }
}
