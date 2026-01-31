import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withViewTransitions } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes, withViewTransitions({
            onViewTransitionCreated: () => {
                // Scroll to top on route change
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        }))
    ]
}).catch(err => console.error(err));
