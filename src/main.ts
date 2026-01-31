import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withViewTransitions, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(
            routes,
            withInMemoryScrolling({
                scrollPositionRestoration: 'top',
                anchorScrolling: 'enabled'
            }),
            withViewTransitions({
                onViewTransitionCreated: ({ transition }) => {
                    // Only scroll to top if there's no fragment
                    const hasFragment = window.location.hash;
                    if (!hasFragment) {
                        window.scrollTo({ top: 0, behavior: 'instant' });
                    }
                }
            })
        )
    ]
}).catch(err => console.error(err));
