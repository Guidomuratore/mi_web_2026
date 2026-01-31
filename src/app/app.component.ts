import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        HeaderComponent,
        HeroComponent,
        AboutComponent,
        TechStackComponent,
        ProjectsComponent,
        ContactComponent
    ],
    template: `
    <div class="min-h-screen bg-dark-bg">
      <app-header />
      <main>
        <app-hero />
        <app-about />
        <app-tech-stack />
        <app-projects />
        <app-contact />
      </main>
    </div>
  `,
    styles: []
})
export class AppComponent {
    title = 'Guido Muratore - Portfolio';
}
